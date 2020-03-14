import React from "react";
import Aux from "../../../hoc/ReactAux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  let ingredientSummary = Object.keys(props.ingredients).map(ingredientKey => {
    return (
      <li key={ingredientKey}>
        <span style={{ textTransform: "capitalize" }}>{ingredientKey}</span>:{" "}
        {props.ingredients[ingredientKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.cancel} btnType="Danger">
        Cancel
      </Button>
      <Button clicked={props.continue} btnType="Success">
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
