import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24">

      <div className="container mx-auto px-4">

        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-14 text-center text-white">

          <h2 className="text-5xl font-bold">
            Ready To Analyze Your Skin?
          </h2>

          <p className="mt-4 text-xl">
            Get instant AI-powered skincare insights.
          </p>

          <Link
            to="/analyze"
            className="
            inline-block
            mt-8
            bg-white
            text-amber-600
            px-8
            py-4
            rounded-2xl
            font-semibold
            "
          >
            Start Analysis
          </Link>

        </div>

      </div>

    </section>
  );
};

export default CTA;