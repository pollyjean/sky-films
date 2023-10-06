import { IMG_URL } from "./commonConfig";

export const makeImagePath = async (image: string) => {
  return `${IMG_URL}/w500${image}`;
};

export const makeBgPath = async (image: string) => {
  return `${IMG_URL}/original${image}`;
};
