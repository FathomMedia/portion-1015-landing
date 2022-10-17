import Image from "next/image";
import phone from "../assets/mockup.png";
const main = () => {
  return (
    <div>
      <div className=" bg-cover h-[30vw] bg-blend-multiply bg-secondary/70 bg-no-repeat bg-center  bg-[url('../assets/hero.jpg')] flex justify-evenly items-center mx-16 rounded-md">
        <div>
          <h1 className="text-6xl text-white font-bold w-10 leading-[4rem]">
            Simple. Good. Food.
          </h1>
          <br />
          <button className="bg-primary text-secondary font-medium px-8 py-2 text-sm rounded-full">
            Try it Out
          </button>
        </div>
        <div className="w-[14vw] mt-16">
          <Image src={phone} layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default main;
