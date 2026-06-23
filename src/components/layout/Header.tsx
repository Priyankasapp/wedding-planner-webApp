import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {
 const serifStyle = { 
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300 
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

  const isHomePage = location.pathname === "/";
 
  return (
    <header className={`absolute top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isHomePage ? "bg-[#FAF6EE]/90  border-b border-[#EAE3DA]" : "bg-[#FAF6EE] border-b border-[#EAE3DA]"
      }`}>
      <div className="max-w-[1200px] mx-auto  ">
        <div className="h-18 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <h1
             style={{ ...serifStyle, fontWeight: 400 }}  
            className="font-serif text-2xl text-[#43342F] font-extralight ">
              Maison Lior
            </h1>
            <span className="uppercase tracking-[3px] text-[12px] text-[#B89154] font-light ">
              Wedding Atelier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
          
          className="hidden lg:flex gap-11 text-sm   font-light">
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
            className="hidden lg:inline-flex items-center border border-[#43342F]
             px-4 py-2
             text-[12px]
             tracking-[0.3em]
             uppercase
             hover:bg-[#43342F]
             hover:text-white
             transition"
          >
            ENQUIRE
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
            <div className="px-6 mt-4">
              <Link
                to="/contact"
                onClick={handleEnquireClick}
                className="block text-center border border-[#43342F] py-4 uppercase tracking-[4px] text-sm hover:bg-[#43342F] hover:text-white transition"
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