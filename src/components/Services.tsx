const services = [
  {
    name: "Facial",
    price: 1000,
    image: "photo-1512290923902-8a9f81dc236c",
    tag: "PREMIUM CARE",
  },
  {
    name: "Scrub Gold",
    price: 200,
    image: "photo-1600334089648-b0d9d3028eb2",
    tag: "SKIN CARE",
  },
  {
    name: "Mantra Facial",
    price: 800,
    image: "photo-1570172619644-dfd03ed5d881",
    tag: "SPECIAL TREATMENT",
  },
  {
    name: "Hair Spa",
    price: 500,
    image: "photo-1527799820374-dcf8d9d4a388",
    tag: "HAIR CARE",
  },
  {
    name: "Oxy Life Bleach",
    price: 400,
    image: "photo-1516975080664-ed2fc6a32937",
    tag: "SKIN BRIGHTENING",
  },
  {
    name: "Fruit Hair Colour",
    price: 200,
    image: "photo-1621605815971-fbc98d665033",
    tag: "HAIR COLOUR",
  },
  {
    name: "Head Massage",
    price: 70,
    image: "photo-1519823551278-64ac92734fb1",
    tag: "RELAX & REFRESH",
  },
  {
    name: "D-Tan",
    price: 300,
    image: "photo-1596755389378-c31d21fd1273",
    tag: "SKIN TREATMENT",
  },
  {
    name: "Streak Colour",
    price: 500,
    image: "photo-1599351431202-1e0f0137899a",
    tag: "TRENDING STYLE",
  },
  {
    name: "L'Oréal Colour",
    price: 500,
    image: "photo-1503951914875-452162b0f3f1",
    tag: "PROFESSIONAL COLOUR",
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section section">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <span className="eyebrow">OUR SERVICES & PRICES</span>
          <h2>
            THE ART OF <em>GROOMING</em>
          </h2>
          <p>
            Premium care, professional products and expert attention
            to every detail.
          </p>
        </div>

        <div className="services-grid premium-services-grid">
          {services.map((service, index) => (
            <article className="service-card premium-service-card" key={service.name}>
              <div
                className="service-image premium-service-image"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=900&q=85)`,
                }}
              >
                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="service-tag">{service.tag}</span>
              </div>

              <div className="service-info premium-service-info">
                <div className="service-title-row">
                  <h3>{service.name}</h3>
                  <span className="service-price">
                    ₹{service.price.toLocaleString("en-IN")}
                  </span>
                </div>

                <a
                  href="#booking"
                  className="service-book-button"
                >
                  BOOK NOW <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
