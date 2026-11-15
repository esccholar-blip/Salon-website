"use client";

import { FormEvent, useEffect, useState } from "react";
import { CalendarDays, Clock, MessageCircle } from "lucide-react";
import { salon } from "@/lib/salon";

const services = [
  { name: "Facial", price: 1000 },
  { name: "Scrub Gold", price: 200 },
  { name: "Mantra Facial", price: 800 },
  { name: "Hair Spa", price: 500 },
  { name: "Oxy Life Bleach", price: 400 },
  { name: "Fruit Hair Colour", price: 200 },
  { name: "Head Massage", price: 70 },
  { name: "D-Tan", price: 300 },
  { name: "Streak Colour", price: 500 },
  { name: "L'Oréal Colour", price: 500 },
];

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
];

export default function Booking() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const localDate = new Date(
      today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    setMinDate(localDate);
  }, []);

  const selectedService = services.find(item => item.name === service);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Hello Looks Hair Professional Salon!",
      "",
      "I would like to book an appointment.",
      "",
      `Name: ${name}`,
      `Service: ${service}`,
      `Price: ₹${selectedService?.price ?? 0}`,
      `Preferred Date: ${date}`,
      `Preferred Time: ${time}`,
      "",
      "Please confirm my appointment.",
      "Thank you!",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${salon.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }


  return (
    <section id="booking" className="section booking-section">
      <div className="booking-intro">
        <span className="eyebrow">YOUR NEW LOOK STARTS HERE</span>
        <h2>LET'S MAKE<br /><em>IT HAPPEN.</em></h2>
        <p>Choose your preferred service, date and time. We will connect you to our salon on WhatsApp to confirm your appointment.</p>
        <div className="booking-detail"><MessageCircle /> Easy WhatsApp booking</div>
        <div className="booking-detail"><CalendarDays /> Choose your preferred date</div>
        <div className="booking-detail"><Clock /> Select a convenient time</div>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <h3>Book Your Appointment</h3>
        <p className="form-subtitle">Fill in your details to get started.</p>

        <label htmlFor="customer-name">Full Name *</label>
        <input
          id="customer-name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your full name"
          required
          minLength={2}
        />

        <div className="form-row">
          <div>
            <label htmlFor="service">Choose Service *</label>
            <select
              id="service"
              value={service}
              onChange={e => setService(e.target.value)}
              required
            >
              <option value="">Select a service</option>
              {services.map(item => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="service-price">Price</label>
            <div
              id="service-price"
              className="flex min-h-[48px] items-center rounded-md border border-[#c9a45c]/40 bg-[#191919] px-4 font-semibold text-[#d6b36b]"
            >
              {selectedService
                ? `₹${selectedService.price.toLocaleString("en-IN")}`
                : "Select service"}
            </div>
          </div>
        </div>

        <div className="form-row">
          <div>
            <label htmlFor="date">Preferred Date *</label>
            <input
              id="date"
              type="date"
              min={minDate}
              value={date}
              onChange={e => setDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="time">Preferred Time *</label>
            <select
              id="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              required
            >
              <option value="">Select time</option>
              {timeSlots.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="button button-gold booking-submit">
          <MessageCircle size={19} /> Book via WhatsApp
        </button>
        <p className="privacy-note">
          Your WhatsApp app will open with your appointment details. You will send the message yourself.
        </p>
      </form>
    </section>
  );
}

