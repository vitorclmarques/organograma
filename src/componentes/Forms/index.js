import Button from '../Button'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Forms.css'

const Forms = (props) =>{
    const times = [
        'Programação',
        'Front-end', 
        'Analistas de negocio',
        'Aprovve receitas',
        'mobile',
        'Inovação e Gestão'
    ]
        


    return(
        <section className="forms">
            <form>
                <h2>{props.h2}</h2>
                <CampoTexto label="Nome"  placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa label="Time" itens={times}/>
                <Button texto="Criar Card"/>
            </form>
        </section>
    )

}

export default Forms