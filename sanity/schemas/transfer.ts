export const transfer = {
  name: "transfer",
  title: "Transfer",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule: any) => rule.required(),
    },
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule: any) => rule.required(),
    },
  ],
};
