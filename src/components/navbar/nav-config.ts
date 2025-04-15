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
    label: "Community",
    href: "/community",
  },
  {
    label: "Therapists",
    href: "/therapists",
  },
  {
    label: "FAQ",
    href: "/faq",
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
