import React, { use } from 'react';
import TopProductsSlider from '../Component/TopProductsSlider';
import Product from '../Component/Product';

const topProductsPromise = fetch('/topData.json')
    .then(res => res.json());

const TopProducts = () => {
    const products = use(topProductsPromise);

    return (
        <div className='space-y-3'>
            {/* --- REACT 19 DYNAMIC TITLE --- */}
            <title>Best Selling Products | Toy Store</title>
            <meta name="description" content="Browse our best selling toys and gadgets." />
            {/* ------------------------------ */}

            <div>
                <TopProductsSlider></TopProductsSlider>
            </div>
            <div className='text-center'>
                <h2 className='text-3xl font-extrabold text-blue-800 my-10'>Best Selling</h2>
                <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto'>
                    {
                        products.map((product) => (
                            <Product key={product.id} product={product}></Product>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TopProducts;