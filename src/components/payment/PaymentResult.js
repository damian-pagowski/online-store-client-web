import React from "react";
import { Link } from "react-router-dom";
import "./PaymentResult.css";

const PaymentResult = ({ data }) => {
  const { icon, title, message, backUrl, backText } = data;

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4 text-center">
          <i className={`fa ${icon} mx-auto`} id="check-circle"></i>
          <div className="text-center h2 mt-4">{title}</div>
        </h1>
        <hr className="my-4" />
        <p className="text-center h5">{message}</p>
        <p className="text-center my-3">
          <Link
            className="btn btn-primary btn-lg mx-auto"
            to={backUrl}
            id="button-back"
          >
            {backText}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PaymentResult;