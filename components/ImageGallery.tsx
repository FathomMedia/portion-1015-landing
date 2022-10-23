import Image from "next/image";
const ImageGallery = (props: any) => {
  return (
    <div className="bg-black w-56 rounded-lg">
      <Image src={props.items} layout="responsive" alt="gallery" />
    </div>
  );
};

export default ImageGallery;
