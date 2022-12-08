import React, { useState } from "react";

const Company = (props) => {
  const [myCountry, setMyCountry] = useState("");

  const handleCountryNameChange = (event) => {
    setMyCountry(event.target.value);
  };

  return (
    <div>
      <h1>Company|Testing Props, Events, States, Hooks, JSX,</h1>
      <h2>Welcome to my Company's Official Website</h2>
      <p data-testid="cognizantEl">{props.name}</p>
      <div data-testid="employeesCountEl" style={{ color: "green" }}>
        Employees:318000+
      </div>
      <div>
        <button className="btn">Join Now</button>
      </div>
      <input
        type="text"
        placeholder="Enter Country"
        value={myCountry}
        onChange={handleCountryNameChange}
      />
      <p>head over to Cognizant {myCountry} website</p>
    </div>
  );
};

export default Company;
