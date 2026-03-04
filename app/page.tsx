import fetchData from "@/lib/data";
export default async function Home() {
  const imageData = await fetchData();
  const photos = imageData.photos;
  return (
    <div className="px-2 py-2 bg-neutral-900">
      <div className="px-10 py-10">
        <h1 className="text-7xl text-white ">Rishi</h1>
        <h2 className="italic text-4xl text-white ">
          Sneaky paparazzi for the regular people
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => {
          return (
            <img
              key={photo.id}
              src={photo.picture.url}
              alt={photo.title}
              className="w-full h-full object-cover "
            />
          );
        })}
      </div>
    </div>
  );
}
