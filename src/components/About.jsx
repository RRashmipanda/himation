"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    // Floating animation for background elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100" />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-rose-200/30 rounded-full blur-xl" />
        <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl" />
        <div className="floating-element absolute bottom-40 left-1/4 w-24 h-24 bg-rose-300/25 rounded-full blur-xl" />
        <div className="floating-element absolute top-1/3 right-1/3 w-16 h-16 bg-pink-200/30 rounded-full blur-lg" />
      </div>

      {/* Content */}
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 z-10">
        <p className="font-medium text-sm uppercase md:text-xs text-rose-600 tracking-wider animate-fade-in">
          Welcome to Himation
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest AR VR <b>c</b>ontent Bank"
          containerClass="mt-5 !text-gray-800 text-center"
        />

        <div className="about-subtext text-center max-w-2xl px-4">
          <p className="text-lg md:text-xl text-gray-700 font-medium mb-2">
            The Game of Games begins — your life, now an epic
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Himation unites every player from countless games and platforms,
            both digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      {/* Scroll-Triggered Section */}
      <div className="h-dvh w-screen relative" id="clip">
        <div
          className="mask-clip-path about-image relative overflow-hidden rounded-3xl mx-auto"
          style={{
            width: "50vw",
            height: "50vh",
            clipPath: "inset(0 round 20px)",
          }}
        >
          {/* Image Background */}
          <img
            src="/img/about.jpg"
            alt="Background"
            className="absolute left-0 top-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 via-transparent to-pink-400/20 z-10" />

         

          {/* Animated Floating Particles */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-6 h-6 bg-white/30 rounded-full animate-pulse" />
            <div className="absolute top-20 right-16 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-300" />
            <div className="absolute bottom-20 left-20 w-8 h-8 bg-white/25 rounded-full animate-pulse delay-700" />
            <div className="absolute bottom-32 right-12 w-5 h-5 bg-white/30 rounded-full animate-pulse delay-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
