import { useState } from "react";
import { Link } from "react-router-dom";
import { cursos } from "../../data/cursos.js";
import "./styles.css";

const areas = ["Todas", "Tecnologia", "Saúde", "Gestão e Negócios", "Ciências Humanas", "Educação"];

export function Cursos() {
  const [areaSelecionada, setAreaSelecionada] = useState("Todas");
  const [busca, setBusca] = useState("");

  const cursosFiltrados = cursos.filter((curso) => {
    const matchArea = areaSelecionada === "Todas" || curso.area === areaSelecionada;
    const matchBusca =
      curso.nome.toLowerCase().includes(busca.toLowerCase()) ||
      curso.descricao.toLowerCase().includes(busca.toLowerCase());
    return matchArea && matchBusca;
  });

  return (
    <main className="cursos-page">
      {/* Hero dos Cursos */}
      <section className="cursos-hero">
        <div className="cursos-hero-inner">
          <span className="badge-mec">★ GRADUAÇÕES AVALIADAS COM NOTA MÁXIMA</span>
          <h1>Encontre a graduação certa para transformar seu futuro</h1>
          <p>
            Cursos presenciais reconhecidos pelo MEC, com professores mestres e doutores,
            laboratórios modernos e práticas profissionais desde o primeiro ano.
          </p>

          {/* Barra de Busca rápida */}
          <div className="cursos-search-wrapper">
            <input
              type="text"
              placeholder="Buscar curso (ex: Sistemas, Direito, Saúde...)"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="cursos-search-input"
              aria-label="Buscar curso por nome"
            />
          </div>
        </div>
      </section>

      {/* Filtros e Grade de Cursos */}
      <section className="cursos-catalogo">
        <div className="cursos-catalogo-inner">
          <div className="cursos-filtros-bar">
            <span className="filtros-label">Filtrar por Área:</span>
            <div className="filtros-pills">
              {areas.map((area) => (
                <button
                  key={area}
                  type="button"
                  aria-pressed={areaSelecionada === area}
                  className={`filtro-pill ${areaSelecionada === area ? "ativo" : ""}`}
                  onClick={() => setAreaSelecionada(area)}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          <div className="cursos-resultados-info">
            <span>
              Mostrando <strong>{cursosFiltrados.length}</strong> {cursosFiltrados.length === 1 ? "curso encontrado" : "cursos encontrados"}
            </span>
          </div>

          {/* Grid de Cards dos Cursos com Imagem */}
          <div className="cursos-grid">
            {cursosFiltrados.map((curso) => (
              <article className="curso-card" key={curso.id || curso.nome}>
                <div className="curso-card-image-box">
                  <img src={curso.imagem} alt={`Curso de ${curso.nome}`} loading="lazy" />
                  <span className="curso-badge-mec">MEC ★ {curso.notaMec || "5"}</span>
                  <span className="curso-badge-grau">{curso.grau}</span>
                </div>

                <div className="curso-card-content">
                  <span className="curso-area-tag">{curso.area}</span>
                  <h3>{curso.nome}</h3>
                  <p className="curso-desc">{curso.descricao}</p>

                  <div className="curso-metas">
                    <span className="curso-meta-item">
                      <strong>Duração:</strong> {curso.duracao}
                    </span>
                    <span className="curso-meta-item">
                      <strong>Período:</strong> {curso.periodo}
                    </span>
                    <span className="curso-meta-item">
                      <strong>Modalidade:</strong> {curso.modalidade}
                    </span>
                  </div>

                  <div className="curso-card-footer">
                    <Link to="/ingresso" className="curso-btn-inscrever">
                      Inscreva-se • Vestibular 2026
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {cursosFiltrados.length === 0 && (
            <div className="cursos-sem-resultado">
              <h3>Nenhum curso encontrado</h3>
              <p>Tente buscar com outro termo ou selecione "Todas" as áreas.</p>
              <button
                type="button"
                className="button-secondary"
                onClick={() => {
                  setAreaSelecionada("Todas");
                  setBusca("");
                }}
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Seção de Dúvidas / Apoio ao Candidato */}
      <section className="cursos-suporte-section">
        <div className="cursos-suporte-inner">
          <div className="suporte-copy">
            <h2>Dúvidas sobre bolsas de estudo ou processo seletivo?</h2>
            <p>
              Nossa equipe de consultores acadêmicos está pronta para orientar você sobre
              descontos com a nota do ENEM, transferência externa e financiamentos.
            </p>
          </div>
          <div className="suporte-actions">
            <Link to="/contato" className="button-accent">
              Falar com um Consultor
            </Link>
            <Link to="/ingresso" className="button-secondary">
              Tudo Sobre o Vestibular
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
