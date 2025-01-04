import {
  LayoutDashboardIcon,
  LockIcon,
  ScaleIcon,
  Users2Icon,
} from "lucide-react";

export const navigation = [
  {
    name: "Dashboard",
    icon: LayoutDashboardIcon,
    href: "/dashboard",
  },
  {
    name: "Matches",
    icon: ScaleIcon,
    href: "/matches",
  },
  {
    name: "Teams",
    icon: Users2Icon,
    href: "/teams",
  },
];

export const secondaryNavigation = [
  {
    name: "Users",
    icon: Users2Icon,
    href: "/users",
  },
  {
    name: "Roles",
    icon: LockIcon,
    href: "/roles",
  },
];

export const headers = [...navigation, ...secondaryNavigation].reduce(
  (acc, nav) => {
    acc[nav.href] = nav.name;
    return acc;
  },
  {} as { [x: string]: string },
);
