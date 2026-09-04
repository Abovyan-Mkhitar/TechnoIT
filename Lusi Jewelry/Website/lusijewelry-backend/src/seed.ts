import type { Core } from "@strapi/strapi";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

// Placeholder product images: elegant branded SVGs uploaded to the media
// library, replaced with real photos as the client provides them.
function placeholderSvg(label: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
<rect width="800" height="800" fill="#f5f1ea"/>
<circle cx="400" cy="340" r="120" fill="none" stroke="#c9a86a" stroke-width="6"/>
<circle cx="400" cy="200" r="26" fill="#c9a86a"/>
<text x="400" y="580" font-family="Georgia, serif" font-size="34" fill="#8a7a5c" text-anchor="middle">${label}</text>
<text x="400" y="640" font-family="Georgia, serif" font-size="20" fill="#b7a98c" text-anchor="middle" letter-spacing="6">LUSI JEWELRY</text>
</svg>`;
}

async function uploadPlaceholder(strapi: Core.Strapi, name: string, label: string) {
  const filepath = path.join(os.tmpdir(), `${name}.svg`);
  fs.writeFileSync(filepath, placeholderSvg(label));
  const [file] = await strapi
    .plugin("upload")
    .service("upload")
    .upload({
      data: { fileInfo: { name: `${name}.svg`, alternativeText: label } },
      files: {
        filepath,
        originalFilename: `${name}.svg`,
        mimetype: "image/svg+xml",
        size: fs.statSync(filepath).size,
      },
    });
  return file;
}

const CATEGORIES = [
  { name_hy: "Մատանիներ", name_en: "Rings", name_ru: "Кольца", slug: "rings", sort_order: 1 },
  { name_hy: "Ականջօղեր", name_en: "Earrings", name_ru: "Серьги", slug: "earrings", sort_order: 2 },
  { name_hy: "Վզնոցներ", name_en: "Necklaces", name_ru: "Колье", slug: "necklaces", sort_order: 3 },
  { name_hy: "Ապարանջաններ", name_en: "Bracelets", name_ru: "Браслеты", slug: "bracelets", sort_order: 4 },
];

const OCCASIONS = [
  { name_hy: "Հարսանիք", name_en: "Wedding", name_ru: "Свадьба", slug: "wedding" },
  { name_hy: "Նշանադրություն", name_en: "Engagement", name_ru: "Помолвка", slug: "engagement" },
  { name_hy: "Ծննդյան օր", name_en: "Birthday", name_ru: "День рождения", slug: "birthday" },
  { name_hy: "Տարեդարձ", name_en: "Anniversary", name_ru: "Годовщина", slug: "anniversary" },
  { name_hy: "Նվեր", name_en: "Gift", name_ru: "Подарок", slug: "gift" },
];

const PRODUCTS = [
  {
    title_hy: "Դասական ոսկյա մատանի", title_en: "Classic Gold Band Ring", title_ru: "Классическое золотое кольцо",
    slug: "classic-gold-band-ring", category: "rings",
    short_desc_hy: "Ձեռագործ դասական ոսկյա մատանի՝ 585 հարգի ոսկուց",
    short_desc_en: "Handcrafted classic band in 585 gold",
    short_desc_ru: "Классическое кольцо ручной работы из золота 585 пробы",
    price_amd: 185000, price_on_request: false, stock_status: "instock",
    featured: true, new_arrival: false, metal: "gold", purity: "585",
    stone: "none", weight_grams: 4.2, gift_recipient: "unisex",
    occasions: ["wedding", "anniversary"],
  },
  {
    title_hy: "Ադամանդե նշանադրության մատանի", title_en: "Diamond Solitaire Engagement Ring", title_ru: "Помолвочное кольцо с бриллиантом",
    slug: "diamond-solitaire-engagement-ring", category: "rings",
    short_desc_hy: "Սպիտակ ոսկուց նշանադրության մատանի՝ ադամանդով",
    short_desc_en: "White gold solitaire with a brilliant-cut diamond",
    short_desc_ru: "Кольцо из белого золота с бриллиантом",
    price_on_request: true, stock_status: "made_to_order",
    featured: true, new_arrival: true, metal: "white_gold", purity: "750",
    stone: "diamond", stone_details: "0.5 ct, brilliant cut", weight_grams: 3.8,
    gift_recipient: "for_her", occasions: ["engagement"],
  },
  {
    title_hy: "Նռնաքարով ականջօղեր", title_en: "Garnet Drop Earrings", title_ru: "Серьги с гранатом",
    slug: "garnet-drop-earrings", category: "earrings",
    short_desc_hy: "Ոսկյա կախվող ականջօղեր՝ բնական նռնաքարով",
    short_desc_en: "Gold drop earrings with natural garnet",
    short_desc_ru: "Золотые серьги с натуральным гранатом",
    price_amd: 240000, price_on_request: false, stock_status: "instock",
    featured: false, new_arrival: true, metal: "gold", purity: "585",
    stone: "garnet", stone_details: "2 stones, oval cut", weight_grams: 6.8,
    gift_recipient: "for_her", occasions: ["birthday", "gift"],
  },
  {
    title_hy: "Մարգարտյա ականջօղեր", title_en: "Pearl Stud Earrings", title_ru: "Серьги-гвоздики с жемчугом",
    slug: "pearl-stud-earrings", category: "earrings",
    short_desc_hy: "Արծաթյա ականջօղեր՝ քաղցրահամ ջրի մարգարիտով",
    short_desc_en: "Silver studs with freshwater pearls",
    short_desc_ru: "Серебряные серьги с пресноводным жемчугом",
    price_amd: 45000, price_on_request: false, stock_status: "instock",
    featured: false, new_arrival: false, metal: "silver", purity: "925",
    stone: "pearl", weight_grams: 3.5, gift_recipient: "for_her",
    occasions: ["gift", "birthday"],
  },
  {
    title_hy: "Ոսկյա շղթա", title_en: "Gold Chain Necklace", title_ru: "Золотая цепочка",
    slug: "gold-chain-necklace", category: "necklaces",
    short_desc_hy: "Դասական հյուսվածքով ոսկյա շղթա",
    short_desc_en: "Classic woven gold chain",
    short_desc_ru: "Золотая цепочка классического плетения",
    price_amd: 520000, price_on_request: false, stock_status: "instock",
    featured: true, new_arrival: false, metal: "gold", purity: "585",
    stone: "none", weight_grams: 12.5, gift_recipient: "unisex",
    occasions: ["gift", "anniversary"],
  },
  {
    title_hy: "Շափյուղայով կախազարդ", title_en: "Sapphire Pendant Necklace", title_ru: "Кулон с сапфиром",
    slug: "sapphire-pendant-necklace", category: "necklaces",
    short_desc_hy: "Սպիտակ ոսկուց կախազարդ՝ կապույտ շափյուղայով",
    short_desc_en: "White gold pendant with blue sapphire",
    short_desc_ru: "Кулон из белого золота с синим сапфиром",
    price_on_request: true, stock_status: "made_to_order",
    featured: false, new_arrival: true, metal: "white_gold", purity: "750",
    stone: "sapphire", stone_details: "1.2 ct, oval cut", weight_grams: 5.1,
    gift_recipient: "for_her", occasions: ["anniversary", "gift"],
  },
  {
    title_hy: "Արծաթյա ապարանջան", title_en: "Silver Charm Bracelet", title_ru: "Серебряный браслет",
    slug: "silver-charm-bracelet", category: "bracelets",
    short_desc_hy: "Նուրբ արծաթյա ապարանջան՝ կախազարդերով",
    short_desc_en: "Delicate silver bracelet with charms",
    short_desc_ru: "Изящный серебряный браслет с подвесками",
    price_amd: 38000, price_on_request: false, stock_status: "instock",
    featured: false, new_arrival: false, metal: "silver", purity: "925",
    stone: "none", weight_grams: 8.9, gift_recipient: "for_her",
    occasions: ["birthday", "gift"],
  },
  {
    title_hy: "Տղամարդու ոսկյա ապարանջան", title_en: "Men's Gold Bracelet", title_ru: "Мужской золотой браслет",
    slug: "mens-gold-bracelet", category: "bracelets",
    short_desc_hy: "Ամուր հյուսվածքով տղամարդու ոսկյա ապարանջան",
    short_desc_en: "Solid woven gold bracelet for men",
    short_desc_ru: "Мужской золотой браслет плотного плетения",
    price_amd: 640000, price_on_request: false, stock_status: "made_to_order",
    featured: true, new_arrival: false, metal: "gold", purity: "585",
    stone: "none", weight_grams: 15.2, gift_recipient: "for_him",
    occasions: ["gift", "birthday"],
  },
];

const POSTS = [
  {
    title_hy: "Ինչպես խնամել ոսկյա զարդերը",
    title_en: "How to Care for Your Gold Jewelry",
    title_ru: "Как ухаживать за золотыми украшениями",
    slug: "how-to-care-for-gold-jewelry",
    excerpt_hy: "Պարզ խորհուրդներ, որոնք կպահպանեն ձեր զարդերի փայլը տարիներ շարունակ։",
    excerpt_en: "Simple tips to keep your jewelry shining for years.",
    excerpt_ru: "Простые советы, которые сохранят блеск ваших украшений на годы.",
    content_hy: "Ոսկյա զարդերը պահանջում են պարբերական խնամք։ Պահեք դրանք առանձին տուփերում, խուսափեք քիմիական նյութերից և մաքրեք փափուկ կտորով։",
    content_en: "Gold jewelry needs regular care. Store pieces separately, avoid contact with chemicals, and polish gently with a soft cloth. Bring your jewelry in once a year for professional cleaning.",
    content_ru: "Золотые украшения требуют регулярного ухода. Храните их отдельно, избегайте контакта с химическими веществами и полируйте мягкой тканью.",
  },
  {
    title_hy: "Ձեռագործ ոսկերչության արվեստը Գյումրիում",
    title_en: "The Art of Handcrafted Jewelry in Gyumri",
    title_ru: "Искусство ювелирной ручной работы в Гюмри",
    slug: "handcrafted-jewelry-gyumri",
    excerpt_hy: "Գյումրին դարեր շարունակ եղել է հայկական արհեստների սիրտը։",
    excerpt_en: "Gyumri has been the heart of Armenian craftsmanship for centuries.",
    excerpt_ru: "Гюмри веками был сердцем армянского ремесла.",
    content_hy: "Գյումրիի ոսկերչական ավանդույթները փոխանցվում են սերնդից սերունդ։ Մեր արհեստանոցում յուրաքանչյուր զարդ ստեղծվում է ձեռքով՝ հին տեխնիկաներով։",
    content_en: "Gyumri's jewelry traditions pass from generation to generation. In our workshop every piece is created by hand using techniques refined over centuries.",
    content_ru: "Ювелирные традиции Гюмри передаются из поколения в поколение. В нашей мастерской каждое изделие создаётся вручную.",
  },
];

const INSTAGRAM_POSTS = [
  { label: "New Collection", caption: "New collection preview" },
  { label: "Workshop Moments", caption: "Inside our Gyumri workshop" },
  { label: "Custom Piece", caption: "A custom order in progress" },
  { label: "Behind the Craft", caption: "Handcrafting details" },
];

export async function seedInstagramPosts(strapi: Core.Strapi) {
  for (const [index, post] of INSTAGRAM_POSTS.entries()) {
    const image = await uploadPlaceholder(
      strapi,
      `instagram-${index + 1}`,
      post.label
    );
    await strapi.documents("api::instagram-post.instagram-post").create({
      data: {
        image: image.id,
        caption: post.caption,
        url: "",
        sort_order: index,
      } as any,
      status: "published",
    });
  }
}

export async function seed(strapi: Core.Strapi) {
  const categoryDocs: Record<string, string> = {};
  for (const cat of CATEGORIES) {
    const doc = await strapi.documents("api::category.category").create({
      data: cat,
      status: "published",
    });
    categoryDocs[cat.slug] = doc.documentId;
  }

  const occasionDocs: Record<string, string> = {};
  for (const occ of OCCASIONS) {
    const doc = await strapi.documents("api::occasion.occasion").create({
      data: occ,
      status: "published",
    });
    occasionDocs[occ.slug] = doc.documentId;
  }

  for (const { category, occasions, ...product } of PRODUCTS) {
    const image = await uploadPlaceholder(strapi, product.slug, product.title_en);
    await strapi.documents("api::product.product").create({
      data: {
        ...product,
        category: { connect: [categoryDocs[category]] },
        occasions: { connect: occasions.map((o) => occasionDocs[o]) },
        gallery: [image.id],
      } as any,
      status: "published",
    });
  }

  for (const post of POSTS) {
    const image = await uploadPlaceholder(strapi, `post-${post.slug}`, post.title_en);
    await strapi.documents("api::post.post").create({
      data: { ...post, cover_image: image.id } as any,
      status: "published",
    });
  }
}
