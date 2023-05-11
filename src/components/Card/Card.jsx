import { InfoUsuario } from "../InfoUsuario/InfoUsuario";
import styles from "./styles.css"

export const Card = ({src, title}) => {
    const titulo = "Titulo do video";

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    return (
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src={src} alt="" />
            <h4>{title}</h4>
            <InfoUsuario/>
        </div>
    );
};
 