import AddItemform from '../src/components/AddItemform';
import ToDoList from './components/ToDoList';
import ItemCount from '../src/components/ItemsCount';
import {Container} from 'react-bootstrap';


function App() {
  return (
    <Container className="mt-3">
      <AddItemform/>
      <ToDoList/>
      <ItemCount/>
    </Container>
  );
}

export default App;
