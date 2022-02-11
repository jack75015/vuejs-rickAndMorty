<template>
  <div class="container">
    <div class="search">
      <div class="row">
        <div class="col-md-6">
          <div class="search-1">
            <i class="bx bx-search-alt"></i>
            <input
              type="text"
              v-model="searchInput"
              placeholder="Search your character"
            />
            <button @click="search()">Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
  data: function () {
    return {
      searchInput: "",
    };
  },
  methods: {
    search() {
      if (this.$data.searchInput !== "") {
        this.setSearchAction(this.$data.searchInput);
        this.getSearchCharactersAction();
      } else {
        this.getCharactersAction();
      }
    },
  },
  setup() {
    const store = useStore();
    return {
      setSearchAction: (search) => store.dispatch("setSearch", search),
      getSearchCharactersAction: () => store.dispatch("getSearchCharacters"),
      getCharactersAction: () => store.dispatch("getCharacters"),
    };
  },
});
</script>

<style>
.card_ {
  padding: 5px;
  margin: 10px;
}

.card-body_ {
  padding: initial;
  padding-top: 5px;
}

.card-title {
  margin-bottom: initial;
}
</style>
