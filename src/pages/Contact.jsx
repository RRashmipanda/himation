
import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import Button from '../components/Button';
import AnimatedTitle from '../components/AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  // Enhanced entrance animations
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    
    // Title animation
    tl.from(titleRef.current, {
      opacity: 0,
      y: 100,
      rotationX: -90,
      transformOrigin: "50% 50% -50px",
      duration: 1.2,
      ease: "back.out(1.7)"
    });

    // Contact cards animation
    cardsRef.current.forEach((card, index) => {
      if (card) {
        tl.from(card, {
          opacity: 0,
          y: 80,
          rotation: -10,
          scale: 0.8,
          duration: 0.8,
          ease: "back.out(1.7)"
        }, `-=${0.6 - index * 0.1}`);
      }
    });

    // Form animation
    tl.from(formRef.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");

    // Floating animation for contact cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          y: -15,
          duration: 2 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.5
        });
      }
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Form submission animation
    gsap.to(formRef.current, {
      scale: 0.95,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Success animation
      gsap.from(".success-message", {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      content: "hello@himation.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      content: "123 AR Street, VR City",
      description: "Come say hello at our office"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="bg-element absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-rose-200/20 to-pink-200/20 blur-3xl"></div>
      <div className="bg-element absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-pink-200/10 to-rose-200/10 blur-3xl"></div>
      <div className="bg-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-rose-100/5 to-pink-100/5 blur-3xl"></div>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section with Animated Letters */}
          <div ref={titleRef} className="text-center ">
            <AnimatedTitle
              title="Let's Connect & Build Together"
              className="text-5xl md:text-7xl font-black leading-[1]  drop-shadow-2xl"
            />
            <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-6 rounded-full animate-pulse"></div>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed tracking-wide font-medium">
              Ready to explore the future of AR & VR? We'd love to hear from you.
              Let's create something incredible together.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-rose-100 hover:shadow-2xl hover:border-rose-200 transition-all duration-500 cursor-pointer"
              >
                <div className="text-rose-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-rose-600 transition-colors">
                  {info.title}
                </h3>
                <p className="text-lg font-medium text-rose-600 mb-2">
                  {info.content}
                </p>
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <div ref={formRef} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-rose-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                      placeholder="Tell us more about your project or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    title={isSubmitting ? "Sending..." : "Send Message"}
                    leftIcon={<Send className="w-4 h-4" />}
                    containerClass={`w-full justify-center bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white border-rose-400 hover:border-rose-500 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  />
                </form>
              </div>

              {/* Side Content */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-3xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Himation?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Leading AR/VR content platform
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Cutting-edge technology solutions
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        24/7 dedicated support
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        Global community of creators
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-rose-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Response</h3>
                  <p className="text-gray-600 mb-4">
                    We typically respond to all inquiries within 24 hours. For urgent matters, 
                    please call us directly.
                  </p>
                  <div className="flex items-center text-rose-600 font-medium">
                    <Phone className="w-4 h-4 mr-2" />
                    +1 (555) 123-4567
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
