export const youTube = {
  name: "youtube",
  title: "YouTube URL",
  type: "document",
  fields: [
    {
      name: "url",
      title: "Youtube Video ID",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
  ],
};
