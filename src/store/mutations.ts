import { StateApp, Character, Status } from "@/models/Types";

export const mutations = {
  SET_CHARACTERS(state: StateApp, characters: Character[]): void {
    state.characters = characters;
  },
  SET_NEXT_PAGE(state: StateApp, nextPage: string): void {
    state.nextPage = nextPage;
  },
  SET_PREV_PAGE(state: StateApp, prevPage: string): void {
    state.prevPage = prevPage;
  },
  SET_PAGES(state: StateApp, pages: number): void {
    state.pages = pages;
  },
  SET_PAGE(state: StateApp, page: number): void {
    state.page = page;
  },
  SET_FILTER(state: StateApp, filter: Status): void {
    state.statusFilter = filter;
  },
  SET_SEARCH(state: StateApp, search: string): void {
    state.search = search;
  },
  SET_CURRENT_CHARACTER(state: StateApp, character: Character): void {
    state.currentCharacter = character;
  },
};
