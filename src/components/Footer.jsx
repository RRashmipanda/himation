
import { Youtube, Twitter } from "lucide-react";

const socialLinks = [
  { 
    href: "https://discord.com", 
    icon: <div className="w-5 h-5 bg-rose-400 rounded-full flex items-center justify-center text-white text-xs font-bold">D</div>,
    name: "Discord"
  },
  { 
    href: "https://twitter.com", 
    icon: <Twitter className="w-5 h-5" />,
    name: "Twitter"
  },
  { 
    href: "https://youtube.com", 
    icon: <Youtube className="w-5 h-5" />,
    name: "YouTube"
  },
  { 
    href: "https://medium.com", 
    icon: <div className="w-5 h-5 bg-rose-400 rounded flex items-center justify-center text-white text-xs font-bold">M</div>,
    name: "Medium"
  },
];

const footerLinks = [
  { title: "Product", links: ["AR Library", "VR Content", "Gaming Hub", "Creator Tools"] },
  { title: "Company", links: ["About Us", "Careers", "Press Kit", "Contact"] },
  { title: "Resources", links: ["Documentation", "API Reference", "Community", "Support"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"] },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 border-t border-rose-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Himation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Discover the world's largest AR VR content bank. Join the Game of Games and unite every player in our unified Play Economy.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-500 hover:scale-110 border border-rose-200"
                  title={link.name}
                >
                  <div className="text-rose-500 group-hover:text-rose-600 transition-colors duration-300">
                    {link.icon}
                  </div>
                  {/* Floating effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-300/20 to-pink-300/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-rose-600 transition-colors duration-300 text-sm hover:underline decoration-rose-300 underline-offset-4"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8 mb-12 border border-rose-200">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with <span className="text-rose-600">Himation</span>
            </h4>
            <p className="text-gray-600 mb-6">
              Get the latest updates on AR/VR content, gaming features, and exclusive early access to new releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-rose-300 focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none bg-white/80 backdrop-blur-sm"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Floating Rose Petals Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-rose-300/30 rounded-full animate-pulse delay-100"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-pink-300/20 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-rose-400/40 rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400/50 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-rose-200 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © 2025 <span className="font-semibold text-rose-600">HiMation Automation Pvt Ltd</span>. All rights reserved. Made with 💖 for the AR/VR community.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                All systems operational
              </span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-rose-600 transition-colors duration-300">Status</a>
                <a href="#" className="hover:text-rose-600 transition-colors duration-300">Help</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;