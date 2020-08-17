import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends Component {
  //Using redux now
  // state = {
  //   ingredients: null,
  //   totalPrice: 0,
  // };

  // UNSAFE_componentWillMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const updatedIngredients = {};
  //   let price = 0;
  //   for (let param of query.entries()) {
  //     console.log(param);
  //     //each param is like ['salad','1']
  //     if (param[0] === "price") {
  //       price = param[1];
  //     } else {
  //       updatedIngredients[param[0]] = +param[1];
  //     }
  //   }

  //   this.setState({ ingredients: updatedIngredients, totalPrice: price });
  // }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ingredients}
          checkoutCancelled={this.checkoutCancelHandler}
          checkoutContinued={this.checkoutContinueHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          // render={(props) => (
          //   <ContactData ingredients={this.props.ingredients} price={this.props.totalPrice} {...props}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    //totalPrice: state.totalPrice,
  };
};

export default connect(mapStateToProps)(Checkout);
