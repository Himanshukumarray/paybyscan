import React, { useState } from "react";
import { Link } from "react-router-dom";


const dummyCartData = [
  { id: 1, name: "Onion (1 kg)", price: 32.00, qty: 1, category: "Vegetables" },
  { id: 2, name: "Amul Butter (500g)", price: 245.00, qty: 2, category: "Dairy" },
  { id: 3, name: "Maggi Noodles (Pack of 4)", price: 55.00, qty: 1, category: "Instant Food" },
  { id: 4, name: "Tropicana Orange Juice (1L)", price: 110.00, qty: 1, category: "Beverages" },
  { id: 5, name: "Cadbury Dairy Milk Silk", price: 75.00, qty: 3, category: "Chocolates" },
  { id: 6, name: "Whole Wheat Bread", price: 40.00, qty: 1, category: "Bakery" },
  { id: 7, name: "Lay's Classic Salted Chips", price: 20.00, qty: 2, category: "Snacks" },
  { id: 8, name: "Fortune Sunflower Oil (1L)", price: 165.00, qty: 1, category: "Cooking Essentials" },
  { id: 9, name: "Apple (1 kg)", price: 120.00, qty: 1, category: "Fruits" },
  { id: 10, name: "Aashirvaad Atta (5kg)", price: 250.00, qty: 1, category: "Grains" },
  { id: 11, name: "Dettol Handwash (200ml)", price: 95.00, qty: 2, category: "Personal Care" },
  { id: 12, name: "Good Knight Mosquito Repellent", price: 150.00, qty: 1, category: "Household" },
  { id: 13, name: "Britannia Marie Gold Biscuits", price: 30.00, qty: 2, category: "Snacks" },
  { id: 14, name: "Pepsi (1.5L)", price: 60.00, qty: 1, category: "Beverages" },
  { id: 15, name: "Eggs (12 pcs)", price: 75.00, qty: 1, category: "Dairy" },
  { id: 16, name: "Potato (2 kg)", price: 60.00, qty: 1, category: "Vegetables" },
  { id: 17, name: "Chicken Breast (1 kg)", price: 300.00, qty: 1, category: "Meat" },
  { id: 18, name: "Nestle Milk (1L)", price: 70.00, qty: 1, category: "Dairy" },
  { id: 19, name: "Colgate Toothpaste (150g)", price: 55.00, qty: 1, category: "Personal Care" },
  { id: 20, name: "Lux Soap (Pack of 3)", price: 99.00, qty: 1, category: "Personal Care" }
];


const Cart = () => {
  const [cart, setCart] = useState(dummyCartData);
  
  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
  
  // Calculate delivery fee (free over ₹500)
  const deliveryFee = subtotal > 500 ? 0 : 35;
  
  // Calculate total
  const total = subtotal + deliveryFee;
  
  // Function to update quantity
  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    
    setCart(cart.map(item => 
      item.id === id ? {...item, qty: newQty} : item
    ));
  };
  
  // Function to remove item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };
  
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      
      <div className="max-w-6xl mx-auto px-4 py-6">

         
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Main Cart Section */}
          <div className="w-full lg:w-8/12">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Your Cart ({cart.reduce((total, item) => total + item.qty, 0)} items)</h1>
                {cart.length > 0 && (
                  <span className="text-sm text-green-500 font-semibold flex items-center">
                    
                  </span>
                )}
              </div>
              
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-green-500 flex justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
                  <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 font-medium">
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex border-b pb-4">      
                      {/* Product Info */}
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.category}</p>
                        </div>
                        
                        <div className="flex justify-between items-end mt-2">
                          <p className="font-semibold">₹{item.price.toFixed(2)}</p>
                          
                          <div className="flex items-center">
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500 mr-4"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                            
                            <div className="flex border rounded-lg overflow-hidden">
                              <button 
                                onClick={() => updateQuantity(item.id, item.qty - 1)}
                                className="px-2 py-1 bg-gray-50 hover:bg-gray-100 text-green-500 font-bold"
                              >
                                -
                              </button>
                              <span className="px-3 py-1 bg-white flex items-center justify-center w-8 text-sm">
                                {item.qty}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.qty + 1)}
                                className="px-2 py-1 bg-gray-50 hover:bg-gray-100 text-green-500 font-bold"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
              
          </div>
          
          {/* Checkout Summary */}
          <div className="w-full lg:w-4/12">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-20">
              <h2 className="text-lg font-bold mb-4 pb-2 border-b">Bill Details</h2>
              
              <div className="space-y-2 text-sm">
                
                <div className="flex justify-between pt-3  mt-3">
                  <p className="font-bold">To Pay</p>
                  <p className="font-bold">₹{total.toFixed(2)}</p>
                </div>
              </div>
              

              
              {/* Promo code */}
              <div className="mt-4">
                <button className="border border-dashed border-green-500 text-green-500 rounded-lg p-3 w-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Apply Promo Code
                </button>
              </div>
              
              {/* Checkout button */}
              <Link to='/checkout' className="mt-4 bg-green-500 text-white w-full py-4 rounded-lg font-medium hover:bg-green-600 transition duration-200 flex items-center justify-center">
                Proceed to Checkout
              </Link>
              
              {/* Safety */}
              <div className="mt-6 flex items-center text-xs text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                100% secure payments
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Cart;