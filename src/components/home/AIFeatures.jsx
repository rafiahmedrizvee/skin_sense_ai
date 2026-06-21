import {
  Brain,
  ScanFace,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Computer Vision",
  },
  {
    icon: ScanFace,
    title: "Skin Detection",
  },
  {
    icon: ShieldCheck,
    title: "Confidence Score",
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
  },
];

const AIFeatures = () => {
  return (
    <section className="py-24 bg-gray-50">

      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            AI Features
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow"
            >
              <feature.icon
                size={45}
                className="text-amber-500"
              />

              <h3 className="font-semibold text-xl mt-5">
                {feature.title}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default AIFeatures;