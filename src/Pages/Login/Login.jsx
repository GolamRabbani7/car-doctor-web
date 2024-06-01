
import img from '../../../assets/images/login/login.svg'
const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form= e.target;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email,password)
        
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row">
                <img className='w-1/2' src={img} alt="" />
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold">Login now!</h1>


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
                            <input className="btn btn-error" type="submit" value="Login" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;