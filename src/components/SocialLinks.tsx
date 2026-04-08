import { MapPin, Instagram, Phone } from "lucide-react";

const links = [
  { icon: MapPin, href: "https://baskinrobbinsindia.com/", label: "Location" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Phone, href: "#", label: "Call Us" },
];

const SocialLinks = () => (
  <div className="flex items-center gap-3">
    {links.map(({ icon: Icon, href, label }) => (
      <a key={label} href={href} aria-label={label} className="social-icon">
        <Icon className="w-5 h-5" />
      </a>
    ))}
    <a
      href="#"
      aria-label="Zomato"
      className="social-icon text-xs font-semibold tracking-wide"
      style={{ fontFamily: "var(--font-body)" }}
    >
      Z
    </a>
  </div>
);

export default SocialLinks;
