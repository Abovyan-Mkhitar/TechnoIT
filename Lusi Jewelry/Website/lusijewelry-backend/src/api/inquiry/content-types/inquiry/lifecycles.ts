// Sends a notification email to the shop when a new inquiry arrives.
// Requires NOTIFY_EMAIL plus SMTP_* vars (see config/plugins.ts);
// without them inquiries are still saved, just not emailed.
export default {
  async afterCreate(event: { result: any }) {
    const to = process.env.NOTIFY_EMAIL;
    if (!to) return;

    const inquiry = event.result;
    const isCustomOrder = inquiry.type === "custom_order";

    const lines = [
      `Name: ${inquiry.name}`,
      `Phone: ${inquiry.phone}`,
      inquiry.email ? `Email: ${inquiry.email}` : null,
      inquiry.preferred_contact
        ? `Preferred contact: ${inquiry.preferred_contact}`
        : null,
      isCustomOrder && inquiry.jewelry_type
        ? `Jewelry type: ${inquiry.jewelry_type}`
        : null,
      isCustomOrder && inquiry.budget_range
        ? `Budget: ${inquiry.budget_range}`
        : null,
      "",
      inquiry.message || "(no message)",
    ].filter((line) => line !== null);

    try {
      await strapi
        .plugin("email")
        .service("email")
        .send({
          to,
          subject: isCustomOrder
            ? `New custom order request from ${inquiry.name}`
            : `New product inquiry from ${inquiry.name}`,
          text: lines.join("\n"),
        });
    } catch (error) {
      strapi.log.error("Failed to send inquiry notification email", error);
    }
  },
};
