import React from "react";
import logo from "../../assets/iSaveNow-Logos-RGB_Logo-1.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0D355A] text-white py-2 px-2">
      <div className="container mx-2">
        <div className="text-lg font-extrabold uppercase cursor-pointer">
          <img
            src={logo}
            alt="iSaveNow Logo"
            className="h-[15px] xs:h-[45px]"
          />
        </div>
      </div>
    </header>
  );
};
