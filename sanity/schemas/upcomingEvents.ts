export const upcommingEvents = {
  name: "upcomingEvents",
  title: "Upcoming Events",
  type: "document",
  fields: [
    {
      name: "date",
      Title: "Date",
      type: "date",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
