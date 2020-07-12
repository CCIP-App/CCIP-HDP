import { I18n } from "@/store/types/i18n.type";

export interface FormState {
  token: string;
  field: Field[];
  data: {
    [key: string]: string;
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
} | any;

export type Field = {
  label: I18n;
  name: string;
  required: RequiredStatement;
  type: string;
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
