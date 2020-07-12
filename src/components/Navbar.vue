<template>
  <nav class="navbar navbar-container">
    <ul class="navbar">
      <li
        v-for="(step, index) in routeList
          .filter(route => route.meta.type === 'Step')
          .sort((a, b) => (a.meta.index > b.meta.index ? 1 : -1))"
        :key="step.name"
        :class="{ active: $route.meta.index >= step.meta.index }"
        class="navbar navbar-step-item"
      >
        <span class="font-code">{{ index + 1 }}</span>
        <span>{{ step.meta.label.zh }}</span>
        <span>{{ step.meta.label.en }}</span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { routes } from "@/router";

@Component
export default class Navbar extends Vue {
  private routeList = routes;
}
</script>
