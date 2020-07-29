<template>
  <div class="status status-container">
    <p class="status status-msg">
      您已完成健康聲明填寫
      <br /><br />
      You have completed the health declaration
    </p>
    <qrcode
      :value="token"
      :options="{ width: 300, color: { dark: '#3C2354' } }"
      tag="img"
      class="status status-qrcode"
    />
    <p class="status status-msg">
      請妥善保存您的 QR Code 以供入場查驗用
      <br /><br />
      Please keep your QR Code properly for entry
    </p>
    <div v-if="callback && !appMode" class="button" @click="openOPass">
      <img src="https://opass.app/img/logo.png" alt="" />
      <p>直接匯出 OPass 票卷</p>
      <p>Export OPass ticket directly</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component
export default class Status extends Vue {
  @Getter("appMode", { namespace: "app" })
  private appMode!: string;

  @Getter("callback", { namespace: "app" })
  private callback!: string;

  @Getter("token", { namespace: "form" })
  private token!: string;

  private openOPass(): void {
    const url = this.callback.replace(/<<TOKEN>>/gm, this.token);
    window.open(url, "_blank");
  }
}
</script>
