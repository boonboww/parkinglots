import React, { useState } from "react";
import { MdOutlineLiveHelp } from "react-icons/md";
import { motion } from "framer-motion";

const faqs = [
  { question: "How can I reset my password?", answer: "Go to settings and click on 'Change Password' to reset it." },
  { question: "How do I add a new user?", answer: "Navigate to 'Users' section and click on 'Add User' button." },
  { question: "Can I change my email address?", answer: "Yes, you can update your email in the 'Settings' tab." },
  { question: "Where can I find usage reports?", answer: "Visit the 'Dashboard' section for detailed reports and analytics." },
];

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-[#F9FBFF] min-h-screen">
      <div className="flex items-center gap-3 text-[#5932EA] font-semibold text-xl mb-6">
        <MdOutlineLiveHelp size={28} />
        <h1>Help & Support</h1>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg p-4 bg-white shadow">
              <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center text-lg font-semibold text-gray-800">
                {faq.question}
                <span className="text-[#5932EA]">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-2 text-gray-600">
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Help;
