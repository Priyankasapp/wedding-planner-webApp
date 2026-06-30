
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

interface GalleryLightboxProps {
  images: string[];
  selectedImage: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function GalleryLightbox({
  images,
  selectedImage,
  onClose,
  onNext,
  onPrevious,
}: GalleryLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowRight":
          onNext();
          break;

        case "ArrowLeft":
          onPrevious();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, onClose, onNext, onPrevious]);

  return (
    <AnimatePresence>
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-6 right-6 text-white hover:text-neutral-300 transition"
          >
            <X size={36} />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            className="absolute left-6 text-white hover:scale-110 transition"
          >
            <ChevronLeft size={50} />
          </button>

          {/* Image */}
          <motion.img
            key={selectedImage}
            src={images[selectedImage]}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.9, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-6 text-white hover:scale-110 transition"
          >
            <ChevronRight size={50} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}