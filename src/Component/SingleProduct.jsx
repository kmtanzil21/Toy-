import React from 'react';
import { NavLink } from 'react-router';

const SingleProduct = ({ singleData }) => {
    const { pictureURL, toyName, rating, availableQuantity, price, toyId } = singleData;

    return (
        <div className="card bg-base-100 w-full shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
            <figure className="px-4 pt-4 h-64 bg-gray-50 flex items-center justify-center">
                <img
                    src={pictureURL}
                    alt={toyName}
                    className="rounded-xl h-full w-full object-contain hover:scale-105 transition-transform duration-300"
                />
            </figure>

            <div className="card-body">
                <div className="flex justify-between items-start">
                    <h2 className="card-title text-lg font-bold truncate w-2/3" title={toyName}>
                        {toyName}
                    </h2>
                    <div className="badge badge-warning gap-1 font-medium">
                        {rating} <span className="text-xs">★</span>
                    </div>
                </div>

                <div className="mt-2 text-sm text-gray-500">
                    <span className="font-semibold">Availability:</span> 
                    <span className={availableQuantity > 0 ? "text-success ml-1" : "text-error ml-1"}>
                        {availableQuantity > 0 ? `${availableQuantity} In Stock` : 'Out of Stock'}
                    </span>
                </div>

                <div className="card-actions justify-between items-center mt-4">
                    <div className="text-xl font-bold text-primary">
                        ${price}
                    </div>
                    
                    <NavLink to={`/toy/${toyId}`}>
                        <button className="btn btn-primary btn-sm">
                            View More
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;