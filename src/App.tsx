// import { useState } from "react";
import Header from "./components/General/Header";
import Catalog from "./pages/Catalog";
import Main from "./pages/Main";

import { Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />

      <main>
             <Routes>
             <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
          </main>
      
    </>
  );
};

export default App;
