import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const modalidades = [
  {
    id: "vestibular",
    titulo: "Vestibular Online 2026",
    subtitulo: "Prova 100% digital e gratuita",
    icone: "📝",
    desconto: "Bolsas de até 50%",
    descricao: "Realize a prova de redação online no conforto da sua casa, no dia e horário que preferir, com resultado divulgado em até 24 horas.",
    passos: [
      "Faça sua inscrição gratuita no formulário",
      "Receba o link seguro e acesse a prova online",
      "Consulte o resultado e envie os documentos digitais para a matrícula",
    ],
    documentos: "RG, CPF, Histórico Escolar e Certificado de Conclusão do Ensino Médio.",
  },
  {
    id: "enem",
    titulo: "Nota do ENEM",
    subtitulo: "Sua pontuação vale bolsa de estudo",
    icone: "🎯",
    desconto: "Bolsas de até 100%",
    descricao: "Utilize sua nota do ENEM a partir da edição de 2015. Quanto maior a sua média nas provas, maior o percentual de desconto nas mensalidades durante todo o curso.",
    passos: [
      "Informe o número de inscrição e o ano do seu ENEM",
      "Nosso sistema calcula automaticamente a sua bolsa de mérito",
      "Garanta sua vaga sem necessidade de prestar novo vestibular",
    ],
    documentos: "Boletim de Desempenho do ENEM emitido pelo INEP, RG e comprovante de residência.",
  },
  {
    id: "transferencia",
    titulo: "Transferência de Faculdade",
    subtitulo: "Aproveite matérias já cursadas",
    icone: "🔄",
    desconto: "Desconto especial de transferência",
    descricao: "Transfira seu curso para a Faculdade Horizonte sem burocracia. Nossa coordenação faz a análise e equivalência rápida da sua grade curricular anterior.",
    passos: [
      "Envie seu histórico acadêmico da faculdade de origem",
      "Receba a análise de equivalência em até 48 horas úteis",
      "Efetive sua matrícula e inicie as aulas no período compatível",
    ],
    documentos: "Histórico Escolar oficial da faculdade de origem, declaração de vínculo e ementas das disciplinas.",
  },
  {
    id: "segunda-graduacao",
    titulo: "Segunda Graduação",
    subtitulo: "Ingresso direto para graduados",
    icone: "🎓",
    desconto: "30% de desconto fixo",
    descricao: "Já possui diploma de ensino superior? Entre direto sem vestibular, amplie sua área de atuação profissional e conclua sua segunda graduação em tempo reduzido.",
    passos: [
      "Escolha seu novo curso e anexe o diploma da graduação anterior",
      "Solicite o aproveitamento de disciplinas de formação básica",
      "Conclua a matrícula com desconto garantido até o fim do curso",
    ],
    documentos: "Diploma de Ensino Superior reconhecido pelo MEC e histórico acadêmico anterior.",
  },
];

export function Ingresso() {
  const [modalidadeAtivaId, setModalidadeAtivaId] = useState("vestibular");
  const [inscricaoIniciada, setInscricaoIniciada] = useState(false);

  const modalidadeAtiva = modalidades.find((m) => m.id === modalidadeAtivaId) || modalidades[0];

  return (
    <main className="ingresso-page">
      {/* Hero */}
      <section className="ingresso-hero">
        <div className="ingresso-hero-inner">
          <span className="badge-mec">★ PROCESSO SELETIVO 2026/2</span>
          <h1>Como Ingressar na Faculdade Horizonte</h1>
          <p>
            Escolha a modalidade de ingresso que melhor se adapta aos seus planos e
            conquiste bolsas de estudo e descontos especiais.
          </p>
        </div>
      </section>

      {/* Conteúdo Principal de Ingresso */}
      <section className="ingresso-content">
        <div className="ingresso-content-inner">
          {/* Seletores de Modalidade */}
          <div className="ingresso-modalidades-grid">
            {modalidades.map((item) => {
              const estaAtivo = item.id === modalidadeAtivaId;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={estaAtivo}
                  className={`modalidade-card ${estaAtivo ? "ativo" : ""}`}
                  onClick={() => {
                    setModalidadeAtivaId(item.id);
                    setInscricaoIniciada(false);
                  }}
                >
                  <span className="modalidade-icone" aria-hidden="true">{item.icone}</span>
                  <div className="modalidade-textos">
                    <span className="modalidade-tag-desconto">{item.desconto}</span>
                    <h3>{item.titulo}</h3>
                    <p>{item.subtitulo}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detalhes da Modalidade Selecionada */}
          <div className="modalidade-detalhe-card">
            <div className="detalhe-cabecalho">
              <div>
                <span className="eyebrow">Modalidade Selecionada</span>
                <h2>{modalidadeAtiva.titulo}</h2>
                <p className="detalhe-desc">{modalidadeAtiva.descricao}</p>
              </div>
              <div className="detalhe-beneficio-pill">
                <strong>Benefício:</strong> {modalidadeAtiva.desconto}
              </div>
            </div>

            <div className="detalhe-passo-a-passo">
              <h3>Passo a Passo para Ingressar:</h3>
              <ol className="passos-lista">
                {modalidadeAtiva.passos.map((passo, idx) => (
                  <li key={idx}>
                    <span className="passo-numero">{idx + 1}</span>
                    <span>{passo}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="detalhe-documentos">
              <strong>📋 Documentação básica exigida:</strong>
              <p>{modalidadeAtiva.documentos}</p>
            </div>

            <div className="detalhe-acoes">
              {inscricaoIniciada ? (
                <div className="alerta-inscricao">
                  <span>✅ Solicitação iniciada para <strong>{modalidadeAtiva.titulo}</strong>! Nossa equipe entrará em contato via e-mail e WhatsApp com o link de acesso.</span>
                </div>
              ) : (
                <button
                  type="button"
                  className="button-accent"
                  onClick={() => setInscricaoIniciada(true)}
                >
                  Iniciar Inscrição em {modalidadeAtiva.titulo}
                </button>
              )}
              <Link to="/contato" className="button-secondary">
                Tirar Dúvidas com um Consultor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
