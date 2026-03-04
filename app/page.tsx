import fetchData from "@/lib/data";
export default async function Home() {
  const imageData = await fetchData();
  const photos = imageData.photos;
  return (
    <div>
      {photos.map((photo) => {
        return <img key={photo.id} src={photo.picture.url} alt={photo.title} />;
      })}
    </div>
  );
}
