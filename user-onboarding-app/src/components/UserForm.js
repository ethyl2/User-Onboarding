import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

import UserList from './components/UserList';

/*
We want to create a form to onboard a new user to our system. 
We need at least the following pieces of information about our new user:

    Name
    Email
    Password
    Terms of Service (checkbox)
    A Submit button to send our form data to the server.

*/

const UserForm =({ values, errors, touched, status}) => {

    //Set up a state property called users that is initialized with an empty array
    const [users, setUsers] = useState([]);

    /*
    Every time you make a POST request, and get that new user data back, 
    update your user's state with the new user added to the array */
    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);
    
    
    return(
        <div>
            <Form>
                <label htmlFor='username'>Username: </label>
                <Field type='text' name='username' placeholder='name' />
                {touched.username && errors.username && (<p>{errors.username}</p>)}
                <br />

                <label htmlFor='email'>Email: </label>
                <Field type='email' name='email' placeholder='email' />
                {touched.email && errors.email && (<p>{errors.email}</p>)}
                <br />

                <label htmlFor='password'>Password: </label>
                <Field type='password' name='password' placeholder='password' />
                {touched.password && errors.password && (<p>{errors.password}</p>)}
                <br />

                <label htmlFor='tos'>Accept Terms of Service </label>
                <Field type='checkbox' name='tos' checked={values.tos} />
                {touched.tos&& errors.tos && (<p>{errors.tos}</p>)}
                <br />

                <button type='submit'>Submit User</button>
            </Form>
            <UserList users={users} />
        </div>
    )
};

const FormikUserForm = withFormik({
    mapPropsToValues({ username, email, password, tos }) {
        return {
          username: username || '',
          email: email || '',
          password: password || '',
          tos: tos || false
        };
    },
    /*Using Yup, set up at least two different validations for each field 
    along with custom error codes that will display on screen when validation 
    fails. */
    validationSchema: Yup.object().shape({
        username: Yup.string().min(2, 'Username is too short')
        .max(50, 'Username is too long')
        .required('Username is required here'),
        email: Yup.string()
        .email('Invalid email')
        .required('Email is required here'),
        password: Yup.string()
        .min(6, 'Password is too short')
        .max(50, 'Password is too long')
        .required('Password is required here'),
        tos: Yup.bool().oneOf([true], 'You must agree to the Terms of Service to continue')
    }),

    /* 
    Craft a POST request using axios that sends your form data to the 
    following endpoint: https://reqres.in/api/users
    Verify using a console.log() that you are receiving a successful 
    response back
    */
       
    handleSubmit(values, { setStatus }) {
           axios.post('https://reqres.in/api/users', values)
           .then(res => {
               console.log(res);
               setStatus(res.data);
           })
           .catch(err => console.log(err.response));
       }
})(UserForm);

export default FormikUserForm;