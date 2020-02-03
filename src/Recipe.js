import React from "react";
import "./Recipe.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <ul>{ingredient.text} </ul>
        ))}
      </ol>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
