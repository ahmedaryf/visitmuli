export const accomodationDetails = {
  name: "accommodationDetails",
  title: "Accommodation Page",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
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
    // {
    //   name: "mainImage",
    //   title: "Main Image",
    //   type: "image",
    //   options: { hotspot: true },
    // },

    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule: any) => rule.required(),
    },

    {
      name: "guesthouses",
      title: "Guesthouses",
      type: "array",
      of: [
        {
          type: "object",
          title: "Guesthouse",
          fields: [
            {
              name: "guesthouseName",
              title: "Guesthouse Name",
              type: "string",
            },
            {
              name: "slug",
              title: "Slug",
              type: "slug",
              options: {
                source: (doc: any, options: any) =>
                  (options.parent as any)?.guesthouseName,
                maxLength: 96,
              },
              validation: (rule: any) => rule.required(),
            },
            {
              name: "guesthouseImage",
              title: "Guesthouse Image",
              type: "image",
              options: { hotspot: true },
              validation: (rule: any) => rule.required(),
            },
            {
              name: "guesthouseDescription",
              title: "Guesthouse Description",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
              validation: (rule: any) => rule.required(),
            },
            {
              name: "images",
              title: "Images",
              type: "array",
              of: [
                {
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                    },
                  ],
                },
              ],
            },
            {
              name: "activities",
              title: "Activities",
              type: "array",
              of: [
                {
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
