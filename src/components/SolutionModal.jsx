
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const SolutionModal = ({ isOpen }) => {
  const menuRef = useRef(null);
  const cardsRef = useRef([]);
  const particlesRef = useRef([]);
  const [particles, setParticles] = useState([]);

  // Create floating particles
  const createParticles = () => {
    const newParticles = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 4,
      });
    }
    setParticles(newParticles);
  };

  useEffect(() => {
    createParticles();
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Main container animation
      gsap.set(menuRef.current, { display: "block" });
      
      const tl = gsap.timeline();
      
      tl.to(menuRef.current, {
        height: "450px",
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      })
      .from(menuRef.current, {
        y: -50,
        duration: 0.4,
        ease: "back.out(1.7)",
      }, 0.1);

      // Cards animation with stagger
      gsap.fromTo(cardsRef.current, 
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
          rotationX: -15,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          delay: 0.2,
        }
      );

      // Animate particles
      particlesRef.current.forEach((particle, index) => {
        gsap.fromTo(particle,
          {
            y: 50,
            opacity: 0,
            scale: 0,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
          }
        );
      });

    } else {
      const tl = gsap.timeline();
      
      // Hide cards first
      tl.to(cardsRef.current, {
        y: -30,
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      })
      .to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.display = "none";
        },
      }, 0.2);

      // Hide particles
      gsap.to(particlesRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        stagger: 0.02,
      });
    }
  }, [isOpen]);

  const solutionData = [
    {
      title: "Virtual Tour",
      gradient: "from-rose-500 to-pink-600",
      items: [
        { name: "360° Virtual Tour", link: "/ARVR360Virtual" },
        { name: "AR VR Lab Setup", link: "#" },
        { name: "Effective way of Teleporting", link: "#" }
      ]
    },
    {
      title: "AR/VR for Education", 
      gradient: "from-pink-500 to-rose-500",
      items: [
        { name: "For K-12, ITI, Diploma, Engg Colleges", link: "#" },
        { name: "AR/VR Solutions in Industrial Training", link: "#" },
        { name: "AR/VR Implementation in Internship", link: "#" }
      ]
    },
    {
      title: "AR/VR for Industry",
      gradient: "from-rose-600 to-pink-500", 
      items: [
        { name: "AR/VR Implementation in Hospitality, Hotels & Tourism", link: "#" },
        { name: "AR/VR/MR Tailored Content Development Services", link: "#" },
        { name: "AR/VR Solutions for Civil and Construction", link: "#" }
      ]
    }
  ];

  return (
    <div
      ref={menuRef}
      className="absolute top-20 left-0 w-full overflow-hidden bg-gradient-to-br from-rose-50/95 via-pink-50/95 to-white/95 backdrop-blur-2xl border border-rose-200/50 rounded-3xl shadow-2xl"
      style={{ height: 0, opacity: 0, display: "none" }}
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            ref={(el) => particlesRef.current[particle.id] = el}
            className="floating-particles absolute"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 shimmer-effect opacity-30"></div>

      <div className="relative z-10 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionData.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              ref={(el) => cardsRef.current[sectionIndex] = el}
              className="solution-card bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/40 shadow-lg hover:shadow-2xl"
            >
              <div className="relative">
                <h3 className={`text-xl font-bold mb-4 glow-text bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                  {section.title}
                </h3>
                
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-rose-400/20 to-pink-500/20 rounded-full blur-sm"></div>
              </div>
              
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="solution-item">
                    {item.link.startsWith('/') ? (
                      <Link 
                        to={item.link} 
                        className="block text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-rose-600 hover:to-pink-600 hover:bg-clip-text font-medium transition-all duration-300 transform hover:translate-x-2 hover:scale-105 py-2 px-3 rounded-lg hover:bg-rose-50/50"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a 
                        href={item.link}
                        className="block text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-rose-600 hover:to-pink-600 hover:bg-clip-text font-medium transition-all duration-300 transform hover:translate-x-2 hover:scale-105 py-2 px-3 rounded-lg hover:bg-rose-50/50 cursor-pointer"
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full opacity-60"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionModal;