import "./App.css";
import React, { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDelete = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} onDelete={() => handleDelete(food.id)} />
      ))}
    </div>
  );
}

export default App;
