import React from "react";
import img from "../services/services.jpg";
import Back from "../../components/back";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "04b55b57-0b5e-4d50-a1dc-87e9b0c16e44");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    }).then((res) => res.json());

    if (res.success) Swal.fire({ title: "Success!", text: "Message sent!", icon: "success" });
  };

  return (
    <section className="contact mb-8">
      <Back name="Contact Us" title="Get Help & Support" cover={img} />
      <div className="container mx-auto px-4 mt-12 flex justify-center">
        <form onSubmit={onSubmit} className="bg-white shadow-md p-6 rounded-lg max-w-md w-full">
          <h4 className="text-lg font-semibold mb-4 text-center">Get In Touch</h4>
          <div className="grid gap-3 mb-4">
            <input name="name" type="text" placeholder="Name" className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400" />
            <input name="email" type="email" placeholder="Email" className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400" />
          </div>
          <textarea name="message" placeholder="Message" rows="3" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 mb-4"></textarea>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
