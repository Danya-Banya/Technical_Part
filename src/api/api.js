import axios from "axios";

export const $api = axios.create({
  baseURL: "https://api.thedogapi.com/v1/images",
  headers: {
    "Content-Type": "application/json",
    "x-api-key":
      "live_NoKXhv2FRAoieafjW04dj9E4ay6HRr95zFFp7W6aTOWrcMnhurbKvDtkIYqYWKrg",
  },
});
