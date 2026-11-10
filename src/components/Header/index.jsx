import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/navigation.js";
import logoVertical from "../../assets/02_logo_vertical.png";
import "./styles.css";

export function Header() {
  return (
    <header className="site-header">
      {/* Barra de utilidades institucional superior */}
      <div className="site-topbar">
        <div className="site-topbar-inner">
          <div className="topbar-announcement">
            <span className="topbar-badge">VESTIBULAR 2026</span>
            <span>Inscrições abertas com bolsas de até 100% pelo ENEM</span>
          </div>
          <div className="topbar-links">
            <span className="topbar-contact">📞 (11) 3450-8000</span>
            <span className="topbar-divider">|</span>
            <Link to="/contato" className="topbar-link">Portal do Aluno</Link>
          </div>
        </div>
      </div>

      {/* Barra de navegação principal */}
      <div className="site-header-inner">
        <Link className="site-brand" to="/" aria-label="Faculdade Horizonte - início">
          <div className="site-brand-mark">
            <img src={logoVertical} alt="" />
          </div>
          <div className="site-brand-text">
            <span className="site-brand-name">
              Faculdade <strong>Horizonte</strong>
            </span>
            <span className="site-brand-sub">Credenciada com Nota Máxima no MEC</span>
          </div>
        </Link>

        <nav className="site-nav" aria-label="Navegação principal">
          {navLinks.map(({ to, label, end }) => (
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

        <div className="site-header-cta">
          <Link to="/ingresso" className="header-cta-btn">
            Inscreva-se Já
          </Link>
        </div>
      </div>
    </header>
  );
}
