export default function Transformations() {
  const photos = [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900",
  ];

  return (
    <section id="transformations" className="section transformations-section">
      <div className="section-heading">
        <span className="eyebrow">THE LOOKS EXPERIENCE</span>
        <h2>CRAFTED FOR <em>YOUR STYLE</em></h2>
        <p>
          Every detail matters. Discover the art of professional men's
          grooming and modern barbering.
        </p>
      </div>

      <div className="transformation-grid">
        {photos.map((photo, i) => (
          <div
            key={photo}
            className={`transformation-photo photo-${i + 1}`}
            style={{ backgroundImage: `url("${photo}")` }}
          >
            <span>LOOKS · STYLE · CONFIDENCE</span>
          </div>
        ))}
      </div>

      <p className="gallery-note">
        Actual salon haircut and grooming photographs can be added here.
      </p>
    </section>
  );
}
