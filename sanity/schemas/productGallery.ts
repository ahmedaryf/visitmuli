export const productGallery = {
  name: "productGallery",
  title: "Product Gallery",
  type: "document",
  fields: [
    {
      name: "bannerImageTitle",
      title: "Banner Image Title",
      type: "string",
    },
    {
      name: "bannerImage",
      title: "Banner Image",
      options: { hotspot: true },
      type: "image",
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
