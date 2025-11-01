export const bannerImages = {
  name: "bannerImages",
  title: "Activity banner Image",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Page Name",
      type: "string",
      validation: (rule: any) => rule.required(),
    },
    {
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule: any) => rule.required(),
    },
  ],
};
