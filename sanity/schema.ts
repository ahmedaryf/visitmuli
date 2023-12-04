import { type SchemaTypeDefinition } from "sanity";
import { carousalSchema } from "./schemas/carousalSchema";
import { aboutSchema } from "./schemas/aboutSchema";
import { aboutMuliDetails } from "./schemas/aboutMuliDetalSchema";
import { surfDetailPage } from "./schemas/surfDetailPage";
import { surfSummarySchema } from "./schemas/surfSummarySchema";
import { placesToStay } from "./schemas/placesToStay";
import { accomodationDetails } from "./schemas/accommodationDetails";
import { homePageCardsSchema } from "./schemas/homePageCardsSchema";
import { homePageMainCards } from "./schemas/homePageMainCards";
import { bannerImages } from "./schemas/bannerImages";
import { upcommingEvents } from "./schemas/upcomingEvents";
import { products } from "./schemas/products";
import { photoGallery } from "./schemas/photoGallery";
import { activity } from "./schemas/activitySchema";
import { productGallery } from "./schemas/productGallery";
import { transfer } from "./schemas/transfer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    carousalSchema,
    aboutSchema,
    aboutMuliDetails,
    surfDetailPage,
    surfSummarySchema,
    placesToStay,
    accomodationDetails,
    homePageCardsSchema,
    homePageMainCards,
    bannerImages,
    upcommingEvents,
    products,
    photoGallery,
    activity,
    productGallery,
    transfer,
  ],
};
