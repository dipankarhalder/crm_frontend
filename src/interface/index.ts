import { ReactNode } from "react";
import { type LucideIcon } from "lucide-react";

export interface IChildren {
  children: ReactNode;
}

export interface IUserSignin {
  email: string;
  password: string;
}

export interface IUserRequest {
  name: string;
  role: string;
  phone: string;
  email: string;
  password: string;
}

export interface IPageLink {
  pagename: string;
}

export interface IMainNav {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
  }[];
}

export interface ISideUser {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

export interface IProjects {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}

export interface IVendors {
  vendors: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}

export interface ITeams {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}

export type IUserInfo = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    location: string;
    city: string;
    state: string;
    pin: string;
  };
};

export type IVendorInfo = {
  name: string;
  email: string;
  phone: string;
  address: string;
  type: string;
};
