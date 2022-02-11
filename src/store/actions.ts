/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Character, Status } from "@/models/Types";
import axios from "axios";

const getCharactersApiUrl = (page: number, filter: Status): string => {
  if (filter !== Status.ALL) {
    return `https://rickandmortyapi.com/api/character/?page=${page}&status=${filter}`;
  } else {
    return `https://rickandmortyapi.com/api/character?page=${page}`;
  }
};

const getSearchApiUrl = (page: number, search: string): string => {
  return `https://rickandmortyapi.com/api/character/?name=${search}`;
};

const getCharacterApiUrl = (id: number): string => {
  return `https://rickandmortyapi.com/api/character/${id}`;
};

const getCharacter = ({
  id,
  name,
  status,
  species,
  gender,
  image,
  ...apiObject
}: any): Character => {
  return {
    id,
    name,
    status,
    species,
    gender,
    image,
    location: apiObject.location.name as string,
    origin: apiObject.origin.name,
  };
};

const getCharacters = (result: any): Character[] =>
  result.map((elt: any) => getCharacter(elt));

const saveAPIInfos = (
  context: any,
  nextPage: string,
  prevPage: string,
  page: number,
  pages: number,
  characters: Character[]
): void => {
  context.commit("SET_CHARACTERS", characters);
  context.commit("SET_PAGE", page);
  context.commit("SET_NEXT_PAGE", nextPage);
  context.commit("SET_PREV_PAGE", prevPage);
  context.commit("SET_PAGES", pages);
};

export const actions = {
  getCharacters(context: any): void {
    axios
      .get(getCharactersApiUrl(1, context.getters.getStatusFilter))
      .then((response: any) => {
        saveAPIInfos(
          context,
          response.data.info.next,
          response.data.info.prev,
          1,
          response.data.info.pages,
          getCharacters(response.data.results)
        );
      })
      .catch(() => alert(`Error API Call`));
  },
  getNextPage(context: any): void {
    if (context.getters.getPage + 1 <= context.getters.getPages) {
      axios
        .get(context.getters.getNextPage)
        .then((response: any) => {
          saveAPIInfos(
            context,
            response.data.info.next,
            response.data.info.prev,
            context.getters.getPage + 1,
            response.data.info.pages,
            getCharacters(response.data.results)
          );
        })
        .catch(() => alert(`Error API Call`));
    }
  },
  getPrevPage(context: any): void {
    if (context.getters.getPage - 1 > 0) {
      axios
        .get(context.getters.getPrevPage)
        .then((response: any) => {
          saveAPIInfos(
            context,
            response.data.info.next,
            response.data.info.prev,
            context.getters.getPage - 1,
            response.data.info.pages,
            getCharacters(response.data.results)
          );
        })
        .catch(() => alert(`Error API Call`));
    }
  },
  getFirstPage(context: any): void {
    axios
      .get(getCharactersApiUrl(1, context.getters.getStatusFilter))
      .then((response: any) => {
        saveAPIInfos(
          context,
          response.data.info.next,
          response.data.info.prev,
          1,
          response.data.info.pages,
          getCharacters(response.data.results)
        );
      })
      .catch(() => alert(`Error API Call`));
  },
  getLastPage(context: any): void {
    axios
      .get(
        getCharactersApiUrl(
          context.getters.getPages,
          context.getters.getStatusFilter
        )
      )
      .then((response: any) => {
        saveAPIInfos(
          context,
          response.data.info.next,
          response.data.info.prev,
          context.getters.getPages,
          response.data.info.pages,
          getCharacters(response.data.results)
        );
      })
      .catch(() => alert(`Error API Call`));
  },
  getSearchCharacters(context: any): void {
    axios
      .get(getSearchApiUrl(context.getters.getPage, context.getters.getSearch))
      .then((response: any) => {
        saveAPIInfos(
          context,
          response.data.info.next,
          response.data.info.prev,
          1,
          response.data.info.pages,
          getCharacters(response.data.results)
        );
      })
      .catch(() => alert(`"${context.getters.getSearch}": Search not found`));
  },
  getCharacter(context: any, id: number): void {
    axios
      .get(getCharacterApiUrl(id))
      .then((response: any) => {
        context.commit("SET_CURRENT_CHARACTER", getCharacter(response.data));
      })
      .catch(() => alert(`Error API Call`));
  },
  setFilter(context: any, filter: Status): void {
    context.commit("SET_FILTER", filter);
  },
  setSearch(context: any, search: string): void {
    context.commit("SET_SEARCH", search);
  },
};
