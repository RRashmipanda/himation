import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button";
import { 
  Eye, 
  Cpu, 
  Users, 
  Building, 
  Wrench, 
  Settings, 
  ArrowRight, 
  Sparkles,
  Play,
  Globe,
  Zap,
  BookOpen,
  Shield,
  Award
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const VirtualTourPage = () => {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);
  const ctaRef = useRef(null);
  const floatingElementsRef = useRef([]);
  const benefitsRef = useRef(null);

  const addToSectionsRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const addToFloatingRefs = (el) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };


 useEffect(() => {
  if (headerRef.current) {
    const text = "AR VR 360° Virtual Tour";
    headerRef.current.innerHTML = text
      .split("")
      .map((char) => `<span class="inline-block opacity-0">${char}</span>`)
      .join("");

    gsap.to(headerRef.current.querySelectorAll("span"), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power3.out",
      from: { y: 20, opacity: 0 },
    });
  }

  gsap.from(heroRef.current, {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Sections scroll animations
  sectionsRef.current.forEach((section) => {
    if (section) {
      gsap.fromTo(
        section,
        {
          y: 100,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Section hover animations
      section.addEventListener("mouseenter", () => {
        gsap.to(section, {
          scale: 1.02,
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      section.addEventListener("mouseleave", () => {
        gsap.to(section, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }
  });

  // Benefits section animation
  if (benefitsRef.current) {
    gsap.fromTo(
      benefitsRef.current.children,
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }

  // CTA section animation
  if (ctaRef.current) {
    gsap.fromTo(
      ctaRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }

  // Clean up on unmount
  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);


  const sections = [
    {
      title: "Virtual Campus Tour",
      icon: <Eye className="w-8 h-8 text-white" />,
      description: "Explore every corner of your institution virtually — labs, classrooms, libraries with 360° panoramic tours that bring spaces to life.",
      gradient: "from-rose-500 to-pink-500",
      features: ["360° Panoramic Views", "Interactive Hotspots", "Virtual Navigation"]
    },
   
    {
      title: "Industrial Tour Simulation",
      icon: <Building className="w-8 h-8 text-white" />,
      description: "Virtually walkthrough industries, observe production lines and workflows in a safe immersive environment.",
      gradient: "from-pink-600 to-rose-500",
      features: ["Safety Training", "Process Visualization", "Equipment Interaction"]
    },
   
    {
      title: "Custom AR/VR Simulations",
      icon: <Settings className="w-8 h-8 text-white" />,
      description: "Tailor-made AR/VR simulations specific to your industry, education stream or institutional processes and requirements.",
      gradient: "from-pink-400 to-rose-600",
      features: ["Custom Development", "Industry-specific", "Scalable Solutions"]
    },
  ];

  const benefits = [
    {
      icon: <BookOpen className="w-12 h-12 text-rose-500" />,
      title: "Enhanced Learning",
      description: "Improve retention rates by up to 90% with immersive experiences"
    },
    {
      icon: <Shield className="w-12 h-12 text-pink-500" />,
      title: "Safe Environment",
      description: "Practice dangerous procedures in a completely safe virtual space"
    },
    {
      icon: <Award className="w-12 h-12 text-rose-500" />,
      title: "Certified Training",
      description: "Industry-recognized certifications and skill assessments"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-white overflow-hidden pt-16">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          ref={addToFloatingRefs}
          className="absolute top-20 left-10 w-4 h-4 bg-rose-300 rounded-full opacity-60"
        />
        <div 
          ref={addToFloatingRefs}
          className="absolute top-40 right-20 w-6 h-6 bg-pink-300 rounded-full opacity-40"
        />
        <div 
          ref={addToFloatingRefs}
          className="absolute bottom-40 left-20 w-8 h-8 bg-rose-200 rounded-full opacity-50"
        />
        <div 
          ref={addToFloatingRefs}
          className="absolute bottom-20 right-40 w-5 h-5 bg-pink-400 rounded-full opacity-30"
        />
      </div>

<div className="relative overflow-hidden py-28 px-1 text-center bg-rose-200 border-b border-gray-200">

  {/* Hero Content */}
  <div className="relative z-10 max-w-5xl mx-auto">

    {/* Tagline Badge */}
    <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow border border-gray-300 mb-8">
      <span className="text-rose-600 font-semibold tracking-wide">Next-Generation Virtual Experience</span>
    </div>

    {/* Heading */}
    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight min-h-[120px] flex flex-wrap justify-center">
      Step into the Future of Learning
    </h1>

    {/* Sub Text */}
    <p className="text-xl text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed tracking-wide">
      Transform education and training with cutting-edge AR/VR technology. Experience immersive learning like never before.
    </p>

    {/* CTA Buttons */}
    {/* <div className="mt-10 flex flex-wrap gap-4 justify-center">
      <Button size="lg" className="bg-rose-600 text-white hover:bg-rose-700 font-semibold shadow-lg px-8 py-4">
        <Play className="w-5 h-5 mr-2" />
        Watch Demo
      </Button>
      <Button size="lg" variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4">
        Explore Features
      </Button>
    </div> */}

  </div>
</div>

      {/* Main Sections */}
      <div className="max-w-7xl mx-auto px-6 space-y-16 py-20">
        {sections.map((section, idx) => (
          <div
            key={idx}
            ref={addToSectionsRefs}
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-rose-100 transition-all duration-500`}
          >
            {/* Icon Section */}
            <div className={`p-12 bg-gradient-to-br ${section.gradient} flex flex-col items-center justify-center lg:w-1/3 h-full relative overflow-hidden`}>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <div className="bg-white/20 p-6 rounded-2xl mb-6 shadow-lg backdrop-blur-sm">
                  {section.icon}
                </div>
                <h3 className="text-white text-2xl font-bold text-center leading-tight mb-4">
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="bg-white/20 px-3 py-1 rounded-full text-white text-sm text-center">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full"></div>
            </div>

            {/* Content Section */}
            <div className="p-12 lg:w-2/3 relative">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {section.description}
              </p>
              <div className="flex items-center text-rose-600 font-semibold hover:text-rose-700 transition-colors cursor-pointer group">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-white/50 to-rose-50/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the key benefits that make our AR/VR solutions the perfect choice for modern education
            </p>
          </div>
          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-white/50 to-rose-50/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-rose-600 mb-2">500+</div>
              <div className="text-gray-600 font-semibold">Institutions Served</div>
              <div className="text-gray-500 text-sm mt-2">Trusted worldwide</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-pink-600 mb-2">1M+</div>
              <div className="text-gray-600 font-semibold">Students Engaged</div>
              <div className="text-gray-500 text-sm mt-2">Active learners</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-rose-600 mb-2">98%</div>
              <div className="text-gray-600 font-semibold">Satisfaction Rate</div>
              <div className="text-gray-500 text-sm mt-2">Proven results</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div 
        ref={ctaRef}
        className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 p-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">Ready to Transform Learning?</h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Schedule your personalized AR/VR 360° tour demo today and discover the future of immersive education.
            </p>
            {/* <div className="flex flex-wrap gap-6 justify-center">
              <Button
                size="lg"
                className="bg-rose-400 text-rose-600 hover:bg-rose-50 font-bold px-12 py-4 shadow-2xl"
              >
                Book Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-rose-600 font-bold px-12 py-4"
              >
                Contact Sales
              </Button>
            </div> */}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute top-1/3 right-32 w-3 h-3 bg-white/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default VirtualTourPage;
