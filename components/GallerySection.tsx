"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

export default function GallerySection() {
  return (
    <AnimatedSection>
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl text-center font-semibold">
          Nuestra comunidad en acción
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={src}
                alt="Galería"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}

        </div>

      </section>
    </AnimatedSection>
  );
}