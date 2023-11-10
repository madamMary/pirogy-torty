import { Routes, Route } from "react-router-dom";
import Header from "./commons/components/Header";
import Catalog from "./components/Catalog/Catalog";
import Info from "./components/Info/Info";
import Basket from "./components/Basket/Basket";
import Home from "./components/Home/Home";
import Footer from "./commons/components/Footer";
import "./assets/scss/index.scss";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/info" element={<Info />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
