import React from "react";
import videoBg from "../../assets/iSaveNow-Video-background-v2.mp4";

export const PromoVideoSection = () => {
  return (
    <section className="relative h-screen mt-16">
      {/* Background Video */}
      <video
        src={videoBg}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4 z-10">
        <h1 className="mt-6 text-white text-2xl font-extrabold leading-9 text-center md:text-left lg:text-5xl xl:text-6xl mb-4">
          Savings you don't want to miss!
        </h1>
        <p className="text-white text-center text-sm mb-8 mt-2 lg:mt-4 lg:text-lg max-w-[477px] font-normal leading-6 md:text-left ml-12">
          Be the first to know when you can unlock incredible savings. Sign up
          to our exclusive mailing list today.
        </p>

        {/* Form */}
        <form
          name="registrationForm"
          data-netlify="true"
          method="post"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="registrationForm" />
          <div className="space-y-4 mb-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="transition-all focus:border-[#4C00B0] border-[#BA77E2] w-full bg-[#F8F8F8] outline-none rounded-3xl px-5 py-3 border text-[#2C2C2C] font-medium leading-5 text-center text-lg"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="transition-all focus:border-[#4C00B0] border-[#BA77E2] w-full bg-[#F8F8F8] outline-none rounded-3xl px-5 py-3 border text-[#2C2C2C] font-medium leading-5 text-center text-lg"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              className="transition-all focus:border-[#4C00B0] border-[#BA77E2] w-full bg-[#F8F8F8] outline-none rounded-3xl px-5 py-3 border text-[#2C2C2C] font-medium leading-5 text-center text-lg"
              required
            />
          </div>

          {/* Register Button */}
          <div className="flex items-center justify-center w-full mt-8">
            <button
              className="bg-[#BA77E2] px-12 py-3 text-center rounded-3xl font-medium text-sm hover:opacity-80"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
