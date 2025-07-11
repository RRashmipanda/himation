// import { gsap } from "gsap";
// import { useEffect, useRef } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import clsx from "clsx";

// gsap.registerPlugin(ScrollTrigger);

// const AnimatedTitle = ({ title, containerClass }) => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const titleAnimation = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "100 bottom",
//           end: "center bottom",
//           toggleActions: "play none none reverse",
//         },
//       });

//       titleAnimation.to(
//         ".animated-word",
//         {
//           opacity: 1,
//           transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
//           ease: "power2.inOut",
//           stagger: 0.02,
//         },
//         0
//       );
//     }, containerRef);

//     return () => ctx.revert(); 
//   }, []);

//   return (
//     <div ref={containerRef} className={clsx("animated-title", containerClass)}>
//       {title.split("<br />").map((line, index) => (
//         <div
//           key={index}
//           className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
//         >
//           {line.split(" ").map((word, idx) => (
//             <span
//               key={idx}
//               className="animated-word"
//               dangerouslySetInnerHTML={{ __html: word }}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AnimatedTitle;






import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(".animated-word", {
        opacity: 0,
        transform: "translate3d(0, 50px, 0) rotateY(-15deg) rotateX(10deg)",
      });

      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "center 50%",
          toggleActions: "play none none reverse",
        },
      });

      // Animation on scroll
      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          color: "#0c343d",
          ease: "back.out(1.7)",
          stagger: 0.05,
          duration: 0.8,
        },
        0
      );

      // Fallback: if no scroll, show text after 0.5s
      gsap.delayedCall(0.5, () => {
        if (gsap.getProperty(".animated-word", "opacity") === 0) {
          gsap.to(".animated-word", {
            opacity: 1,
            transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
            color: "#e11d48",
            ease: "back.out(1.7)",
            stagger: 0.05,
            duration: 0.8,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [title]);

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3 justify-center"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word inline-block font-black text-5xl md:text-7xl leading-[1] drop-shadow-2xl"
              style={{
                textShadow: "0 4px 8px rgba(0,0,0,0.1)",
                WebkitTextStroke: "1px rgba(225, 29, 72, 0.1)",
                letterSpacing: "0.5px", 
              }}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
