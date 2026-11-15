import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { salon } from "@/lib/salon";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading">
        <span className="eyebrow">COME SAY HELLO</span>
        <h2>FIND YOUR WAY <em>TO LOOKS</em></h2>
        <p>We would love to welcome you.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <MapPin />
          <h3>Visit Our Salon</h3>
          <p>{salon.address}</p>
          <a href={salon.mapsUrl} target="_blank" rel="noreferrer">Get Directions <ArrowUpRight size={15} /></a>
        </div>
        <div className="contact-card">
          <Phone />
          <h3>Call Us</h3>
          <p>{salon.displayPhone}</p>
          <a href={`tel:+${salon.phone}`}>Call Salon <ArrowUpRight size={15} /></a>
        </div>
        <div className="contact-card">
          <Clock />
          <h3>Opening Hours</h3>
          <p>Opening hours will be updated soon.</p>
          <a href="#booking">Book an Appointment <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <a className="map-placeholder" href={salon.mapsUrl} target="_blank" rel="noreferrer">
        <MapPin size={30} />
        <span>ADD SALON LOCATION ON GOOGLE MAPS</span>
      </a>
    </section>
  );
}

