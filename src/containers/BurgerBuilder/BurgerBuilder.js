import React, { Component } from "react";
import Aux from "../../hoc/ReactAux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 2,
      meat: 1,
      bacon: 1
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Ingredient Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
