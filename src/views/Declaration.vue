<template>
  <div class="article article-container">
    <article class="article" v-html="content" />
    <div class="button" @click="checkData()">
      <span>下一步｜Next</span>
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";

import { AppState } from "@/store/types/app.type";
import { FormState, FormPayload, FormResponse } from "@/store/types/form.type";

@Component
export default class Declaration extends Vue {
  @Action("setToken", { namespace: "form" })
  private setToken!: (token: FormState["token"]) => void;

  @Action("sendForm", { namespace: "form" })
  private sendForm!: (args: {
    endpoint: AppState["endpoint"];
    data: FormPayload;
  }) => Promise<FormResponse>;

  @Getter("endpoint", { namespace: "app" })
  private endpoint!: string;

  @Getter("content", { namespace: "declaration" })
  private content!: string;

  @Getter("token", { namespace: "form" })
  private token!: FormState["token"];

  @Getter("data", { namespace: "form" })
  private formData!: FormState["data"];

  private async checkData(): Promise<void> {
    try {
      (document.querySelectorAll(".markdown-todo") as NodeListOf<
        HTMLInputElement
      >).forEach(checkbox => {
        if (!checkbox.checked) {
          throw new Error(
            "你必須勾選全部項目並同意此健康聲明後才能進入會場。\nYou must check all items and agree to this health declaration before entering the venue."
          );
        }
      });

      if (this.token) {
        await this.sendForm({
          endpoint: this.endpoint,
          data: {
            token: this.token,
            status: true,
            ...this.formData
          }
        });

        this.setToken(this.token);
      } else {
        const res = await this.sendForm({
          endpoint: this.endpoint,
          data: {
            status: true,
            ...this.formData
          }
        });

        this.setToken(res.id);
      }

      this.$router.push({ name: "Status" });
    } catch (error) {
      window.alert(error.message);
    }
  }
}
</script>
