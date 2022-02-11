import { StateApp, Status } from "@/models/Types";

export const getDefaultState = (): StateApp => {
  return {
    characters: [],
    page: 1,
    nextPage: "",
    prevPage: "",
    pages: 0,
    statusFilter: Status.ALL,
    search: "",
    currentCharacterId: 0,
    currentCharacter: null,
  };
};

export const state: StateApp = getDefaultState();
