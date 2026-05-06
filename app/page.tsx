import fetchData from "@/lib/data";
import Image from "next/image";

export default async function Home() {
  const imageData = await fetchData();
  const photos = imageData.photos;

  return (
    <div className="px-2 py-2 pt-25 bg-neutral-900 min-h-screen">
      <div className="px-10 py-10">
        <h1 className="text-7xl text-white ">Rishi</h1>
        <h2 className="italic text-4xl text-white ">
          Sneaky paparazzi for the regular people
        </h2>
      </div>

      <div className="columns-3 sm:columns-1 md:columns-2 lg:columns-4">
        {photos.map((photo) => {
          return (
            <div key={photo.id} className="overflow-hidden">
              <Image
                src={photo.picture.url}
                alt={photo.title}
                className="object-cover mb-7 hover:scale-105 transition-transform duration-300 w-full h-full"
                height={photo.picture.height}
                width={photo.picture.width}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
