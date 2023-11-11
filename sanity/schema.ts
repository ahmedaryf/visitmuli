import { type SchemaTypeDefinition } from "sanity";
import { carousalSchema } from "./schemas/carousalSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [carousalSchema],
};
