import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-300 mt-20">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-10 gap-x-8">

        {/* Logo + Description */}
        <div className="sm:col-span-2 lg:col-span-2">
          <h1 className="text-2xl font-bold text-white mb-4">DigiTools</h1>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold mb-4 text-base">Product</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">Features</li>
            <li className="hover:text-white cursor-pointer transition">Pricing</li>
            <li className="hover:text-white cursor-pointer transition">Templates</li>
            <li className="hover:text-white cursor-pointer transition">Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold mb-4 text-base">Company</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Blog</li>
            <li className="hover:text-white cursor-pointer transition">Careers</li>
            <li className="hover:text-white cursor-pointer transition">Press</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold mb-4 text-base">Resources</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">Documentation</li>
            <li className="hover:text-white cursor-pointer transition">Help Center</li>
            <li className="hover:text-white cursor-pointer transition">Community</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold mb-4 text-base">Social Links</h3>
          <div className="flex gap-4">
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:bg-gray-200 transition">
              <FaGithub size={18} />
            </div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:bg-gray-200 transition">
              <FaFacebookF size={18} />
            </div>
            <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:bg-gray-200 transition">
              <FaTwitter size={18} />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400 text-center md:text-left">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <span className="cursor-pointer hover:text-white transition">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition">Terms of Service</span>
            <span className="cursor-pointer hover:text-white transition">Cookies</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;