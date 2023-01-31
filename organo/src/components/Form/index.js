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

    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite sua imagem"/>

                <DropdownList label="Time" itens={times}/>

                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form