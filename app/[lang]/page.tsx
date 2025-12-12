import { getDictionary } from "./dictionaries";

export default async function Home({params}:{params:Promise<{lang:string}>} ) {
  
  const {lang} = await params;
  const dictionary = await getDictionary(lang);
  return (
    <div className="">
      <h1 className="text-5xl">{dictionary.followers}</h1>
    </div>
  );
}
