import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import { divIcon } from "leaflet";
import { motion } from "framer-motion";
import { renderToStaticMarkup } from "react-dom/server";
import { FiMapPin } from "react-icons/fi";

// Paris, 4e Arrondissement Studio coordinates
const STUDIO_COORDINATES: [number, number] = [48.8562, 2.3614];

// Custom luxury pin marker setup
const customMarkerIcon = divIcon({
  html: renderToStaticMarkup(
    <div className="relative flex items-center justify-center w-10 h-10 bg-[#2B2623] rounded-full border-2 border-[#FAF6EE] shadow-lg">
      <FiMapPin className="text-[#FAF6EE] text-lg" />
      <div className="absolute -bottom-1.5 w-3 h-3 bg-[#2B2623] rotate-45 border-r border-b border-[#FAF6EE]" />
    </div>
  ),
  className: "custom-div-icon",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export function ContactMap() {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
    fontStyle: "italic",
  };

  const sansStyle = {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 300,
  };

  return (
    <section className="bg-[#FAF6EE] pb-24 lg:pb-32 w-full">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-40px" }}
          className="w-full h-[450px] md:h-[550px] rounded-sm overflow-hidden border border-[#D8D0C8]/40 shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative z-10"
        >
          <MapContainer
            center={STUDIO_COORDINATES}
            zoom={15}
            zoomControl={false} // Turn off default left-side control layout
            touchZoom={true}    // Enables natural mobile pinch gestures
            doubleClickZoom={true}
            scrollWheelZoom={false} // Keeps scrolling the page smooth unless clicked
            className="w-full h-full"
          >
            {/* High quality map layout tile layer configuration */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* Repositioned Zoom Control explicitly to the top right */}
            <ZoomControl position="topright" />

            {/* Studio location pinpoint drops */}
            <Marker position={STUDIO_COORDINATES} icon={customMarkerIcon}>
              <Popup className="custom-luxury-popup">
                <div className="p-2 text-center">
                  <h3 style={serifStyle} className="text-lg text-[#2B2623] font-normal mb-0.5">
                    Maison Lior
                  </h3>
                  <p style={sansStyle} className="text-[10px] uppercase tracking-wider text-[#C2A677]">
                    Wedding Atelier
                  </p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactMap;