import { useState, type ChangeEvent, type FormEvent } from "react";
import { HiOutlineArrowRight } from "react-icons/hi"; // Using react-icons for the clean arrow

const LeaveAThought = () => {
  const serifStyle = {
    fontFamily: '"Cormorant Garamond", serif',
  };

  // 1. Change error state to an object to track each field individually
  const [errors, setErrors] = useState({
    name: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    // Clear the specific field's error as the user types
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    let valid = true;
    const newErrors = { name: "", message: "" };

    // 2. Validate fields individually to match the screenshot requirements
    if (!formData.name.trim()) {
      newErrors.name = "Your name is required.";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please write your thought.";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return; 

    console.log("Thought submitted:", formData);
    // Handle submission logic here
  };

  return (
    <section className="bg-champagne/30 py-24 px-6 md:px-12 border-t border-stone-100">
      <div className="max-w-2xl mx-auto text-left">
        {/* Header Section */} 
        <p className="text-xs uppercase tracking-[4px] text-gold mb-3">
          — A Note
        </p>
        <h2 
          style={serifStyle} 
          className="text-3xl md:text-4xl font-light text-[#3B2A24] mb-2"
        >
          Leave a thought.
        </h2>
        <p className="text-xs md:text-sm text-[#6e605b]  font-light mb-12">
          Thoughts are reviewed before appearing here.
        </p>

        {/* Minimal Underline Form */}
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Name Field */}
          <div className="relative flex flex-col gap-2">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`w-full bg-transparent border-b py-3 text-sm md:text-base text-[#3B2A24] placeholder-stone-400 focus:outline-none transition-colors duration-300 font-light ${
                errors.name 
                  ? "border-red-400 focus:border-red-400" 
                  : "border-stone-300 focus:border-[#D4B06A]"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs font-light mt-1">{errors.name}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="relative flex flex-col gap-2">
            <textarea
              name="message"
              id="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className={`w-full bg-transparent border-b py-3 text-sm md:text-base text-[#3B2A24] placeholder-stone-400 focus:outline-none transition-colors duration-300 font-light resize-none ${
                errors.message 
                  ? "border-red-400 focus:border-red-400" 
                  : "border-stone-300 focus:border-[#D4B06A]"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs font-light mt-1">{errors.message}</p>
            )}
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