import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="eyebrow">
          <Sparkles size={15} /> PREMIUM MEN'S GROOMING
        </span>

        <h1>
          LOOK SHARP.<br />
          <em>FEEL CONFIDENT.</em>
        </h1>

        <p>Precision Haircuts. Expert Styling. Exceptional Grooming.</p>

        <div className="hero-actions">
          <a href="#booking" className="button button-gold">
            Book Your Appointment
          </a>
          <a href="#services" className="button button-outline">
            Explore Services
          </a>
        </div>

        <a href="#about" className="scroll-link">
          <ArrowDown size={16} /> DISCOVER THE LOOKS EXPERIENCE
        </a>
      </div>

      <div className="hero-side-text">STYLE · GROOMING · CONFIDENCE</div>
    </section>
  );
}
