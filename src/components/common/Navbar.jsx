import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Analyze", path: "/analyze" },
     { name: "Workflow", path: "/workflow" },
    { name: "Guide", path: "/guide" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/admin" },
  ];

  

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm">
        <div className="container mx-auto px-6">

          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
                <Sparkles size={22} />
              </div>

              <div>
                <h1 className="text-xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                  SkinSense AI
                </h1>

                <p className="text-xs text-gray-500">
                  Intelligent Skin Analysis
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="
                    relative
                    font-medium
                    text-gray-700
                    transition-all
                    duration-300
                    hover:text-blue-600
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-blue-600
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {link.name}
                </Link>
              ))}

            </nav>

            {/* Desktop Button */}
            <div className="hidden lg:flex">
              <Link
                to="/analyze"
                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  text-white
                  font-semibold
                  shadow-lg
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Start Analysis
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="
                lg:hidden
                p-2
                rounded-lg
                hover:bg-gray-100
                transition
              "
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          <div
            className={`
              lg:hidden
              overflow-hidden
              transition-all
              duration-300
              ${
                open
                  ? "max-h-[500px] pb-6"
                  : "max-h-0"
              }
            `}
          >
            <div className="mt-3 rounded-3xl bg-white shadow-xl border border-gray-100 p-6">

              <div className="flex flex-col gap-5">

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="
                      font-medium
                      text-gray-700
                      hover:text-blue-600
                      transition
                    "
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  to="/analyze"
                  onClick={() => setOpen(false)}
                  className="
                    mt-2
                    text-center
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    text-white
                    py-3
                    font-semibold
                  "
                >
                  Start Analysis
                </Link>

              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;