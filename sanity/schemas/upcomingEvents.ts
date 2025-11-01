export const upcommingEvents = {
  name: "upcomingEvents",
  title: "Upcoming Events",
  type: "document",
  fields: [
    {
      name: "date",
      Title: "Date",
      type: "date",
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
      name: "image",
      title: "Image",
      type: "image",
      validation: (rule: any) => rule.required(),
    },
  ],
};
