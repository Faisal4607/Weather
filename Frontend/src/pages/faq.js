import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const FAQ = () => {
  const faqList = [
    {
      question: "What types of dry fruits do you offer?",
      answer: "We offer a wide variety of dry fruits including almonds, pistachios, walnuts, cashews, apricots, and more. Our products are of the highest quality, sourced from trusted suppliers.",
    },
    {
      question: "Do you provide wholesale services?",
      answer: "Yes, we specialize in wholesale services. Our Raja Bazar outlet in Rawalpindi is dedicated to serving wholesale customers with competitive pricing.",
    },
    {
      question: "What is your refund policy?",
      answer: "We have a customer-friendly refund policy. If you’re not satisfied with your purchase, you can request a refund within 14 days. Please refer to our Refund Policy page for more details.",
    },
    {
      question: "How can I place an order?",
      answer: "You can place an order directly through our website by adding products to your cart and proceeding to checkout. For wholesale orders, please contact our Raja Bazar outlet.",
    },
    {
      question: "Do you deliver to all locations?",
      answer: "We deliver across Pakistan. Delivery times and charges may vary depending on your location. For more details, visit our Shipping Policy page.",
    },
    {
      question: "Are your products organic?",
      answer: "Most of our products are organically sourced. We ensure that all our dry fruits meet strict quality standards for freshness and purity.",
    },
  ];

  return (
    <>
      <Meta title={"FAQ"} />
      <BreadCrumb title="FAQ" />
      <Container className="faq-wrapper py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Have questions? We've got answers to the most commonly asked queries.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-6">
            {faqList.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default FAQ;
