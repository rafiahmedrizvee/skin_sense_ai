import {
  Sun,
  Droplets,
  Leaf,
  Moon,
  Sparkles,
  Shield,
  Camera,
  ScanFace,
  Activity,
  AlertTriangle,
} from "lucide-react";

import pic1 from "../assets/images/pic1.jpg";
import pic2 from "../assets/images/pic2.jpg";
import pic3 from "../assets/images/pic3.jpg";
import pic4 from "../assets/images/pic4.jpg";

const Guide = () => {
  const guides = [
    {
      title: "Fair Skin Care",
      icon: Sun,
      desc: "Highly sensitive to UV exposure. Prioritize SPF 50+, barrier repair, and deep hydration to prevent redness and irritation.",
    },
    {
      title: "Medium Skin Care",
      icon: Droplets,
      desc: "Naturally balanced tone. Maintain glow using Vitamin C, hydration, and consistent sun protection.",
    },
    {
      title: "Olive Skin Care",
      icon: Leaf,
      desc: "Prone to uneven tone. Use gentle exfoliation and antioxidant-rich routines for clarity and brightness.",
    },
    {
      title: "Brown Skin Care",
      icon: Moon,
      desc: "Focus on hyperpigmentation control, hydration, and evening skin tone with targeted actives.",
    },
    {
      title: "Deep Skin Care",
      icon: Sparkles,
      desc: "Protect moisture barrier and enhance natural radiance with nourishing ingredients and rich hydration.",
    },
    {
      title: "SPF Protection (Critical)",
      icon: Shield,
      desc: "Daily sunscreen is essential for all skin tones to prevent aging, pigmentation, and UV damage.",
    },
  ];

  const processSteps = [
    {
      icon: Camera,
      title: "Capture Image",
      desc: "User uploads or captures a real-time face image using camera module.",
      img: pic1,
    },
    {
      icon: ScanFace,
      title: "AI Skin Detection",
      desc: "Computer vision isolates facial skin regions using segmentation models.",
      img: pic2,
    },
    {
      icon: Activity,
      title: "Skin Tone Analysis",
      desc: "Deep learning model classifies skin tone with trained CNN architecture.",
      img: pic3,
    },
    {
      icon: Sparkles,
      title: "Personalized Routine",
      desc: "System generates skincare routine, ingredients, and product guidance.",
      img: pic4,
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-6">

        {/* HERO */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            AI Skin Analysis Guide
          </h2>
          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
            A computer vision–powered skincare intelligence system that analyzes
            your skin tone and delivers personalized dermatology-inspired guidance.
          </p>
        </div>

        {/* PROCESS SECTION */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            How The AI System Works
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => {
              const Icon = step.icon;

              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="h-44 w-full overflow-hidden">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-600 text-white mb-4">
                      <Icon size={20} />
                    </div>

                    <h4 className="font-semibold text-gray-900">
                      {step.title}
                    </h4>

                    <p className="text-sm text-gray-600 mt-2">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SKIN GUIDE */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-10">
            Personalized Skin Intelligence
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide, index) => {
              const Icon = guide.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition hover:-translate-y-2"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white mb-5">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    {guide.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {guide.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="mt-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle />
            <h3 className="text-xl font-semibold">Clinical Disclaimer</h3>
          </div>

          <p className="text-white/90">
            This system provides AI-based skincare guidance. It is not a medical diagnosis.
            Consult a dermatologist for serious conditions.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Guide;