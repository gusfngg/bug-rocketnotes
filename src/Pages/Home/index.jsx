import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, Newnote} from './style'
import { Header } from "../../components/header"
import { ButtonText } from "../../components/buttonText"
import { Section } from "../../components/section"
import { Input } from "../../components/input"
import { Note } from "../../components/note"

export function Home() {
   return (
      <Container>
         <Brand>
            <h1>RocketNotes</h1>
         </Brand>

         <Header></Header>
            
         <Menu>
            <li><ButtonText title="Todos"/></li>
            <li><ButtonText title="React" isactive/></li>
            <li><ButtonText title="Node"/></li>
         </Menu>

         <Search>
            <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
         </Search>

         <Content>
            <Section title="Minhas notas">
               <Note data={{
                   title: 'React',
                    tags: [
                     {id: 1, name: 'react'},
                     {id: 2, name: 'rocketseat'}
                    ]
                   }}
                   />

               <Note data={{
                   title: 'Node',
                    tags: [
                     {id: 1, name: 'Gustavo Guanabara'},
                     {id: 2, name: 'rocketseat'}
                    ]
                   }}
                   />   
            </Section>
         </Content>

         <Newnote to="/new">
            <FiPlus></FiPlus>
            Criar nota
         </Newnote>

      </Container>
   )
}