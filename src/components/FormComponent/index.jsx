import styled from "styled-components"
import InputComponent from "../InputComponent"
import Botao from "../Botao"
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"

const FormContainer = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 150px 0 20px 0;
`
const Form = styled.form `
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 600px;
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    border-radius: 16px;
    padding: 20px;
`
const TitleCrud = styled.h1 `
    color: #C98CF1;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
`

const FormComponent = ({aoTarefa}) => {
    const [tarefa, setTarefa] = useState('')
    const [contador, setContador] = useState(0)

    const incrementar = () => {
        tarefa === '' ? null : setContador(contador + 1)
    }
    const aoTodoList = (e) => {
        e.preventDefault()
        aoTarefa({
            id: uuidv4(),
            nome: tarefa,
            numero: contador,
            setC: setContador
        })
        setTarefa('')
    }
    return(
        <FormContainer>
            <Form onSubmit={aoTodoList}>
                <TitleCrud>TuDo List</TitleCrud>
                <InputComponent obrigatorio label='Sua tarefa' id='todoList' type='text' placeholder='ex: Comer tapioca' valor={tarefa} aoDigitado={(tarefa) => setTarefa(tarefa)}/>
                <Botao aoClicar={incrementar}>
                    Fazer tarefa
                </Botao>
            </Form>
        </FormContainer>
    )
}

export default FormComponent