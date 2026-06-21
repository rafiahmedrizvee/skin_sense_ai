import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-10">

          <h1 className="text-4xl font-bold mb-8">
            Contact Us
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <input
              {...register("name")}
              placeholder="Name"
              className="w-full border p-4 rounded-xl"
            />

            <input
              {...register("email")}
              placeholder="Email"
              className="w-full border p-4 rounded-xl"
            />

            <input
              {...register("subject")}
              placeholder="Subject"
              className="w-full border p-4 rounded-xl"
            />

            <textarea
              rows={5}
              {...register("message")}
              placeholder="Message"
              className="w-full border p-4 rounded-xl"
            />

            <button
              className="
              bg-amber-500
              text-white
              px-8 py-4
              rounded-xl
              "
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;