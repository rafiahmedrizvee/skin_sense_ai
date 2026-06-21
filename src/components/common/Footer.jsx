import { Scan, ShieldCheck, Sparkle } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black text-gray-300 border-t border-slate-800">
      <div className="container mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white text-xl font-semibold">
              <Scan className="text-cyan-400" />
              SkinSense AI
            </div>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              AI-powered skin tone classification and personalized skincare guidance
              using computer vision and deep learning.
            </p>

           
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>Skin Analysis</li>
              <li>AI Recommendations</li>
              <li>Skincare Tips</li>
              <li>Dashboard</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* AI Trust */}
          <div>
            <h3 className="text-white font-semibold mb-4">AI Trust</h3>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                Secure & Private Analysis
              </div>

              <div className="flex items-center gap-2">
                <Sparkle size={18} className="text-cyan-400" />
                Powered by Deep Learning
              </div>

              <div className="flex items-center gap-2">
                <Scan size={18} className="text-pink-400" />
                Real-time Skin Detection
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SkinSense AI. All rights reserved.</p>
          <p>Built with ❤️ using React, Tailwind CSS & Computer Vision</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;