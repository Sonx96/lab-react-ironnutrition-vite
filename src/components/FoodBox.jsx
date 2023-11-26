import React from "react";
import { useEffect, useState } from "react";
import foodsJson from "../foods.json";

const FoodBox = () => {
  const [foodsToShow, setFoodsToShow] = useState([]);

  useEffect(() => {
    setFoodsToShow(foodsJson);
  }, []);

  const handleDelete = (id) => {
    const updatedFoods = foodsToShow.filter((foods) => foods.id !== id);
    setFoodsToShow(updatedFoods);
  };

  return (
    <div>
      {foodsToShow.map((eachFoods) => {
        return (
          <div key={eachFoods.id}>
            <p>{eachFoods.name}</p>

            <img src={eachFoods.image} alt={eachFoods.name} width={200} />

            <p>Calories: {eachFoods.calories}</p>
            <p>Servings: {eachFoods.servings}</p>

            <p>
              <b>Total Calories: {eachFoods.servings * eachFoods.calories} kcal</b>
            </p>

            <button onClick={() => handleDelete(eachFoods.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default FoodBox;
