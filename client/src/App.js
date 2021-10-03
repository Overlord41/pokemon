import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InicioPoke from './components/InicioPoke';
import AgregarPoke from './components/AgregarPoke';
import TypesPoke from './components/TypesPoke';
import ContainPoke from './components/ContainPoke';
import DetallesPokemon from './components/DetallesPokemon';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      {/* <Route path="/pokemons:id">
            <ContainPoke/>
        </Route> */}
        <Route path="/pokemons/:order" exact>
            <ContainPoke/>
        </Route>
        <Route path="/detalles/:name">
          <DetallesPokemon/>
        </Route>
        <Route path="/agregar">
          <AgregarPoke/>
        </Route>
        <Route path="/types">
          <TypesPoke/>
        </Route>
        <Route path="/" exact>
            <InicioPoke />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
