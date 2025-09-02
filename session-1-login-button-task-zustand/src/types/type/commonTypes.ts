import { User } from "../../common/interface/User";
import { InputTypeEnum } from "./commonEnums";

export type InputType = {
  id: string;
  labelText: string;
  name: string;
  type?: InputTypeEnum;
  required: boolean;
  placeHolder?: string;
  value: number | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type AuthContextType = {
  isLoggin: boolean;
  userLoggin: (userData: User) => void;
  userLogout: () => void;
};
