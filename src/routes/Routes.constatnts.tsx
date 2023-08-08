import { lazy } from "react";

const Home = lazy(() => import("pages/home"));
const About = lazy(() => import("pages/about"));
const Projects = lazy(() => import("pages/projects"));
const Contact = lazy(() => import("pages/contact"));

interface IRoutes {
  path: string;
  element: React.ReactNode;
}

export const ROUTES_LIST: IRoutes[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
