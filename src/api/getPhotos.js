import axios from "axios";
import { $api } from "./api";

export const getPhotos = async () => {
  const response = await $api.get("/search?limit=16");
  return response.data;
};
