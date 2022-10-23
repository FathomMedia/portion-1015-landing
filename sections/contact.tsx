import BtnPrim from "../components/primaryBtn";
import React, { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const hubspot_response = await submit_hubspot_form(email);
    setIsLoading(false);
    console.log(hubspot_response);
  };

  const submit_hubspot_form = async (email) => {
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
    <div className="flex-col justify-center container max-w-2xl mx-auto mb-8">
      <h1 className="text-4xl md:text-xl lg:text-xl xl:text-4xl 2xl:text-6xl text-secondary text-center font-bold leading-[4rem] mb-12">
        Talk to Us
      </h1>
      <div className="flex justify-center gap-2 w-full px-28">
        <form
          className="flex flex-col justify-center m-0 grow border border-secondary/20 p-16 rounded-2xl"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="flex flex-row gap-2 justify-center">
            <input
              placeholder="Your Email"
              className="border p-2 mb-2 border-secondary/20 rounded-2xl w-full"
              type="text"
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </div>
          <br />
          <div className="text-center justify center w-full">
            <button
              disabled={isLoading}
              className="bg-primary text-secondary font-medium px-8 py-2 text-sm rounded-full hover:brightness-[0.98] duration-200 disabled:bg-gray-300"
            >
              <div role="status" className="flex">
                {isLoading ? <Loader /> : <p>Get Notified</p>}
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
