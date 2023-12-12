import CampoTexto from '../CampoTexto'
import './Forms.css'

const Forms = (props) =>{

    return(
        <section className="forms">
            <form>
                <h2>{props.h2}</h2>
                <CampoTexto label="Nome"  placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    )

}

export default Forms