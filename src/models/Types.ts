export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: string;
  origin: string;
};

export enum Status {
  ALIVE = "alive",
  DEAD = "dead",
  UNKNOWN = "unknown",
  ALL = "all",
}

export type StateApp = {
  characters: Character[];
  page: number;
  nextPage: string;
  prevPage: string;
  pages: number;
  statusFilter: Status;
  search: string;
  currentCharacterId: number;
  currentCharacter: Character | null;
};
