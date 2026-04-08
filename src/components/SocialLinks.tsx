import { MapPin, Instagram } from "lucide-react";
import swiggyIcon from "@/assets/swiggy-icon.svg";
import zomatoLogo from "@/assets/zomato-logo.jpg";

const iconLinks = [
  { icon: MapPin, href: "https://maps.app.goo.gl/XJA61C2btZYZqCpm8", label: "Location" },
  { icon: Instagram, href: "https://www.instagram.com/baskinrobbins_motera", label: "Instagram" },
];

const SocialLinks = () => (
  <div className="flex items-center gap-3">
    {iconLinks.map(({ icon: Icon, href, label }) => (
      <a key={label} href={href} aria-label={label} className="social-icon">
        <Icon className="w-5 h-5" />
      </a>
    ))}
    <a href="https://www.swiggy.com/menu/960231" aria-label="Swiggy" className="social-icon p-1">
      <img src={swiggyIcon} alt="Swiggy" className="w-5 h-5 object-contain" />
    </a>
    <a href="https://link.zomato.com/xqzv/rshare?id=8885658330563de5" aria-label="Zomato" className="social-icon p-1">
      <img src={zomatoLogo} alt="Zomato" className="w-10 h-5 object-contain" />
    </a>
  </div>
);

export default SocialLinks;
