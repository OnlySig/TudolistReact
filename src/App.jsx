import { useState } from 'react'
import FormComponent from './components/FormComponent'
import Tarefa from './components/Tarefa'
import TarefaVazio from './components/TarefaVazio'
import styled from 'styled-components'
import ModalEdit from './components/ModalEdit'

const ListaContainer = styled.section`
  display: flex;
  flex-direction: column;
`
const TarefaTitle = styled.h3`
  color: #C98CF1;
  text-align: center;
  margin-bottom: 8px;
`
const App = () => {
  const [tarefas, setTarefas] = useState([])
  const [tarefaSelecionada, setTarefeSelecionada] = useState(null)
  const aoCadastrarTarefa = (tarefa) => {
    const found = tarefas.find(tarefaMapiada => tarefaMapiada.nome === tarefa.nome)
    if(found)return
    setTarefas([...tarefas, tarefa])
  }
  const deletaTarefa = (tarefa) => {
    setTarefas(tarefas.filter(tarefaLista => tarefaLista.id !== tarefa.id))
  }

  const tarefaTitulo = tarefas.length ? <TarefaTitle>Sua lista de tarefas</TarefaTitle> : '' 
  return (
    <>
      <ListaContainer>
        <FormComponent aoTarefa={tarefa => aoCadastrarTarefa(tarefa)}/>
        {tarefaTitulo}
        <ul>
          {tarefas.length ? tarefas.map(tarefa =>
            <Tarefa key={tarefa.id} aoTarefaSelecionada={foto => setTarefeSelecionada(foto)} getTarefa={tarefa} aoDeletar={()=>deletaTarefa(tarefa)}/>
          ) : <TarefaVazio/> }
        </ul>
      </ListaContainer>
      <ModalEdit tarefaSelec={tarefaSelecionada} aoFechar={()=> setTarefeSelecionada(null)}/>
    </>
  )
}

export default App
