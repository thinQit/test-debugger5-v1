"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

interface PhotoGalleryMasonryProps {
  images?: string[];
}

export default function PhotoGalleryMasonry({
  images = [
    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577044/site-images/restaurant/1121480.jpg",
    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577086/site-images/restaurant/10520478.jpg",
    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577093/site-images/restaurant/1224789.jpg",
    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577092/site-images/restaurant/12387876.jpg",
    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577101/site-images/restaurant/11123392.jpg",
    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577087/site-images/restaurant/11236793.jpg",
  ],
}: Partial<PhotoGalleryMasonryProps>) {
  const [active, setActive] = useState("");

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
          {images.map((src, idx) => (
            <button key={src + idx} className="group relative w-full overflow-hidden rounded-xl" onClick={() => setActive(src)}>
              <Image src={src} alt="Bakery gallery image" width={700} height={500} className="h-auto w-full transition-transform duration-300 group-hover:scale-105" unoptimized />
            </button>
          ))}
        </div>
      </div>
      {active && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4" onClick={() => setActive("")}>
          <button className="absolute right-4 top-4 text-white"><X /></button>
          <Image src={active} alt="Expanded gallery image" width={1400} height={900} className="max-h-[90vh] w-auto rounded-lg object-contain" unoptimized />
        </div>
      )}
    </section>
  );
}
