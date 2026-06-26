
import React from 'react';
import { MapPin, Phone, Mail,} from 'lucide-react';
import { FaInstagram } from "react-icons/fa";
interface ContactItemProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  alignIcon?: 'start' | 'center';
}

const ContactItem: React.FC<ContactItemProps> = ({ label, value, icon, alignIcon = 'center' }) => (
  <div>
    <p className="text-[11.2px] uppercase tracking-[0.35em] text-[#C4A46D] eyebrow">
      {label}
    </p>
    <p className={`font-serif text-xl mt-2 italic flex ${alignIcon === 'start' ? 'items-start' : 'items-center'} gap-3 text-[#261F1E]`}>
      <span className={`${alignIcon === 'start' ? 'mt-2' : ''} text-[#C4A46D]`}>
        {icon}
      </span>
      {value}
    </p>
  </div>
);

const ContactSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <ContactItem 
        label="Studio" 
        value="14 Rue de Sévigné, 75004 Paris" 
        icon={<MapPin size={16} />} 
        alignIcon="start"
      />
      
      <ContactItem 
        label="By telephone" 
        value="+33 1 42 78 00 00" 
        icon={<Phone size={16} />} 
      />
      
      <ContactItem 
        label="By letter" 
        value="hello@maisonlior.com" 
        icon={<Mail size={16} />} 
      />
      
      <ContactItem 
        label="Follow" 
        value="@maisonlior" 
       icon={<FaInstagram size={16} />}
      />
    </div>
  );
};

export default ContactSection;