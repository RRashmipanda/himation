import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Send, Briefcase, User, Mail, Phone, MapPin, Upload, GraduationCap, Calendar, Globe, FileText, Star } from "lucide-react";
import Button from "../components/Button";
import AnimatedTitle from "../components/AnimatedTitle";

gsap.registerPlugin(useGSAP);

const Career = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    position: "",
    experience: "",
    education: "",
    portfolio: "",
    coverLetter: "",
    availability: "",
    salary: "",
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const containerRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.from(titleRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "back.out(1.7)",
    });

    tl.from(formRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power2.out",
    }, "-=0.5");

    gsap.to(".bg-element", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    gsap.to(formRef.current, {
      scale: 0.98,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      gsap.from(".success-message", {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      });

      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          location: "",
          position: "",
          experience: "",
          education: "",
          portfolio: "",
          coverLetter: "",
          availability: "",
          salary: "",
          resume: null,
        });
        setSubmitSuccess(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 relative overflow-x-hidden">
      {/* Background Elements */}
      <div className="bg-element absolute top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-rose-200/20 to-pink-200/20 blur-3xl"></div>
      <div className="bg-element absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-pink-200/15 to-rose-200/15 blur-3xl"></div>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div ref={titleRef} className="text-center mb-16">
            <AnimatedTitle
              title="Join Our Team"
              className="text-5xl md:text-7xl font-black leading-tight mb-6"
            />
            <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-10">
              Help shape the future of immersive technology. Apply now and be part of the innovation.
            </p>
          </div>

          {/* Form */}
          <div ref={formRef} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-rose-100">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-8 text-center">Application Form</h2>

            {submitSuccess && (
              <div className="success-message bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl mb-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Submitted Successfully!</h3>
                </div>
                <p>Thanks for applying. We'll get back to you within 48 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 overflow-visible">
              {/* Name */}
              <div className="flex gap-4 flex-col md:flex-row">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required placeholder="First Name" className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-rose-300" />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-rose-300" />
              </div>

              {/* Email & Phone */}
              <div className="flex gap-4 flex-col md:flex-row">
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-rose-300" />
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-rose-300" />
              </div>

              {/* Position */}
              <input type="text" name="position" value={formData.position} onChange={handleInputChange} required placeholder="Position Applying For" className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-rose-300" />

              {/* Resume */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Resume</label>
                <input type="file" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" required className="block w-full text-sm text-gray-900 border border-rose-200 rounded-xl cursor-pointer bg-white/50 file:bg-rose-50 file:border-none file:rounded-full file:px-4 file:py-2 file:text-rose-700 hover:file:bg-rose-100" />
              </div>

              {/* Cover Letter */}
              <textarea name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} required rows={5} placeholder="Cover Letter" className="w-full px-4 py-3 rounded-xl border border-rose-200 focus:ring-rose-300 resize-none"></textarea>

              <Button
                type="submit"
                disabled={isSubmitting}
                title={isSubmitting ? "Submitting..." : "Submit Application"}
                leftIcon={<Send className="w-5 h-5" />}
                containerClass={`w-full justify-center bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600 rounded-xl py-3 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
