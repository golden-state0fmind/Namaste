import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import AlertUser from '../components/utilities/AlertUser';

const Signup = () => {
    const [alertUser, setAlertUser] = useState(false);
    const router = useRouter()
    const { user, signup } = useAuth();
    console.log(user)
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleSignup = async (e) => {
        e.preventDefault()
        if (/(.+)@(.+){2,}\.(.+){2,}/.test(data.email)) {
            // valid email
            try {
                await signup(data.email, data.password)
                router.push('/')
            } catch (err) {
                console.log(err)
                //handle error for logging in
                setAlertUser(true)
            }
        } else {
            // invalid email
            alert('Insert Valid Email and Password must be longer than 6 characters')
        }
        console.log(data)
    };
    const gotoSignin = () => router.push('/signin');

    return (
        <>
            <div className="container">
                <div className="row g-3 mx-1">
                    <h1 className="display-1">Sign up</h1>
                    <form onSubmit={handleSignup} className="was-validated">
                        {alertUser ? (<AlertUser />) : null}
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label display-6 validationTooltipUsername">Email</label>
                            <input
                                type="email"
                                style={{ borderColor: 'gray' }}
                                className="form-control form-control-lg"
                                id="inputEmail4"
                                type="email"
                                placeholder="Enter email"
                                required
                                value={data.email}
                                is-invalid="true"
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label display-6">Password</label>
                            <input
                                style={{ borderColor: 'gray' }}
                                type="password"
                                className="form-control form-control-lg"
                                id="inputPassword4"
                                type="password"
                                placeholder="Must be 6 characters long"
                                required
                                is-invalid="true"
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        password: e.target.value,
                                    })
                                }
                                value={data.password}
                            />
                        </div>
                        <br />
                        <div className="col-12">
                            <button style={{ opacity: 0.85 }} type="submit" className="btn btn-success btn-lg">
                                Create Account
                            </button>
                        </div>
                        <br />
                        <br />
                    </form>
                    <div className="display-6">Already have an account?
                <br />
                        <button style={{ opacity: 0.85 }} onClick={gotoSignin} className="btn btn-dark btn-lg">Sign in</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup