import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./views/client/components/footer/Footer";
import Header from "./views/client/components/header/Header";
import Loading from "./views/client/common/loading/Loading";
import AppItem from "./views/client/common/appItem/AppItem";
//import router
import publicRoutes from "./views/client/routes/routes";

//import lib css
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Loading />}>
        <Header></Header>
        <main>
          <Routes>
            {publicRoutes.map((route, idx) => {
              return <Route key={idx} path={route.path} element={<route.component />} />;
            })}
          </Routes>
          <AppItem />
        </main>
        <Footer></Footer>
      </React.Suspense>
    </div>
  );
}

export default App;
