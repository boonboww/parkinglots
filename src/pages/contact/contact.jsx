// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../services/services.jpg";
import Back from "../../components/back";
import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "04b55b57-0b5e-4d50-a1dc-87e9b0c16e44");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
        Swal.fire({
            title: "Success!",
            text: "Message is successfully!",
            icon: "success"
          });
    }
  };
  return (
    <>
      <section className="contact mb-8">
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={img}
        />
        <div className="container mx-auto px-4 mt-20">
          <form
            onSubmit={onSubmit}
            className="shadow-lg bg-white p-8 rounded-lg"
          >
            <h4 className="text-xl font-bold mb-4">Fill up The Form</h4>
            <div className="flex flex-wrap gap-4 mb-4">
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-[calc(50%-0.5rem)]"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-[calc(50%-0.5rem)]"
              />
            </div>

            <textarea
              cols="10"
              rows="3"
              name="message"
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
