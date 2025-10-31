import { defineType, defineField } from "sanity";
export const carousalSchema = defineType({
  name: "carousal",
  title: "Carousal (Home Page)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    },
  ],
});
