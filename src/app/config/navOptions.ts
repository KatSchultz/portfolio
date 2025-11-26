export interface NavOption {
  name: string;
  path: string;
  color: string;
  borderColor: string;
}

export const navOptions = [
  {
    name: "Resume",
    path: "/resume",
    color: "#15b0a5",
    borderColor: "#790096",
  },
  {
    name: "Projects",
    path: "/projects",
    color: "#f75e5e",
    borderColor: "#860000",
  },
  {
    name: "Contact",
    path: "/contact",
    color: "#e14288",
    borderColor: "#ff519d",
  },
];
