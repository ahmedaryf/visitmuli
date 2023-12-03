import { client } from "@/sanity/lib/client";
import ImageCarousalServer from "./ImageCarousalServer";

export const revalidate = 600;

async function getData() {
  const query = `*[_type == "carousal"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function HeroSection() {
  const data = await getData();

  return (
    <div className=' bg-pattern'>
      <ImageCarousalServer imageData={data} />
    </div>
  );
}
