const FAQ = () => {
  return (
    <section className="py-24">

      <div className="container mx-auto px-4 max-w-4xl">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold">
              Is my image stored?
            </h3>
            <p className="mt-3 text-gray-600">
              No, images are processed securely.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold">
              How accurate is the AI?
            </h3>
            <p className="mt-3 text-gray-600">
              Our model provides high-confidence predictions.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQ;