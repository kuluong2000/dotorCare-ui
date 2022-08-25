import React from "react";
import Service from "../layout/service/Service";
const Home = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../layout/home/Home")), 1000);
  });
});
// const Home = React.lazy(() => import("../layout/home/Home"));

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/dichvu",
    component: Service,
  },
];

export default publicRoutes;
