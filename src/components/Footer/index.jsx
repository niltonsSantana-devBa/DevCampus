import { Link } from "react-router-dom";
import emailIcon from "../../assets/07_email.png";
import horarioIcon from "../../assets/08_horario.png";
import localizacaoIcon from "../../assets/05_localizacao.png";
import mensagemIcon from "../../assets/06_mensagem.png";
import telefoneIcon from "../../assets/04_telefone.png";
import logoVertical from "../../assets/02_logo_vertical.png";
import "./styles.css";

export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        {/* Coluna 1: Marca & Institucional */}
        <div className="footer-col footer-col-brand">
          <Link className="footer-brand" to="/">
            <span className="footer-brand-mark">
              <img src={logoVertical} alt="" />
            </span>
            <span className="footer-brand-name">
              Faculdade <strong>Horizonte</strong>
            </span>
          </Link>
          <p className="footer-desc">
            Instituição de ensino superior comprometida com a excelência acadêmica, inovação tecnológica e formação ética para as profissões do futuro.
          </p>
          <div className="footer-mec-badge">
            <span className="footer-stars">★★★★★</span>
            <span>Nota 5 no MEC • Recredenciamento Institucional</span>
          </div>
        </div>

        {/* Coluna 2: Cursos de Graduação */}
        <div className="footer-col">
          <h4 className="footer-heading">Cursos de Graduação</h4>
          <ul className="footer-list">
            <li><Link to="/cursos">Administração</Link></li>
            <li><Link to="/cursos">Análise e Desenv. de Sistemas</Link></li>
            <li><Link to="/cursos">Direito</Link></li>
            <li><Link to="/cursos">Enfermagem</Link></li>
            <li><Link to="/cursos">Pedagogia</Link></li>
            <li><Link to="/cursos">Psicologia</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Formas de Ingresso */}
        <div className="footer-col">
          <h4 className="footer-heading">Ingresso & Bolsas</h4>
          <ul className="footer-list">
            <li><Link to="/ingresso">Vestibular Online 2026</Link></li>
            <li><Link to="/ingresso">Bolsas pela Nota do ENEM</Link></li>
            <li><Link to="/ingresso">Transferência de Faculdade</Link></li>
            <li><Link to="/ingresso">Segunda Graduação</Link></li>
            <li><Link to="/ingresso">Prouni & Financiamento</Link></li>
            <li><Link to="/noticias">Eventos & Notícias</Link></li>
          </ul>
        </div>

        {/* Coluna 4: Atendimento & Campus */}
        <div className="footer-col">
          <h4 className="footer-heading">Central de Atendimento</h4>
          <div className="footer-contact-info">
            <p><img src={localizacaoIcon} alt="" aria-hidden="true" />Av. Universitária, 1500 — Campus Central</p>
            <p><img src={telefoneIcon} alt="" aria-hidden="true" />Atendimento: (71) 3450-8000</p>
            <p><img src={mensagemIcon} alt="" aria-hidden="true" />WhatsApp: (71) 98765-4321</p>
            <p><img src={emailIcon} alt="" aria-hidden="true" />contato@horizonte.edu.br</p>
            <p className="footer-hours"><img src={horarioIcon} alt="" aria-hidden="true" />Seg. a Sex. das 08h às 21h | Sáb. das 08h às 13h</p>
          </div>
        </div>
      </div>

      {/* Faixa inferior de direitos autorais */}
      <div className="site-footer-bottom">
        <div className="footer-bottom-inner">
          <span>© {anoAtual} Faculdade Horizonte (FAHOR) — Todos os direitos reservados.</span>
          <span className="footer-cnpj">CNPJ: 00.123.456/0001-78 • Mantenedora Horizonte Educação S/A</span>
        </div>
      </div>
    </footer>
  );
}
