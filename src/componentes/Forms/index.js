import { useState } from 'react'
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

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [img, setImg] = useState('');
    const [time, setTime] = useState('');
        

    const aoSalvar = (evento) =>{
        evento.preventDefault() //MExe com o comportamento padrao
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            img,
            time
    })
    }


    return(
        <section className="forms">
            <form  onSubmit={aoSalvar}>
                <h2>{props.h2}</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"  
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado = {valor => setNome(valor)}
                />
                <CampoTexto 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado = {valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={img}
                    aoAlterado = {valor => setImg(valor)}
                />
                <ListaSuspensa
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Button> 
                    Criar Card 
                </Button>
            </form>
        </section>
    )

}

export default Forms