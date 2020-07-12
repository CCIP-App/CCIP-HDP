<template>
  <nav class="nav">
    <ul>
      <li
        v-for="step in routeList
          .filter(route => route.meta.type === 'Step')
          .sort(route => route.meta.index)"
        :key="step.name"
        :class="{ active: $route.meta.index <= step.meta.index }"
        class="step"
      >
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
