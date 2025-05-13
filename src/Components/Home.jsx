import React from 'react';
import { useState, useEffect } from 'react';
import { Scan, LogIn, UserPlus, ChevronDown } from 'lucide-react';
import img from '../assets/scan.png'; // Placeholder for the image
import { Link} from 'react-router-dom';

const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Header with subtle animation */}
            <header className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Scan className="text-blue-600 h-6 w-6" />
                        <h1 className="text-xl font-bold text-blue-600">ScanPay</h1>
                    </div>
                    {/* <nav className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Features</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Pricing</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Support</a>
                    </nav> */}
                    {/* <div className="hidden md:flex space-x-4">
                        <button className="px-4 py-2 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                            Log In
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Sign Up
                        </button>
                    </div> */}
                    <button className="md:hidden text-gray-600">
                        <ChevronDown className="h-6 w-6" />
                    </button>
                </div>
            </header>

            {/* Hero section */}
            <main className="pt-16 pb-16 px-4 md:pt-32">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center">
                        {/* Left column - content */}

                        <div className="w-full md:w-1/2">
                            <div className=" rounded-xl transform hover:scale-105 transition-transform duration-300">
                                {/* Using a placeholder since we can't import the image directly */}
                                <div className="relative">
                                    <img
                                        src={img}
                                        alt="ScanPay Demo"
                                        className="rounded-lg w-full"
                                    />
                                    {/* <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg"></div> */}
                                </div>
                            </div>
                        </div>

                        {/* Right column - image */}
                        <div className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 mt-4">
                                Fast, Secure <span className="text-blue-600">Payments</span> With a Scan
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                ScanPay revolutionizes how you make payments. Simply scan, confirm, and go -
                                no cash, no cards, just seamless transactions at your fingertips.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link to='/login' className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                                    <LogIn className="h-5 w-5 mr-2" />
                                    Login
                                </Link>
                                <button className="px-8 py-3 bg-white border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors flex items-center justify-center">
                                    <UserPlus className="h-5 w-5 mr-2" />
                                    Register
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* Features section */}
            {/* <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
                        Why Choose <span className="text-blue-600">ScanPay</span>
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        Feature 1
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-blue-600 text-xl font-bold">1</span>
                            </div>
                            <h4 className="text-xl font-semibold mb-3">Lightning Fast</h4>
                            <p className="text-gray-600">
                                Complete transactions in seconds with our optimized scanning technology.
                            </p>
                        </div>
                        
                        Feature 2
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-blue-600 text-xl font-bold">2</span>
                            </div>  
                            <h4 className="text-xl font-semibold mb-3">Bank-Level Security</h4>
                            <p className="text-gray-600">
                                Your transactions are protected with end-to-end encryption and secure authentication.
                            </p>
                        </div>
                        
                        Feature 3
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-blue-600 text-xl font-bold">3</span>
                            </div>
                            <h4 className="text-xl font-semibold mb-3">Zero Fees</h4>
                            <p className="text-gray-600">
                                Enjoy fee-free transactions for personal accounts and competitive rates for businesses.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Call to action */}
            {/* <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h3>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied users who have simplified their payment experience with ScanPay.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                        <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors">
                            Create Free Account
                        </button>
                        <button className="px-8 py-3 bg-blue-700 text-white border border-blue-400 rounded-full font-medium hover:bg-blue-800 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </section> */}

            {/* Footer */}
            {/* <footer className="bg-gray-800 text-gray-300 py-12 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-8 md:mb-0">
                            <div className="flex items-center space-x-2 mb-4">
                                <Scan className="text-blue-300 h-6 w-6" />
                                <h1 className="text-xl font-bold text-white">ScanPay</h1>
                            </div>
                            <p className="text-gray-400 max-w-xs">
                                Revolutionizing digital payments through seamless scanning technology.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            <div>
                                <h5 className="text-white font-medium mb-4">Product</h5>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-blue-300 transition-colors">Features</a></li>
                                    <li><a href="#" className="hover:text-blue-300 transition-colors">Pricing</a></li>
                                    <li><a href="#" className="hover:text-blue-300 transition-colors">Security</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-white font-medium mb-4">Company</h5>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-blue-300 transition-colors">About Us</a></li>
                                    <li><a href="#" className="hover:text-blue-300 transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:text-blue-300 transition-colors">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-white font-medium mb-4">Support</h5>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:text-blue-300 transition-colors">Help Center</a></li>
                                    <li><a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a></li>
                                    <li><a href="#" className="hover:text-blue-300 transition-colors">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} ScanPay. All rights reserved.</p>
                    </div>
                </div>
            </footer> */}
        </div>
    );
};

export default Home;