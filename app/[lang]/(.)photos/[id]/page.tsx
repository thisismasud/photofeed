
import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";

const PhotoModal = async ({
  params,
}: {
  params: Promise<{ id: string; lang: string }>;
}) => {
  const { id, lang } = await params;
  return (
    
      <Modal>
        <PhotoDetails id={id} lang={lang} />
      </Modal>
  );
};
export default PhotoModal;
