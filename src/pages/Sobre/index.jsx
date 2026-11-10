import { Link } from "react-router-dom";
import "./styles.css";

export function Sobre() {
  return (
    <main className="sobre-container">
      <span className="eyebrow">Nossa história</span>
      <h1>Sobre a Faculdade Horizonte</h1>
      <p>
        A Faculdade Horizonte é uma instituição de ensino comprometida com a
        excelência acadêmica e o desenvolvimento integral de seus alunos.
        Nossa missão é proporcionar uma educação de qualidade, preparando
        nossos estudantes para os desafios do mundo contemporâneo.
      </p>
      <Link className="button-primary" to="/cursos">Conheça nossos cursos</Link>
    </main>
  );
}