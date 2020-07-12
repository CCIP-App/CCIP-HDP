<template>
  <div class="landing-container">
    <Scanner />
    <div
      v-if="status !== null"
      :class="{ passed: status }"
      class="landing status-icon"
    >
      <font-awesome-icon v-if="status" :icon="['fas', 'check']" />
      <font-awesome-icon v-else :icon="['fas', 'times']" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";

import { AppState } from "@/store/types/app.type";
import { FormState, FormResponse } from "@/store/types/form.type";

import Scanner from "@/components/Scanner.vue";

@Component({
  components: {
    Scanner
  }
})
export default class Landing extends Vue {
  @Action("verifyToken", { namespace: "form" })
  private verifyToken!: (args: {
    endpoint: AppState["endpoint"];
    token: FormState["token"];
  }) => Promise<FormResponse>;

  @Getter("endpoint", { namespace: "app" })
  private endpoint!: string;

  @Getter("token", { namespace: "form" })
  private token!: string;

  @Watch("token")
  private async onTokenChange(token: string) {
    const res = (await this.verifyToken({
      endpoint: this.endpoint,
      token: token
    })) as { fill: string; status: string };

    if (!res.fill) {
      this.$router.push({ name: "Fill" });
    } else if (res.status) {
      this.status = true;
    } else {
      this.status = false;
    }
  }

  private status: boolean | null = null;
}
</script>
