import {
  Clapperboard,
  Baby,
  Ticket,
  CircleUser,
  Box,
  House,
  CalendarFold,
  CircleCheckBig,
} from "lucide-react";

export const navData = {
  user: {
    name: "Dipankar Halder",
    email: "dipankar@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "CRM Projects.",
      logo: Baby,
      plan: "Cool planers",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "dashboard",
      icon: House,
    },
    {
      title: "Vendors",
      url: "vendors",
      icon: Clapperboard,
    },
    {
      title: "Customers",
      url: "customers",
      icon: CircleUser,
    },
    {
      title: "Calendar",
      url: "#",
      icon: CalendarFold,
    },
    {
      title: "Billing",
      url: "#",
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
