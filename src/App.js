import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import StreetPhotography from './components/StreetPhotography/StreetPhotography';
import DocumentaryPhotography from './components/DocumentaryPhotography/DocumentaryPhotography';
import TravelPhotography from './components/TravelPhotography/TravelPhotography';
import FineArtPhotography from './components/FineArtPhotography/FineArtPhotography';
import About from './components/About/About';
import NaturePhotography from './components/NaturePhotography/NaturePhotography';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Portfolio></Portfolio>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/street-photography' element={<StreetPhotography></StreetPhotography>}></Route>
        <Route path='/documentary-photography' element={<DocumentaryPhotography></DocumentaryPhotography>}></Route>
        <Route path='/travel-photography' element={<TravelPhotography></TravelPhotography>}></Route>
        <Route path='/fine-art-photography' element={<FineArtPhotography></FineArtPhotography>}></Route>
        <Route path='/nature-photography' element={<NaturePhotography></NaturePhotography>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
