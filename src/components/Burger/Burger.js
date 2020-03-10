import React from "react";

import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      // The Array(integer) method creates an array with the specified number
      // of elements. So we pass in the number of a certain ingredient.
      // We then create a burger ingredient for each element in the array.
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
        //only interested in index for the key so we have _ for the first argument
        return (
          <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
        );
      });
    }) // Reduce to flatten the array
    .reduce((arr, el) => {
      //combining arrays into arr( the initial array of [])
      return arr.concat(el);
    }, []);

  console.log("Transformed ingredients:");
  console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="breadTop" />
      {transformedIngredients}
      <BurgerIngredient type="breadBottom" />
    </div>
  );
};

export default burger;
