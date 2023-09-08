import React, { useState } from "react";
import videoBg from "../../assets/iSaveNow-Video-background-v2.mp4";

export const PromoVideoSection = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

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
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4 z-10 space-y-6 md:space-y-8 lg:space-y-12">
        <h1 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold leading-tight text-center">
          Savings you don't want to miss!
        </h1>
        <p className="text-white text-sm lg:text-lg max-w-[477px] font-normal leading-6 text-center md:text-lg">
          Be the first to know when you can unlock incredible savings. Register
          for exclusive first access.
        </p>

        {/* Form */}
        <form name="contact" method="POST" className="w-full max-w-xl">
          <input type="hidden" name="form-name" value="contact" />
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                placeholder="First name"
                className="transition-all focus:border-[#4C00B0] border-[#BA77E2] w-full bg-[#F8F8F8] outline-none rounded-3xl px-4 py-2 sm:px-5 sm:py-3 border text-[#2C2C2C] font-medium leading-5 text-center sm:text-left text-lg"
                required
              />
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                placeholder="Last name"
                className="transition-all focus:border-[#4C00B0] border-[#BA77E2] w-full bg-[#F8F8F8] outline-none rounded-3xl px-4 py-2 sm:px-5 sm:py-3 border text-[#2C2C2C] font-medium leading-5 text-center sm:text-left text-lg"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter email address"
              className="transition-all focus:border-[#4C00B0] border-[#BA77E2] w-full bg-[#F8F8F8] outline-none rounded-3xl px-4 py-2 sm:px-5 sm:py-3 border text-[#2C2C2C] font-medium leading-5 text-center sm:text-left text-lg"
              required
            />
          </div>

          {/* Register Button */}
          <div className="flex items-center justify-center w-full mt-4 sm:mt-8">
            <button
              className="bg-[#BA77E2] px-8 sm:px-12 py-2 sm:py-3 text-center rounded-3xl font-medium text-sm sm:text-base hover:opacity-80"
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
