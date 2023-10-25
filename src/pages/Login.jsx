import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../context';

const fakeAxios = {
    post: (url, data) => {
        if (url === '/api/login') {
            if (data.login === "admin" && data.password === "adminadmin") {
                return Promise.resolve({
                    status: 200,
                    data: {
                        token: '123456789',
                        user: { name: data.login }
                    },

                });
            } else {
                return Promise.reject({ status: 401 });
            }
        } else {
            return axios.post(url, data);
        }
    }
}

function Login() {

    const navigate = useNavigate();
    const { dispatch } = useContext(Context);
    const [authError, setAuthError] = useState(null);

    return (
        <div className="d-flex justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                <h1 className='text-center'>Connexion</h1>
                {authError && <div className="alert alert-danger">{authError}</div>}
                <Formik
                    initialValues={{ login: '', password: '' }}
                    validationSchema={Yup.object({
                        login: Yup.string()
                            .required('Le login est obligatoire')
                            .min(4, 'Votre login doit comporter au moins 4 caractères'),
                        password: Yup.string()
                            .required('Le mot de passe est obligatoire')
                            .min(8, 'Votre mot de passe doit comporter au moins 8 caractères')
                    })}
                    onSubmit={async ({ login, password }) => {
                        try {
                            const response = await fakeAxios.post('/api/login', { login, password });
                            axios.defaults.headers.common['Authorization'] = `Bearer: ${response.data.token}`;
                            dispatch({ type: 'setUser', payload: response.data.user });
                            navigate('/');
                        } catch (error) {
                            if (error.status === 401) {
                                setAuthError('Login ou mot de passe incorrect');
                            } else {
                                setAuthError(error.message);
                            }
                            console.log(error);
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="login" className="form-label">Login</label>
                                <Field type="text" name="login" className="form-control" id="login"></Field>
                                <ErrorMessage name="login" component="div" className="alert alert-warning" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Mot de passe</label>
                                <Field type="password" name="password" className="form-control" id="password"></Field>
                                <ErrorMessage name="password" component="div" className="alert alert-warning" />
                            </div>
                            <div className="d-grid gap">
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Valider</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div >
    );
}

export default Login;