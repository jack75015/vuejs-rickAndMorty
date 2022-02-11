<template>
  <div class="card" v-if="character !== null && character !== undefined">
    <h5 class="card-header">{{ character?.name }}</h5>
    <div class="box">
      <img class="card-img-top" :src="character?.image" alt="Card image cap" />
      <div class="card-body">
        <p class="card-text">Status: {{ character?.status }}</p>
        <p class="card-text">Species: {{ character?.species }}</p>
        <p class="card-text">Gender: {{ character?.gender }}</p>
        <p class="card-text">Origin: {{ character?.origin }}</p>
        <p class="card-text">Location: {{ character?.location }}</p>
      </div>
    </div>
  </div>

  <div class="card" v-else>
    <div class="box">
      <img
        class="card-img-top"
        src="https://stickerdeco.fr/wp-content/uploads/2018/08/rick_and_morty-02.png"
        alt="Card image cap"
      />
      <div class="card-body">
        <p class="card-text">ERROR</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "CharacterDetails",
  setup() {
    const store = useStore();
    const route = useRoute();
    const id = route.params.id;
    if (!isNaN(+id)) {
      return {
        characterAction: onBeforeMount(() =>
          store.dispatch("getCharacter", id)
        ),
        character: computed(() => store.getters.getCurrentCharacter),
      };
    } else {
      return {
        character: undefined,
      };
    }
  },
});
</script>

<style lang="scss">
p {
  font-weight: bold;
}
.box {
  display: flex;
  align-items: center;
}
.card-text {
  font-size: 2.5em;
}
.card-header {
  font-size: 4em;
}
.card {
  padding: 5px;
  margin: 10px;
  padding-bottom: 2%;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
}

.card-img-top {
  padding-left: 2%;
  padding-right: 2%;
  max-width: 500px;
}

.card-body_ {
  padding: initial;
  padding-top: 5px;
}

.card-title {
  margin-bottom: initial;
}
</style>
