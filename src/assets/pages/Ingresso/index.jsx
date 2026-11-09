import { useState } from "react";
import "../style.css";

export function Ingresso() {
  const [modoIngresso, setModoIngresso] = useState("");

  const opcoes = ["Vestibular", "Transferência", "Bolsas"];

  return (
    <main className="page page-ingresso">
      <h1>Ingresso</h1>
      <p>Adicione sua forma de ingresso:</p>

      <div className="botoes-container">
        {opcoes.map((opcao) => (
          <button
            key={opcao}
            type="button"
            className={`btn-ingresso ${modoIngresso === opcao ? "ativo" : ""}`}
            onClick={() => setModoIngresso(opcao)}
          >
            {opcao}
          </button>
        ))}
      </div>

      {modoIngresso && (
        <p className="resultado">
          Forma selecionada: <strong>{modoIngresso}</strong>
        </p>
      )}
    </main>
  );
}