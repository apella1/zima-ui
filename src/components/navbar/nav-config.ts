export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Conditions",
    href: "/conditions",
  },
  {
    label: "Groups",
    href: "/groups",
  },
  {
    label: "Therapists",
    href: "/therapists",
  },
];

export const AUTH_ITEMS: NavItem[] = [
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "Sign Up",
    href: "/signup",
  },
];
