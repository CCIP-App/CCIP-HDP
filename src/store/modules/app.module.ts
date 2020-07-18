import { ActionTree, GetterTree, MutationTree, Module } from "vuex";

import { CoreState } from "@/store/types/core.type";
import { AppState } from "@/store/types/app.type";

import * as cmd from "@/store/mutation-types";

const namespaced = true;

export const state: AppState = {
  title: "",
  endpoint: "",
  callback: "",
  appMode: false
};

const getters: GetterTree<AppState, CoreState> = {
  title: (state): AppState["title"] => state.title,
  endpoint: (state): AppState["endpoint"] => state.endpoint,
  callback: (state): AppState["callback"] => state.callback,
  appMode: (state): AppState["appMode"] => state.appMode
};

const actions: ActionTree<AppState, CoreState> = {
  register(
    { commit },
    {
      title,
      endpoint,
      callback
    }: {
      title: AppState["title"];
      endpoint: AppState["endpoint"];
      callback?: AppState["callback"];
    }
  ): void {
    commit(cmd.APP__REGISTER_INIT, { title, endpoint, callback });
  },

  toggleAppMode({ commit }, status: AppState["appMode"]): void {
    commit(cmd.APP__APP_MODE_TOGGLE, status);
  }
};

const mutations: MutationTree<AppState> = {
  [cmd.APP__REGISTER_INIT](
    state: AppState,
    {
      title,
      endpoint,
      callback
    }: {
      title: AppState["title"];
      endpoint: AppState["endpoint"];
      callback?: AppState["callback"];
    }
  ) {
    state.title = title;
    state.endpoint = endpoint;
    state.callback = callback;
  },

  [cmd.APP__APP_MODE_TOGGLE](state: AppState, status: AppState["appMode"]) {
    state.appMode = status;
  }
};

export const app: Module<AppState, CoreState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
