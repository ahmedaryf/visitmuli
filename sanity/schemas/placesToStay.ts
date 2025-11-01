export const placesToStay = {
  name: "placesToStay",
  title: "Cozy Retreats (Home Page)",
  type: "document",
  fields: [
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
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule: any) => rule.required(),
    },
  ],
};
