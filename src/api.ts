import { API_URL } from "./commonConfig";

export const fetchCharacterList = async () => {
  return await fetch(`${API_URL}`).then((res) => res.json());
};

export const fetchDetails = async (id: string) => {
  return await fetch(`${API_URL}/${id}`).then((res) => res.json());
};
