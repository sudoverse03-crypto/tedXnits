import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const images = [
    {
      src: gallery1,
      alt: "TEDx speakers and engaged audience members at previous event",
    },
    {
      src: gallery2,
      alt: "TEDx speaker presenting on stage with red curtain background",
    },
    {
      src: gallery3,
      alt: "TEDx conference venue with attendees and red branding",
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Event <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Glimpses of inspiration, connection, and ideas worth spreading from TEDx events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up aspect-[4/3]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-lg text-muted-foreground mb-6">
            Have photos or videos from our events? We'd love to see them!
          </p>
          <Button variant="outline" size="lg" className="font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Submit Your Photos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
