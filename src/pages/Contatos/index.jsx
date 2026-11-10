import { useEffect, useRef, useState } from "react";
import { ALUNOS_REGISTRADOS } from "../../data/alunos.js";
import "./styles.css";

export function Contatos() {
  const [alunoSelecionadoId, setAlunoSelecionadoId] = useState("");
  const [assunto, setAssunto] = useState("Dúvidas Gerais");
  const [mensagem, setMensagem] = useState("");
  const [formEnviado, setFormEnviado] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const alunoAtual = ALUNOS_REGISTRADOS.find(
    (a) => a.id === Number(alunoSelecionadoId)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!alunoAtual) return;

    setFormEnviado(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setFormEnviado(false);
      setAlunoSelecionadoId("");
      setMensagem("");
    }, 4500);
  };

  return (
    <main className="contato-page">
      {/* Hero */}
      <section className="contato-hero">
        <div className="contato-hero-inner">
          <span className="eyebrow" style={{ color: "#ffedd5" }}>Atendimento Universitário</span>
          <h1>Central de Atendimento ao Aluno & Comunidade</h1>
          <p>
            Estamos à disposição para ajudar você com processos acadêmicos, solicitações
            de documentos, orientações sobre vestibular e suporte à graduação.
          </p>
        </div>
      </section>

      {/* Grid de Contato */}
      <section className="contato-content">
        <div className="contato-content-inner">
          {/* Informações Institucionais do Campus */}
          <div className="contato-info-col">
            <div className="info-card">
              <span className="info-card-badge">CAMPUS CENTRAL</span>
              <h2>Canais Oficiais</h2>
              <p>Venha nos visitar ou entre em contato pelos nossos canais diretos de atendimento:</p>

              <div className="info-itens-lista">
                <div className="info-item">
                  <span className="info-icone">📍</span>
                  <div>
                    <strong>Endereço</strong>
                    <p>Av. Universitária, 1500 — Bairro Universitário, SP</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icone">📞</span>
                  <div>
                    <strong>Telefone Geral</strong>
                    <p>(11) 3450-8000</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icone">💬</span>
                  <div>
                    <strong>WhatsApp da Secretaria</strong>
                    <p>(11) 98765-4321</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icone">🕒</span>
                  <div>
                    <strong>Horário de Funcionamento</strong>
                    <p>Segunda a Sexta: 08h às 21h | Sábado: 08h às 13h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-card-faq">
              <h3>Dúvidas Frequentes Rápidas</h3>
              <ul>
                <li><strong>Declaração de Matrícula:</strong> Disponível no Portal do Aluno com autenticação digital instantânea.</li>
                <li><strong>2ª Via de Boletos:</strong> Acesse a aba Financeiro no portal ou solicite via WhatsApp.</li>
                <li><strong>Carteirinha Estudantil:</strong> Emissão digital gratuita pelo aplicativo institucional.</li>
              </ul>
            </div>
          </div>

          {/* Formulário de Atendimento / Simulação do Aluno */}
          <div className="contato-form-col">
            <div className="card-formulario">
              <div className="form-cabecalho">
                <span className="eyebrow">Portal de Solicitações</span>
                <h2>Atendimento ao Estudante</h2>
                <p>Selecione um aluno registrado para simular a abertura de chamado na secretaria acadêmica.</p>
              </div>

              {formEnviado ? (
                <div className="mensagem-sucesso">
                  <span className="sucesso-icone" aria-hidden="true">✅</span>
                  <h3>Protocolo de Atendimento Registrado!</h3>
                  <p>
                    Solicitação enviada com sucesso para <strong>{alunoAtual?.nome}</strong> (Matrícula: {alunoAtual?.matricula}).
                  </p>
                  <small>Um e-mail de confirmação foi encaminhado para {alunoAtual?.email}.</small>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="formulario-corpo">
                  <div className="campo">
                    <label htmlFor="aluno">Aluno Registrado *</label>
                    <select
                      id="aluno"
                      value={alunoSelecionadoId}
                      onChange={(e) => setAlunoSelecionadoId(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        -- Selecione um aluno registrado --
                      </option>
                      {ALUNOS_REGISTRADOS.map((aluno) => (
                        <option key={aluno.id} value={aluno.id}>
                          {aluno.nome} — {aluno.curso} (Mat: {aluno.matricula})
                        </option>
                      ))}
                    </select>
                  </div>

                  {alunoAtual && (
                    <div className="info-aluno-card">
                      <div className="aluno-avatar">{alunoAtual.nome.charAt(0)}</div>
                      <div className="aluno-detalhes">
                        <strong>{alunoAtual.nome}</strong>
                        <span>Curso: {alunoAtual.curso}</span>
                        <span>Matrícula: {alunoAtual.matricula}</span>
                        <span>E-mail: {alunoAtual.email}</span>
                      </div>
                    </div>
                  )}

                  <div className="campo">
                    <label htmlFor="assunto">Setor / Assunto *</label>
                    <select
                      id="assunto"
                      value={assunto}
                      onChange={(e) => setAssunto(e.target.value)}
                    >
                      <option value="Dúvidas Gerais">Secretaria — Dúvidas Gerais</option>
                      <option value="Solicitação de Documentos">Secretaria — Solicitação de Documentos e Histórico</option>
                      <option value="Bolsas e Financiamento">Financeiro — Bolsas, Financiamento e Prouni</option>
                      <option value="Suporte Acadêmico">Coordenação — Suporte Acadêmico e Estágios</option>
                    </select>
                  </div>

                  <div className="campo">
                    <label htmlFor="mensagem">Mensagem / Solicitação *</label>
                    <textarea
                      id="mensagem"
                      rows="4"
                      placeholder="Descreva detalhadamente a sua solicitação..."
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="button-accent btn-enviar"
                    disabled={!alunoSelecionadoId}
                  >
                    Enviar Chamado {alunoAtual ? `para ${alunoAtual.nome.split(" ")[0]}` : ""}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
