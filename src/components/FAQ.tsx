import { useState } from 'react';

const faqs = [
  {
    question: "Is Sri Lanka an independent country?",
    answer: "Yes, Sri Lanka is an independent country. It gained independence from British rule on February 4, 1948, and became a republic in 1972."
  },
  {
    question: "Is it safe to visit Sri Lanka?",
    answer: "Yes, Sri Lanka is generally safe for tourists. Like any destination, it's important to take normal precautions. The country has a well-developed tourism infrastructure and is known for its hospitable people."
  }
];

const FAQ = () => {
  const [selectedFaq, setSelectedFaq] = useState(0);

  return (
    <section id="faq" className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setSelectedFaq(index)}
              className={`w-full text-left p-4 rounded-lg transition-all ${
                selectedFaq === index
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white hover:bg-gray-50 text-gray-700 border'
              }`}
            >
              {faq.question}
            </button>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg border shadow-sm min-h-[200px] animate-fade-in">
          <h3 className="font-semibold mb-4">{faqs[selectedFaq].question}</h3>
          <p className="text-gray-600">{faqs[selectedFaq].answer}</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;