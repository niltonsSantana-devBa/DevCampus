import { Link } from "react-router-dom";
import { destaques } from "../../data/destaques.js";
import carreiraIcon from "../../assets/15_carreira.png";
import formacaoIcon from "../../assets/12_formacao.png";
import mundoIcon from "../../assets/16_mundo.png";
import pesquisaIcon from "../../assets/14_pesquisa.png";
import "./styles.css";

const metricas = [
  { valor: "Nota 5", legenda: "Nota máxima no MEC", detalhe: "Recredenciamento institucional" },
  { valor: "94%", legenda: "Empregabilidade", detalhe: "Alunos contratados até 6 meses após formados" },
  { valor: "+30", legenda: "Laboratórios modernos", detalhe: "Tecnologia e simulação prática" },
  { valor: "+15.000", legenda: "Alunos & Egressos", detalhe: "Histórias de sucesso no mercado" },
];

const diferenciais = [
  {
    icone: formacaoIcon,
    titulo: "Corpo Docente Especializado",
    descricao: "Mais de 80% dos professores são mestres e doutores com sólida experiência de mercado.",
  },
  {
    icone: pesquisaIcon,
    titulo: "Prática Desde o 1º Semestre",
    descricao: "Laboratórios modernos, clínicas-escola e projetos reais integrados ao currículo.",
  },
  {
    icone: carreiraIcon,
    titulo: "Central de Carreiras & Estágios",
    descricao: "Convênios com mais de 250 empresas de tecnologia, saúde, finanças e serviços.",
  },
  {
    icone: mundoIcon,
    titulo: "Programas de Extensão & Inovação",
    descricao: "Empresas juniores, hackathons, iniciação científica e apoio a startups.",
  },
];

export function Home() {
  return (
    <main className="home-page">
      {/* Hero Banner Universitário */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <div className="home-hero-badges">
              <span className="badge-mec">★ NOTA MÁXIMA NO MEC</span>
              <span className="badge-vestibular">VESTIBULAR 2026/2</span>
            </div>

            <h1 className="home-hero-title">
              O conhecimento que você busca. O <span>futuro que você merece.</span>
            </h1>

            <p className="home-hero-subtitle">
              Na Faculdade Horizonte, unimos excelência acadêmica, laboratórios modernos
              e conexões com o mercado de trabalho para você protagonizar sua carreira.
            </p>

            <div className="home-hero-actions">
              <Link className="button-accent" to="/cursos">
                Explorar Cursos de Graduação
              </Link>
              <Link className="button-secondary" to="/ingresso">
                Formas de Ingresso & Bolsas
              </Link>
            </div>

            <div className="home-hero-guarantee">
              <span>✓ Inscrição gratuita no vestibular online</span>
              <span>✓ Bolsas de até 100% pelo ENEM</span>
            </div>
          </div>

          <div className="home-hero-visual">
            <div className="home-hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80"
                alt="Estudantes no campus da Faculdade Horizonte"
                className="home-hero-image"
              />
              <div className="home-floating-card home-card-rating">
                <span className="floating-card-stars">★★★★★</span>
                <strong>MEC Nota 5</strong>
                <small>Excelência comprovada</small>
              </div>
              <div className="home-floating-card home-card-employability">
                <img className="floating-card-icon" src={carreiraIcon} alt="" aria-hidden="true" />
                <strong>94% de Empregabilidade</strong>
                <small>Inserção rápida no mercado</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa de Métricas Acadêmicas */}
      <section className="home-metrics-bar">
        <div className="home-metrics-inner">
          {metricas.map((m) => (
            <div className="metric-item" key={m.legenda}>
              <strong className="metric-val">{m.valor}</strong>
              <span className="metric-label">{m.legenda}</span>
              <small className="metric-detail">{m.detalhe}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Destaques com Imagens */}
      <section className="home-highlights-section">
        <div className="home-section-header">
          <span className="eyebrow">Explore o Campus</span>
          <h2>Por que estudar na Faculdade Horizonte?</h2>
          <p>
            Uma instituição estruturada para potencializar suas habilidades teóricas,
            técnicas e humanas.
          </p>
        </div>

        <div className="home-highlights-grid">
          {destaques.map((item) => (
            <article className="home-card" key={item.numero}>
              <div className="home-card-image-box">
                <img src={item.imagem} alt={item.titulo} loading="lazy" />
                <span className="home-card-tag">{item.tag}</span>
              </div>
              <div className="home-card-body">
                <span className="home-card-number">{item.numero}</span>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
                <Link to={item.link} className="home-card-link">
                  {item.acao} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Diferenciais Acadêmicos */}
      <section className="home-differentials-section">
        <div className="home-differentials-inner">
          <div className="differentials-header">
            <span className="eyebrow">Diferenciais Institucionais</span>
            <h2>Tudo o que você precisa para se destacar no mercado</h2>
          </div>

          <div className="differentials-grid">
            {diferenciais.map((dif) => (
              <div className="diff-card" key={dif.titulo}>
                <img className="diff-icon" src={dif.icone} alt="" aria-hidden="true" />
                <h3>{dif.titulo}</h3>
                <p>{dif.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner de Chamada para Ação (CTA Vestibular) */}
      <section className="home-cta-banner">
        <div className="home-cta-inner">
          <div className="home-cta-copy">
            <span className="eyebrow" style={{ color: "#ffedd5" }}>Vestibular 2026/2</span>
            <h2>Dê o próximo passo na sua trajetória profissional</h2>
            <p>
              Inscreva-se no vestibular online gratuito ou aproveite a sua nota do ENEM
              para conquistar bolsas com até 100% de desconto.
            </p>
            <div className="home-cta-actions">
              <Link className="button-accent" to="/ingresso">
                Inscrever-se no Vestibular
              </Link>
              <Link className="button-secondary" to="/contato">
                Falar com a Secretaria
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
