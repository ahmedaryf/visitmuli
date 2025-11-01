export const aboutMuliDetails = {
  name: "aboutMuliDetails",
  title: "About Muli Details Page",
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
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
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
      name: "subContent",
      title: "Sub Content",
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
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "link",
              title: "Link",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    },
  ],
};
