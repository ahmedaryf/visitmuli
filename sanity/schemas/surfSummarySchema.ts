export const surfSummarySchema = {
  name: "surfSummery",
  title: "Surfing (Home Page)",
  type: "document",
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
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
