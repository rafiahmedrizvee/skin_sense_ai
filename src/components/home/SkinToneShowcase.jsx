const tones = [
  { name: "Fair", color: "#F8D9C4" },
  { name: "Light", color: "#EBC3A2" },
  { name: "Medium", color: "#D19B73" },
  { name: "Tan", color: "#B7794D" },
  { name: "Brown", color: "#8D5524" },
  { name: "Deep", color: "#5C3A21" },
];

const SkinToneShowcase = () => {
  return (
    <section className="py-24">

      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-16">
          Skin Tone Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {tones.map((tone) => (
            <div key={tone.name} className="text-center">

              <div
                className="h-36 rounded-3xl shadow-lg"
                style={{
                  backgroundColor: tone.color,
                }}
              />

              <p className="mt-4 font-medium">
                {tone.name}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default SkinToneShowcase;