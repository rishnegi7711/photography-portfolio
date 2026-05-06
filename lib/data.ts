import { Photo } from "./types";

const fetchData = async (): Promise<{ photos: Photo[] }> => {
  const data = await fetch(`${process.env.HYGRAPH_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `query myQuery{
          photos(first: 50){
            title
            id
            camera
            lens
            featured
         		picture{
              url(
              transformation: {
              image:{compress:{metadata: true}}
              }
              )
              height
              width
            }
          }
        }`,
      next: { revalidate: 3600 },
    }),
  });

  const parsedData = await data.json();
  return parsedData.data;
};

export default fetchData;
