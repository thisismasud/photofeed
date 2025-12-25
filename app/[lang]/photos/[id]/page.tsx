import PhotoDetails from "@/components/PhotoDetails";

const PhotoDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string; lang: string }>;
}) => {
  const { id, lang } = await params;
  return <PhotoDetails id={id} lang={lang} />;
};

export default PhotoDetailsPage;