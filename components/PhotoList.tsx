import Image from "next/image";
import type { photo } from "../lib/image_data";
import PhotoCard from "./PhotoCard";

const PhotoList = ({ photos }: { photos: photo[] }) => {
  return (
    <div className="img-grid">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
