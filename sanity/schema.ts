import { type SchemaTypeDefinition } from "sanity";
import { carousalSchema } from "./schemas/carousalSchema";
import { aboutSchema } from "./schemas/aboutSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [carousalSchema, aboutSchema],
};
