import styled from "styled-components"
import InputComponent from "../InputComponent"
import { useState } from "react"
import Botao from "../Botao"

const ContainerDialog = styled.dialog`
    width: 40%;
    top: 200px;
    padding: 20px;
    margin: 0 auto;
    text-align: center;
    border: none;
    border-radius: 20px;
    background: #154580;
`

const ModalEdit = ({ tarefaSelec, aoFechar }) => {
    if(tarefaSelec) {
        const [tarefa, setTarefa] = useState(tarefaSelec.nome)
        const fazerTudo = () => {
            setTarefa(tarefaSelec.nome = tarefa)
            aoFechar()
        }
        return(
            <>
                <ContainerDialog open={!!tarefaSelec}>
                    <InputComponent obrigatorio label='Edite sua tarefa' id='editar' type='text' placeholder={tarefaSelec.nome} valor={tarefa} aoDigitado={tarefa=> setTarefa(tarefa)}/>
                    <form method="dialog">
                        <Botao aoClicar={fazerTudo}>EDITAR</Botao>
                    </form>
                </ContainerDialog>
            </>
        )
    }
}

export default ModalEdit