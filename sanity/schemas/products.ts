export const products = {
  name: "products",
  title: "Products (Surf Page)",
  type: "document",
  fields: [
    {
      name: "productName",
      title: "Product Name",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "productName" },
      validation: (rule: any) => rule.required(),
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
      validation: (Rule: any) => Rule.min(0),
    },
    {
      name: "productDescription",
      title: "Product Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
  ],
};
