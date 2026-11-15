import { Award, Heart, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Grooming",
    text: "Professional attention and precision in every service.",
  },
  {
    icon: Sparkles,
    title: "Modern Hairstyles",
    text: "Fresh looks and styles that match your personality.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene & Comfort",
    text: "A clean, comfortable and welcoming salon experience.",
  },
  {
    icon: Heart,
    title: "Personal Attention",
    text: "Your style, comfort and satisfaction come first.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="section-heading">
        <span className="eyebrow">THE LOOKS DIFFERENCE</span>
        <h2>
          WHY CHOOSE <em>LOOKS?</em>
        </h2>
        <p>
          Professional grooming, attention to detail and a style that speaks
          for you.
        </p>
      </div>

      <div className="features-grid">
        {features.map(({ icon: Icon, title, text }) => (
          <div className="feature-card" key={title}>
            <Icon size={32} strokeWidth={1.4} />
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="feature-line" />
          </div>
        ))}
      </div>
    </section>
  );
}
