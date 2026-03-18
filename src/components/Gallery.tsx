import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const images = [
  {
    src: "/pics/real-estate-low-angle-shot-c9wnxm14uva0ydio.jpg",
    alt: "Modern residential property",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/pics/file-6h8s.jpeg",
    alt: "Land development project",
    span: "",
  },
  {
    src: "/pics/media_1159b19a8225b2413136806b0be15e4c921e3d122.png",
    alt: "Construction and development",
    span: "",
  },
  {
    src: "/pics/etre-hero.jpg.avif",
    alt: "Real estate landscape",
    span: "md:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Gallery
          </h2>
          <Separator className="w-16 mx-auto bg-gold h-1 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A glimpse into the properties, land, and projects that define my
            real estate journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group ${image.span} ${
                index === 0 ? "min-h-[300px] md:min-h-[400px]" : "min-h-[200px] md:min-h-[200px]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
