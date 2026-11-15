import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Transformations from "@/components/Transformations";
import WhyChooseUs from "@/components/WhyChooseUs";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Transformations />
        <WhyChooseUs />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

