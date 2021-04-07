import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
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
import ScrollToTop from "./ScrollToTop";
import SzeregiLiczbowe from "./screens/SzeregiLiczbowe";
import SzeregiNieujemne from "./screens/SzeregiNieujemne";
import SzeregiPrzemienne from "./screens/SzeregiPrzemienne";
import FunkcjeJednejZmiennej from "./screens/FunkcjeJednejZmiennej";
import Symetria_prosta from "./screens/Symetria_prosta";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
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
          <Route path="/analiza/pojecia-wstepne/szeregi-liczbowe/nieujemne" exact component={SzeregiNieujemne} />
          <Route path="/analiza/pojecia-wstepne/szeregi-liczbowe/przemienne" exact component={SzeregiPrzemienne} />
          <Route path="/analiza/pojecia-wstepne/symetria-prosta" exact component={Symetria_prosta} />
          <Route path="/analiza/pojecia-wstepne/szeregi-liczbowe" exact component={SzeregiLiczbowe} />
          <Route path='/analiza/pojecia-wstepne' exact component={FirstConcepts} />
          <Route path='/analiza/funkcja-jednej-zmiennej' exact component={FunkcjeJednejZmiennej} />
          <Route path='/analiza' component={AnalizaMain} />
          <Route path='/autorzy' component={Authors} />
          <Route path='/kontakt' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
