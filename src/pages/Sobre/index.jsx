import { Link } from "react-router-dom";
import logoHorizontal from "../../assets/01_logo_principal_horizontal.png";
import ideiasIcon from "../../assets/02_ideias.png";
import livrosIcon from "../../assets/01_livros.png";
import parceriasIcon from "../../assets/03_parcerias.png";
import "./styles.css";

const pilares = [
  {
    titulo: "Ensino de Excelência",
    descricao: "Metodologias ativas, professores mestres e doutores atuantes no mercado e constante atualização pedagógica.",
    icone: livrosIcon,
  },
  {
    titulo: "Inovação & Pesquisa",
    descricao: "Incentivo à iniciação científica, bolsas acadêmicas e integração entre laboratórios e empresas parceiras.",
    icone: ideiasIcon,
  },
  {
    titulo: "Extensão & Comunidade",
    descricao: "Projetos sociais, clínicas-escola e atendimento à comunidade local que geram impacto real e prático.",
    icone: parceriasIcon,
  },
];

const infraestrutura = [
  {
    nome: "Biblioteca Universitária & Espaço Maker",
    descricao: "Mais de 50.000 títulos físicos e acervo digital integrado, com salas silenciosas e estações de coworking.",
    imagem: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80",
  },
  {
    nome: "Complexo de Laboratórios e Inovação",
    descricao: "Equipamentos de última geração para simulação clínica, desenvolvimento de sistemas e práticas jurídicas.",
    imagem: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
  },
  {
    nome: "Centro de Convivência & Esportes",
    descricao: "Praça de alimentação arborizada, quadras poliesportivas e anfiteatro para integração dos estudantes.",
    imagem: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=600&q=80",
  },
];

export function Sobre() {
  return (
    <main className="sobre-page">
      {/* Hero Institucional */}
      <section className="sobre-hero">
        <div className="sobre-hero-inner">
          <span className="badge-mec">★ NOTA MÁXIMA NO MEC</span>
          <h1>Tradição acadêmica e inovação conectadas ao futuro</h1>
          <p>
            Desde a sua fundação, a Faculdade Horizonte transforma vidas por meio de uma
            educação sólida, ética e alinhada às constantes transformações da sociedade.
          </p>
        </div>
      </section>

      {/* História e Propósito */}
      <section className="sobre-historia-section">
        <div className="sobre-historia-inner">
          <div className="sobre-historia-copy">
            <img
              className="sobre-logo-horizontal"
              src={logoHorizontal}
              alt="Universidade Horizonte"
            />
            <span className="eyebrow">Quem Somos</span>
            <h2>Construindo trajetórias de sucesso com responsabilidade e excelência</h2>
            <p>
              A <strong>Faculdade Horizonte</strong> nasceu com o propósito de oferecer uma
              formação superior que vá além da sala de aula tradicional. Aliamos o rigor
              acadêmico às habilidades mais demandadas pelo mercado atual: resolução de
              problemas complexos, pensamento crítico e liderança colaborativa.
            </p>
            <p>
              Com nota máxima nos indicadores de qualidade do Ministério da Educação (MEC),
              nosso campus foi planejado para proporcionar uma experiência universitária
              completa, inclusiva e inspiradora.
            </p>

            <div className="sobre-destaques-numeros">
              <div>
                <strong>+25 Anos</strong>
                <span>De história e tradição</span>
              </div>
              <div>
                <strong>Nota 5</strong>
                <span>Recredenciamento MEC</span>
              </div>
              <div>
                <strong>85%</strong>
                <span>Mestres e Doutores</span>
              </div>
            </div>
          </div>

          <div className="sobre-historia-visual">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
              alt="Estudantes colaborando no campus"
              className="sobre-img-destaque"
            />
          </div>
        </div>
      </section>

      {/* Pilares Institucionais */}
      <section className="sobre-pilares-section">
        <div className="sobre-pilares-inner">
          <div className="pilares-header">
            <span className="eyebrow">Nossos Pilares</span>
            <h2>O tripé que sustenta nossa formação acadêmica</h2>
          </div>

          <div className="pilares-grid">
            {pilares.map((p) => (
              <div className="pilar-card" key={p.titulo}>
                <img className="pilar-icone" src={p.icone} alt="" aria-hidden="true" />
                <h3>{p.titulo}</h3>
                <p>{p.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestrutura do Campus com Imagens */}
      <section className="sobre-infra-section">
        <div className="sobre-infra-inner">
          <div className="infra-header">
            <span className="eyebrow">Campus Central</span>
            <h2>Infraestrutura moderna projetada para o seu aprendizado</h2>
            <p>
              Ambientes preparados para simular o dia a dia profissional e estimular a
              criatividade e a colaboração.
            </p>
          </div>

          <div className="infra-grid">
            {infraestrutura.map((item) => (
              <article className="infra-card" key={item.nome}>
                <div className="infra-card-image">
                  <img src={item.imagem} alt={item.nome} loading="lazy" />
                </div>
                <div className="infra-card-body">
                  <h3>{item.nome}</h3>
                  <p>{item.descricao}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="sobre-cta-box">
            <h3>Venha conhecer de perto o nosso campus</h3>
            <p>Agende uma visita guiada com nossos coordenadores e tire suas dúvidas sobre cursos e bolsas.</p>
            <div className="sobre-cta-actions">
              <Link to="/cursos" className="button-accent">Conhecer Cursos</Link>
              <Link to="/contato" className="button-secondary">Agendar Visita</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
