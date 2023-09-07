import React from "react";
import { Header } from "../../components/header/Header";
import { PromoVideoSection } from "../../components/video-section/PromoVideoSection";
import { Footer } from "../../components/footer/Footer";
import { AboutSection } from "../../components/about/AboutSection";

const ComingSoon = () => {
  return (
    <div>
      <Header />

      <PromoVideoSection />

      <AboutSection />

      <Footer />
    </div>
  );
};

export default ComingSoon;
