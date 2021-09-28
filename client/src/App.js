import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pokemons">
          Lista de pokémons
        </Route>
        <Route path="/agregar">
          Agregar pokémon
        </Route>
        <Route path="/types">
          Lista de tipos
        </Route>
        <Route path="/" exact>
          Pagina de Inicio
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
