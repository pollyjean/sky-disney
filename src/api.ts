import { API_URL } from "./commonConfig";

export const fetchCharacterList = async () => {
  return fetch(`${API_URL}`).then((res) => res.json());
};

export const fetchDetails = async (id: string) => {
  return fetch(`${API_URL}/${id}`).then((res) => res.json());
};
