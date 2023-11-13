import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export async function DataFetching() {
  const query = `*[_type == "aboutMuli"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function fetchedData() {
  const data = await DataFetching();
  return (
    <div>
      <h1>Blog</h1>
      {data.map((item: any) => (
        <div key={item._id}>
          <p>{item.description}</p>

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
