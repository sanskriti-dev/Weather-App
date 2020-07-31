import React from "react";
import "./form.css";

const Form = (props) => {
  return (
    <div className="container">
      <form onSubmit={props.onSubmit}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              name="city"
              placeholder="City"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              name="country"
              placeholder="Country"
            />
          </div>
          <div className="col-md-3 mt-md-0 text-md-left py-2">
            <button className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
