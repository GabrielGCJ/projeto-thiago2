import style from "./styles.css"

export const InfoUsuario = () => {

    const nome = "Gabriel Jorge"
    const idade = 30
    const email = "gabrielggcj@gmail.com"


    return (
        <div className="info-usuario">
            <div>
                <img src="https://i.ytimg.com/vi/NnTQIUGNuqc/maxresdefault.jpg" alt="imagem-usuario" />
            </div>
            <div>
                <p className="nameUsuario">Nome: {nome}</p>
                <p className="idadeUsuario">Idade: {idade}</p>
                <p className="emailUsuario">Email: {email}</p>
            </div>

        </div>
    )
}