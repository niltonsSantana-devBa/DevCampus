import { Link } from "react-router-dom";
import "./styles.css";

const destaques = [
  {
    numero: "01",
    titulo: "Cursos para o futuro",
    descricao: "Encontre uma graduação que combina com seus planos.",
    link: "/cursos",
    acao: "Conheça os cursos",
  },
  {
    numero: "02",
    titulo: "Seu próximo passo",
    descricao: "Veja as formas de ingresso e comece sua jornada.",
    link: "/ingresso",
    acao: "Saiba como ingressar",
  },
  {
    numero: "03",
    titulo: "Vida no campus",
    descricao: "Acompanhe as novidades e os eventos da comunidade.",
    link: "/noticias",
    acao: "Ver notícias",
  },
];

export function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <span className="home-eyebrow">Faculdade Horizonte</span>
            <h1>
              Seu futuro começa com uma <span>nova possibilidade.</span>
            </h1>
            <p>
              Conhecimento, oportunidades e apoio para você transformar seus
              planos em conquistas.
            </p>
            <div className="home-hero-actions">
              <Link className="button-primary" to="/cursos">
                Encontre seu curso
              </Link>
              <Link className="button-secondary" to="/ingresso">
                Como ingressar
              </Link>
            </div>
            <div className="home-hero-note">
              <span aria-hidden="true">✦</span>
              Uma comunidade pronta para crescer com você
            </div>
          </div>
          <div className="home-hero-art" aria-hidden="true">
            <div className="home-art-outline" />
            <div className="home-art-panel">
              <span className="home-art-label">APRENDER · CRIAR · EVOLUIR</span>
              <span className="home-art-symbol">H</span>
              <span className="home-art-caption">O conhecimento abre caminhos.</span>
            </div>
            <span className="home-art-spark home-art-spark-one">✦</span>
            <span className="home-art-spark home-art-spark-two">✦</span>
          </div>
        </div>
        <div className="home-hero-bottom" aria-hidden="true">
          HORIZONTE <span>—</span> EDUCAÇÃO QUE TRANSFORMA
        </div>
      </section>

      <section className="home-highlights">
        <div className="home-section-heading">
          <span className="eyebrow">Explore a Horizonte</span>
          <h2>Um caminho que começa com você.</h2>
        </div>
        <div className="home-highlight-grid">
          {destaques.map((item) => (
            <article className="home-highlight-card" key={item.numero}>
              <span className="home-highlight-number">{item.numero}</span>
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
              <Link to={item.link}>
                {item.acao} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="home-about">
        <div>
          <span className="eyebrow">Mais do que uma faculdade</span>
          <h2>Um lugar para construir o que vem pela frente.</h2>
        </div>
        <p>
          Na Faculdade Horizonte, sua vontade de aprender encontra espaço,
          orientação e novas oportunidades. Conheça nossa história e descubra
          tudo o que podemos fazer juntos.
        </p>
        <Link className="home-about-link" to="/sobre">
          Conheça a Horizonte <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
