import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const SolutionModal = ({ isOpen }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        height: "350px",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        display: "block",
      });
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.display = "none";
        },
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="absolute top-16 left-0 w-full overflow-hidden bg-gradient-to-r from-blue-50 to-white border-t border-gray-300"
      style={{ height: 0, opacity: 0, display: "none" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-2">Virtual Tour</h3>
          <ul className="text-gray-800 space-y-1">
            <li className="hover:text-blue-500 cursor-pointer">360° Virtual Tour</li>
            <li className="hover:text-blue-500 cursor-pointer">AR VR Lab Setup</li>
            <li className="hover:text-blue-500 cursor-pointer">Effective way of Teleporting</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-2">AR/VR for Education</h3>
          <ul className="text-gray-800 space-y-1">
            <li className="hover:text-blue-500 cursor-pointer">For K-12, ITI, Diploma, Engg Colleges</li>
            <li className="hover:text-blue-500 cursor-pointer">
AR/VR Solutions in Industrial Training</li>
            <li className="hover:text-blue-500 cursor-pointer">AR/VR Implementation in Internship</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-2">AR/VR for Industry</h3>
          <ul className="text-gray-800 space-y-1">
            <li className="hover:text-blue-500 cursor-pointer">
AR/VR Implementation in Hospitality, Hotels & Tourism</li>
            <li className="hover:text-blue-500 cursor-pointer">AR/VR/MR Tailored Content Development Services</li>
            <li className="hover:text-blue-500 cursor-pointer">
AR/VR Solutions for Civil and Construction</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default SolutionModal;
