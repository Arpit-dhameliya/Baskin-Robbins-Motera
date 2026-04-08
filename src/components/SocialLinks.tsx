import { MapPin, Instagram } from "lucide-react";
import swiggyIcon from "@/assets/swiggy-icon.svg";
import zomatoLogo from "@/assets/zomato-logo.jpg";

const iconLinks = [
  { icon: MapPin, href: "#", label: "Location" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const SocialLinks = () => (
  <div className="flex items-center gap-3">
    {iconLinks.map(({ icon: Icon, href, label }) => (
      <a key={label} href={href} aria-label={label} className="social-icon">
        <Icon className="w-5 h-5" />
      </a>
    ))}
    <a href="#" aria-label="Swiggy" className="social-icon p-1">
      <img src={swiggyIcon} alt="Swiggy" className="w-5 h-5 object-contain" />
    </a>
    <a href="#" aria-label="Zomato" className="social-icon p-1">
      <img src={zomatoLogo} alt="Zomato" className="w-10 h-5 object-contain" />
    </a>
  </div>
);

export default SocialLinks;
