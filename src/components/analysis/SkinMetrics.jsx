const Metric = ({ title, value }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="flex justify-between mb-3">
        <h4>{title}</h4>
        <span>{value}%</span>
      </div>

      <div className="w-full bg-gray-200 h-3 rounded-full">

        <div
          className="bg-amber-500 h-3 rounded-full"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
};

const SkinMetrics = ({ result }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <Metric
        title="Oiliness"
        value={result.oiliness}
      />

      <Metric
        title="Dryness"
        value={result.dryness}
      />

      <Metric
        title="Sensitivity"
        value={result.sensitivity}
      />

      <Metric
        title="Pigmentation"
        value={result.pigmentation}
      />

      <Metric
        title="Acne Risk"
        value={result.acneRisk}
      />

      <Metric
        title="UV Risk"
        value={result.uvRisk}
      />

    </div>
  );
};

export default SkinMetrics;