import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  ScanFace,
  Brain,
  ArrowRight,
  UploadCloud,
  Image as ImageIcon,
} from "lucide-react";

const Hero = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));

    // simulate AI processing
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setLoading(false);
      setResult({
        tone: "Medium Warm",
        confidence: 97,
        score: 93,
      });
    }, 2000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">

      {/* Glow Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center min-h-[85vh]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-700 mb-6">
              <Sparkles size={16} />
              AI Skin Analysis Engine v2.0
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
              Discover Your{" "}
              <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Skin Tone
              </span>
              With AI Precision
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Upload your face image and get instant skin tone classification,
              personalized skincare insights, and AI-powered recommendations.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/analyze"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-amber-500 text-white font-semibold shadow-lg hover:bg-amber-600 hover:scale-105 transition"
              >
                Start Analysis
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/workflow"
                className="px-8 py-4 rounded-2xl border border-gray-300 font-semibold hover:bg-white transition"
              >
                How It Works
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {[
                ["96%", "Accuracy"],
                ["50K+", "Users"],
                ["AI", "Powered"],
                ["24/7", "Active"],
              ].map(([v, l], i) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border">
                  <h3 className="text-2xl font-bold text-amber-500">{v}</h3>
                  <p className="text-sm text-gray-600">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-white/70 backdrop-blur-2xl border border-white shadow-2xl rounded-3xl p-8">

              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-xl">AI Skin Analyzer</h3>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              </div>

              {/* Upload Box */}
              <label className="cursor-pointer">
                <div className="border-2 border-dashed border-amber-300 rounded-2xl p-8 text-center hover:bg-amber-50 transition">
                  
                  {preview ? (
                    <img
                      src={preview}
                      alt="preview"
                      className="w-full h-56 object-cover rounded-xl"
                    />
                  ) : (
                    <>
                      <UploadCloud className="mx-auto text-amber-500" size={50} />
                      <p className="mt-2 text-gray-600">
                        Click or Drop Image to Analyze
                      </p>
                    </>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
              </label>

              {/* Loading */}
              {loading && (
                <div className="mt-6 text-center text-amber-600 font-medium animate-pulse">
                  AI is analyzing your skin...
                </div>
              )}

              {/* Result */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 space-y-4"
                >
                  <div className="bg-gray-50 p-4 rounded-xl flex justify-between">
                    <span>Skin Tone</span>
                    <span className="font-semibold text-amber-600">
                      {result.tone}
                    </span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl flex justify-between">
                    <span>Confidence</span>
                    <span className="font-semibold text-green-600">
                      {result.confidence}%
                    </span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl flex justify-between">
                    <span>Skin Health Score</span>
                    <span className="font-semibold">{result.score}/100</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Floating AI Cards */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 -left-6 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-2"
            >
              <Brain className="text-purple-500" />
              AI Vision
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-6 right-0 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-2"
            >
              <ShieldCheck className="text-green-500" />
              Skin Protection
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;