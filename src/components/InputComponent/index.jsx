import styled from "styled-components"

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    label{
        color: #C98CF1;
    }
    input{
        padding: 8px 12px;
        outline: none;
        background-color: transparent;
        border: 2px solid #C98CF1;
        border-radius: 20px;
        color: #D9D9D9;
        &::placeholder {
            color: #D9D9D9;
        }
    }
`
const InputComponent = ({ obrigatorio, label, id, type, placeholder, valor, aoDigitado}) => {
    return (
        <InputContainer>
            <label htmlFor={id}>{label}</label>
            <input required={obrigatorio} type={type} id={id} placeholder={placeholder} value={valor} onChange={e => aoDigitado(e.target.value)}/>
        </InputContainer>
    )
}

export default InputComponent