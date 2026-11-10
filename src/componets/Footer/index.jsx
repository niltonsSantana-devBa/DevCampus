import { Link } from "react-router-dom";
import "./styles.css";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/cursos", label: "Cursos" },
  { to: "/ingresso", label: "Ingresso" },
  { to: "/noticias", label: "Notícias" },
  { to: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-about">
          <Link className="site-footer-brand" to="/">
            Faculdade <strong>Horizonte</strong>
          </Link>
          <p>Educação que transforma planos em novas possibilidades.</p>
        </div>
        <nav className="site-footer-nav" aria-label="Navegação do rodapé">
          {links.map(({ to, label }) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </nav>
      </div>
      <div className="site-footer-bottom">
        <span>© {new Date().getFullYear()} Faculdade Horizonte</span>
        <span>Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
