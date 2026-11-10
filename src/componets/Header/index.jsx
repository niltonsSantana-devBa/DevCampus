import { Link, NavLink } from "react-router-dom";
import "./styles.css";

const links = [
  { to: "/", label: "Início", end: true },
  { to: "/sobre", label: "Sobre" },
  { to: "/cursos", label: "Cursos" },
  { to: "/ingresso", label: "Ingresso" },
  { to: "/noticias", label: "Notícias" },
  { to: "/contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="site-brand" to="/" aria-label="Faculdade Horizonte - início">
          <span className="site-brand-mark" aria-hidden="true">H</span>
          <span className="site-brand-name">
            Faculdade <strong>Horizonte</strong>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Navegação principal">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `site-nav-link${isActive ? " active" : ""}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}