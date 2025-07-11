import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import SolutionModal from "./SolutionModal";

const navItems = ["Solution", "Platform", "Career", "About", "Contact"];

const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);

  const audioRef = useRef(null);
  const navRef = useRef(null);
  const solutionContainerRef = useRef(null);
  const { y: scrollY } = useWindowScroll();
  const [lastY, setLastY] = useState(0);
  const location = useLocation();

  // Audio Indicator Toggle
  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
    setIsIndicatorActive(!isIndicatorActive);

    if (!isIndicatorActive) {
      gsap.to(".indicator-line", {
        scaleY: "random(0.5, 1.5)",
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(".indicator-line", {
        scaleY: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  // Play / Pause Audio
  useEffect(() => {
    if (isAudioPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isAudioPlaying]);

  // Navbar visibility - Always visible at top, floating on scroll
  useEffect(() => {
    if (scrollY === 0) {
      // At top - show normal navbar
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      navRef.current?.classList.remove("floating-nav");
    } else if (scrollY > lastY && scrollY > 100) {
      // Scrolling down - hide navbar
      gsap.to(navRef.current, {
        y: -100,
        duration: 0.3,
        ease: "power2.out",
      });
      navRef.current?.classList.add("floating-nav");
    } else if (scrollY < lastY) {
      // Scrolling up - show floating navbar
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      navRef.current?.classList.add("floating-nav");
    }
    setLastY(scrollY);
  }, [scrollY, lastY]);

  // Close Solution Modal on route change
  useEffect(() => {
    setIsSolutionOpen(false);
  }, [location.pathname]);

  const handleNavHover = (e) => {
    gsap.to(e.target, {
      scale: 1.05,
      color: "#f43f5e",
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleNavLeave = (e) => {
    gsap.to(e.target, {
      scale: 1,
      color: "#374151",
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <div ref={navRef} className="fixed inset-x-0 top-0 z-50 h-16">
      <header className="w-full h-full">
        <nav className="flex h-full items-center justify-between px-8 py-3 bg-gradient-to-r from-rose-50/90 via-pink-50/90 to-rose-100/90 backdrop-blur-md shadow-lg border-b border-rose-200/50">
          <div className="flex items-center gap-7">
            <Link to="/">
              <Button
                title="HIMATION"
                containerClass="bg-gradient-to-r from-rose-100 to-pink-100 flex items-center justify-center gap-1 hover:from-rose-200 hover:to-pink-200 transition-all duration-300"
              />
            </Link>
          </div>

          <div className="flex items-center gap-8">
            {navItems.map((item, i) =>
              item === "Solution" ? (
                <div
                  key={i}
                  ref={solutionContainerRef}
                  onMouseEnter={() => setIsSolutionOpen(true)}
                  onMouseLeave={() => setIsSolutionOpen(false)}
                  className="relative cursor-pointer font-medium text-gray-700 hover:text-rose-500 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-rose-50"
                >
                  {item}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 transition-all duration-300 transform -translate-x-1/2 hover:w-full"></div>
                  
                  {/* Modal positioned directly here */}
                  <SolutionModal isOpen={isSolutionOpen} />
                </div>
              ) : (
                <Link
                  key={i}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsSolutionOpen(false)}
                  onMouseOver={handleNavHover}
                  onMouseLeave={handleNavLeave}
                  className="relative cursor-pointer font-medium text-gray-700 hover:text-rose-500 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-rose-50"
                >
                  {item}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 transition-all duration-300 transform -translate-x-1/2 hover:w-full"></div>
                </Link>
              )
            )}

            <button
              onClick={toggleAudio}
              className="flex items-center space-x-1 p-2 rounded-lg hover:bg-rose-100 transition-colors duration-200"
            >
              <audio ref={audioRef} className="hidden" loop>
                <source
                  src="data:audio/wav;base64,UklGRnoGAABXQVZFZm..."
                  type="audio/wav"
                />
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
                    height: isIndicatorActive
                      ? `${12 + Math.random() * 8}px`
                      : "16px",
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>

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