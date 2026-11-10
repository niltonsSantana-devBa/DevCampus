import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/index.jsx";
import { Header } from "./components/Header/index.jsx";
import { ScrollToTop } from "./components/ScrollToTop.jsx";
import { Contatos } from "./pages/Contatos/index.jsx";
import { Cursos } from "./pages/Cursos/index.jsx";
import { Home } from "./pages/Home/index.jsx";
import { Ingresso } from "./pages/Ingresso/index.jsx";
import { Noticias } from "./pages/Noticias/index.jsx";
import { Sobre } from "./pages/Sobre/index.jsx";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-shell">
        <Header />
        <div className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/ingresso" element={<Ingresso />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/contato" element={<Contatos />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
