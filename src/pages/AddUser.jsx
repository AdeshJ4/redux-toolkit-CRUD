import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addUser } from "../redux/slices/userSlice";
import UserForm from "../components/UserForm";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    console.log("target: ", e.target);
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    dispatch(addUser({ id: uuidv4(), ...values }));
    setValues({ name: "", age: "", email: "" });
    navigate("/");
  };

  return (
    <UserForm
      values={values}
      handleChange={handleChange}
      handleSubmit={handleAddUser}
      buttonText="Submit"
    />
    // <div className="mt-10 max-w-xl mx-auto">
    //   <TextField
    //     label="Name"
    //     name="name"
    //     value={values.name}
    //     onChange={handleChange}
    //     inputProps={{ type: "text", placeholder: "Enter Name" }}
    //   />
    //   <br />
    //   <TextField
    //     label="Age"
    //     name="age"
    //     value={values.age}
    //     onChange={handleChange}
    //     inputProps={{ type: "number", placeholder: "Enter Age" }}
    //   />
    //   <br />
    //   <TextField
    //     label="Email"
    //     name="email"
    //     values={values.email}
    //     onChange={handleChange}
    //     inputProps={{ type: "email", placeholder: "Enter Email" }}
    //   />
    //   <Button onClick={handleAddUser}>Submit</Button>
    // </div>
  );
};

export default AddUser;
