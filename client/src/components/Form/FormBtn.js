import React from "react";

export const FormBtn = props => (
  <button {...props}  className="button">
    {props.children}
  </button>
);
