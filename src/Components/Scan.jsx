import React from "react";
import { FiShoppingCart, FiArrowLeft, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

const ScanAndPay = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 relative">
      {/* Cart Icon */}
      <Link to='/cart' className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg flex items-center justify-center">
        <FiShoppingCart size={24} className="text-gray-700" />
      </Link>

      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">Scan & Pay</h1>

      {/* QR Code Placeholder */}
      <div className="mb-8 relative">
        <div className="w-85 h-65 flex items-center justify-center bg-white rounded-lg shadow-2xl p-4">
          <img
            src="https://i.pinimg.com/736x/8b/a5/ca/8ba5ca261dd79317adc938160d22fac8.jpg"
            alt="Scan QR"
            className=" object-contain rounded-lg"
          />

        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-4 w-full max-w-xs">
        <div className="w-full bg-blue-500 text-white py-3 rounded-full text-lg font-medium hover:bg-blue-600 flex items-center justify-center cursor-pointer ">
          <FiCamera className="mr-2" /> Start Scanning
        </div>

        <Link to='/checkout' className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-full text-lg font-medium hover:bg-gray-200 flex items-center justify-center cursor-pointer shadow-2xl">
          Checkout
        </Link>
      </div>


    </div>
  );
};

export default ScanAndPay;
