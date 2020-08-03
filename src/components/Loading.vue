<template>
  <div class="loading-container">
    <font-awesome-icon class="loading" :icon="['fas', 'circle-notch']" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

export default class Loading extends Vue {}
</script>
