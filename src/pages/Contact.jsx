import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

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
    <section className="relative overflow-hidden py-24 bg-slate-50">

      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">

          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
            Contact Us
          </span>

          <h1 className="mt-5 text-5xl md:text-6xl font-extrabold text-slate-900">
            Let's Build Better
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Skin Intelligence
            </span>
          </h1>

          <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto">
            Have questions about our AI-powered Skin Tone
            Classification & Skincare Guidance System?
            We'd love to hear from you.
          </p>

        </div>

        {/* Main Card */}
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 overflow-hidden rounded-[32px] bg-white shadow-2xl">

            {/* LEFT SIDE */}
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-600 p-10 md:p-14 text-white">

              <h2 className="text-4xl font-bold mb-6">
                Get In Touch
              </h2>

              <p className="text-slate-200 leading-8">
                We are always excited to discuss innovative
                ideas, research collaborations, AI projects,
                and skincare technology solutions.
              </p>

              <div className="mt-12 space-y-8">

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
                    <Mail size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Email
                    </h4>

                    <p className="text-slate-300">
                      support@skinsenseai.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
                    <Phone size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Phone
                    </h4>

                    <p className="text-slate-300">
                      +880 1XXXXXXXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Location
                    </h4>

                    <p className="text-slate-300">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-16 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
                <h3 className="font-bold text-xl mb-3">
                  Why Contact Us?
                </h3>

                <ul className="space-y-2 text-slate-200">
                  <li>✓ AI & Computer Vision Research</li>
                  <li>✓ Skin Analysis Consultation</li>
                  <li>✓ Collaboration Opportunities</li>
                  <li>✓ Technical Support</li>
                </ul>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="p-10 md:p-14">

              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Send a Message
              </h2>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    {...register("name")}
                    placeholder="Enter your name"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      p-4
                      outline-none
                      transition
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Enter your email"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      p-4
                      outline-none
                      transition
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Subject
                  </label>

                  <input
                    {...register("subject")}
                    placeholder="Enter subject"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      p-4
                      outline-none
                      transition
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    {...register("message")}
                    placeholder="Write your message here..."
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      p-4
                      outline-none
                      transition
                      focus:border-blue-500
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    text-white
                    font-semibold
                    shadow-lg
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                  "
                >
                  <Send size={20} />
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;