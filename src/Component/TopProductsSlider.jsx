import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const TopProductsSlider = () => {
    const products = [
        {
            "toyId": 1,
            "toyName": "Lego Classic Bricks",
            "price": 49.99,
            "rating": 4.7,
            "pictureURL": "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=1000&auto=format&fit=crop",
            "subCategory": "Building Blocks"
        },
        {
            "toyId": 2,
            "toyName": "Plush Teddy Bear",
            "price": 24.99,
            "rating": 4.9,
            "pictureURL":" https://i.ibb.co.com/ycwf2vHv/teddy.jpg" ,
            "subCategory": "Stuffed Animals"
        },
        {
            "toyId": 4,
            "toyName": "Wooden Train Set",
            "price": 55.00,
            "rating": 4.8,
            "pictureURL": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000&auto=format&fit=crop",
            "subCategory": "Wooden Toys"
        },
        {
            "toyId": 7,
            "toyName": "Dollhouse Mansion",
            "price": 120.00,
            "rating": 4.9,
            "pictureURL": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop",
            "subCategory": "Dolls & Accessories"
        },
        {
            "toyId": 9,
            "toyName": "Kitchen Play Set",
            "price": 89.99,
            "rating": 4.8,
            "pictureURL": "https://i.ibb.co.com/R4v52xCx/kitchen.jpg",
            "subCategory": "Role Play"
        },
        {
            "toyId": 13,
            "toyName": "Dinosaur Figure Set",
            "price": 39.99,
            "rating": 4.7,
            "pictureURL": "https://i.ibb.co.com/TDk9XmFq/dinosaur.jpg",
            "subCategory": "Action Figures"
        },
        {
            "toyId": 16,
            "toyName": "Robot Building Kit",
            "price": 60.00,
            "rating": 4.9,
            "pictureURL": "https://i.ibb.co.com/Y7ZHr1qt/robot.jpg",
            "subCategory": "Educational"
        },
        {
            "toyId": 23,
            "toyName": "Magnetic Tiles",
            "price": 59.99,
            "rating": 4.9,
            "pictureURL": "https://images.unsplash.com/photo-1587588354456-ae376af71a25?q=80&w=1000&auto=format&fit=crop",
            "subCategory": "Building Blocks"
        }
    ];

    return (
        <div className="my-10 px-5 container mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Top Toys</h2>
            
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                // Breakpoints to control how many slides show at different widths
                breakpoints={{
                    640: {
                        slidesPerView: 1, // Mobile: 1 slide
                    },
                    768: {
                        slidesPerView: 2, // Tablet: 2 slides
                    },
                    1024: {
                        slidesPerView: 3, // Desktop: 3 slides (This matches your request)
                    },
                }}
                className="mySwiper"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.toyId}>
                        {/* Card Component */}
                        <div className="card bg-base-100 shadow-xl border border-gray-100 h-full">
                            {/* Changed h-52 to h-64 for a taller image area */}
                            <figure className="h-64 px-4 pt-4 flex items-center justify-center bg-gray-50">
                                <img
                                    src={product.pictureURL}
                                    alt={product.toyName}
                                    // Changed object-cover to object-contain so the full image is shown
                                    className="rounded-xl max-h-full max-w-full object-contain"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.toyName}</h2>
                                <p className="text-sm text-gray-500">{product.subCategory}</p>
                                <div className="flex justify-between w-full items-center mt-2">
                                    <div className="badge badge-outline">{product.rating} ★</div>
                                    <div className="text-lg font-bold text-primary">${product.price}</div>
                                </div>
                                
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopProductsSlider;