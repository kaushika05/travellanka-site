import { useState } from 'react';

const faqs = [
  {
    question: "Is Sri Lanka an independent country?",
    answer: "Yes, Sri Lanka is an independent country. It gained independence from British rule on February 4, 1948, and became a republic in 1972."
  },
  {
    question: "Is it safe to visit Sri Lanka?",
    answer: "Yes, Sri Lanka is generally safe for tourists. Like any destination, it's important to take normal precautions. Due to the nation's religious society, avoid public displays of affection, especially if you are a member of the LGBTQ+ community."
  },
  {
    question: "Can I contribute to the app?",
    answer: "Thank you for your interest! If you are interested in helping with development or funding, please email us at travellanka@gmail.com."
  },
  {
    question: "Where can I learn Sinhala as a second language?",
    answer: "Our app currently only offers basic conversational Sinhala. If you would like to learn Sinhala as a 2nd language, please email us at travellanka@gmail.com."
  }
];

const FAQ = () => {
  const [selectedFaq, setSelectedFaq] = useState(0);

  return (
    <section id="faq" className="py-16 px-4 md:px-8 bg-gradient-custom">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setSelectedFaq(index)}
              className={`w-full text-left p-4 rounded-lg transition-all ${
                selectedFaq === index
                  ? 'bg-white text-primary shadow-lg'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
            >
              {faq.question}
            </button>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm min-h-[200px] animate-fade-in">
          <h3 className="font-semibold mb-4">{faqs[selectedFaq].question}</h3>
          <p className="text-gray-600">{faqs[selectedFaq].answer}</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;