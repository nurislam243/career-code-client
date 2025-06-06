import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottie from '../../assets/lotties/Register.json'
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })



    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <Lottie  className='w-[350px]' animationData={registerLottie} loop={true}></Lottie>
            
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Register Now</h1>
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Register;