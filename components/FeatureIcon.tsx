import Image from "next/image";
const FeatureIcon = (props: any) => {
  return (
    <div className="flex flex-col md:flex-row mb-6 justify-center md:justify-start items-center">
      <div className="p-2 w-12 h-12 flex justify-center items-center rounded-full bg-secondary border border-primary/80">
        <Image src={props.img} layout="fixed" alt="icon" />
      </div>
      <h1 className="text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl text-secondary dark:text-white text-left font-normal leading-[4rem] md:ml-4">
        {props.content}
      </h1>
    </div>
  );
};

export default FeatureIcon;
