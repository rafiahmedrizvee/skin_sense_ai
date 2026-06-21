import React from "react";
import {
  FaBrain,
  FaCamera,
  FaRobot,
  FaMagic,
  FaChartLine,
  FaClock,
  FaShieldAlt,
  FaDatabase,
} from "react-icons/fa";

import workflowImage from "../assets/images/workflow.png";

const workflowSteps = [
  {
    number: "01",
    title: "Image Acquisition",
    desc: "Users upload facial images through the web application.",
    icon: <FaCamera />,
  },
  {
    number: "02",
    title: "Computer Vision Analysis",
    desc: "Face detection, skin segmentation and preprocessing.",
    icon: <FaBrain />,
  },
  {
    number: "03",
    title: "Skin Tone Classification",
    desc: "Machine learning model predicts skin tone categories.",
    icon: <FaRobot />,
  },
  {
    number: "04",
    title: "Skincare Guidance",
    desc: "Personalized skincare recommendations are generated.",
    icon: <FaMagic />,
  },
];

const skinTones = [
  { name: "Very Fair", color: "#F8E6D1" },
  { name: "Fair", color: "#E8C6A0" },
  { name: "Light Medium", color: "#D2A679" },
  { name: "Medium Brown", color: "#9C6B42" },
  { name: "Dark Brown", color: "#5A3825" },
];

const technologies = [
  "React.js",
  "FastAPI",
  "Python",
  "OpenCV",
  "NumPy",
  "Pandas",
  "Scikit-Learn",
  "TensorFlow",
  "CNN",
  "Machine Learning",
  "Computer Vision",
  "Tailwind CSS",
];

const recommendations = [
  "☀️ Sun Protection",
  "💧 Hydration",
  "✨ Hyperpigmentation Care",
  "⏳ Anti-Aging Routine",
  "🧴 Moisture Balance",
  "🌿 Preventive Skin Care",
];

const SkinToneWorkflow = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-600" />

        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative container mx-auto px-6 py-24">

          <div className="mx-auto max-w-5xl text-center">

            <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md border border-white/20">
              AI • Computer Vision • Machine Learning
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Skin Tone Classification &
              <br />
              Skincare Guidance System
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
              Intelligent computer vision platform that analyzes facial
              images, classifies skin tones, evaluates skin
              characteristics and generates personalized skincare
              recommendations.
            </p>

          </div>

        </div>
      </section>

      <div className="container mx-auto px-6 py-16">

        {/* STATS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">

          {[
            {
              value: "96%",
              title: "Model Accuracy",
              icon: <FaChartLine />,
            },
            {
              value: "5+",
              title: "Skin Categories",
              icon: <FaDatabase />,
            },
            {
              value: "10+",
              title: "AI Features",
              icon: <FaRobot />,
            },
            {
              value: "24/7",
              title: "Automated Analysis",
              icon: <FaClock />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600 text-3xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-slate-900">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-500">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* WORKFLOW IMAGE */}
        <section className="mb-24">

          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-900">
              System Architecture
            </h2>

            <p className="text-slate-500 mt-3">
              Complete AI workflow for skin analysis
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] bg-white p-5 shadow-2xl">
            <img
              src={workflowImage}
              alt="Workflow"
              className="w-full rounded-2xl"
            />
          </div>

        </section>

        {/* PROJECT OVERVIEW */}
        <section className="mb-24">

          <div className="rounded-[32px] bg-white p-10 shadow-lg">

            <h2 className="text-4xl font-bold mb-8 text-slate-900">
              Project Overview
            </h2>

            <p className="text-slate-600 leading-8 text-lg">
              This AI-powered system combines Computer Vision,
              Machine Learning, and Skin Analytics to classify skin
              tones, assess skin characteristics, and deliver
              personalized skincare recommendations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-10">

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-100">
                  Face Detection & Alignment
                </div>

                <div className="p-4 rounded-xl bg-slate-100">
                  Skin Region Extraction
                </div>

                <div className="p-4 rounded-xl bg-slate-100">
                  Lighting Normalization
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-100">
                  Skin Tone Classification
                </div>

                <div className="p-4 rounded-xl bg-slate-100">
                  Skin Type Assessment
                </div>

                <div className="p-4 rounded-xl bg-slate-100">
                  Personalized Guidance
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* WORKFLOW */}
        <section className="mb-24">

          <h2 className="text-center text-4xl font-bold mb-14">
            AI Processing Pipeline
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {workflowSteps.map((step) => (
              <div
                key={step.number}
                className="group bg-white rounded-[30px] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-3xl mx-auto">
                  {step.icon}
                </div>

                <h2 className="text-5xl font-bold text-blue-600 text-center mt-6">
                  {step.number}
                </h2>

                <h4 className="text-xl font-bold text-center mt-4">
                  {step.title}
                </h4>

                <p className="text-slate-500 text-center mt-3">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* SKIN TONES */}
        <section className="mb-24">

          <h2 className="text-center text-4xl font-bold mb-14">
            Skin Tone Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {skinTones.map((tone) => (
              <div
                key={tone.name}
                className="overflow-hidden rounded-[24px] bg-white shadow-lg hover:shadow-xl transition"
              >
                <div
                  className="h-32"
                  style={{
                    background: tone.color,
                  }}
                />

                <div className="p-5 text-center">
                  <h4 className="font-bold">
                    {tone.name}
                  </h4>
                </div>
              </div>
            ))}

          </div>

        </section>

        {/* TECH STACK */}
        <section className="mb-24">

          <h2 className="text-4xl font-bold mb-10">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-4">

            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white px-5 py-3 shadow-md hover:bg-blue-600 hover:text-white transition cursor-pointer"
              >
                {tech}
              </span>
            ))}

          </div>

        </section>

        {/* RECOMMENDATIONS */}
        <section>

          <div className="rounded-[32px] bg-gradient-to-r from-slate-900 to-blue-900 p-10">

            <h2 className="text-4xl font-bold text-white mb-10">
              Personalized Skincare Recommendations
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {recommendations.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 text-white"
                >
                  <h4 className="text-xl font-semibold mb-3">
                    {item}
                  </h4>

                  <p className="text-slate-300">
                    Personalized recommendations based on AI analysis
                    and skin condition evaluation.
                  </p>
                </div>
              ))}

            </div>

          </div>

        </section>

      </div>
    </div>
  );
};

export default SkinToneWorkflow;