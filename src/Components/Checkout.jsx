import React from "react";
import qrdata from "../assets/qrdata.png";
import { Link } from "react-router-dom";

const QRPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold mb-4">Scan to View Cart Details</h1>
        <p className="text-gray-600 mb-6">
          Scan the QR code below using your device to view the cart details.
        </p>
        <div className="flex justify-center mb-6">
          <img 
            src={qrdata} 
            alt="QR Code for Cart Data" 
             className="w-80 h-80 object-contain" 
             style={{ imageRendering: "crisp-edges" }}
          />
        </div>
        <div className="flex justify-end">
            <Link to='/spay' className=" text-black hover:text-blue-600 ">
            back to Scan
            </Link>
        </div>
      </div>
    </div>
  );
};

export default QRPage;
