import React from 'react';
import 'bulma/css/bulma.css';
import Food from './Components/FoodBox/Food';
import AddFood from './Components/AddFood/AddFood';
import SearchBar from './Components/SearchBar/SearchBar';



function App() {

  return (
    <div>
    <SearchBar/>
    <Food/>
    <AddFood />
    
        
    </div>
  );
}

export default App;
