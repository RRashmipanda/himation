// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
// import { TiLocationArrow } from "react-icons/ti";
// import { useEffect, useRef, useState } from "react";

// import Button from "./Button";
// import VideoPreview from "./VideoPreview";

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const [hasClicked, setHasClicked] = useState(false);

//   const [loading, setLoading] = useState(true);
//   const [loadedVideos, setLoadedVideos] = useState(0);

//   const totalVideos = 4;
//   const nextVdRef = useRef(null);

//   const handleVideoLoad = () => {
//     setLoadedVideos((prev) => prev + 1);
//   };

//   useEffect(() => {
//     if (loadedVideos === totalVideos - 1) {
//       setLoading(false);
//     }
//   }, [loadedVideos]);

//   const handleMiniVdClick = () => {
//     setHasClicked(true);

//     setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
//   };

//   useGSAP(
//     () => {
//       if (hasClicked) {
//         gsap.set("#next-video", { visibility: "visible" });
//         gsap.to("#next-video", {
//           transformOrigin: "center center",
//           scale: 1,
//           width: "100%",
//           height: "100%",
//           duration: 1,
//           ease: "power1.inOut",
//           onStart: () => nextVdRef.current.play(),
//         });
//         gsap.from("#current-video", {
//           transformOrigin: "center center",
//           scale: 0,
//           duration: 1.5,
//           ease: "power1.inOut",
//         });
//       }
//     },
//     {
//       dependencies: [currentIndex],
//       revertOnUpdate: true,
//     }
//   );

//   useGSAP(() => {
//     gsap.set("#video-frame", {
//       clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
//       borderRadius: "0% 0% 40% 10%",
//     });
//     gsap.from("#video-frame", {
//       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//       borderRadius: "0% 0% 0% 0%",
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: "#video-frame",
//         start: "center center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });
//   });

//   const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

//   return (
//     <div className="relative h-dvh w-screen overflow-x-hidden">
//       {loading && (
//         <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
//           {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
//           <div className="three-body">
//             <div className="three-body__dot"></div>
//             <div className="three-body__dot"></div>
//             <div className="three-body__dot"></div>
//           </div>
//         </div>
//       )}

//       <div
//         id="video-frame"
//         className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
//       >
//         <div>
//           <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
//             <VideoPreview>
//               <div
//                 onClick={handleMiniVdClick}
//                 className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
//               >
//                 <video
//                   ref={nextVdRef}
//                   src={getVideoSrc((currentIndex % totalVideos) + 1)}
//                   loop
//                   muted
//                   id="current-video"
//                   className="size-64 origin-center scale-150 object-cover object-center"
//                   onLoadedData={handleVideoLoad}
//                 />
//               </div>
//             </VideoPreview>
//           </div>

//           <video
//             ref={nextVdRef}
//             src={getVideoSrc(currentIndex)}
//             loop
//             muted
//             id="next-video"
//             className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
//             onLoadedData={handleVideoLoad}
//           />
//           <video
//             src={getVideoSrc(
//               currentIndex === totalVideos - 1 ? 1 : currentIndex
//             )}
//             autoPlay
//             loop
//             muted
//             className="absolute left-0 top-0 size-full object-cover object-center"
//             onLoadedData={handleVideoLoad}
//           />
//         </div>

//         <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
//           T<b>E</b>CH
//         </h1>

//         <div className="absolute left-0 top-0 z-40 size-full">
//           <div className="mt-24 px-5 sm:px-10">
//             <h1 className="special-font hero-heading text-blue-100">
//               himati<b>o</b>n
//             </h1>

//             <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
//               World's Largest  <br /> Augmented Reality (AR) &  Virtual reality (VR) Content Bank.
//             </p>

//             <Button
//               id="watch-trailer"
//               title="Join WIth Us"
//               leftIcon={<TiLocationArrow />}
//               containerClass="bg-yellow-300 flex-center gap-1"
//             />
//           </div>
//         </div>
//       </div>

