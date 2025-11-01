export const productGallery = {
  name: "productGallery",
  title: "Product Gallery",
  type: "document",
  fields: [
    {
      name: "bannerImageTitle",
      title: "Banner Image Title",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "bannerImage",
      title: "Banner Image",
      options: { hotspot: true },
      type: "image",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "productImage",
      title: "Product Image",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
