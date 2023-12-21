import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return(
        <>
            <h1>404: Página não encontrada</h1>
            <Link to="/">Retornar para home</Link>
        </>
    )
}