<template>
  <div class="col-sm-2">
    <div class="card card_">
      <router-link :to="{ name: 'Character', params: { id: this.id } }">
        <img class="card-img-top" :src="this.source" alt="Card image cap" />
      </router-link>
      <div class="card-body card-body_">
        <h5 class="card-title">{{ this.title }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CharacterCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style>
.card_ {
  padding: 5px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 10px;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
}

.card-img-top {
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2%;
}

.card-body_ {
  padding: initial;
  padding-top: 5px;
}

.card-title {
  margin-bottom: initial;
}
</style>
