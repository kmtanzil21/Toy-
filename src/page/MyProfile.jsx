import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const MyProfile = () => {
    const { user, updateUserProfile, setUser } = useContext(AuthContext);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                toast.success("Profile Updated Successfully!");
                setUser((prev) => ({ ...prev, displayName: name, photoURL: photo }));
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to update profile.");
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200 py-10">
            <title>My Profile| Toy Store</title>
            <meta name="profile" content={`Edit your Profile.`} />
            <div className="card w-full max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl font-bold mb-4">My Profile</h2>

                    <div className="flex flex-col items-center gap-4 mb-6">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"} alt="User" />
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-bold">{user?.displayName || "Name Not Set"}</h3>
                            <p className="text-gray-500">{user?.email}</p>
                        </div>
                    </div>

                    <div className="divider">Edit Profile</div>

                    <form onSubmit={handleUpdateProfile} className="form-control gap-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Display Name</span>
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                defaultValue={user?.displayName} 
                                placeholder="Enter your name" 
                                className="input input-bordered w-full" 
                                required
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input 
                                type="text" 
                                name="photo" 
                                defaultValue={user?.photoURL} 
                                placeholder="Enter photo URL" 
                                className="input input-bordered w-full" 
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Information</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;