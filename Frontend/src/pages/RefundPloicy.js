import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const RefundPolicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
                Refund Policy
              </h1>
              <p className="text-gray-600 mb-4">
                At Ajwa Dry Fruits, customer satisfaction is our priority. We strive to deliver premium quality dry fruits, but we understand that there might be instances where a refund or return is required. This policy outlines the conditions and procedures for refunds.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Eligibility for Refunds
              </h2>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Refunds are only applicable to items purchased directly from our website.</li>
                <li>The product must be unused, unopened, and in its original packaging.</li>
                <li>Refund requests must be submitted within 14 days of delivery.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Non-Refundable Items
              </h2>
              <p className="text-gray-600 mb-4">
                Certain items are non-refundable:
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Products that have been opened or partially consumed.</li>
                <li>Items purchased during a sale or promotional offer.</li>
                <li>Customized or gift-wrapped items.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Refund Process
              </h2>
              <ol className="list-decimal pl-5 text-gray-600">
                <li>Contact our support team at <a href="mailto:support@ajwadryfruits.com" className="text-blue-600 underline">support@ajwadryfruits.com</a> to initiate the refund process.</li>
                <li>Provide your order number, proof of purchase, and the reason for the refund.</li>
                <li>Upon approval, return the product to our address. Return shipping costs are the responsibility of the customer.</li>
                <li>Once we receive and inspect the product, the refund will be processed within 7-10 business days.</li>
              </ol>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Late or Missing Refunds
              </h2>
              <p className="text-gray-600 mb-4">
                If you haven’t received your refund after the specified time:
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Check your bank account or payment method statement.</li>
                <li>Contact your bank or payment provider, as it may take additional processing time.</li>
                <li>If you still have not received your refund, please contact us at <a href="mailto:support@ajwadryfruits.com" className="text-blue-600 underline">support@ajwadryfruits.com</a>.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about our refund policy, please reach out to our support team at <a href="mailto:support@ajwadryfruits.com" className="text-blue-600 underline">support@ajwadryfruits.com</a>.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RefundPolicy;
