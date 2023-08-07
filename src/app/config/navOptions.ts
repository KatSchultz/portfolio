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
    color: "#b2b1ff",
    borderColor: "#790096",
  },
  {
    name: "Projects",
    path: "/projects",
    color: "#ffb1b1",
    borderColor: "#860000",
  },
  {
    name: "Contact",
    path: "/contact",
    color: "#b1fff9",
    borderColor: "#00847b",
  },
];
