import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { 
  Palette, 
  Zap, 
  Share2, 
  GraduationCap, 
  Settings,
  Users,
  Building,
  Home,
  Globe,
  Award,
  Clock,
  Shield,
  Play,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Button from '../components/Button';
import AnimatedTitle from '../components/AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const Platform = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const statsRef = useRef([]);
  const servicesRef = useRef([]);
  const featuresRef = useRef([]);

  // Enhanced entrance animations
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    
    // Hero section animation
    tl.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power3.out"
    });

    // Stats animation with counter effect
    statsRef.current.forEach((stat, index) => {
      if (stat) {
        gsap.from(stat, {
          opacity: 0,
          y: 80,
          scale: 0.8,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

        // Counter animation
        const counter = stat.querySelector('.counter');
        if (counter) {
          const finalValue = parseInt(counter.textContent);
          gsap.fromTo(counter, 
            { textContent: 0 },
            {
              textContent: finalValue,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: stat,
                start: "top 80%",
              }
            }
          );
        }
      }
    });

    // Services animation
    servicesRef.current.forEach((service, index) => {
      if (service) {
        gsap.from(service, {
          opacity: 0,
          y: 100,
          rotation: -5,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: service,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    // Features animation
    featuresRef.current.forEach((feature, index) => {
      if (feature) {
        gsap.from(feature, {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: feature,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    // Floating animations
    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5
    });

    // Parallax background elements
    gsap.to(".bg-element", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  }, []);

  const stats = [
    { icon: Building, value: 265, label: 'Builders & Developers', color: 'from-rose-500 to-pink-600' },
    { icon: Home, value: 2050, label: 'Real Estate Agents', color: 'from-pink-500 to-rose-500' },
    { icon: Users, value: 964, label: 'Interior Designers', color: 'from-rose-600 to-pink-500' },
    { icon: Globe, value: 21, label: 'Corporate Houses', color: 'from-pink-600 to-rose-600' }
  ];

  const services = [
    {
      number: '01',
      title: 'Design',
      icon: Palette,
      description: 'Content creation (2D, 3D, AR/VR/MR) as per client/market\'s requirement by Hi\'Ds design experts.',
      details: 'Hi\'Ds highly experienced and talented content creation team works two layered i.e. content design & script writing. Content design team creates emerging and valuable contents where as script writing team write scripts for better understanding. All our contents are own copyright build.',
      color: 'from-rose-500 to-pink-600'
    },
    {
      number: '02',
      title: 'Integration',
      icon: Zap,
      description: 'Designed content and written script integrated by experts to Hi\'Ds platform.',
      details: 'Hi\'Ds integration process makes the content interactive.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      number: '03',
      title: 'Distribution',
      icon: Share2,
      description: 'Personalised AR/VR/MR contents delivered to your sales, marketing & operation teams.',
      details: 'A brand new way of visualization in form of AR/VR/MR is ready to arm your sales and marketing team and delivered through our web platform, android platform and offline.',
      color: 'from-rose-600 to-pink-500'
    },
    {
      number: '04',
      title: 'Training',
      icon: GraduationCap,
      description: 'Hi\'Ds Platform is a "Trainer Less Training" tool.',
      details: 'Hi\'Ds Platform is best for training purposes to new or existing employees. Our expert\'s curated and tailored training models helps the organization to train new hirings and enhancing skills of existing employees. Hi\'Ds can also develop training models as per client\'s requirement.',
      color: 'from-pink-600 to-rose-600'
    },
    {
      number: '05',
      title: 'Our Solutions',
      icon: Settings,
      description: 'Comprehensive AR/VR/MR solutions tailored to transform your business operations.',
      details: 'The Reality Platform that will Change the Way You Do Business & Training. Hi\'Ds build content by experts, deliver on time, provide client service pro-actively, do customer/client engagement periodically.',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Award-Winning Platform',
      description: 'Our awarded platform delivers all activities flawlessly with expert content creation.',
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: Clock,
      title: 'Deliver on Time',
      description: 'Hi\'Ds build content by experts and deliver on time with professional service.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Users,
      title: 'Proactive Client Service',
      description: 'We provide client service pro-actively and do customer/client engagement periodically.',
      color: 'from-rose-600 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Expert Content Creation',
      description: 'Content built by experts with own copyright, ensuring unique and valuable experiences.',
      color: 'from-pink-600 to-rose-600'
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="bg-element absolute top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-rose-200/20 to-pink-200/20 blur-3xl floating-element"></div>
      <div className="bg-element absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-pink-200/15 to-rose-200/15 blur-3xl floating-element"></div>
      <div className="bg-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-rose-100/5 to-pink-100/5 blur-3xl"></div>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div ref={heroRef} className="text-center mb-20">
            <AnimatedTitle
              title="First of Its Kind AR/VR/MR Platform"
              className="text-5xl md:text-7xl font-black leading-[1] mb-8 drop-shadow-2xl"
            />
            <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-8 rounded-full animate-pulse"></div>
            <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed tracking-wide font-medium mb-12">
              Trusted by professionals worldwide. Hi'Ds build content by experts, deliver on time, 
              provide client service pro-actively, do customer/client engagement periodically. 
              Our awarded platform does all these activities flawlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                title="Experience Platform"
                leftIcon={<Play className="w-5 h-5" />}
                containerClass="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-rose-400 hover:border-rose-500 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transform hover:scale-105 transition-all duration-300"
              />
              <Button
                title="Learn More"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                containerClass="border-2 border-rose-400 text-rose-600 hover:bg-rose-500 hover:text-white hover:border-rose-500 transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Appreciated in 10+ countries worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  ref={el => statsRef.current[index] = el}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-rose-100 hover:shadow-2xl hover:border-rose-200 transition-all duration-500"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="counter text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
                <Globe className="w-5 h-5" />
                Appreciated in 10+ Countries
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Solutions Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AR/VR/MR solutions designed to transform your business operations and training programs
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  ref={el => servicesRef.current[index] = el}
                  className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-rose-100 hover:shadow-2xl hover:border-rose-200 transition-all duration-500 h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {service.number}
                    </div>
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-rose-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-rose-100">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.details}
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <button className={`inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r ${service.color} font-semibold hover:opacity-80 transition-opacity group-hover:translate-x-1 transform duration-300`}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Hi'Ds Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The Reality Platform that will Change the Way You Do Business & Training
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={el => featuresRef.current[index] = el}
                  className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-rose-100 hover:shadow-2xl hover:border-rose-200 transition-all duration-500"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of professionals who trust Hi'Ds Platform for their AR/VR/MR needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  title="Get Started Today"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  containerClass="bg-white text-rose-600 hover:bg-gray-50 border-white hover:border-gray-100 shadow-lg transform hover:scale-105 transition-all duration-300"
                />
                <Button
                  title="Schedule Demo"
                  leftIcon={<Play className="w-5 h-5" />}
                  containerClass="border-2 border-white text-white hover:bg-white hover:text-rose-600 transform hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;