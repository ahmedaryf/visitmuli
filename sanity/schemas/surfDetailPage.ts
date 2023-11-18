export const surfDetailPage = {
  name: "surfDetailPage",
  title: "Surf Detail Page",
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
      title: "Main Image",
      type: "image",
    },
    {
      name: "images",
      title: "Carousal Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
  ],
};
