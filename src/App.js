import { Routes, Route } from "react-router-dom";
import Footer from "./views/client/components/footer/Footer";
import Header from "./views/client/components/header/Header";
//import router
import publicRoutes from "./views/client/routes/routes";

//import lib css
import "bootstrap/dist/css/bootstrap.min.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {publicRoutes.map((route, idx) => {
          return <Route key={idx} path={route.path} element={<route.component />} />;
        })}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
