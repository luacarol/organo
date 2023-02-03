import './Time.css'
import Collaborator from '../Collaborator';

const Time = (props) => {

    const corSecundaria = { backgroundColor: props.corSecundaria } 

    const corPrimaria = { borderColor: props.corPrimaria }

    return (
        <section className='time' style={corSecundaria} >
            <h3 style={corPrimaria} >{props.nome}</h3>
            {props.colaboradores.map( colaborador => <Collaborator nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} /> )}
        </section>
    )
}

export default Time