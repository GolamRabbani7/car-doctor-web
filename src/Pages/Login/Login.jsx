
import img from '../../../assets/images/login/login.svg'
import facebook from '../../../assets/icons/button/facebook.svg'
import Google from '../../../assets/icons/button/google.svg'
import Linkdin from '../../../assets/icons/button/linkedin.svg'
//-----------------------

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContextProvider } from '../../AuthContext/AuthContext';
import Swal from 'sweetalert2';


const Login = () => {
    const { LoinUser } = useContext(ContextProvider);


    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        LoinUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                navigate(location?.state ? location.state : '/')

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                // ...

            })
            .catch((error) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Don't currect or password",
                    showConfirmButton: false,
                    timer: 1500
                });

                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row">
                <img className='w-1/2' src={img} alt="" />
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold">Login now</h1>


                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-error" type="submit" value="Login " />
                        </div>
                    </form>
                    <div className='text-center '>
                        <p className='mb-5'>Or Sign In with</p>
                        <ButtonGroup variant="" aria-label="Basic button group">
                            <Button className='btn text-white btn-info btn-outline'><img src={facebook} alt="" /></Button>
                            <Button className='btn  btn-info btn-outline  mx-4'><img src={Google} alt="" /></Button>
                            <Button className='btn  btn-info btn-outline'><img src={Linkdin} alt="" /></Button>
                        </ButtonGroup>
                        <p className='my-5'>If don't have acount <Link className='text-blue-600' to='/register'>Register</Link></p>
                    </div>





                </div>
            </div>
        </div>
    );
};

export default Login;