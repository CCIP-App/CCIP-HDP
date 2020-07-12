<template>
  <div id="app">
    <Navbar v-if="$route.meta.type === 'Step'" />
    <router-view class="view-port" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Navbar from "@/components/Navbar.vue";

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
