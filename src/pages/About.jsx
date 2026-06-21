import { motion } from "framer-motion";
import {
  Brain,
  ScanFace,
  Sparkles,
  ShieldCheck,
  Eye,
  Cpu,
  Heart,
} from "lucide-react";


const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    desc: "Advanced computer vision models analyze facial skin regions with high precision.",
  },
  {
    icon: ScanFace,
    title: "Real-Time Skin Detection",
    desc: "Detects and classifies skin tone instantly using image processing and deep learning.",
  },
  {
    icon: Sparkles,
    title: "Personalized Skincare Guidance",
    desc: "Get tailored skincare recommendations based on your detected skin tone and type.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First Approach",
    desc: "Your images are processed securely and never stored without consent.",
  },
];

const About = () => {
  return (
   <div>
       
         <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.4),transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            About <span className="text-indigo-400">SkinSense AI</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            SkinSense AI combines cutting-edge computer vision and deep learning
            to analyze skin tone with accuracy and provide personalized skincare
            insights. Our mission is to make skincare intelligent, accessible,
            and tailored for everyone.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg"
            >
              <item.icon className="w-10 h-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* IMPORTANT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20 p-10 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-white/10"
        >
          <div className="flex items-start gap-4">
            <Heart className="w-10 h-10 text-pink-400 mt-1" />

            <div>
              <h3 className="text-2xl font-bold mb-3">
                Why Skin Tone Analysis Matters
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Understanding your skin tone is not about labeling—it is about
                empowering better skincare decisions. From sun protection to
                product selection, personalized insights help reduce skin damage,
                improve confidence, and promote healthier skin over time.
                SkinSense AI ensures recommendations are inclusive, unbiased,
                and scientifically guided.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tech Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-300">
            Powered by Computer Vision & Deep Learning
          </h3>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Built using modern AI techniques including face detection,
            image segmentation, HSV/YCrCb color analysis, and neural networks
            for accurate skin tone classification.
          </p>
        </div>
      </div>
    </section>
   </div>
  );
};

export default About;