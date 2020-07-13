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

import MarkdownIt from "markdown-it";
import MarkdownItContainer from "markdown-it-container";
import MarkdownItTodo from "markdown-it-todo";

import { AppState } from "@/store/types/app.type";
import { DeclarationState } from "@/store/types/declaration.type";
import { FormState } from "@/store/types/form.type";

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
    endpoint,
    callback
  }: {
    title: AppState["title"];
    endpoint: AppState["endpoint"];
    callback?: AppState["callback"];
  }) => void;

  @Action("set", { namespace: "declaration" })
  private setContent!: (content: DeclarationState["content"]) => void;

  @Action("setFields", { namespace: "form" })
  private setFields!: (data: FormState["data"]) => void;

  private created(): void {
    const HDP = metadataParser(rawHDP);
    const mdParser = new MarkdownIt();
    mdParser
      .use(MarkdownItContainer, "spotlight-part")
      .use(MarkdownItContainer, "spotlight-danger")
      .use(MarkdownItContainer, "spotlight-warning")
      .use(MarkdownItTodo);

    this.register({
      title: HDP.metadata.title,
      endpoint: HDP.metadata.endpoint,
      callback: HDP.metadata.callback
    });
    this.setFields(HDP.metadata.fields);
    this.setContent(
      mdParser
        .render(HDP.content)
        .replace(/spotlight/gm, "spotlight spotlight")
        .replace(/disabled="true"/gm, "")
    );
  }
}
</script>

<style lang="scss">
@import "@/scss/main.scss";
</style>
