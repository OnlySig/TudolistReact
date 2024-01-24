import styled from "styled-components"
import { FaRegEdit as IconEditar } from "react-icons/fa"
import { MdDeleteForever as IconDeletar } from "react-icons/md"

const TarefaItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    list-style: none;
    padding: 10px 6px;
    margin: 5px 0;
    border: 1px solid #C98CF1;
    border-radius: 16px;
`
const TarefaSpan = styled.span`
    color: #b8b0b0;
`
const TarefaNome = styled.p`
    font-weight: 700;
    color: #C98CF1;
`
const TarefaIcons = styled.div`
    display: flex;
    gap: 5px;
    svg{
        cursor: pointer;
        fill: #1a5aa8;
        font-size: 1.5rem;
    }
`

const Tarefa = ({ aoTarefaSelecionada, getTarefa, aoDeletar }) => {
    const decrementar = (tarefa) => {
        tarefa.setC(tarefa.numero - 1)
    }
    return(
        <>
            <TarefaItem>
                <TarefaSpan>{getTarefa.numero}º tarefa:</TarefaSpan>
                <TarefaNome>{getTarefa.nome}</TarefaNome>
                <TarefaIcons>
                    <IconEditar onClick={() => aoTarefaSelecionada(getTarefa)}/>
                    <IconDeletar onClick={aoDeletar} onClickCapture={() => decrementar(getTarefa)}/>
                </TarefaIcons>
            </TarefaItem>
        </>
    )
}

export default Tarefa