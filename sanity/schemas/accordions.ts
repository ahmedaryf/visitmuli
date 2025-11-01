export const accordions = {
  name: "accordions",
  title: "Accordions (FAQ)",
  type: "document",
  fields: [
    {
      name: "id",
      title: "Id",
      type: "number",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule: any) => rule.required(),
    },
  ],
};
