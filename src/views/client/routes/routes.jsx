import React from "react";
const Home = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../layout/home/Home")), 1000);
  });
});
const Doctor = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../layout/doctors/Doctor")), 500);
  });
});
const Clinic = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../layout/clinic/BookClinic")), 1000);
  });
});
const Service = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../layout/service/Service")), 1000);
  });
});
const Details = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../layout/details/Details")), 700);
  });
});

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/bac-si",
    component: Doctor,
  },
  {
    path: "/phongkham",
    component: Clinic,
  },
  {
    path: "/dich-vu",
    component: Service,
  },
  {
    path: "/dich-vu/:title",
    component: Details,
  },
];

export default publicRoutes;
