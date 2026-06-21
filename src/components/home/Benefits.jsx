const Benefits = () => {
  return (
    <section className="py-24 bg-gray-50">

      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-5xl font-bold">
              Why Choose SkinSense AI?
            </h2>

            <ul className="mt-8 space-y-5 text-lg">

              <li>✓ Accurate Skin Tone Classification</li>
              <li>✓ AI-Powered Recommendations</li>
              <li>✓ Instant Results</li>
              <li>✓ Personalized Skincare Plans</li>
              <li>✓ Secure & Private Analysis</li>

            </ul>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h3 className="text-2xl font-semibold">
              Premium AI Analysis
            </h3>

            <p className="mt-4 text-gray-600">
              Designed to provide meaningful skincare insights
              using advanced computer vision.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Benefits;