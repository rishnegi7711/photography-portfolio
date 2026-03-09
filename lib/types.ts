export type Photo = {
  camera: string;
  id: string;
  lens: string;
  title: string;
  featured: boolean | null;
  picture: {
    url: string;
  };
};
