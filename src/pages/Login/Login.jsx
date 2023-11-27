import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// import { Footer, Navbar } from "../components";
import { login } from '../../services/authServices';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isFormValid = email !== '' && password !== '';

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await login(email, password);
        console.log(res);
    };

    return (
        <>
            {/* <Navbar /> */}
            <div className="container my-3 py-3">
                <h1 className="text-center">Login</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div className="my-3">
                                <label htmlFor="display-4">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="floatingPassword display-4">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="my-3">
                                <p>
                                    New Here?{' '}
                                    <Link
                                        to="/register"
                                        className="text-decoration-underline text-info"
                                    >
                                        Register
                                    </Link>{' '}
                                </p>
                            </div>
                            <div className="text-center">
                                <button
                                    className="my-2 mx-auto btn btn-dark"
                                    type="submit"
                                    disabled={!isFormValid}
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Login;
