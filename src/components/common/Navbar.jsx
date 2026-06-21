import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          <Link
            to="/"
            className="text-2xl font-bold text-amber-600"
          >
            SkinSense AI
          </Link>

          <div className="hidden md:flex gap-8">
            <Link to="/">Home</Link>
            <Link to="/analyze">Analyze</Link>
            <Link to="/guide">Guide</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden flex flex-col pb-4 gap-4">
            <Link to="/">Home</Link>
            <Link to="/analyze">Analyze</Link>
            <Link to="/guide">Guide</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;