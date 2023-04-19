import Image from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e: any) => e.preventDefault();

const Gallery = () => {
  const images = [
    {
      img: "/gallery/portion-1.jpeg",
    },
    {
      img: "/gallery/portion-2.jpeg",
    },
    {
      img: "/gallery/portion-3.jpeg",
    },
    {
      img: "/gallery/portion-4.jpeg",
    },
    {
      img: "/gallery/portion-5.jpeg",
    },
    {
      img: "/gallery/portion-6.jpeg",
    },
    {
      img: "/gallery/portion-7.jpeg",
    },
    {
      img: "/gallery/portion-8.jpeg",
    },
  ];
  return (
    <div className="px-16 container mb-32 mx-auto">
      <div className="lg:hidden">
        <AliceCarousel
          disableButtonsControls={true}
          mouseTracking
          items={images.map((img, i) => {
            return (
              <Image
                className="!rounded-lg !p-1 hover:cursor-grab active:cursor-grabbing"
                src={img.img}
                key={i}
                alt="gallery"
                layout="responsive"
                onDragStart={handleDragStart}
                width={400}
                height={400}
              />
            );
          })}
          responsive={{
            0: {
              items: 1,
            },
            768: {
              items: 3,
            },
          }}
        />
      </div>
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {images.map((img, i) => (
          <Image
            className="rounded-lg"
            src={img.img}
            key={i}
            alt="gallery"
            layout="responsive"
            width={400}
            height={400}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
