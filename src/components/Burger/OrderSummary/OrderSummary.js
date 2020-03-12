import React from "react";
import Aux from "../../../hoc/ReactAux";

const orderSummary = props => {
  let ingredientSummary = Object.keys(props.ingredients).map(ingredientKey => {
    return (
      <li>
        <span>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
    </Aux>
  );
};

export default orderSummary;
