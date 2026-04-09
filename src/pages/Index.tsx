import HeroBackground from "@/components/HeroBackground";
import SocialLinks from "@/components/SocialLinks";
import { Trophy } from "lucide-react";
import adLogo from "@/assets/ad-logo.png";

const Index = () => {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      <HeroBackground />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Center content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          {/* Logo monogram */}
          <div className="animate-fade-up mb-4">
            <img src={adLogo} alt="AD Logo" className="w-20 h-20 object-contain" />
          </div>

          {/* Brand name */}
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-up-delay-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Anand Dessert
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center animate-fade-up-delay-2">
            <a href="https://g.co/kgs/bkULVz3" className="btn-primary-glow">
              Rate Us
            </a>
            <a href="https://wa.me/message/4IO56AZIW656D1" className="btn-hero">
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative px-6 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-up-delay-3">
          {/* Did you know */}
          { /* <div className="text-left">
            <p className="text-sm font-medium opacity-80 mb-1">Did you know?</p>
            <p className="text-sm flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-accent" />
              <span className="opacity-90">
                We are currently the best Baskin Robbins in Gujarat
              </span>
            </p>
          </div> */ }

          {/* Social links */}
          <SocialLinks />

          {/* Bulk orders */}
          <p className="text-sm opacity-60 tracking-wide">
            * We accept bulk orders
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;
