import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ChevronRight, Play, BookOpen, Building2 } from "lucide-react";

const SolutionModal = ({ isOpen }) => {
  const menuRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      gsap.set(menuRef.current, { display: "block", opacity: 0, y: -10 });
      gsap.to(menuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.display = "none";
          }
        },
      });
    }
  }, [isOpen]);

  const solutionData = [
    {
      title: "Virtual Tours & Experiences",
      icon: Play,
      gradient: "from-rose-500 to-pink-500",
      items: [
        {
          name: "360° Virtual Tour",
          link: "/ARVR360Virtual",
          description: "Complete immersive property tours",
        },
        {
          name: "AR VR Lab Setup",
          link: "#",
          description: "Professional lab configurations",
        },
        {
          name: "Teleporting Solutions",
          link: "#",
          description: "Advanced spatial navigation",
        },
      ],
    },
    {
      title: "Educational Solutions",
      icon: BookOpen,
      gradient: "from-pink-500 to-rose-400",
      items: [
        {
          name: "K-12 & Higher Education",
          link: "#",
          description: "Comprehensive educational programs",
        },
        {
          name: "Industrial Training",
          link: "#",
          description: "Hands-on professional development",
        },
        {
          name: "Internship Programs",
          link: "#",
          description: "Real-world experience simulation",
        },
      ],
    },
    {
      title: "Industry Applications",
      icon: Building2,
      gradient: "from-rose-400 to-pink-400",
      items: [
        {
          name: "Hospitality & Tourism",
          link: "#",
          description: "Enhanced guest experiences",
        },
        {
          name: "Custom Content Development",
          link: "#",
          description: "Tailored AR/VR solutions",
        },
        {
          name: "Construction & Civil",
          link: "#",
          description: "Project visualization tools",
        },
      ],
    },
  ];

  return (
    <div
      ref={menuRef}
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden z-50"
      style={{ opacity: 0, display: "none" }}
    >
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutionData.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              ref={(el) => (cardsRef.current[sectionIndex] = el)}
              className="group"
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 rounded-xl bg-gradient-to-r ${section.gradient} shadow-lg`}
                  >
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {section.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="solution-item">
                    {item.link.startsWith("/") ? (
                      <Link
                        to={item.link}
                        className="group/item flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200 hover:shadow-sm"
                      >
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 group-hover/item:text-rose-500 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {item.description}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-rose-500 group-hover/item:translate-x-1 transition-all duration-200" />
                      </Link>
                    ) : (
                      <a
                        href={item.link}
                        className="group/item flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200 hover:shadow-sm cursor-pointer"
                      >
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 group-hover/item:text-rose-500 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {item.description}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-rose-500 group-hover/item:translate-x-1 transition-all duration-200" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionModal;
