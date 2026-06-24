import React from "react";

interface SectionKickerProps {
  title: string;
  className?: string; 
}

const SectionKicker: React.FC<SectionKickerProps> = ({ title, className = "mb-8" }) => {
  return (
    <p
      className={`uppercase tracking-[0.35em] font-normal block ${className}`}
      style={{
        fontSize: "0.7rem",
        color: "var(--gold, #C2A677)",
        fontFamily: "var(--font-sans), 'Montserrat', sans-serif",
      }}
    >
      — {title}
    </p>
  );
};

export default SectionKicker;