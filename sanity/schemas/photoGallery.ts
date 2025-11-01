export const photoGallery = {
  name: "photoGallery",
  title: "Photo Gallery",
  type: "document",
  fields: [
    {
      name: "bannerImage",
      title: "Banner Image ",
      type: "image",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "document",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
            },
          ],
        },
      ],
    },
  ],
};
