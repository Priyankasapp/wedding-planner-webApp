

import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
  };
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Atelier", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Journal", path: "/journal" },
    { name: "Contact", path: "/contact" },
  ];

  const handleEnquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (location.pathname === "/contact") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-[#FAF6EE]/90 border-b border-[#EAE3DA] ">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="h-18 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
            <h1
              style={{ ...serifStyle, fontWeight: 400 }}
              className="font-serif text-2xl text-[#43342F] font-extralight"
            >
              Maison Lior
            </h1>
            <span className="uppercase tracking-[3px] text-[12px] text-[#B89154] font-light mt-1">
              Wedding Atelier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-11 text-sm font-light">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors hover:text-[#C6A15B] ${
                    isActive ? "text-[#C6A15B]" : "text-[#5E514C]"
                  }`
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
            className="hidden lg:inline-flex items-center border border-[#43342F] px-5 py-2.5 text-[12px] tracking-[0.3em] uppercase hover:bg-[#43342F] hover:text-white transition"
          >
            ENQUIRE
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#43342F] p-2 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#FAF6EE]/95 backdrop-blur-xl border-t border-[#DDD8D2]/40 px-6 py-6">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-center transition-colors tracking-wide ${
                    isActive ? "text-[#C6A15B] font-medium" : "text-[#43342F] hover:text-[#C6A15B]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Enquire Button */}
            <div className="mt-4">
              <Link
                to="/contact"
                onClick={handleEnquireClick}
                className="block text-center border border-[#43342F] py-3.5 uppercase tracking-[4px] text-xs hover:bg-[#43342F] hover:text-white transition"
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