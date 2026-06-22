import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Hook to monitor the current URL path

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Atelier", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Journal", path: "/journal" },
    { name: "Contact", path: "/contact" },
  ];

  // Gracefully handle clicks on the Enquire button to prevent unnecessary hard reloads
  const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (location.pathname === "/contact") {
      e.preventDefault(); // Prevents the link from forcing a route update if already there
      window.scrollTo({ top: 0, behavior: "smooth" }); // Smoothly scrolls to top instead
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F2]/70 backdrop-blur-xl border-b border-[#DDD8D2]/40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/">
            <h1 className="font-serif text-3xl text-[#43342F]">
              Maison Lior
            </h1>
            <p className="uppercase tracking-[5px] text-[11px] text-[#8B6B2E]">
              Wedding Atelier
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-12">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#C6A15B]"
                    : "text-[#5E514C] hover:text-[#C6A15B]"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Enquire Button */}
          <Link
            to="/contact"
            onClick={handleEnquireClick}
            className="hidden lg:block border border-[#43342F] px-8 py-3 uppercase tracking-[4px] text-xs hover:bg-[#43342F] hover:text-white transition"
          >
            Enquire
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#43342F]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
  aria-expanded={open}
  aria-controls="mobile-menu"
          >
            {open ? <HiOutlineX size={32} /> : <HiOutlineMenuAlt3 size={32} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-500
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-[#F8F6F2]/95 backdrop-blur-xl border-t border-[#DDD8D2]/40">
          <nav className="flex flex-col py-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                  py-4
                  text-center
                  transition
                  ${isActive ? "text-[#C6A15B]" : "text-[#43342F] hover:text-[#C6A15B]"}
                  `
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Enquire Button */}
            <div className="px-8 mt-6">
              <Link
                to="/contact"
                onClick={handleEnquireClick}
                className="block text-center border border-[#43342F] py-4 uppercase tracking-[4px] text-xs hover:bg-[#43342F] hover:text-white transition"
              >
                Enquire
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;