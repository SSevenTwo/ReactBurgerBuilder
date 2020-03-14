import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Total Price: <strong>${props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ingredient => {
        return (
          <BuildControl
            key={ingredient.label}
            label={ingredient.label}
            added={() => props.addIngredient(ingredient.type)}
            removed={() => props.removeIngredient(ingredient.type)}
            btnStatus={props.disabled[ingredient.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.order}
      >
        Order
      </button>
    </div>
  );
};

export default buildControls;
