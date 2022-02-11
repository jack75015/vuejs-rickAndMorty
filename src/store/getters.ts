import { StateApp, Character, Status } from "@/models/Types";

export const getters = {
  getCharacters: (state: StateApp): Character[] => {
    return state.characters;
  },
  getPage: (state: StateApp): number => {
    return state.page;
  },
  getPages: (state: StateApp): number => {
    return state.pages;
  },
  getNextPage: (state: StateApp): string => {
    return state.nextPage;
  },
  getPrevPage: (state: StateApp): string => {
    return state.prevPage;
  },
  getStatusFilter: (state: StateApp): Status => {
    return state.statusFilter;
  },
  getSearch: (state: StateApp): string => {
    return state.search;
  },
  getCurrentCharacter: (state: StateApp): Character | null => {
    return state.currentCharacter;
  },
};
