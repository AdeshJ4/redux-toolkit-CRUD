import React from "react";
import TextField from "./TextField";
import Button from "./Button";

const UserForm = ({ values, handleChange, handleSubmit, buttonText }) => {
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        name="name"
        value={values.name}
        onChange={handleChange}
        inputProps={{ type: "text", placeholder: "Enter Name" }}
      />
      <br />
      <TextField
        label="Age"
        name="age"
        value={values.age}
        onChange={handleChange}
        inputProps={{ type: "number", placeholder: "Enter Age" }}
      />
      <br />
      <TextField
        label="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        inputProps={{ type: "email", placeholder: "Enter Email" }}
      />
      <Button onClick={handleSubmit}>{buttonText}</Button>
    </div>
  );
};

export default UserForm;
