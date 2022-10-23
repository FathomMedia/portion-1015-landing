import Image from "next/image";
import BtnPrim from "../components/primaryBtn";
import phone from "../assets/mockup.png";
import React, { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
const Main = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const hubspot_response = await submit_hubspot_form(email);
    setIsLoading(false);
    setShowMessage(true);
  };

  const submit_hubspot_form = async (email: string) => {
    const portalId = "26502452";
    const formGuid = "83b942ed-d1da-46a4-b436-0d57399f56ab";
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/26502452/83b942ed-d1da-46a4-b436-0d57399f56ab`,
      {
        portalId,
        formGuid,
        fields: [
          {
            name: "email",
            value: email,
          },
        ],
      },
      config
    );
  };
  return (
    <div>
      <div className=" bg-cover h-[70vw] md:h-[30vw] bg-blend-multiply bg-secondary/70 bg-no-repeat bg-center bg-[url('../assets/hero.jpg')] flex justify-evenly items-center md:mx-16 md:rounded-md">
        <div>
          <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center items-center md:text-left text-white font-bold md:w-10 lg:leading-[4rem]">
            Simple. Good. Food.
          </h1>
          <br />
          <div className={showMessage ? "hidden" : "block"}>
            <div className="mb-4">
              <form
                className="flex justify-center m-0 grow"
                onSubmit={handleSubmit}
                method="POST"
              >
                <div className="flex flex-row gap-2 justify-center">
                  <input
                    placeholder="Your Email"
                    className=" pl-6 py-3 rounded-tl-full rounded-bl-full w-full text-secondary dark:bg-white"
                    type="text"
                    required
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                  />
                </div>
                <button
                  disabled={isLoading}
                  className="bg-primary text-secondary font-medium px-4 text-sm rounded-tr-full rounded-br-full hover:brightness-[0.98] duration-200 disabled:bg-secondary"
                >
                  <div role="status" className="flex">
                    {isLoading ? <Loader /> : <p>Join Waiting List</p>}
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div
            className={
              showMessage
                ? "block text-center text-white  mx-3 border border-primary rounded-xl px-8 py-4 border-gradient-to-r from-primary to-primary/80"
                : "hidden mx-3"
            }
          >
            <p>👏 Thanks for joining!</p>
          </div>
        </div>
        <div className="hidden md:block w-[14vw] mt-16">
          <Image src={phone} layout="responsive" alt="mockup" />
        </div>
      </div>
    </div>
  );
};

export default Main;
