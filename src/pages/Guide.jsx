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
      desc: "Highly sensitive to UV exposure. Prioritize SPF 50+, barrier repair, and deep hydration.",
    },
    {
      title: "Medium Skin Care",
      icon: Droplets,
      desc: "Maintain healthy glow using Vitamin C, hydration and daily sun protection.",
    },
    {
      title: "Olive Skin Care",
      icon: Leaf,
      desc: "Use antioxidants and gentle exfoliation to improve clarity and reduce dullness.",
    },
    {
      title: "Brown Skin Care",
      icon: Moon,
      desc: "Focus on hydration, pigmentation control and maintaining even skin tone.",
    },
    {
      title: "Deep Skin Care",
      icon: Sparkles,
      desc: "Protect the moisture barrier and enhance natural radiance with nourishing products.",
    },
    {
      title: "SPF Protection",
      icon: Shield,
      desc: "Daily sunscreen helps prevent aging, UV damage and unwanted pigmentation.",
    },
  ];

  const processSteps = [
    {
      icon: Camera,
      title: "Capture Image",
      desc: "Upload or capture a high-quality facial image for analysis.",
      img: pic1,
    },
    {
      icon: ScanFace,
      title: "AI Skin Detection",
      desc: "Computer Vision identifies facial regions and extracts skin areas.",
      img: pic2,
    },
    {
      icon: Activity,
      title: "Skin Tone Analysis",
      desc: "Deep Learning model classifies skin tone and skin characteristics.",
      img: pic3,
    },
    {
      icon: Sparkles,
      title: "Personalized Routine",
      desc: "AI generates customized skincare recommendations and guidance.",
      img: pic4,
    },
  ];

  const stats = [
    {
      value: "95%",
      label: "Accuracy",
    },
    {
      value: "5+",
      label: "Skin Categories",
    },
    {
      value: "10+",
      label: "AI Features",
    },
    {
      value: "24/7",
      label: "Analysis",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-white to-cyan-50">

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* HERO */}
        <div className="text-center mb-24">

          <span className="inline-flex px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
            AI Powered Skin Intelligence
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-slate-900">
            Personalized
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Skin Care Guidance
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-500">
            Advanced Computer Vision and Machine Learning technology
            that analyzes skin tone and provides personalized skincare
            recommendations for healthier skin.
          </p>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-28">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/80
                backdrop-blur-xl
                border border-white
                rounded-3xl
                shadow-lg
                p-8
                text-center
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <h3 className="text-4xl font-bold text-blue-600">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-500">
                {item.label}
              </p>
            </div>
          ))}

        </div>

        {/* PROCESS SECTION */}
        <div className="mb-28">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900">
              How The AI System Works
            </h2>

            <p className="text-slate-500 mt-4">
              Four-step intelligent workflow powered by AI.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-[30px]
                    overflow-hidden
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-3
                    transition-all
                    duration-300
                  "
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        hover:scale-110
                        transition
                        duration-700
                      "
                    />
                  </div>

                  <div className="p-6">

                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-gradient-to-r
                        from-blue-600
                        to-cyan-500
                        flex
                        items-center
                        justify-center
                        text-white
                        mb-5
                      "
                    >
                      <Icon size={28} />
                    </div>

                    <span className="text-blue-600 font-semibold">
                      Step {index + 1}
                    </span>

                    <h3 className="text-xl font-bold mt-2 text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-slate-500">
                      {step.desc}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>

        </div>

        {/* SKIN GUIDE */}
        <div className="mb-28">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900">
              Personalized Skin Intelligence
            </h2>

            <p className="text-slate-500 mt-4">
              Tailored recommendations based on skin tone analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {guides.map((guide, index) => {
              const Icon = guide.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    bg-white
                    p-8
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-3
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      absolute
                      top-0
                      right-0
                      w-32
                      h-32
                      rounded-full
                      bg-blue-100
                      blur-3xl
                      opacity-0
                      group-hover:opacity-100
                      transition
                    "
                  />

                  <div
                    className="
                      relative
                      w-16
                      h-16
                      rounded-2xl
                      bg-gradient-to-r
                      from-blue-600
                      to-cyan-500
                      text-white
                      flex
                      items-center
                      justify-center
                      mb-6
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {guide.title}
                  </h3>

                  <p className="mt-4 text-slate-500 leading-7">
                    {guide.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* DISCLAIMER */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-r
            from-slate-900
            via-blue-900
            to-cyan-700
            p-12
            shadow-2xl
          "
        >

          <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">

            <div className="flex items-center gap-4 mb-6">

              <div className="p-4 rounded-2xl bg-white/10">
                <AlertTriangle size={28} />
              </div>

              <h3 className="text-3xl font-bold text-white">
                Clinical Disclaimer
              </h3>

            </div>

            <p className="text-slate-200 text-lg leading-8">
              This platform provides AI-powered skincare guidance
              based on computer vision analysis. The results are
              intended for educational and informational purposes
              only and should not replace professional medical
              advice, diagnosis, or treatment. Always consult a
              certified dermatologist for skin-related concerns.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Guide;