export const surfDetailPage = {
  name: "surfDetailPage",
  title: "Surf Detail Page",
  type: "document",
  fields: [
    {
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule: any) => rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule: any) => rule.required(),
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "images",
      title: "Images",
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
            {
              name: "description",
              title: "Description",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "video",
              title: "YouTube URL",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
