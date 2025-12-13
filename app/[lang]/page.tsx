import PhotoList from "@/components/PhotoList";
import { getDictionary } from "./dictionaries";


export default async function Home( ) {


  const response = await fetch(`${process.env.BASE_API_URL}/photos`)
  const photos = await response.json();

  
  return (
    <div className="">
      <h1 className="text-5xl">Photo Feed</h1>
      <PhotoList photos={photos} />
    </div>
  );
}
