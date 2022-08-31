import React from "react";
const Home = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../layout/home/Home")), 1000);
  });
});
const Service = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../layout/service/Service")), 500);
  });
});
const Clinic = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../layout/clinic/BookClinic")), 1000);
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
  {
    path: "/phongkham",
    component: Clinic,
  },
  // {
  //   path: "/modal",
  //   component: Modal,
  // },
];

export default publicRoutes;
