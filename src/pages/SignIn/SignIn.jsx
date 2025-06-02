import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import signIn from '../../assets/lotties/login.json'
import Lottie from 'lottie-react';
import { useLocation, useNavigate } from 'react-router';

const SignIn = () => {

    const {createUser, signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state || '/';

    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // signInUser
        signInUser(email, password)
        .then(result =>{
           navigate(from);
        })
        .catch(error => {
            console.log(error);
        })


    }

return (
<div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <Lottie  className='w-full' animationData={signIn} loop={true}></Lottie>
            
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Sign In Now</h1>
                <form onSubmit={handleSignIn}>
                    <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">SignIn</button>
                    </fieldset>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
};

export default SignIn;