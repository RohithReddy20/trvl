import React, { useEffect } from "react";
import "./Form.css";
import $ from "jquery";

function Form() {
  const handlePageChange = () => {
    $(".navbar").css("background", "#013028");
    $(".nav-menu").css("background", "#013028");
  };

  useEffect(() => {
    handlePageChange();
  });

  return (
    <div className="forms-parent">
        <div className="form-group">
          <div className="img-container">
            <figure className="image">
              <img src="../images/bg4.jpg" alt="i-m-a-g-e" />
            </figure>
          </div>
          <div className="form-container">
            <form
              action="https://getform.io/f/c62223d5-75ab-4730-9b1a-d7cc5c7201c5"
              method="POST"
              className="form1"
            >
              <input
              className="details"
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input className="details" id="age" type="text" name="age" placeholder="Age" required />
              <input
              className="details"
                id="profession"
                type="text"
                name="profession"
                placeholder="Profession"
                required
              />
              <input
              className="details"
                id="email"
                type="text"
                name="email"
                placeholder="Email"
                required
              />
        
              <input type="submit" name="Submit" id="submit" />
            </form>
          </div>
        </div>
    </div>
  );
}

export default Form;
