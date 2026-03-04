const fetchData = async () => {
  const data = await fetch(`${process.env.HYGRAPH_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `query myQuery{
          photos{
            title
            id
            camera
            lens
            featured
         		picture{
              url
            }
          }
        }`,
    }),
  });

  const parsedData = await data.json();

  return parsedData.data;
};

export default fetchData;
