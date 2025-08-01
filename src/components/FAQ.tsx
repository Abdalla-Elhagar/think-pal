'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is ThinkPal and how do I get started?',
    answer:
      'ThinkPal is an AI-powered education platform for university students in Egypt and the MENA region. To get started, simply click the "Get Started" button and create your account to explore our courses.',
  },
  {
    question: 'What are the core features of ThinkPal?',
    answer:
      'ThinkPal provides personalized learning paths, progress tracking, AI study assistance, and access to exclusive academic content tailored for students in the MENA region.',
  },
  {
    question: 'What is the pricing structure?',
    answer:
      'ThinkPal offers flexible subscription plans including monthly, quarterly, and annual options. Students can choose what suits their academic journey best.',
  },
  {
    question: 'Are there any free trials or discounts?',
    answer:
      'Yes, ThinkPal offers free trials and special discounts for students from partner universities or on special occasions. Keep an eye on our announcements!',
  },
  {
    question: 'How does ThinkPal support Arabic-speaking students?',
    answer:
      'ThinkPal offers Arabic language support, including translated interfaces and Arabic-based academic content, ensuring inclusivity for Arabic-speaking students.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Find quick answers to common questions about ThinkPal’s features, pricing, and support.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 text-gray-800 font-semibold text-lg hover:bg-gray-100 focus:outline-none rounded-t-xl"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-primary transition-transform duration-200" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500 transition-transform duration-200" />
                )}
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-screen pb-6 pt-0' : 'max-h-0 pt-0 pb-0'
                }`}
              >
                <p className="text-gray-700 text-base leading-relaxed tracking-wide text-left whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
