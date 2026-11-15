import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-image image-frame">
        <div className="image-label">THE ART OF MEN'S GROOMING</div>
      </div>

      <div className="about-copy">
        <span className="eyebrow">WELCOME TO LOOKS</span>

        <h2>
          MORE THAN A HAIRCUT.<br />
          <em>IT'S YOUR SIGNATURE STYLE.</em>
        </h2>

        <div className="gold-line" />

        <p>
          Welcome to Looks Hair Professional Salon, your destination for
          professional men's grooming, modern hairstyles and premium salon care.
        </p>

        <p>
          From sharp fades and classic haircuts to beard grooming, hair spa
          and facial services, we focus on the details that make your style
          stand out.
        </p>

        <a href="#booking" className="text-link">
          BOOK YOUR VISIT <Sparkles size={15} />
        </a>
      </div>
    </section>
  );
}
