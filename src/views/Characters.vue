<template>
  <div class="Characters">
    <div class="container">
      <div class="row">
        <div class="form-check col-sm">
          <SearchBar></SearchBar>
        </div>
        <div class="form-check col-sm">
          <CheckFilter></CheckFilter>
        </div>
      </div>
    </div>

    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="mr-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">Hello, world! This is a toast message.</div>
    </div>
    <div class="container">
      <div class="row">
        <CharacterCard
          v-for="character in characters"
          :key="character.id"
          :id="character.id"
          :title="character.name"
          :source="character.image"
        ></CharacterCard>
      </div>
    </div>
    <Pagination class="d-flex justify-content-center"></Pagination>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, onMounted } from "vue";
import { useStore } from "vuex";
import CharacterCard from "../components/CharacterCard.vue";
import Pagination from "../components/Pagination.vue";
import SearchBar from "../components/SearchBar.vue";
import CheckFilter from "../components/CheckFilter.vue";
import { Status } from "@/models/Types";

export default defineComponent({
  name: "Characters",
  components: {
    CharacterCard,
    Pagination,
    SearchBar,
    CheckFilter,
  },
  setup() {
    const store = useStore();
    return {
      setFilterAction: onBeforeMount(() =>
        store.dispatch("setFilter", Status.ALL)
      ),
      charactersAction: onMounted(() => store.dispatch("getCharacters")),
      characters: computed(() => store.getters.getCharacters),
    };
  },
});
</script>

<style>
.Characters {
  background-image: url(../assets/images/background.jpg);
  padding-top: 20px;
}
</style>
