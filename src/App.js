import './App.css';
import {Router, Route, Switch, BrowserRouter} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Authors from "./screens/Authors";
import AnalizaMain from "./screens/AnalizaMain";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import FirstConcepts from "./screens/FirstConcepts";
import SimpleLogika from "./screens/SimpleLogika";
import SimpleKwantyfikatory from "./screens/SimpleKwantyfikatory";
import Relacje from "./screens/Relacje";
import Nierownosci1Grade1 from "./screens/Nierownosci1Grade1";
import DwumianNewtona from "./screens/DwumianNewtona";
import CiagiNiesk from "./screens/CiagiNiesk";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar/>
        </header>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/analiza/pojecia-wstepne/logika" exact component={SimpleLogika} />
          <Route path="/analiza/pojecia-wstepne/kwantyfikatory" exact component={SimpleKwantyfikatory} />
          <Route path="/analiza/pojecia-wstepne/nierownosci-1-stopnia-1" exact component={Nierownosci1Grade1} />
          <Route path="/analiza/pojecia-wstepne/relacje" exact component={Relacje} />
          <Route path="/analiza/pojecia-wstepne/dwumian-Newtona" exact component={DwumianNewtona} />
          <Route path="/analiza/pojecia-wstepne/ciagi-nieskonczone" exact component={CiagiNiesk} />
          <Route path='/analiza/pojecia-wstepne' exact component={FirstConcepts} />
          <Route path='/analiza' component={AnalizaMain} />
          <Route path='/autorzy' component={Authors} />
          <Route path='/kontakt' component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
