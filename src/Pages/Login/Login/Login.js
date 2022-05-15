import React from 'react';
import google from '../../../assets/logo/google1.png';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Home/Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let signinError;
    // this define current location.
    let from = location.state?.from?.pathname || "/";

    if (gLoading || loading) {
        return <Loading></Loading>
    }

    if(gError || error){
        signinError = <p className='text-red-500'><small>{gError?.message || error?.message}</small></p>
    }

    if(gUser || user){
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='flex h-screen justify-center items-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font-bold text-primary text-center">Login
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required.'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                                type="email" placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}

                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required.'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters'
                                    }
                                })}
                                type="password" placeholder="Your password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}

                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signinError}

                        <input className="btn w-full max-w-xs" type="submit"  value="Login"/>
                    </form>
                    <p><small>New to Doctors Portal? <Link to="/signup" className='text-primary'>Create new account.</Link></small></p>

                    <div className="divider"> OR</div>
                    <button
                        onClick={() => signInWithGoogle()} className='btn btn-outline
                    bg-slate-600'>
                        <img className='w-20 mx-5 ' src={google} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;