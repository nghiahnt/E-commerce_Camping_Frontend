import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

// import { Footer, Navbar } from "../components";
import { registerUser, verifyEmail } from '../../services/authServices';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

const Register = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [showButton, setShowButton] = useState(false);

    const [otpForm, setOtpForm] = useState(false);

    const handleChangeEmail = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (otp === '') {
            try {
                const res = await registerUser(email);

                if (res.status === 200) {
                    setOtpForm(true);
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            const res = await verifyEmail(email, otp);
            if (res.status <= 210) {
                setPassword(res.elements);
                setShowButton(true);
            }
        }
    };

    return (
        <>
            {/* <Navbar /> */}
            <div className="container my-3 py-3">
                <h1 className="text-center">
                    {password === '' && 'Register'}
                    {password !== '' && 'Password'}
                </h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            {/* <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                />
                            </div> */}
                            {otpForm && (
                                <div className={cx('otp-popup')}>
                                    <p className={cx('otp-text')}>
                                        {password !== ''
                                            ? 'Register successfully'
                                            : 'Otp has been send to email'}
                                    </p>
                                </div>
                            )}

                            <div className="form my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={handleChangeEmail}
                                />
                            </div>

                            {otpForm && (
                                <div className="form  my-3">
                                    <label htmlFor="OTP">Enter OTP</label>
                                    <input
                                        type="OTP"
                                        className="form-control"
                                        id="otp"
                                        placeholder="Enter OTP"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />
                                </div>
                            )}

                            {password !== '' && (
                                <div className={cx('password-popup')}>
                                    <label htmlFor="elementsPW">
                                        Your password
                                    </label>
                                    <p
                                        id="elementsPW"
                                        className={cx('password')}
                                    >
                                        {password}
                                    </p>
                                </div>
                            )}

                            <div className="my-3">
                                <p>
                                    Already has an account?{' '}
                                    <Link
                                        to="/login"
                                        className="text-decoration-underline text-info"
                                    >
                                        Login
                                    </Link>{' '}
                                </p>
                            </div>
                            <div className={cx('text-center')}>
                                <button
                                    className={cx('my-2 mx-auto btn btn-dark', {
                                        [styles.button]: showButton,
                                    })}
                                    type="submit"
                                    disabled={!email}
                                    onClick={handleRegister}
                                >
                                    {otp !== '' && 'Verify'}
                                    {otp === '' && 'Register'}
                                </button>

                                {password !== '' && (
                                    <div className={cx('login')}>
                                        <Link to="/login">
                                            <button className={cx('login-btn')}>
                                                Login
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Register;
