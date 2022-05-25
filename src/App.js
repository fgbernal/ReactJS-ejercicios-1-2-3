import './App.css';
import ContactComponent from './components/pure/contact';
import { Contact } from './models/contact.class';

function App() {

  const ejemplo = new Contact('Nombre ejemplo', 'Apellido ejemplo', 'ejemplo@email.com', false)

  return (
    <div className="App">
      <ContactComponent contact={ejemplo} />
    </div>
  );
}

export default App;
