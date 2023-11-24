export const test = {
  title: "Projects",
  name: "project",
  type: "document",
  initialValue: {
    theme: "light",
    priority: "medium",
  },
  groups: [
    {
      title: "Project Description",
      name: "projectDescription",
    },
    {
      title: "Case Study",
      name: "caseStudy",
    },
    {
      title: "New",
      name: "new",
    },
    {
      title: "Presentation",
      name: "presentation",
    },
  ],
  fields: [
    {
      title: "Cover",
      name: "cover",
      type: "image",
      group: "projectDescription",
    },
    {
      title: "Project Title",
      name: "title",
      type: "string",
      group: "projectDescription",
    },
    {
      title: "Project Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      group: "projectDescription",
    },

    {
      title: "Theme",
      name: "theme",
      type: "string",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
      },
      group: "projectDescription",
    },
    {
      title: "Priority",
      name: "priority",
      type: "string",
      options: {
        list: [
          { title: "High", value: "high" },
          { title: "Medium", value: "medium" },
          { title: "Low", value: "low" },
        ],
      },
      group: "projectDescription",
    },

    {
      title: "Blocks",
      name: "blocks",
      type: "array",
      group: "caseStudy",
      of: [
        {
          title: "Text Block",
          name: "textBlock",
          type: "document",
          initialValue: {
            title: "Text block",
          },
          fields: [
            { title: "Title", name: "title", type: "string" },
            {
              name: "text",
              title: "Text",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              title: "Start",
              name: "start",
              type: "number",
            },
            {
              title: "Width",
              name: "width",
              type: "number",
            },
          ],
        },
      ],
    },
  ],
};
