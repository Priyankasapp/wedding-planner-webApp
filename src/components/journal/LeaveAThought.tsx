import { useState, type ChangeEvent, type FormEvent, } from "react";
import { HiOutlineArrowRight } from "react-icons/hi"; // Using react-icons for the clean arrow

const LeaveAThought = () => {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
  };

  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Thought submitted:", formData);
    // Handle submission logic here
  };

  return (
    <section className="bg-[#FAF8F5] py-24 px-6 md:px-12 border-t border-stone-100">
      <div className="max-w-2xl mx-auto text-left">
        {/* Header Section */}
        <p className="text-xs uppercase tracking-[4px] text-[#A89276] mb-3">
          — A Note
        </p>
        <h2 
          style={serifStyle} 
          className="text-3xl md:text-4xl font-light text-[#3B2A24] mb-2"
        >
          Leave a thought.
        </h2>
        <p className="text-xs md:text-sm text-[#A89276] font-light mb-12">
          Thoughts are reviewed before appearing here.
        </p>

        {/* Minimal Underline Form */}
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-transparent border-b border-stone-300 py-3 text-sm md:text-base text-[#3B2A24] placeholder-stone-400 focus:outline-none focus:border-[#D4B06A] transition-colors duration-300 font-light"
              required
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              id="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full bg-transparent border-b border-stone-300 py-3 text-sm md:text-base text-[#3B2A24] placeholder-stone-400 focus:outline-none focus:border-[#D4B06A] transition-colors duration-300 font-light resize-none"
              required
            ></textarea>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="
                flex 
                items-center 
                gap-3 
                border 
                border-[#3B2A24] 
                text-[#3B2A24] 
                px-8 
                py-3.5 
                uppercase 
                tracking-[4px] 
                text-xs 
                font-light
                hover:bg-[#3B2A24] 
                hover:text-white 
                transition-all 
                duration-300 
                ease-out
              "
            >
              Send <HiOutlineArrowRight className="text-sm" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LeaveAThought;