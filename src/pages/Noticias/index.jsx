import { useState } from "react";
import { EVENTOS_DADOS } from "../../data/eventos.js";
import "./styles.css";

export function Noticias() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [inscritos, setInscritos] = useState([]);

  const categorias = ["Todos", "Tecnologia", "Cultura", "Esportes", "Ciência", "Carreira"];

  const eventosFiltrados = categoriaAtiva === "Todos"
    ? EVENTOS_DADOS
    : EVENTOS_DADOS.filter((e) => e.categoria === categoriaAtiva);

  const toggleInscricao = (id) => {
    setInscritos((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <main className="noticias-page">
      {/* Hero da Página */}
      <section className="noticias-hero">
        <div className="noticias-hero-inner">
          <span className="eyebrow" style={{ color: "#ffedd5" }}>Vida no Campus</span>
          <h1>Notícias & Eventos Acadêmicos</h1>
          <p>
            Acompanhe o que acontece na Faculdade Horizonte: palestras, workshops,
            competições esportivas, hackathons e atividades culturais abertas à comunidade.
          </p>
        </div>
      </section>

      <section className="noticias-content">
        <div className="noticias-content-inner">
          {/* Barra de Filtros */}
          <div className="noticias-filtros-bar">
            <span className="filtros-titulo">Categorias:</span>
            <div className="filtros-lista">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={categoriaAtiva === cat}
                  className={`btn-filtro ${categoriaAtiva === cat ? "ativo" : ""}`}
                  onClick={() => setCategoriaAtiva(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Cards dos Eventos com Foto */}
          <div className="grid-eventos">
            {eventosFiltrados.map((evento) => {
              const estaInscrito = inscritos.includes(evento.id);

              return (
                <article key={evento.id} className="card-evento">
                  <div className="evento-image-box">
                    <img src={evento.imagem} alt={evento.titulo} loading="lazy" />
                    <span className="evento-badge-categoria">{evento.categoria}</span>
                    <span className="evento-badge-data">{evento.data}</span>
                  </div>

                  <div className="evento-body">
                    <div className="evento-info-meta">
                      <span>🕒 {evento.horario}</span>
                      <span>📍 {evento.local}</span>
                    </div>

                    <h3>{evento.titulo}</h3>
                    <p className="evento-desc">{evento.descricao}</p>

                    <div className="evento-footer">
                      <span className="evento-vagas">
                        {estaInscrito ? "Vaga confirmada" : `${evento.vagasRestantes} vagas restantes`}
                      </span>

                      <button
                        type="button"
                        className={`btn-inscrever ${estaInscrito ? "inscrito" : ""}`}
                        onClick={() => toggleInscricao(evento.id)}
                      >
                        {estaInscrito ? "✓ Presença Garantida" : "Garantir Vaga"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
