import  { Link } from 'react-router-dom'
import { TextArea } from '../../components/textArea';
import { NoteItem } from '../../components/noteItem';
import { Section } from '../../components/section';
import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Container, Form } from './style';


export function New() {
   return (
      <Container>
         <Header />

         <main>
            <Form>
               <header>
                  <h1>Criar nota</h1>
                  <Link to="/">Voltar</Link>
               </header>

               <Input placeholder="Titulo" />
               <TextArea placeholder="Observação" />

               <Section title="Links úteis">
                  <NoteItem value="http://rocketseat.com.br"/>
                  <NoteItem isNew placeholder="Novo link"/>
               </Section>

               <Section title="Marcadores"> 
                  <div className='tags'>
                     <NoteItem value="react"/>
                     <NoteItem isNew placeholder="Nova tag"/>
                  </div>
               </Section>

               <Button title="Salvar" />
            </Form>
         </main>
      </Container>
   )
}