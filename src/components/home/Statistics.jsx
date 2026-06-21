const Statistics = () => {
  return (
    <section className="py-20">

      <div className="container mx-auto px-4">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="text-center">
            <h2 className="text-5xl font-bold text-amber-500">
              96%
            </h2>
            <p>Accuracy</p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold text-amber-500">
              50K+
            </h2>
            <p>Analyses</p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold text-amber-500">
              20K+
            </h2>
            <p>Users</p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold text-amber-500">
              24/7
            </h2>
            <p>Availability</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Statistics;