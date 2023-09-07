import React from "react";
import scrollingVideo from "../../assets/Scrolling-banner-2.mp4";

export const ScrollingVideoSection = () => {
  return (
    <div className="relative overflow-hidden mt-16 mb-14 h-[30px] sm:h-[60px] md:h-[70px] lg:h-[80px] xl:h-[90px] 2xl:h-[100px]">
      <video
        src={scrollingVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};
