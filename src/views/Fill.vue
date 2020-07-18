<template>
  <div class="fill fill-container">
    <div v-for="field in fields" :key="field.type" class="fill">
      <input
        :type="field.type"
        :name="field.name"
        v-model="fieldData[field.name]"
        class="fill fill-inputbox"
      />
      <label :for="field.name" class="fill fill-label">
        <span>{{ field.label.zh }}｜{{ field.label.en }}</span>
        <span
          v-if="
            typeof field.required === 'object' &&
              field.required.type === 'AtLeaseOne'
          "
          >擇一填寫｜At lease one</span
        >
        <span v-else-if="typeof field.required === 'boolean' && field.required"
          >必填｜Required</span
        >
      </label>
    </div>
    <div class="button" @click="checkData()">
      <span>下一步｜Next</span>
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";

import { FormState } from "@/store/types/form.type";

@Component
export default class Fill extends Vue {
  @Action("setData", { namespace: "form" })
  private setData!: (data: FormState["data"]) => void;

  @Getter("field", { namespace: "form" })
  private fields!: FormState["field"];

  private fieldData: { [key: string]: string } = {};

  private mounted(): void {
    this.fields.forEach(field => {
      this.fieldData[field.name] = "";
    });
  }

  private checkData(): void {
    try {
      this.fields.forEach(field => {
        if (typeof field.required === "boolean" && field.required) {
          if (!this.fieldData[field.name]) {
            throw new Error(
              "必填欄位不可為空！\nRequired field can't not be empty!"
            );
          }
        } else if (
          typeof field.required === "object" &&
          field.required.type === "AtLeaseOne"
        ) {
          if (
            !this.fieldData[field.required.relavant] &&
            !this.fieldData[field.name]
          ) {
            throw new Error("請擇一填寫！\nAt lease one fill should be fill!");
          }
        }
      });

      const result = window.confirm("再次確定我的聯絡資訊無誤。\nMake sure again that my contact information is correct.\n\n" + Object.keys(this.fieldData).map((key) => (`${key}: ${this.fieldData[key]}`)).join("\n"));

      if (result) {
        this.setData(this.fieldData);
        this.$router.push({ name: "Declaration" });
      }
    } catch (error) {
      window.alert(error.message);
    }
  }
}
</script>
