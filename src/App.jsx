import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./componets/Footer/index.jsx";
import { Header } from "./componets/Header/index.jsx";
import { ContatoCampus } from "./pages/Contatos/index.jsx";
import { Ingresso } from "./pages/Ingresso/index.jsx";
import { EventosCampus } from "./pages/Noticias/index.jsx";
import { Sobre } from "./pages/Sobre/index.jsx";
import Cursos from "./pages/cursos/index.jsx";
import { Home } from "./pages/Home/index.jsx";

export function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Header />
        <div className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/ingresso" element={<Ingresso />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/contato" element={<ContatoCampus />} />
            <Route path="/noticias" element={<EventosCampus />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
