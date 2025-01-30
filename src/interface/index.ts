import { ReactNode } from "react";

export type IChildren = {
  children: ReactNode;
};

export interface IUserSignin {
  email: string;
  password: string;
}
