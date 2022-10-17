import Spacer from "../components/spacer";
import bowl from "../assets/bowl.svg";
import filters from "../assets/filters.svg";
import gym from "../assets/gym.svg";
import features from "../assets/features.png";
import Image from "next/image";

const Features = () => {
  return (
    <div className="px-16">
      <div>
        <h1 className="text-5xl text-secondary text-center font-bold leading-[4rem] mb-12">
          Your personalised
          <br />
          meal plan companion.
        </h1>
      </div>
      <div className="flex justify-center gap-24 items-center">
        <div>
          <div className="flex mb-6 items-center">
            <div className="p-2 flex justify-center items-center rounded-md bg-secondary border">
              <Image src={bowl} layout="fixed" />
            </div>
            <h1 className="text-2xl text-secondary text-left font-medium leading-[4rem] ml-4">
              Good food.
            </h1>
          </div>
          <div className="flex mb-6 items-center">
            <div className="p-2 flex justify-center items-center rounded-md bg-secondary border">
              <Image src={gym} layout="fixed" />
            </div>
            <h1 className="text-2xl text-secondary text-left font-medium leading-[4rem] ml-4">
              Track your intake.
            </h1>
          </div>
          <div className="flex items-center">
            <div className="p-2 flex justify-center items-center rounded-md bg-secondary border">
              <Image src={filters} layout="fixed" />
            </div>
            <h1 className="text-2xl text-secondary text-left font-medium leading-[4rem] ml-4">
              Customize your meals.
            </h1>
          </div>
        </div>
        <div className="w-[30vw]">
          <Image src={features} layout="responsive" />
        </div>
      </div>
    </div>
  );
};

export default Features;
