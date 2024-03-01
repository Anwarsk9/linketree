import { Event } from "@/models/Event";
import React from "react";

const Analytics = async () => {
  const viewsCount = await Event.countDocuments({
    type: "view",
    uri: "anwars",
  });
  const clickCount = await Event.countDocuments({ type: "click" });
  return (
    <div className="w-full h-full p-6 bg-white">
      <div className="">{viewsCount}</div>
      <div className="">{clickCount}</div>
    </div>
  );
};

export default Analytics;
