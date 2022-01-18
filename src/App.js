import './App.css';
import About from './page/About';
import Footer from './page/Footer';
import FoodPicture from './page/FoodPicture';
import CityPicture from './page/CityPicture';
import SimpleService from './page/SimpleService';
import PatnerArea from './page/PatnerArea';
import Home from './page/Home';
import Menubar from './page/Menubar';


function App() {
  return (
    <div className="App">
      <Menubar />
      <Home />
      <FoodPicture />
      <CityPicture />
      <About />
      <PatnerArea />
      <SimpleService />
      <Footer />

    </div>
  );
}

export default App;
