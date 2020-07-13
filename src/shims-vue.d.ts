declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.md" {
  const content: string;
  export default content;
}

declare module "vue-qrcode-reader";

declare module "markdown-yaml-metadata-parser";

declare module "markdown-it-todo";

declare module "punycode";

declare module "@chenfengyuan/vue-qrcode";
