import React from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/ReactAux";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => {
  return (
    <Aux>
      <Backdrop show={props.show} cancel={props.cancelModal} />
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
        className={classes.Modal}
      >
        {props.children}
      </div>
    </Aux>
  );
};

// Prevent unecessary re-renders with memo
export default React.memo(modal);
