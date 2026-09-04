import type { Core } from "@strapi/strapi";
import { seed, seedInstagramPosts } from "./seed";

// Public (unauthenticated) API access. Read for catalog content,
// create-only for inquiries submitted from the website forms.
const PUBLIC_PERMISSIONS: Record<string, string[]> = {
  product: ["find", "findOne"],
  category: ["find", "findOne"],
  occasion: ["find", "findOne"],
  post: ["find", "findOne"],
  "instagram-post": ["find", "findOne"],
  inquiry: ["create"],
};

async function setPublicPermissions(strapi: Core.Strapi) {
  const publicRole = await strapi.db
    .query("plugin::users-permissions.role")
    .findOne({ where: { type: "public" } });
  if (!publicRole) return;

  for (const [api, actions] of Object.entries(PUBLIC_PERMISSIONS)) {
    for (const action of actions) {
      const actionId = `api::${api}.${api}.${action}`;
      const existing = await strapi.db
        .query("plugin::users-permissions.permission")
        .findOne({ where: { action: actionId, role: publicRole.id } });
      if (!existing) {
        await strapi.db.query("plugin::users-permissions.permission").create({
          data: { action: actionId, role: publicRole.id },
        });
      }
    }
  }
}

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await setPublicPermissions(strapi);

    const productCount = await strapi
      .documents("api::product.product")
      .count({});
    if (productCount === 0) {
      strapi.log.info("No products found — seeding sample data...");
      await seed(strapi);
      strapi.log.info("Seeding complete.");
    }

    const instagramCount = await strapi
      .documents("api::instagram-post.instagram-post")
      .count({});
    if (instagramCount === 0) {
      strapi.log.info("Seeding Instagram placeholder posts...");
      await seedInstagramPosts(strapi);
    }
  },
};
