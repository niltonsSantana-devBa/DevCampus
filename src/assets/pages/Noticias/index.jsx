import { useState } from "react";
import "../style.css";

const EVENTOS_DADOS = [
  {
    id: 1,
    titulo: "Jam Session & Ensaio da Equipe de Música",
    categoria: "Música",
    data: "14 de Novembro",
    horario: "17:30",
    local: "Auditório Bloco B",
    descricao: "Alinhamento das próximas apresentações do campus e ensaio aberto. Traga seu instrumento ou venha apenas curtir o som!",
    badgeColor: "#8b5cf6"
  },
  {
    id: 2,
    titulo: "Hackathon TasteTech: IA na Culinária",
    categoria: "Tecnologia",
    data: "18 de Novembro",
    horario: "09:00",
    local: "Laboratório de Inovação 04",
    descricao: "Maratona de código para criar algoritmos de geração de receitas sustentáveis, harmonização de pratos e combate ao desperdício.",
    badgeColor: "#ec4899"
  },
  {
    id: 3,
    titulo: "Copa Intercursos 2026: Futsal & E-Sports",
    categoria: "Esportes",
    data: "22 de Novembro",
    horario: "13:00",
    local: "Ginásio Poliesportivo",
    descricao: "Abertura do torneio do campus com modalidades tradicionais e arena gamer com partidas ao vivo de Valorant e FIFA.",
    badgeColor: "#10b981"
  },
  {
    id: 4,
    titulo: "Noite Astrofísica: Observação com Telescópio & VR",
    categoria: "Ciência",
    data: "25 de Novembro",
    horario: "19:30",
    local: "Praça Central do Campus",
    descricao: "Observação guiada de corpos celestes na praça central + óculos de realidade virtual simulando caminhada em Marte.",
    badgeColor: "#3b82f6"
  },
  {
    id: 5,
    titulo: "Café com Founders: Do TCC à Startup",
    categoria: "Carreira",
    data: "01 de Dezembro",
    horario: "16:00",
    local: "Espaço Coworking",
    descricao: "Bate-papo exclusivo com ex-alunos que transformaram projetos acadêmicos em empresas milionárias.",
    badgeColor: "#f59e0b"
  }
];

export function EventosCampus() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [inscritos, setInscritos] = useState([]);

  const categorias = ["Todos", "Música", "Tecnologia", "Esportes", "Ciência", "Carreira"];

  const eventosFiltrados = categoriaAtiva === "Todos" 
    ? EVENTOS_DADOS 
    : EVENTOS_DADOS.filter(e => e.categoria === categoriaAtiva);

  const toggleInscricao = (id) => {
    setInscritos((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="container-eventos">
      <header className="header-eventos">
        <span className="card-tag">/noticias</span>
        <h2 className="card-titulo">Notícias & Eventos</h2>
        <p className="card-descricao">
          Fique por dentro de tudo o que está acontecendo no campus.
        </p>
      </header>

      {/* Filtro por Categorias */}
      <div className="filtros-container">
        {categorias.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`btn-filtro ${categoriaAtiva === cat ? "ativo" : ""}`}
            onClick={() => setCategoriaAtiva(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lista de Cards de Eventos */}
      <div className="grid-eventos">
        {eventosFiltrados.map((evento) => {
          const estaInscrito = inscritos.includes(evento.id);
          return (
            <article key={evento.id} className="card-evento">
              <div className="card-evento-header">
                <span 
                  className="badge-categoria" 
                  style={{ backgroundColor: evento.badgeColor }}
                >
                  {evento.categoria}
                </span>
                <span className="evento-data">{evento.data} • {evento.horario}</span>
              </div>

              <h3>{evento.titulo}</h3>
              <p className="evento-local">📍 {evento.local}</p>
              <p className="evento-desc">{evento.descricao}</p>

              <button
                type="button"
                className={`btn-inscrever ${estaInscrito ? "inscrito" : ""}`}
                onClick={() => toggleInscricao(evento.id)}
              >
                {estaInscrito ? "✓ Presença Confirmada" : "Garantir Vaga"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}