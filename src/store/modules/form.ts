import { ActionTree, GetterTree, MutationTree, Module } from "vuex";
import axios from "axios";

import { CoreState } from "@/store/types/core.type";
import { FormState, FormPayload, FormResponse } from "@/store/types/form.type";
import { AppState } from "@/store/types/app.type";

import * as cmd from "@/store/mutation-types";

const namespaced = true;

export const state: FormState = {
  token: "",
  field: [],
  data: {}
};

const getters: GetterTree<FormState, CoreState> = {
  token: (state): FormState["token"] => state.token,
  field: (state): FormState["field"] => state.field
};

const actions: ActionTree<FormState, CoreState> = {
  setToken(
    { commit },
    token: FormState["token"]
  ): void {
    commit(cmd.FORM__SET_TOKEN, token);
  },

  resetToken(
    { commit },
    token: FormState["token"]
  ): void {
    commit(cmd.FORM__SET_TOKEN, "");
  },

  setFields(
    { commit },
    field: FormState["field"]
  ): void {
    commit(cmd.FORM__SET_FIELD, field);
  },

  setData(
    { commit },
    data: FormState["data"]
  ): void {
    commit(cmd.FORM__SET_DATA, data);
  },

  async verifyToken(
    { commit },
    args: { endpoint: AppState["endpoint"], token: FormState["token"] }
  ): Promise<FormResponse> {
    try {
      const res = await axios.get(`${args.endpoint}status?token=${args.token}`);
      return (res.data as FormResponse);
    } catch (error) {
      console.error(error)
      return error;
    }
  },

  async sendForm(
    { commit },
    args: { endpoint: AppState["endpoint"], data: FormPayload }
  ): Promise<FormResponse> {
    try {
      const formData = new FormData();
      Object.keys(args.data).forEach(key => {
        formData.append(key, args.data[key]);
      })
  
      const res = await axios.post(`${args.endpoint}/fill`, formData);
      return (res.data as FormResponse);
    } catch (error) {
      console.error(error)
      return error;
    }
  }
};

const mutations: MutationTree<FormState> = {
  [cmd.FORM__SET_TOKEN](
    state: FormState,
    token: FormState["token"]
  ) {
    state.token = token;
  },

  [cmd.FORM__SET_FIELD](
    state: FormState,
    field: FormState["field"]
  ) {
    state.field = field;
  },

  [cmd.FORM__SET_DATA](
    state: FormState,
    data: FormState["data"]
  ) {
    state.data = data;
  }
};

export const form: Module<FormState, CoreState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
