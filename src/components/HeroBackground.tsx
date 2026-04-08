import { useState, useEffect } from "react";
import heroBg1 from "@/assets/BR 01.jpg";
import heroBg2 from "@/assets/BR-02.webp";
import heroBg3 from "@/assets/BR-03.webp";
import heroBg4 from "@/assets/BR-04.png";
import heroBg5 from "@/assets/BR-05.webp";
import heroBg6 from "@/assets/BR-06.jpg";

const images = [heroBg1, heroBg2, heroBg3, heroBg4, heroBg5, heroBg6];

const HeroBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: i === currentIndex ? 1 : 0 }}
          {...(i === 0 ? {} : { loading: "lazy" as const })}
        />
      ))}
      <div className="hero-overlay absolute inset-0" />
    </div>
  );
};

export default HeroBackground;