//       <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
//         T<b>E</b>CH
//       </h1>
//     </div>
//   );
// };

// export default Hero;


import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVdRef = useRef(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  // Enhanced entrance animations
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.from(titleRef.current, {
      opacity: 0,
      y: 100,
      rotationX: -90,
      transformOrigin: "50% 50% -50px",
      duration: 1.2,
      ease: "back.out(1.7)"
    })
    .from(descriptionRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .from(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      rotation: -10,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.4");

    // Floating animation for the button
    gsap.to(buttonRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        
        const tl = gsap.timeline();
        
        tl.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1.2,
          ease: "power2.inOut",
          onStart: () => nextVdRef.current.play(),
        })
        .from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          rotation: 360,
          duration: 1.5,
          ease: "back.out(1.7)",
        }, "-=0.8");

        // Add a ripple effect
        gsap.fromTo(".mask-clip-path", 
          { 
            boxShadow: "0 0 0 0 rgba(244, 63, 94, 0.4)" 
          },
          { 
            boxShadow: "0 0 0 20px rgba(244, 63, 94, 0)",
            duration: 0.6,
            ease: "power2.out"
          }
        );
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Parallax effect for background elements
    gsap.to(".hero-bg-element", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div ref={heroRef} className="relative h-screen w-screen overflow-x-hidden pt-20">
      {loading && (
        <div className="flex-center absolute z-[100] h-screen w-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
          <div className="three-body">
            <div className="three-body__dot bg-gradient-to-r from-rose-400 to-pink-500"></div>
            <div className="three-body__dot bg-gradient-to-r from-pink-400 to-rose-500"></div>
            <div className="three-body__dot bg-gradient-to-r from-rose-500 to-pink-600"></div>
          </div>
        </div>
      )}

      {/* Background decorative elements */}
      <div className="hero-bg-element absolute top-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-rose-200/20 to-pink-200/20 blur-xl"></div>
      <div className="hero-bg-element absolute bottom-20 left-10 w-48 h-48 rounded-full bg-gradient-to-br from-pink-200/10 to-rose-200/10 blur-2xl"></div>

      <div
        id="video-frame"
        className="relative z-10 h-full w-screen overflow-hidden rounded-lg bg-gradient-to-br from-rose-900 via-pink-900 to-rose-800"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/60 via-pink-900/40 to-rose-800/60"></div>
        
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg border-2 border-rose-300/30 shadow-lg shadow-rose-500/20 hover:border-rose-300/60 transition-all duration-300">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextVdRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </VideoPreview>
          </div>

          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 bg-gradient-to-r from-rose-200 via-pink-200 to-rose-300 bg-clip-text text-transparent">
          T<b>E</b>CH
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 
              ref={titleRef}
              className="special-font hero-heading bg-gradient-to-r from-rose-100 via-pink-100 to-rose-200 bg-clip-text text-transparent"
            >
              himati<b>o</b>n
            </h1>

            <p 
              ref={descriptionRef}
              className="mb-5 max-w-64 font-robert-regular text-rose-100/90"
            >
              World's Largest <br /> Augmented Reality (AR) & Virtual reality (VR) Content Bank.
            </p>

            <div ref={buttonRef}>
              <Button
                id="watch-trailer"
                title="Join With Us"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-rose-400 hover:border-rose-500 flex-center gap-1 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40"
              />
            </div>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
        T<b>E</b>CH
      </h1>

      <style jsx>{`
        .three-body {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .three-body__dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: three-body 0.8s ease-in-out infinite;
        }
        .three-body__dot:nth-child(1) {
          animation-delay: -0.32s;
        }
        .three-body__dot:nth-child(2) {
          animation-delay: -0.16s;
        }
        @keyframes three-body {
          0%, 80%, 100% {
            transform: translate(-50%, -50%) scale(0);
          }
          40% {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;