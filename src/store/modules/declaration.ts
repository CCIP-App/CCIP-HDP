import { ActionTree, GetterTree, MutationTree, Module } from "vuex";

import { CoreState } from "@/store/types/core.type";
import { DeclarationState } from "@/store/types/declaration.type";

import * as cmd from "@/store/mutation-types";

const namespaced = true;

export const state: DeclarationState = {
  content: ""
};

const getters: GetterTree<DeclarationState, CoreState> = {
  content: (state): DeclarationState["content"] => state.content
};

const actions: ActionTree<DeclarationState, CoreState> = {
  set({ commit }, content: DeclarationState["content"]): void {
    commit(cmd.DECLARATION__SET_CONTENT, content);
  }
};

const mutations: MutationTree<DeclarationState> = {
  [cmd.DECLARATION__SET_CONTENT](
    state: DeclarationState,
    content: DeclarationState["content"]
  ) {
    state.content = content;
  }
};

export const declaration: Module<DeclarationState, CoreState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
