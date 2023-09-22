export const API_URL = "https://disney_api.nomadcoders.workers.dev/characters";

export interface CharacterListApi {
  id?: number;
  name?: string;
  imageUrl?: string;
}

export interface CharacterDetailsApi {
  id?: number;
  films?: string[];
  name?: string;
  imageUrl?: string;
  sourceUrl?: string;
}

export interface ErrorProps {
  error?: string;
}
