export const accomodationDetails = {
  name: "accommodationDetails",
  title: "Accommodation Page",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      options: { hotspot: true },
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
              options: { source: "title" },
            },
            {
              name: "guesthouseImage",
              title: "Guesthouse Image",
              type: "image",
              options: { hotspot: true },
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
