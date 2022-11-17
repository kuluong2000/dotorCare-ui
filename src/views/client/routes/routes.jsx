import React from 'react';
const Home = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../layout/home/Home')), 1000);
  });
});
const ListClinic = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../layout/listClinic/ListClinic')), 1000);
  });
});
const Doctor = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../layout/doctors/Doctor')), 500);
  });
});
const Clinic = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../layout/clinic/BookClinic')), 1000);
  });
});
const Service = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../layout/service/Service')), 1000);
  });
});
const Details = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../layout/details/Details')), 700);
  });
});
const Me = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../layout/me/Me')), 700);
  });
});
const Order = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../layout/order/Order')), 700);
  });
});
const ErrorPage = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../layout/errorPage/ErrorPage')), 300);
  });
});

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/danh-sach-phong-kham',
    component: ListClinic,
  },
  {
    path: '/bac-si',
    component: Doctor,
  },
  {
    path: '/:nickname/:nickname',
    component: Clinic,
  },
  {
    path: '/dich-vu',
    component: Service,
  },
  {
    path: '/dich-vu/:slugs',
    component: Details,
  },
  {
    path: '/dich-vu/dat-hen-kham',
    component: Order,
  },
  {
    path: '/me/:id',
    component: Me,
  },
  {
    path: '*',
    component: ErrorPage,
  },
];

export default publicRoutes;
