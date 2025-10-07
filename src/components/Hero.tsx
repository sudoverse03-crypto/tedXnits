import { useEffect, useState } from "react";
import heroImage from "@/assets/tedx-hero.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2026-01-17T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="TEDx event stage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-16 animate-fade-in-up">
            <span className="text-primary">TEDx</span>
            <span className="text-white">NITSILCHAR</span>
          </h1>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={item.label}
                className="relative group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-black/40 backdrop-blur-xl rounded-xl p-6 md:p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-elegant">
                  <div className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-3 tabular-nums">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm text-white/60 uppercase tracking-[0.2em] font-semibold">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-3xl md:text-5xl lg:text-6xl font-light text-white/80 animate-fade-in-up tracking-wide">
            Coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
