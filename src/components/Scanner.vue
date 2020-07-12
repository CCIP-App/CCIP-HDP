<template>
  <div class="scanner-container">
    <div class="scanner">
      <qrcode-stream @decode="onDecode" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Scanner extends Vue {
  private onDecode(decoded: string): void {
    console.log(decoded);
  }
}
</script>
