import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router'; 
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, updateUserProfile, setUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setError(""); 

        createUser(email, password)
            .then((result) => {
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser((prev) => ({ ...prev, displayName: name, photoURL: photo }));
                        toast.success("Registration Successful!");
                        navigate('/'); 
                    })
                    .catch((err) => toast.error("Profile update failed: " + err.message));
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
                toast.error("Registration Failed");
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                toast.success("Google Registration Successful!");
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                toast.error("Google Registration Failed");
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
             <title>Register| Toy Store</title>
            <meta name="Register" content={`Register and buy amazing toys.`} />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Photo URL</span></label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        
                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    <div className="px-8 pb-8">
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
                            Continue with Google
                        </button>
                        <p className="text-center mt-4">
                            Already have an account? <Link className="text-blue-600 font-bold" to="/authentication/login">Login</Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;