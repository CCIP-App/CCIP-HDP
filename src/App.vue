<template>
  <div id="app">
    <Navbar v-if="$route.meta.type === 'Step'" />
    <router-view class="view-port" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

import metadataParser from "markdown-yaml-metadata-parser";

import { AppState } from "@/store/types/app.type";
import { DeclarationState } from "@/store/types/declaration.type";

import rawHDP from "@/../template/HDP.md";
import Navbar from "@/components/Navbar.vue";

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  @Action("register", { namespace: "app" })
  private register!: ({
    title,
    endpoint
  }: {
    title: AppState["title"];
    endpoint: AppState["endpoint"];
  }) => void;

  @Action("set", { namespace: "declaration" })
  private setContent!: (content: DeclarationState["content"]) => void;

  private created(): void {
    const HDP = metadataParser(rawHDP);

    this.register({
      title: HDP.metadata.title,
      endpoint: HDP.metadata.endpoint
    });
    this.setContent(HDP.content);
  }
}
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
