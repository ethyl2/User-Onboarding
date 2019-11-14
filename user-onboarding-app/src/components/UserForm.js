import React from 'react';
import { withFormik, Form, Field } from 'formik';
//import axios from 'axios';
//import * as Yup from 'yup';

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
    
    return(
        <div>
            <Form>
                <label htmlFor='username'>Username: </label>
                <Field type='text' name='username' placeholder='name' /><br />
                <label htmlFor='email'>Email: </label>
                <Field type='email' name='email' placeholder='email' /><br />
                <label htmlFor='password'>Password: </label>
                <Field type='password' name='password' placeholder='password' /><br />
                <label htmlFor='tos'>Accept Terms of Service </label>
                <Field type='checkbox' name='tos' checked={values.tos} /><br />
                <button type='submit'>Submit User</button>
            </Form>
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
      }
})(UserForm);

export default FormikUserForm;