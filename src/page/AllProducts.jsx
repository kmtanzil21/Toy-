import React, { use } from 'react';
import SingleProduct from '../Component/SingleProduct';

const allProductsPromise= fetch('/allData.json')
.then(res=>res.json())

const AllProducts = () => {
    const allData=use(allProductsPromise);
    console.timeLog(allData);
    return (
        <div className='space-y-3'>
            <h2 className='text-3xl font-bold text-blue-800 text-center'>All Products</h2>
            <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto'>
                {
                    allData.map(singleData=><SingleProduct singleData={singleData}></SingleProduct>)
                }

            </div>
        </div>
    );
};

export default AllProducts;