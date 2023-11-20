import { type SchemaTypeDefinition } from "sanity";
import { carousalSchema } from "./schemas/carousalSchema";
import { aboutSchema } from "./schemas/aboutSchema";
import { aboutMuliDetails } from "./schemas/aboutMuliDetalSchema";
import { surfDetailPage } from "./schemas/surfDetailPage";
import { surfSummarySchema } from "./schemas/surfSummarySchema";
import { placesToStay } from "./schemas/placesToStay";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    carousalSchema,
    aboutSchema,
    aboutMuliDetails,
    surfDetailPage,
    surfSummarySchema,
    placesToStay,
  ],
};
