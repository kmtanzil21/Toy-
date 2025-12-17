import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// 1. Import toast
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, setUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // 2. Validation with Toasts
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }

        if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter.");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                
                // 3. Success Toast
                toast.success("Successfully Registered!");
                
                navigate('/'); 
            })
            .catch((error) => {
                // 4. Error Toast from Firebase
                toast.error(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success("Login Successful!"); // Google Success
                navigate('/');
            })
            .catch(error => {
                toast.error(error.message);
            });
    }

    return (
        <div className="flex justify-center min-h-screen items-center">
            {/* ... rest of your JSX remains the same ... */}
            {/* You can remove the {error && <p>} section since the toast handles it now */}
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-2xl text-center">
                    Register your account
                </h2>
                <form onSubmit={handleRegister} className="card-body">
                    {/* ... Inputs for Name, Photo, Email ... */}
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input name="name" type="text" className="input" placeholder="Name" required />

                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input name="photo" type="text" className="input" placeholder="Photo URL" required />

                        {/* Email */}
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" required />

                        {/* Password */}
                        <label className="label">Password</label>
                        <div className="relative">
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                className="input w-full"
                                placeholder="Password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="btn btn-xs absolute right-2 top-3"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        <button type="submit" className="btn btn-neutral mt-4">
                            Register
                        </button>

                        <div className="divider">OR</div>

                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="btn bg-white text-black border-[#e5e5e5]"
                        >
                             Login with Google
                        </button>

                        <p className="font-semibold text-center pt-5">
                            Already Have An Account?{" "}
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