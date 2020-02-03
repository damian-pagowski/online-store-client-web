import React from "react";
import "./PaymentResult.css";
import { Link } from "react-router-dom";

function PaymentResult(props) {
  const data = props.data;
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">
          <i className={`fa ${data.icon} mx-auto`} id="check-circle"></i>
          <div className="text-center h2 mt-4">{data.title}</div>
        </h1>
        <hr className="my-4" />
        <p className="text-center h5">{data.message}</p>
        <p className="text-center my-3">
          <Link
            className="btn btn-primary btn-lg mx-auto"
            to={data.backUrl}
            id="button-back"
          >
            {data.backText}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default PaymentResult;
