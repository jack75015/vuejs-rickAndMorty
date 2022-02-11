<template>
  <div class="container">
    <div class="row">
      <div class="form-check col-sm">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          value="all"
          id="flexRadioDefault1"
          v-model="checkbox"
          @change="check()"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault1"> ALL </label>
      </div>
      <div class="form-check col-sm">
        <input
          class="form-check-input"
          type="radio"
          value="alive"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          v-model="checkbox"
          @change="check()"
        />
        <label class="form-check-label" for="flexRadioDefault2"> ALIVE </label>
      </div>
      <div class="form-check col-sm">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="dead"
          v-model="checkbox"
          @change="check()"
        />
        <label class="form-check-label" for="flexRadioDefault1"> DEAD </label>
      </div>
      <div class="form-check col-sm">
        <input
          class="form-check-input"
          type="radio"
          v-model="checkbox"
          value="unknown"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          @change="check()"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          UNKNOWN
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckFilter",
  data: function () {
    return {
      checkbox: null,
    };
  },
  methods: {
    check() {
      this.setFilterAction(this.$data.checkbox);
      this.getCharactersAction();
    },
  },
  setup() {
    const store = useStore();
    return {
      setFilterAction: (filter) => store.dispatch("setFilter", filter),
      getCharactersAction: () => store.dispatch("getCharacters"),
    };
  },
});
</script>
<style>
.form-check {
  text-align: initial;
  color: black;
}
</style>
