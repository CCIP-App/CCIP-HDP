<template>
  <div class="fill-container">
    <div v-for="field in fields" :key="field.type" class="fill">
      <label :for="field.name" class="fill fill-label">
        <span>{{ field.label.zh }}｜{{ field.label.en }}</span>
      </label>
      <input
        :type="field.type"
        :name="field.name"
        v-model="fieldData[field.name]"
        class="fill fill-inputbox"
        required
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

import { FormState } from "@/store/types/form.type";

@Component
export default class Fill extends Vue {
  @Getter("field", { namespace: "form" })
  private fields!: FormState["field"];

  private fieldData: { [key: string]: string } = {};

  private mounted(): void {
    this.fields.forEach(field => {
      this.fieldData[field.name] = "";
    });
  }
}
</script>
