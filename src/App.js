import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Achivements from './Components/Achivements';
import Events from './Components/Events';
import Scopemembers from './Components/Scopemembers';
import Committee from './Components/committee';
import About from './Components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/'
          element={<><Home /></>}>
          </Route>
          <Route path='/about'
          element={<><About /></>}>
        </Route>
          <Route path='/Committee'
          element={<><Committee /></>} />
          <Route path='/scopemembers'
          element={<><Scopemembers /></>} />
          <Route path='/events'
          element={<><Events /></>} />
          <Route path='/achivements'
          element={<><Achivements /></>} />
          <Route path='/contact'
          element={<><Contact /></>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
