<template>
  <div class="scanner-container">
    <div class="scanner"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Scanner extends Vue {
  @Prop() private msg!: string;
}
</script>
