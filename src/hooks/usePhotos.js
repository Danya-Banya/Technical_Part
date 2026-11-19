import axios from "axios";
import { Query, useQuery } from "@tanstack/react-query";
import { getPhotos } from "../api/getPhotos";

export const usePhotos = () => {
  return useQuery({
    queryKey: ["dogs", 12],
    queryFn: getPhotos,
  });
};
