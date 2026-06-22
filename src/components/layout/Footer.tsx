import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../../assets/images/photo_2.jpg";
import img2 from "../../assets/images/photo_5.jpg";
import img3 from "../../assets/images/photo_3.jpg";
import img4 from "../../assets/images/photo_6.jpg";
import img5 from "../../assets/images/photo_4.jpg";
import img6 from "../../assets/images/photo_10.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Footer = () => {
  const year = new Date().getFullYear();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

 //image
  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, 
        delayChildren: 0.2,
      },
    },
  };

const imageItemVariants = {
  hidden: { opacity: 0, scale: 0.95, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
    
    },
  },
};

  return (
    <footer className="bg-[#2B2623] text-[#F7F1EB] overflow-hidden">
      <div
        ref={ref}
        className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20"
      >
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
          
          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-4">
            <p className="text-[#C6A15B] uppercase tracking-[6px] text-xs">
              Maison Lior
            </p>

            <h3 className="font-serif text-2xl sm:text-3xl mt-4 sm:mt-6 leading-tight">
              Letters from the atelier —
              once a season, never more.
            </h3>

            <div className="mt-6 sm:mt-8 flex border-b border-white/20 pb-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
               id="newsletter-email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent outline-none placeholder:text-white/40 text-sm sm:text-base"
              />

              <button className="uppercase tracking-[4px] text-xs text-[#C6A15B] hover:text-white transition whitespace-nowrap ml-2">
                Subscribe
              </button>
            </div>
          </div>

          {/* Studio */}
          <div className="md:col-span-1 lg:col-span-2">
            <p className="uppercase tracking-[6px] text-xs text-[#C6A15B]">
              Studio
            </p>

            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              {["Our Story", "Services", "Portfolio", "Journal"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-[#C6A15B] transition text-sm sm:text-base inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1 lg:col-span-3">
            <p className="uppercase tracking-[6px] text-xs text-[#C6A15B]">
              Contact
            </p>

            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-white/80 text-sm sm:text-base">
              {[
                "14 Rue de Sévigné",
                "75004 Paris, France",
                "+33 1 42 78 00 00",
                "hello@maisonlior.com",
              ].map((text, index) => (
                <p key={index}>
                  {text}
                </p>
              ))}
            </div>

            <div className="flex gap-5 mt-6 sm:mt-8">
              {[
                { icon: FaInstagram, size: 20, label: "Instagram" },
                { icon: FaFacebookF, size: 18, label: "Facebook" },
                { icon: MdOutlineMail, size: 22, label: "Email" },
              ].map((social, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:text-[#C6A15B] transition"
                >
                  <social.icon size={social.size} />
                </div>
              ))}
            </div>
          </div>

          {/* Gallery - Images appear one by one quickly */}
          <div className="md:col-span-2 lg:col-span-3">
            <p className="uppercase tracking-[6px] text-xs text-[#C6A15B]">
              @MaisonLior
            </p>

            <motion.div
              variants={imageContainerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-3 gap-1.5 sm:gap-2 mt-4 sm:mt-6"
            >
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  variants={imageItemVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: 3,
                    zIndex: 10,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="aspect-square overflow-hidden rounded-sm shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Maison Lior ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 sm:mt-14 lg:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
            © {year} Maison Lior. All rights reserved.
          </p>

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[10px] sm:text-xs text-white/50 text-center">
            Paris · Como · Provence · Santorini
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;