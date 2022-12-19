import './App.css';
import './title.css';
import './main-content.css';
import './navbar.css';
import './footer.css';
import './scrolltotop.css';
import Home from './Home.js';
import ExploreRecipes from './ExploreRecipes';
import Leftovers from './Leftovers';
import CustomRecipes from './CustomRecipes';
import { Routes, Route } from 'react-router-dom';

// https://get-baking.free.beeceptor.com/recipes

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/interactive-web" element={<Home />} />
        <Route path="/explorerecipes" element={<ExploreRecipes />} />
        <Route path="/leftovers" element={<Leftovers />} />
        <Route path="/customrecipes" element={<CustomRecipes />} />
      </Routes>
    </div>
  );
}

export default App;
