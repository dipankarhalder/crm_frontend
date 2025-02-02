import {
  Combine,
  Ticket,
  CircleUser,
  Box,
  Baby,
  House,
  CalendarFold,
  CircleCheckBig,
} from "lucide-react";
import { applinks } from "@/router/links";

export const navData = {
  user: {
    name: "Dipankar Halder",
    email: "dipankar@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Drishtikon",
      logo: Baby,
      plan: "Task Planers",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: applinks.dashboard,
      icon: House,
    },
    {
      title: "Collaborators",
      url: applinks.vendors,
      icon: Combine,
    },
    {
      title: "Customers",
      url: applinks.customers,
      icon: CircleUser,
    },
    {
      title: "Calendar",
      url: applinks.calendar,
      icon: CalendarFold,
    },
    {
      title: "Billings",
      url: applinks.billing,
      icon: Ticket,
    },
  ],
  projects: [
    {
      name: "Sanjay Agarwal",
      url: "#",
      icon: Box,
    },
    {
      name: "Deepan S. Mutthu",
      url: "#",
      icon: Box,
    },
    {
      name: "Alex Tour & Travel",
      url: "#",
      icon: Box,
    },
  ],
  vendors: [
    {
      name: "S. R. Studio",
      url: "#",
      icon: CircleCheckBig,
    },
    {
      name: "Ishan Photography",
      url: "#",
      icon: CircleCheckBig,
    },
    {
      name: "XYZ Decorators",
      url: "#",
      icon: CircleCheckBig,
    },
  ],
};
