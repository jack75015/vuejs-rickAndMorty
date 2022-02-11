<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" @click="firstPageAction()" href="#">First</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="prevPageAction()" href="#">Previous</a>
      </li>
      <li class="page-item">
        <a class="page-link">{{ page }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="nextPageAction()" href="#">Next</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="lastPageAction()" href="#"
          >Last ({{ pages }})</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Pagination",
  setup() {
    const store = useStore();
    return {
      nextPageAction: () => store.dispatch("getNextPage"),
      prevPageAction: () => store.dispatch("getPrevPage"),
      firstPageAction: () => store.dispatch("getFirstPage"),
      lastPageAction: () => store.dispatch("getLastPage"),
      page: computed(() => store.getters.getPage),
      pages: computed(() => store.getters.getPages),
    };
  },
});
</script>
<style>
.page-link {
  background-color: black !important;
}
</style>
