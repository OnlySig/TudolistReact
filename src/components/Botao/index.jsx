import styled from "styled-components"

const BotaoComponent = styled.button `
    cursor: pointer;
    margin: 0 auto;
    padding: 8px 20px;
    border: 2px solid #C98CF1;
    color: #C98CF1;
    background-color: transparent;
    border-radius: 20px;
    transition: .3s;
    &:hover{
        background-color: #C98CF1;
        color: #FFF;
    }
`

const Botao = ({ children, aoClicar }) => {
    return(
        <BotaoComponent onClick={aoClicar}>
            {children}
        </BotaoComponent>
    )
}

export default Botao