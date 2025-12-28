import './style.css'

export const DifferencesCards = ({linkImg, altImg, titulo, descricao}) => {
    return(
        <div className="card-differences">
            <img src={linkImg} alt={altImg} />
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>
    )
}