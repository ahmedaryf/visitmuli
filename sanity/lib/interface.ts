import { Image } from "sanity";

export interface Post {
  title: string;
  image: Image;
  content: any;
  description: any;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
}
