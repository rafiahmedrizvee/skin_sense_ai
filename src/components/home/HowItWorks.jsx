import { Upload, ScanFace, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Image",
    desc: "Upload a clear facial image from your device.",
  },
  {
    icon: ScanFace,
    title: "AI Analysis",
    desc: "Computer Vision analyzes skin tone and facial skin regions.",
  },
  {
    icon: Sparkles,
    title: "Get Guidance",
    desc: "Receive personalized skincare recommendations instantly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            How It Works
          </h2>
          <p className="text-gray-600 mt-4">
            Three simple steps to understand your skin.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-3xl text-center shadow-sm"
            >
              <step.icon
                size={50}
                className="mx-auto text-amber-500"
              />

              <h3 className="text-xl font-semibold mt-6">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;