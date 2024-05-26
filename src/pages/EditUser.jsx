import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { editUser } from "../redux/slices/userSlice";
import UserForm from "../components/UserForm";

const EditUser = () => {
  const { id } = useParams();
  const users = useSelector((store) => store.user);
  const user = users.find((u) => u.id === id);

  const { name, age, email } = user;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name,
    age,
    email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleEditUser = () => {
    dispatch(editUser({ id, ...values }));
    setValues({ name: "", age: "", email: "" });
    navigate("/");
  };

  return (
    <UserForm
      values={values}
      handleChange={handleChange}
      handleSubmit={handleEditUser}
      buttonText="Edit"
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
    //     value={values.email}
    //     onChange={handleChange}
    //     inputProps={{ type: "email", placeholder: "Enter Email" }}
    //   />
    //   <Button onClick={handleEditUser}>Edit</Button>
    // </div>
  );
};

export default EditUser;
