import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import img1 from "../../assets/images/photo_2.jpg";
import img2 from "../../assets/images/photo_5.jpg";
import img3 from "../../assets/images/photo_3.jpg";
import img4 from "../../assets/images/photo_6.jpg";
import img5 from "../../assets/images/photo_4.jpg";
import img6 from "../../assets/images/photo_10.jpg";

const images = [img1, img2, img3, img4, img5, img6];  

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#3A241F] text-[#F7F1EB]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20">

        {/* Top */}

        <div className="grid lg:grid-cols-12 gap-12">

          {/* Newsletter */}

          <div className="lg:col-span-4">

            <p className="text-[#C6A15B] uppercase tracking-[6px] text-xs">
              Maison Lior
            </p>

            <h3 className="font-serif text-3xl mt-6 leading-tight">
              Letters from the atelier —
              once a season, never more.
            </h3>

            <div className="mt-8 flex border-b border-white/20 pb-3">

              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent outline-none placeholder:text-white/40"
              />

              <button className="uppercase tracking-[4px] text-xs text-[#C6A15B] hover:text-white transition">
                Subscribe
              </button>

            </div>

          </div>

          {/* Studio */}

          <div className="lg:col-span-2">

            <p className="uppercase tracking-[6px] text-xs text-[#C6A15B]">
              Studio
            </p>

            <ul className="mt-6 space-y-4">

              <li>
                <a href="/about" className="hover:text-[#C6A15B]">
                  Our Story
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-[#C6A15B]">
                  Services
                </a>
              </li>

              <li>
                <a href="/portfolio" className="hover:text-[#C6A15B]">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="/journal" className="hover:text-[#C6A15B]">
                  Journal
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="lg:col-span-3">

            <p className="uppercase tracking-[6px] text-xs text-[#C6A15B]">
              Contact
            </p>

            <div className="mt-6 space-y-4 text-white/80">

              <p>
                14 Rue de Sévigné
              </p>

              <p>
                75004 Paris, France
              </p>

              <p>
                +33 1 42 78 00 00
              </p>

              <p>
                hello@maisonlior.com
              </p>

            </div>

            <div className="flex gap-5 mt-8">

              <FaInstagram
                size={20}
                className="cursor-pointer hover:text-[#C6A15B]"
              />

              <FaFacebookF
                size={18}
                className="cursor-pointer hover:text-[#C6A15B]"
              />

              <MdOutlineMail
                size={22}
                className="cursor-pointer hover:text-[#C6A15B]"
              />

            </div>

          </div>

          {/* Gallery */}

          <div className="lg:col-span-3">

            <p className="uppercase tracking-[6px] text-xs text-[#C6A15B]">
              @MaisonLior
            </p>

            <div className="grid grid-cols-3 gap-2 mt-6">

              {images.map((img, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`Maison Lior ${index + 1}`}
                    className="h-full w-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">

          <p className="text-white/50 text-sm">
            © {year} Maison Lior. All rights reserved.
          </p>

          <p className="uppercase tracking-[5px] text-xs text-white/50">
            Paris · Como · Provence · Santorini
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;