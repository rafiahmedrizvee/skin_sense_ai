import { motion } from "framer-motion";
import {
  ScanFace,
  Sparkles,
  ShieldCheck,
  Sun,
  Droplets,
  Leaf,
} from "lucide-react";

const skinGuides = [
  {
    type: "Fair Skin Care",
    icon: Sun,
    tips: [
      "Use SPF 50+ daily",
      "Avoid excessive sun exposure",
      "Use gentle hydration creams",
    ],
  },
  {
    type: "Medium Skin Care",
    icon: Droplets,
    tips: [
      "Maintain hydration balance",
      "Use Vitamin C serum",
      "Apply SPF regularly",
    ],
  },
  {
    type: "Deep Skin Care",
    icon: Leaf,
    tips: [
      "Use rich moisturizers",
      "Avoid harsh bleaching products",
      "Focus on evening skin tone naturally",
    ],
  },
];

const SkinAnalysisShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-slate-950 text-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
            <ScanFace className="text-cyan-400" />
            AI Skin Tone Analysis in Action
          </h2>
          <p className="text-gray-400 mt-3">
            Upload or capture a face image and get real-time skin tone detection
            with personalized skincare guidance.
          </p>
        </motion.div>

        {/* Work Image / Result Preview */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT: Mock Result Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="text-yellow-400" />
              AI Analysis Result
            </h3>

            <div className="bg-slate-800 h-64 rounded-xl flex items-center justify-center text-gray-400">
              {/* Replace with real image output */}
              Detected Face + Skin Tone Visualization
            </div>

            <div className="mt-5 space-y-2">
              <p>🎯 Skin Tone: <span className="text-cyan-400">Medium Warm</span></p>
              <p>📊 Confidence: 94%</p>
              <p>🧠 Model: CNN + OpenCV Detection</p>
            </div>
          </motion.div>

          {/* RIGHT: Features */}
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <ShieldCheck className="text-green-400" />
                Real AI Detection
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                Uses face detection + skin segmentation for accurate prediction.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <h4 className="font-semibold text-lg">📸 Capture or Upload</h4>
              <p className="text-gray-400 text-sm mt-2">
                Works with live camera or image upload input.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <h4 className="font-semibold text-lg">💡 Personalized Care</h4>
              <p className="text-gray-400 text-sm mt-2">
                AI generates skincare routine based on your skin tone.
              </p>
            </div>
          </div>
        </div>

        {/* GUIDE SECTION */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10">
            🌿 Personalized Skin Care Guide
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {skinGuides.map((guide, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >
                <guide.icon className="text-cyan-400 mb-3" size={28} />
                <h4 className="text-xl font-semibold mb-3">
                  {guide.type}
                </h4>

                <ul className="text-gray-400 space-y-2 text-sm">
                  {guide.tips.map((tip, idx) => (
                    <li key={idx}>• {tip}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkinAnalysisShowcase;