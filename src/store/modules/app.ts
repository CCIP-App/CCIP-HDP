import { ActionTree, GetterTree, MutationTree, Module } from 'vuex';

import { CoreState } from "@/store/types/core.type";
import { AppState } from "@/store/types/app.type";

import * as cmd from "@/store/mutation-types";

const namespaced: boolean = true;

export const state: AppState = {
  title: "",
  endpoint: ""
}

const getters: GetterTree<AppState, CoreState> = {
  title: (state): AppState["title"] => state.title,
  endpoint: (state): AppState["endpoint"] => state.endpoint
}

const actions: ActionTree<AppState, CoreState> = {
  register ({ commit }, { title, endpoint }: { title: AppState["title"], endpoint: AppState["endpoint"] }): void {
    commit(cmd.APP__REGISTER_INIT, { title, endpoint });
  }
}

const mutations: MutationTree<AppState> = {
  [cmd.APP__REGISTER_INIT] (state: AppState, { title, endpoint }: { title: AppState["title"], endpoint: AppState["endpoint"] }) {
    state.title = title;
    state.endpoint = endpoint;
  }
}

export const app: Module<AppState, CoreState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
