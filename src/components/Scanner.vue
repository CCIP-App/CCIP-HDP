<template>
  <div class="scanner-container">
    <div class="scanner">
      <qrcode-stream @decode="onDecode" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

import { FormState } from "@/store/types/form.type";

@Component
export default class Scanner extends Vue {
  @Action("setToken", { namespace: "form" })
  private setToken!: (token: FormState["token"]) => void;

  private onDecode(decoded: string): void {
    if (decoded && typeof decoded === "string") {
      this.setToken(decoded);
    }
  }
}
</script>
