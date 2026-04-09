import { useState, useEffect } from "react";
import heroBg1 from "@/assets/br-01.jpeg";
import heroBg2 from "@/assets/br-02.jpeg";
import heroBg3 from "@/assets/br-03.jpeg";
import heroBg4 from "@/assets/br-04.jpeg";
import heroBg5 from "@/assets/br-05.jpeg";
import heroBg6 from "@/assets/br-06.jpeg";

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
