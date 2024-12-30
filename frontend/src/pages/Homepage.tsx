import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Faq from "../components/Faq";
import VolunteerCards from "@/components/ui/volunteercards";
import ExtraLanding from "../components/extraLanding";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ArcCarousel from "../components/ui/carousel";
import TopVolunteers from "../components/ui/carousel";
import Marquee from "@/shared/marquee";

gsap.registerPlugin(ScrollTrigger);

const Homepage: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".volunteer-cards",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".volunteer-cards",
          start: "top 75%",
          end: "top 45%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".faq-section",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".faq-section",
          start: "top 85%",
          end: "top 55%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="homepage-container">
      <section className="hero-section">
        <HeroSection />
        <Marquee/>
      </section>
      
      {/* <section><EventsStack /> </section> */}
      <section className="volunteer-cards">
        <VolunteerCards />
      </section>
      <section>
          <ExtraLanding />
      </section>
      <section className="faq-section">
        <Faq />
      </section>
      <TopVolunteers/>
    </div>
  );
};

export default Homepage;
