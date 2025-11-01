export const activity = {
  name: "activity",
  title: "Activity Page",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Main Image",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule: any) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule: any) => rule.required(),
    },
    {
      name: "images",
      title: "Image Gallery",
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
