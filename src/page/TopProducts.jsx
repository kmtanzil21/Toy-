import React, { use } from 'react';
import TopProductsSlider from '../Component/TopProductsSlider';
import Product from '../Component/Product';
const topProductsPromise= fetch('/topData.json')
    .then(res=>res.json());

const TopProducts = () => {

    const products=use(topProductsPromise);
    console.log(products);

    return (
        <div className='space-y-3'>
            <div>
                <TopProductsSlider></TopProductsSlider>
            </div>
            <div className='text-center'>
               <h2 className='text-3xl font-extrabold text-blue-800 my-10'>Best Selling</h2>
                <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto'>
                    {
                    products.map((product)=><Product product={product} ></Product>)
                   }
                </div>
            </div>
        </div>
    );
};

export default TopProducts;