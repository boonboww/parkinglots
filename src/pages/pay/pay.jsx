import React, { useState } from "react";
import { CreditCard, Wallet, Banknote } from "lucide-react";
import { Link } from "react-router-dom";
import Payment from "./payment";    

const Pay = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [customerInfo, setCustomerInfo] = useState({
        fullName: "",
        email: "",
        licensePlate: "",
    });

    const handleChange = (e) => {
        setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!paymentMethod) {
            alert("Vui lòng chọn phương thức thanh toán!");
            return;
        }
        console.log("Thông tin thanh toán:", customerInfo, "Phương thức:", paymentMethod);
    };

    return (
        <section className="payment mb-8">
            <div className="container mx-auto px-4">
                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold mb-2">Service: 24h parking</h2>
                    <p className="text-gray-600 mb-2">Safe, convenient, 24/7 security.</p>
                    <p className="text-red-700 mb-2"><b>PRICES OF STORE</b></p>
                    <p className="text-lg font-semibold flex items-center gap-2">
                        <i className="fas fa-car"></i> Price: 50,000 VND / day
                    </p>
                    <p className="text-lg font-semibold flex items-center gap-2">
                        <i className="fas fa-motorcycle"></i> Price: 20,000 VND / day (Moto)
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Customer information</h3>
                    
                    <input 
                        name="fullName"
                        type="text" 
                        placeholder="Full Name"
                        value={customerInfo.fullName}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                    />
                    <input 
                        name="email"
                        type="email" 
                        placeholder="Email/Phone" 
                        value={customerInfo.email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                    />
                    <input 
                        name="licensePlate"
                        type="text" 
                        placeholder="License Plate Number"
                        value={customerInfo.licensePlate}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                    />

                    <h3 className="text-xl font-bold mb-3">Payment method</h3>
                    <div className="flex gap-4">
                        {["momo", "visa", "cash"].map((method, index) => (
                            <label key={index} className="flex items-center gap-2 cursor-pointer">
                                <input 
                                    type="radio" 
                                    name="payment" 
                                    value={method} 
                                    className="hidden"
                                    checked={paymentMethod === method}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <div className={`p-3 border rounded-md flex items-center gap-2 hover:bg-gray-400 
                                    ${paymentMethod === method ? "border-blue-500 bg-blue-100" : "border-gray-300"}`}>
                                    {method === "momo" && <Wallet size={20} />}
                                    {method === "visa" && <CreditCard size={20} />}
                                    {method === "cash" && <Banknote size={20} />}
                                    {method.charAt(0).toUpperCase() + method.slice(1)}
                                </div>
                            </label>
                        ))}
                    </div>

                    <Payment />
                   
                    <button 
                        type="submit" 
                        className="bg-red-600 text-white py-3 m-auto px-6 mt-6 rounded-md hover:bg-green-700 w-3/5 flex items-center justify-center gap-2">
                        <CreditCard size={20} /> PAY 
                    </button>

                    <button className="bg-gray-200 text-gray-800 py-3 px-6 mt-4 rounded-md hover:bg-gray-300 w-3/5 m-auto flex items-center justify-center gap-2">
                        <Link to="/payment" className="no-underline mx-3 hover:text-green-400 duration-300">
                            Invoice details
                        </Link>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Pay;
