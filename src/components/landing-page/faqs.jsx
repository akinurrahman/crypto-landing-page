"use client"
import { faqs } from '@/constants';
import React, { useState } from 'react'

const FAQs = () => {
     const [openIndex, setOpenIndex] = useState(null);
  return (
    <section>
      <h3 className="text-center text-lg tracking-tight">
        Popular <span className="text-primary">questions</span>
      </h3>
      <h2 className="heading-primary text-center my-1 md:my-2">
        Learn more about Crypgo
      </h2>
      <p className="text-white/60 text-sm md:text-base text-center mb-5 xl:mb-10">
        We accept 100+ cryptocurrencies around the world
      </p>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="bg-white/5 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left text-gray-100 hover:text-gray-200 transition-colors duration-200"
            >
              <span className="text-lg font-medium">{item.question}</span>
              <span className="ml-6 flex-shrink-0">
                <div
                  className={`transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#99E39E"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </span>
            </button>
            <div
              className={`transition-all duration-200 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-4 text-gray-300">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQs
