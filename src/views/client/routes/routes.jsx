import Home from "../layout/home/Home";
import Service from "../layout/service/Service";

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
