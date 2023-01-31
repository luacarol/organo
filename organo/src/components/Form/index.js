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

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log("O formulário foi submetido.")
    }

    return (
        <section className="form">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                
                <TextField obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite sua imagem"/>

                <DropdownList obrigatorio={true} label="Time" itens={times}/>

                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form