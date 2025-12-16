import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router'; // Ensure import from 'react-router-dom'

const ToyDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    
    // Initialize with null to handle the "loading" state better
    const [toy, setToy] = useState(null);

    useEffect(() => {
        if (data) {
            // FIX 1: Use 'toyId' instead of 'id' to match your JSON data
            // FIX 2: Convert 'id' to Number because useParams returns a string
            const foundToy = data.find(singleToy => singleToy.toyId === Number(id));
            setToy(foundToy);
        }
    }, [data, id]);

    // Safety check: Don't render if toy isn't found yet
    if (!toy) {
        return <div className="text-center mt-10">Loading details...</div>;
    }

    return (
        <div className="card bg-base-100 shadow-xl w-96 mx-auto my-10 border">
            <figure className="px-10 pt-10 h-64">
                <img src={toy.pictureURL} alt={toy.toyName} className="rounded-xl object-contain h-full w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{toy.toyName}</h2>
                <p className="font-semibold text-primary text-lg">${toy.price}</p>
                <div className="badge badge-secondary">{toy.subCategory}</div>
                
                <div className="text-left w-full mt-4 space-y-2">
                    <p><strong>Rating:</strong> {toy.rating} ★</p>
                    <p><strong>Available:</strong> {toy.availableQuantity}</p>
                    <p><strong>Seller:</strong> {toy.sellerName}</p>
                    <p><strong>Email:</strong> {toy.sellerEmail}</p>
                    <p className="mt-4 text-gray-600">{toy.description}</p>
                </div>

                <Link to="/topproducts">
                <button className='btn btn-primary'>
                    Back to Home
                </button>
                </Link>
            </div>
        </div>
    );
};

export default ToyDetails;