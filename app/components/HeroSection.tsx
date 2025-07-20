import { client } from "@/sanity/lib/client";
import ImageCarousalServer from "./ImageCarousalServer";
import HeroSwiper from "./HeroSwiper";

export const revalidate = 3600;

async function getData() {
  const query = `*[_type == "carousal"]{
  image,
  _id 
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function HeroSection() {
  const data = await getData();

  return (
    <div className=' bg-pattern'>
      <HeroSwiper data={data} />
    </div>
  );
}
