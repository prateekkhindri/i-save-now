import React from "react";
import { Header } from "../../components/header/Header";
import { PromoVideoSection } from "../../components/video-section/PromoVideoSection";
import { Footer } from "../../components/footer/Footer";
import { AboutSection } from "../../components/about/AboutSection";
import { BrandsBanner } from "../../components/brands/BrandsBanner";
import { ScrollingVideoSection } from "../../components/scrolling-section/ScrollingVideoSection";

const ComingSoon = () => {
  return (
    <div>
      <Header />

      <PromoVideoSection />

      <AboutSection />

      <BrandsBanner />

      <ScrollingVideoSection />

      <Footer />
    </div>
  );
};

export default ComingSoon;
