import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-300 mt-20">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {/* Logo + Description */}
        <div className="sm:col-span-2 lg:col-span-2">
          <h1 className="text-xl md:text-2xl font-bold text-white mb-4">DigiTools</h1>
          <p className="text-sm text-gray-400 max-w-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Social Links</h3>
          <div className="flex gap-3">
            <div className="bg-white text-black p-2 rounded-full cursor-pointer">
              <FaGithub />
            </div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer">
              <FaTwitter />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 text-center md:text-left">
        <p>© 2026 Digitools. All rights reserved.</p>

        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 mt-2 md:mt-0">
          <span className="cursor-pointer hover:text-white">Privacy Policy</span>
          <span className="cursor-pointer hover:text-white">Terms of Service</span>
          <span className="cursor-pointer hover:text-white">Cookies</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;