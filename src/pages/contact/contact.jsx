// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../services/services.jpg";
import Back from "../../components/back";

const Contact = () => {
    return (
        <>
            <section className="contact mb-8">
                <Back name="Contact Us" title="Get Helps & Friendly Support" cover={img} />
                <div className="container mx-auto px-4">
                    <form className="shadow-lg bg-white p-8 rounded-lg">
                        <h4 className="text-xl font-bold mb-4">Fill up The Form</h4>
                        <div className="flex flex-wrap gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-[calc(50%-0.5rem)]"
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-[calc(50%-0.5rem)]"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                        />
                        <textarea
                            cols="10"
                            rows="3"
                            placeholder="Message"
                            className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                        ></textarea>
                        <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700">
                            Submit Request
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
