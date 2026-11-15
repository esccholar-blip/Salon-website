import { MessageCircle } from "lucide-react";
import { salon } from "@/lib/salon";

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hello Looks Hair Professional Salon! I would like to know more about your services.");
  return (
    <a className="whatsapp-float" href={`https://wa.me/${salon.phone}?text=${message}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <MessageCircle size={25} />
    </a>
  );
}

