// schemas/accordion.js
export const formData = {
  name: "contactForm",
  title: "Contact Form",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the user submitting the form.",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      description: "The email address of the user submitting the form.",
    },
  ],
};
