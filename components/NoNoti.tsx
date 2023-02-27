import Image from "next/image";
import React from "react";
import icon from "../public/assets/NoNoti.svg";

export const NoNotification = () => {
  return (
    <div className="w-1/2 max-w-[200px] aspect-square">
      <Image src={icon} layout="responsive" alt="No Notification" />
    </div>
  );
};
