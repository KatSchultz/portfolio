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
    color: "#e88bff",
    borderColor: "#790096",
  },
  {
    name: "Projects",
    path: "/projects",
    color: "#ff8b8b",
    borderColor: "#860000",
  },
  {
    name: "Contact",
    path: "/contact",
    color: "#8bfff7",
    borderColor: "#00847b",
  },
];
