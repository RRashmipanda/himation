

import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import SolutionModal from "./SolutionModal";
import { Link } from "lucide-react";

const navItems = ["Solution", "Platform", "Career", "About", "Contact"];

const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);
  const menuAreaRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
    
    // GSAP animation for audio indicator bars
    if (!isIndicatorActive) {
      gsap.to(".indicator-line", {
        scaleY: "random(0.5, 1.5)",
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
        ease: "power2.inOut"
      });
    } else {
      gsap.to(".indicator-line", {
        scaleY: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    }
  };

  useEffect(() => {
    if (isAudioPlaying && audioElementRef.current) {
      audioElementRef.current.play();
    } else if (audioElementRef.current) {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    // Enhanced GSAP animation for navbar visibility
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.4,
      ease: "power3.out",
    });
  }, [isNavVisible]);

  const handleMouseEnter = () => {
    setIsSolutionOpen(true);
    // GSAP animation for solution dropdown
    gsap.fromTo(".solution-dropdown", 
      { opacity: 0, y: -20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
    );
  };

  const handleMouseLeave = () => {
    setIsSolutionOpen(false);
    gsap.to(".solution-dropdown", {
      opacity: 0,
      y: -10,
      scale: 0.95,
      duration: 0.2,
      ease: "power2.in"
    });
  };

  // GSAP hover animations for nav items
  const handleNavItemHover = (e) => {
    gsap.to(e.target, {
      scale: 1.05,
      color: "#f43f5e",
      duration: 0.2,
      ease: "power2.out"
    });
  };

  const handleNavItemLeave = (e) => {
    gsap.to(e.target, {
      scale: 1,
      color: "#374151",
      duration: 0.2,
      ease: "power2.out"
    });
  };

  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4 bg-gradient-to-r from-rose-50/90 via-pink-50/90 to-rose-100/90 backdrop-blur-md rounded-2xl shadow-lg border border-rose-200/50">
          <div className="flex items-center gap-7">
            {/* <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
              Himation
            </div> */}
           
            <Button
              id="product-button"
              title="HIMATION"           
              containerClass="bg-gradient-to-r from-rose-100 to-pink-100 md:flex hidden items-center justify-center gap-1 hover:from-rose-200 hover:to-pink-200 transition-all duration-300"
            />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) =>
                item === "Solution" ? (
                  <div
                    key={index}
                    onMouseEnter={handleMouseEnter}
                    onMouseOver={handleNavItemHover}
                    onMouseLeave={handleNavItemLeave}
                    className="relative cursor-pointer font-medium text-gray-700 hover:text-rose-500 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-rose-50"
                  >
                    {item}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 transition-all duration-300 transform -translate-x-1/2 hover:w-full"></div>
                  </div>
                ) : (
                  <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    onMouseOver={handleNavItemHover}
                    onMouseLeave={handleNavItemLeave}
                    className="relative cursor-pointer font-medium text-gray-700 hover:text-rose-500 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-rose-50"
                  >
                    {item}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 transition-all duration-300 transform -translate-x-1/2 hover:w-full"></div>
                  </a>
                )
              )}
            </div>

            <button 
              onClick={toggleAudioIndicator} 
              className="ml-10 flex items-center space-x-1 p-2 rounded-lg hover:bg-rose-100 transition-colors duration-200"
            >
              <audio ref={audioElementRef} className="hidden" loop>
                <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+L2uWkfCjiJ0/LNeSsFJHfH8d2QQgoUXrTp66hVFApGn+L2uWkfCjiJ0/LNeSsFJHfH8d2QQQwdfnfgjhAEW5++2qJ1HwY9j9DyznpOBC+Fz/LfjiwMGGy57+iWPQcYZLHqvnksB" type="audio/wav" />
              </audio>
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx(
                    "indicator-line w-1 h-4 bg-gradient-to-t from-rose-400 to-pink-500 rounded-full transition-all duration-200",
                    { "animate-pulse": isIndicatorActive }
                  )}
                  style={{ 
                    animationDelay: `${bar * 0.1}s`,
                    height: isIndicatorActive ? `${12 + Math.random() * 8}px` : '16px'
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>

      
      <div
        ref={menuAreaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SolutionModal isOpen={isSolutionOpen} />
      </div>

      <style jsx>{`
        .floating-nav {
          backdrop-filter: blur(16px);
          box-shadow: 0 8px 32px rgba(244, 63, 94, 0.1);
        }
      `}</style>
    </div>
  );
};

export default NavBar;

