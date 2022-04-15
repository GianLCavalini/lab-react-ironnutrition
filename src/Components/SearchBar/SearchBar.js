import React from "react";
import Foods from "../../foods.json"
import {useState} from "react";

function SearchBar(props) {
    const [food, setFood] = useState([...Foods])

    function filterFoods(filterProps){
        if(filterProps ==="") {
            setFood();
            return;
        }
    }

   // const filtred = Foods.filter((currentFoods) => {
     //   return currentFoods.name.toLowerCase().includes.(filterProps.toLowerCase());
  //  });

    return ( 
        <div class="control">

         <input class="input is-focused" type="text" placeholder="Find Your Food Here..." />


         
      </div>
        
     );
}

export default SearchBar;