import React from 'react';

const products = [
  {
    id: 1,
    name: 'Karan Bhatt T-Shirt',
    price: '$25.00',
    image: '/assets/images/home1.jpg', // Replace with your actual image
  },
  {
    id: 2,
    name: 'Neon Cap',
    price: '$15.00',
    image: '/assets/images/home1.jpg', // Replace with your actual image
  },
  // Add more products as needed
];

export default function Store() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-white bg-background">
      <h1 className="mb-8 text-4xl font-bold md:text-6xl text-neon">Store</h1>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="p-6 bg-black rounded-lg shadow-lg bg-opacity-40">
            <img src={product.image} alt={product.name} className="object-cover w-full h-64 mb-4 rounded" />
            <h2 className="mb-2 text-2xl font-bold text-neon">{product.name}</h2>
            <p className="mb-4 text-lg">{product.price}</p>
            <button className="w-full px-6 py-2 text-lg transition-colors duration-300 border-2 rounded-full text-neon border-neon hover:bg-neon hover:text-background">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
