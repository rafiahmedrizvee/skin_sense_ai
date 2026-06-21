const testimonials = [
  {
    name: "Sarah",
    text: "Amazing AI analysis and skincare recommendations.",
  },
  {
    name: "Emily",
    text: "Helped me understand my skin tone perfectly.",
  },
  {
    name: "Michael",
    text: "Very professional and easy to use.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">

      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-16">
          User Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow"
            >
              <p>{item.text}</p>

              <h4 className="font-semibold mt-6">
                {item.name}
              </h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;