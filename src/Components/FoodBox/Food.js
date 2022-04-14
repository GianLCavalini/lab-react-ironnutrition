import React from "react";
import FoodBox from "./FoodBox";
import foods from "../../foods.json"


function Food() {



    return ( 
        
        <>
       { foods.map((currentFood) => {
           console.log(currentFood)
            return(<FoodBox 
            name={currentFood.name}
            calories={currentFood.calories}
            image={currentFood.image}
        
            />)
        })}
        
        </>
     );
}

export default Food;