import { Routes, Route } from "react-router-dom";
import Header from "./components/General/Header";
import Catalog from "./pages/Catalog";
import Main from "./pages/Main";

import "./App.css";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/catalog" element={<Catalog />} />
            </Routes>
        </>
    );
};

export default App;
