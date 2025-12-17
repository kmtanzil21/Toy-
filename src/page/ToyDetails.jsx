import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const ToyDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [toy, setToy] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (data) {
            const foundToy = data.find(singleToy => singleToy.toyId === Number(id));
            setToy(foundToy);
        }
    }, [data, id]);

    if (!toy) {
        return <div className="text-center mt-20 text-xl font-semibold">Loading toy details...</div>;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage(`Thank you, ${formData.name}! Your request to try ${toy.toyName} has been submitted.`);
        setFormData({ name: '', email: '' }); 
    };

    return (
        <div className="container mx-auto px-4 py-10">
              <title> Details | Toy Store</title>
            <meta name="Details" content={`See the details of your desired amazing toys.`} />
            <div className="max-w-4xl mx-auto bg-base-100 shadow-2xl rounded-2xl overflow-hidden">
                <div className="p-8 bg-gray-100">
                    <img
                        src={toy.pictureURL}
                        alt={toy.toyName}
                        className="w-full max-h-96 object-contain rounded-xl mx-auto"
                    />
                </div>

                <div className="p-8">
                    <h1 className="text-3xl font-bold text-primary mb-2">{toy.toyName}</h1>
                    <p className="text-2xl font-semibold text-secondary mb-4">${toy.price}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <p><strong>Sub-category:</strong> {toy.subCategory}</p>
                            <p><strong>Rating:</strong> {toy.rating} ★</p>
                            <p><strong>Available Quantity:</strong> {toy.availableQuantity}</p>
                        </div>
                        <div>
                            <p><strong>Seller:</strong> {toy.sellerName}</p>
                            <p><strong>Email:</strong> {toy.sellerEmail}</p>
                        </div>
                    </div>

                    <p className="text-gray-600 mb-8">{toy.description}</p>

                    {/* Try Now Form */}
                    <div className="bg-base-200 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-4">Try Now - {toy.toyName}</h3>

                        {successMessage && (
                            <div className="alert alert-success mb-6 shadow-md">
                                <span>{successMessage}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">Your Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-full">
                                Try Now
                            </button>
                        </form>
                    </div>

                    <div className="mt-8 text-center">
                        <Link to="/" className="btn btn-outline btn-lg">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;