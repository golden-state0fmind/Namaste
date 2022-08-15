import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { AlertUser } from '../components/utilities/AlertUser';

const Signin = () => {
    const router = useRouter();
    const { signin } = useAuth();
    const [alertUser, setAlertUser] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleSignin = async (e) => {
        e.preventDefault()
        try {
            await signin(data.email, data.password)
            router.push('/')
        } catch (err) {
            console.log(err)
            setAlertUser(true)
        }
    }
    const gotoSignup = () => router.push('/signup');

    useEffect(() => {
        //effect
        return () => {
            //cleanup
        };
    }, []);

    return (
        <>
            <div className="container">
                <div className="row g-3 mx-1">
                    <h1 className="display-1">Sign in</h1>
                    <form onSubmit={handleSignin} className="was-validated">
                        {alertUser ? (<AlertUser error={error} />) : null}
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
                                type="password"
                                style={{ borderColor: 'gray' }}
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
                                Sign in
                            </button>
                        </div>
                        <br />
                        <br />
                    </form>
                    <div className="display-6">Don't have an account?
                    <br />
                        <button style={{ opacity: 0.85 }} onClick={gotoSignup} className="btn btn-dark btn-lg">Sign up</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;