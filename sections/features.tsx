import Spacer from "../components/spacer";
import bowl from "../assets/bowl.svg";
import filters from "../assets/filters.svg";
import gym from "../assets/gym.svg";
import features from "../assets/features.png";
import Image from "next/image";
import FeatureIcon from "../components/FeatureIcon";

const Features = () => {
  return (
    <div className="container mx-auto space-y-32 px-8 md:px-0">
      <div className="grid grid-cols-1 mx-auto w-full md:grid-cols-2 items-center ">
        <div className="hidden md:block w-full p-12">
          <Image src={features} layout="responsive" alt="features" />
        </div>
        <div className="">
          <h1 className="text-4xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-secondary text-center md:text-left font-bold md:leading-[2rem]  mb-6">
            Your personalised meal plan companion.
          </h1>
          <p className="text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl text-secondary text-center md:text-left font-normal md:leading-[2rem] mb-12 md:w-96 2xl:w-auto">
            When healthy feels and tastes as good as possible, it’s worth
            eating.
          </p>
          <FeatureIcon key="i" content="Customize your meals." img={filters} />
          <FeatureIcon key="i" content="Track your intake." img={gym} />
          <FeatureIcon key="i" content="Good food." img={bowl} />
        </div>
      </div>
    </div>
  );
};

export default Features;
