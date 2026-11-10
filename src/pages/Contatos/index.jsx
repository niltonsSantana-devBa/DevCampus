import { useState } from "react";
import "./style.css";

// Lista de alunos fictícios registrados
const ALUNOS_REGISTRADOS = [
  {
    id: 1,
    nome: "Robert Cefas",
    matricula: "20260101",
    curso: "Engenharia de Software",
    email: "robert.cefas@aluno.campus.edu.br"
  },
  {
    id: 2,
    nome: "Nilton Sacramento",
    matricula: "20260102",
    curso: "Ciência da Computação",
    email: "nilton.sacramento@aluno.campus.edu.br"
  },
  {
    id: 3,
    nome: "Mariana Oliveira",
    matricula: "20260103",
    curso: "Design Digital",
    email: "mariana.oliveira@aluno.campus.edu.br"
  },
  {
    id: 4,
    nome: "Lucas Andrade",
    matricula: "20260104",
    curso: "Sistemas de Informação",
    email: "lucas.andrade@aluno.campus.edu.br"
  },
  {
    id: 5,
    nome: "Beatriz Mendonça",
    matricula: "20260105",
    curso: "Análise e Des. de Sistemas",
    email: "beatriz.mendonca@aluno.campus.edu.br"
  }
];

export function ContatoCampus() {
  const [alunoSelecionadoId, setAlunoSelecionadoId] = useState("");
  const [assunto, setAssunto] = useState("Dúvidas Gerais");
  const [mensagem, setMensagem] = useState("");
  const [formEnviado, setFormEnviado] = useState(false);

  // Busca os dados completos do aluno selecionado
  const alunoAtual = ALUNOS_REGISTRADOS.find(
    (a) => a.id === Number(alunoSelecionadoId)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!alunoAtual) return;

    setFormEnviado(true);
    setTimeout(() => {
      setFormEnviado(false);
      setAlunoSelecionadoId("");
      setMensagem("");
    }, 4000);
  };

  return (
    <section className="container-contato">
      <header className="header-contato">
        <span className="card-tag">/contato</span>
        <h2 className="card-titulo">Contato do Aluno</h2>
        <p className="card-descricao">
          Selecione o aluno registrado para enviar uma solicitação.
        </p>
      </header>

      <div className="card-formulario">
        {formEnviado ? (
          <div className="mensagem-sucesso">
            <span>✅</span>
            <h3>Mensagem Enviada com Sucesso!</h3>
            <p>
              Solicitação registrada para <strong>{alunoAtual?.nome}</strong> (Matrícula: {alunoAtual?.matricula}).
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Seleção do Aluno Registrado */}
            <div className="campo">
              <label htmlFor="aluno">Selecione o Aluno Registrado</label>
              <select
                id="aluno"
                value={alunoSelecionadoId}
                onChange={(e) => setAlunoSelecionadoId(e.target.value)}
                required
              >
                <option value="" disabled>
                  -- Escolha um aluno --
                </option>
                {ALUNOS_REGISTRADOS.map((aluno) => (
                  <option key={aluno.id} value={aluno.id}>
                    {aluno.nome} — {aluno.curso}
                  </option>
                ))}
              </select>
            </div>

            {/* Exibição automática dos dados do aluno selecionado */}
            {alunoAtual && (
              <div className="info-aluno-card">
                <p><strong>Nome:</strong> {alunoAtual.nome}</p>
                <p><strong>Matrícula:</strong> {alunoAtual.matricula}</p>
                <p><strong>Curso:</strong> {alunoAtual.curso}</p>
                <p><strong>E-mail:</strong> {alunoAtual.email}</p>
              </div>
            )}

            <div className="campo">
              <label htmlFor="assunto">Assunto</label>
              <select
                id="assunto"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
              >
                <option value="Dúvidas Gerais">Dúvidas Gerais</option>
                <option value="Solicitação de Documentos">Solicitação de Documentos</option>
                <option value="Bolsas e Financiamento">Bolsas e Financiamento</option>
                <option value="Suporte Acadêmico">Suporte Acadêmico</option>
              </select>
            </div>

            <div className="campo">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                rows="4"
                placeholder="Digite o conteúdo da sua mensagem..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-enviar" disabled={!alunoSelecionadoId}>
              Enviar Solicitado por {alunoAtual ? alunoAtual.nome : "Aluno"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}