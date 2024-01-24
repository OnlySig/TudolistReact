import styled from "styled-components"

const ContainerVazio = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #C98CF1;
`
const TitleVazio = styled.h2`
    font-size: 20px;
`
const SubTitle = styled.h4`
    font-size: 12px;
`

const TarefaVazio = () => {
    return(
        <ContainerVazio>
            <SubTitle>Sua lista de tarefas está vazia!</SubTitle>
            <TitleVazio>Adicione uma tarefa!</TitleVazio>
        </ContainerVazio>
    )
}

export default TarefaVazio