import React, { useState } from "react";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../redux/slices/userSlice";

const EditUser = () => {
    const {id} = useParams();
    const users = useSelector(store => store.users);
    const user = users.find(u => u.id === id);
    const {name, email} = user;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name,
        email
    });

    const handleEditUser = () => {
        console.log('values: ', values, 'id: ', id);
        dispatch(editUser({id, name: values.name, email: values.email}))
        setValues({name: '', email: ""});
        navigate('/')
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextField
                label="Name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                inputProps={{ type: "text", placeholder: "Enter Name" }}
            />
            <br />
            <TextField
                label="Email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                inputProps={{ type: "email", placeholder: "Enter Email" }}
            />
            <Button onClick={handleEditUser}>Edit</Button>
        </div>
    );

}

export default EditUser