import { I18n } from "@/store/types/i18n.type";

export interface FillState {
  [key: string]: Field;
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
