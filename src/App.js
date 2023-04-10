import './App.css';
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import BeersList from "./components/BeersList";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function App() {
  return (
    <div className="App">
      
      <nav>
        
        
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/beers' element={<BeersList />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
      
    </div>
  );
}

export default App;
