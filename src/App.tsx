import { Routes, Route } from "react-router-dom";
import Header from "./components/General/Header";
import Catalog from "./pages/Catalog";
import Info from "./pages/Info";
import Basket from "./pages/Basket";
import Main from "./pages/Main";
import Footer from "./components/General/Footer";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Main />} />
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
