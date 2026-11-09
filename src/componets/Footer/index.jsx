import "./styles.css";


export function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} Facudade Horizonte </p>
            <p>Todos os direitos reservados.</p>
        </footer>
    )
}