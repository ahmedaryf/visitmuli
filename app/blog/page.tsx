import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export async function getData() {
  const query = `*[_type == "carousal"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Blog() {
  const data = await getData();
  return (
    <div>
      <h1>Blog</h1>
      {data.map((item: any) => (
        <div key={item._id}>
          <h1>{item.title}</h1>
          <Image
            src={urlForImage(item.image).url()}
            width={200}
            height={200}
            alt='image'
          />
        </div>
      ))}
    </div>
  );
}
