import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createUser,setUser}=use(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name, photo,email,password);
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            // console.log(user);
            setUser(user);
        })
        .catch((error)=>{
            const errorCode=error.code;
            const errorMessage=error.message;
            alert(errorCode)
        })


    }
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center">
                    Register your account
                </h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name  */}
                        <label className="label">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input"
                            placeholder="Name"
                            required
                        />


                        {/* Photo URl  */}
                        <label className="label">Photo URl </label>
                        <input
                            name="photo"
                            type="text"
                            className="input"
                            placeholder="Photo URl"
                            required
                        />

                        {/* email  */}
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Email"
                            required
                        />

                        {/* password  */}
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input"
                            placeholder="Password"
                            required
                        />

                        <button type="submit" className="btn btn-neutral mt-4">
                            Register
                        </button>

                        <button className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <p className="font-semibold text-center pt-5">
                            Already Have An Account ?{" "}
                            <Link className="text-secondary" to="/authentication/login">
                                Login
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;