import { Camera, MapPin, Phone } from "lucide-react";
import { salon } from "@/lib/salon";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="footer-brand">LOOKS <span>HAIR PROFESSIONAL SALON</span></a>
      <p>Your Style. Your Identity. Our Expertise.</p>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#booking">Book Now</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-socials">
        <a href={salon.instagram} aria-label="Instagram"><Camera /></a>
        <a href={`tel:+${salon.phone}`} aria-label="Call"><Phone /></a>
        <a href={salon.mapsUrl} aria-label="Location"><MapPin /></a>
      </div>
      <div className="footer-bottom">© 2026 Looks Hair Professional Salon. All rights reserved.</div>
    </footer>
  );
}



