import { useState } from 'react'
import Button from '../Button/Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Form.css'

const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log("O formulário foi submetido => ", nome, cargo, imagem)
    }

    return (
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                
                <TextField
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <TextField 
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)}
                />

                <TextField
                    label="Imagem"
                    placeholder="Digite sua imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <DropdownList obrigatorio={true} label="Time" itens={times}/>

                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form