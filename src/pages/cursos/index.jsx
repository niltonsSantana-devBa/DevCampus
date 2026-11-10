import "./styles.css";

const cursos = [
    {
        nome: "Administração",
        area: "Gestão e Negócios",
        modalidade: "Presencial",
        duracao: "4 anos",
        descricao:
            "Aprenda a planejar e gerenciar organizações, equipes e projetos.",
    },
    {
        nome: "Análise e Desenvolvimento de Sistemas",
        area: "Tecnologia",
        modalidade: "Presencial",
        duracao: "2 anos e meio",
        descricao:
            "Desenvolva sistemas e soluções digitais para os desafios do mercado.",
    },
    {
        nome: "Direito",
        area: "Ciências Humanas",
        modalidade: "Presencial",
        duracao: "5 anos",
        descricao:
            "Estude as leis, a justiça e os direitos que organizam a sociedade.",
    },
    {
        nome: "Enfermagem",
        area: "Saúde",
        modalidade: "Presencial",
        duracao: "5 anos",
        descricao:
            "Prepare-se para atuar no cuidado e na promoção da saúde.",
    },
    {
        nome: "Pedagogia",
        area: "Educação",
        modalidade: "Presencial",
        duracao: "4 anos",
        descricao:
            "Conheça práticas e fundamentos da educação e da aprendizagem.",
    },
    {
        nome: "Psicologia",
        area: "Saúde",
        modalidade: "Presencial",
        duracao: "5 anos",
        descricao:
            "Estude o comportamento humano e as diferentes formas de cuidado psicológico.",
    },
];

export function Cursos() {
    return (
        <main className="cursos-container">
            <section className="cursos-hero">
                <span className="cursos-eyebrow">Seu futuro começa aqui</span>
                <h1>Encontre o curso ideal para você</h1>
                <p>
                    Explore nossas opções de graduação e escolha o caminho para
                    construir sua carreira.
                </p>
                <a className="cursos-cta" href="#lista-cursos">
                    Explorar cursos
                </a>
            </section>

            <section className="cursos-lista" id="lista-cursos">
                <div className="cursos-lista-cabecalho">
                    <div>
                        <span className="cursos-eyebrow">Nossas graduações</span>
                        <h2>Cursos disponíveis</h2>
                    </div>
                    <p>{cursos.length} opções para começar sua jornada</p>
                </div>

                <div className="cursos-grid">
                    {cursos.map((curso) => (
                        <article className="curso-card" key={curso.nome}>
                            <span className="curso-area">{curso.area}</span>
                            <h3>{curso.nome}</h3>
                            <p className="curso-descricao">{curso.descricao}</p>

                            <div className="curso-informacoes">
                                <span>{curso.modalidade}</span>
                                <span>{curso.duracao}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="cursos-contato">
                <h2>Ficou com dúvidas?</h2>
                <p>
                    Entre em contato com a secretaria da faculdade para saber
                    mais sobre inscrições, bolsas e formas de ingresso.
                </p>
            </section>
        </main>
    );
}

export default Cursos;