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
const ContainerModal = styled.form`
    margin-top: 8px;
`
const ModalEdit = ({ tarefaSelec, aoFechar }) => {
    if(tarefaSelec) {
        const [tarefa, setTarefa] = useState(tarefaSelec.nome)
        const fazerTudo = () => {
            tarefa === '' ? setTarefa(tarefaSelec.nome = 'vazio não fica') : setTarefa(tarefaSelec.nome = tarefa)
            aoFechar()
        }
        return(
            <>
                <ContainerDialog open={!!tarefaSelec}>
                    <InputComponent obrigatorio label='Edite sua tarefa' id='editar' type='text' placeholder={tarefaSelec.nome} valor={tarefa} aoDigitado={tarefa=> setTarefa(tarefa)}/>
                    <ContainerModal method="dialog">
                        <Botao aoClicar={fazerTudo}>EDITAR</Botao>
                    </ContainerModal>
                </ContainerDialog>
            </>
        )
    }
}

export default ModalEdit