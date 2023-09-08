import React from "react";

export const AboutSection = () => {
  return (
    <section className="flex flex-col items-center py-12 px-4 sm:px-6">
      {/* Capsule Box */}
      <div className="bg-[#6ddc988f] rounded-full px-4 sm:px-8 py-4 mb-8 w-full max-w-[388px] mx-2 sm:mx-0">
        <div className="text-[#071b2e] w-full sm:w-[345px] mx-auto">
          <h2 className="text-xl font-bold mb-4 text-center leading-4">
            Who we are
          </h2>
          <p className="text-center text-xs leading-5">
            iSaveNow is dedicated to making shopping for daily{" "}
            <br className="hidden sm:block" />
            essentials and life's luxuries more affordable, ensuring{" "}
            <br className="hidden sm:block" />
            you never have to miss out on what you want.{" "}
            <br className="hidden sm:block" />
            Register now to start saving big!
          </p>
        </div>
      </div>

      {/* New Brands Info */}
      <h3 className="text-[#071b2e] text-xl font-bold mb-4 text-center">
        New brands added monthly
      </h3>
      <p className="text-[#071b2e] text-center text-xs">
        Here's a sneak peek into some of our favorite brands you could save on.
      </p>
    </section>
  );
};
