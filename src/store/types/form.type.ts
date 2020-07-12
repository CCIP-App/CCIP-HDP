import { I18n } from "@/store/types/i18n.type";

export interface FormState {
  token: string;
  data: {
    [key: string]: Field;
  }
}

export interface FormPayload {
  token: string;
  [key: string]: string;
}

export type FormResponse = {
  fill: boolean;
  status: boolean;
} | {
  message: string;
} | {
  fill: string;
  id: string;
} | {
  fill: string;
  token: string;
}

export type Field = {
  showAs: I18n;
  required: RequiredStatement;
};

export type RequiredStatement =
  | boolean
  | {
      type: RequiredStatementAdvanceType;
      relavant: string;
    };

export enum RequiredStatementAdvanceType {
  AtLeaseOne
}
