import Image from "next/image";

export default function Navbar() {
  return (
    <header className="relative z-50 border-b border-[#c9a45c]/30 bg-[#101010]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="Looks Hair Professional Salon Logo"
            width={64}
            height={64}
            priority
            className="h-14 w-14 rounded-full border border-[#c9a45c] object-cover"
          />
          <div>
            <div className="font-serif text-lg font-bold tracking-wider text-[#d6b36b]">
              LOOKS HAIR
            </div>
            <div className="text-[10px] font-semibold tracking-[0.22em] text-white">
              PROFESSIONAL SALON
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-white md:flex">
          <a href="#home" className="hover:text-[#d6b36b]">Home</a>
          <a href="#about" className="hover:text-[#d6b36b]">About</a>
          <a href="#services" className="hover:text-[#d6b36b]">Services</a>
          <a href="#transformations" className="hover:text-[#d6b36b]">Gallery</a>
          <a href="#contact" className="hover:text-[#d6b36b]">Contact</a>
        </nav>

        <a
          href="#booking"
          className="bg-[#c9a45c] px-5 py-3 text-xs font-bold tracking-widest text-black hover:bg-[#e0c17d]"
        >
          BOOK NOW
        </a>
      </div>
    </header>
  );
}


