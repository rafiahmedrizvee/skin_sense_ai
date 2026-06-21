import SkinMetrics from "../components/analysis/SkinMetrics";
import RecommendationCard from "../components/analysis/RecommendationCard";

const Results = () => {
  const result = {
    skinTone: "Medium",
    confidence: 96,
    oiliness: 72,
    dryness: 28,
    sensitivity: 35,
    pigmentation: 22,
    acneRisk: 18,
    uvRisk: 40,
  };

  return (
    <section className="py-20 bg-gray-50">

      <div className="container mx-auto px-4">

        <div className="bg-white p-10 rounded-3xl shadow-lg mb-10">

          <h1 className="text-4xl font-bold">
            Skin Analysis Results
          </h1>

          <h2 className="text-2xl mt-4">
            Skin Tone: {result.skinTone}
          </h2>

          <p className="text-green-600 font-semibold">
            Confidence: {result.confidence}%
          </p>

          <div className="w-full bg-gray-200 h-4 rounded-full mt-4">

            <div
              className="bg-green-500 h-4 rounded-full"
              style={{
                width: `${result.confidence}%`,
              }}
            />

          </div>

        </div>

        <SkinMetrics result={result} />

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          <RecommendationCard
            title="Morning Routine"
            items={[
              "Gentle Cleanser",
              "Vitamin C Serum",
              "SPF 50 Sunscreen",
            ]}
          />

          <RecommendationCard
            title="Night Routine"
            items={[
              "Cleanser",
              "Retinol Serum",
              "Moisturizer",
            ]}
          />

          <RecommendationCard
            title="Weekly Care"
            items={[
              "Exfoliation",
              "Hydrating Mask",
              "Deep Moisture Treatment",
            ]}
          />

        </div>

      </div>

    </section>
  );
};

export default Results;