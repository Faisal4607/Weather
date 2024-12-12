import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermsAndConditions = () => {
  return (
    <>
      <Meta title={"Terms and Conditions"} />
      <BreadCrumb title="Terms and Conditions" />
      <Container className="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
                Terms and Conditions
              </h1>
              <p className="text-gray-600 mb-4">
                Welcome to Ajwa Dry Fruits! These terms and conditions govern
                your use of our website and the purchase of our products. By
                accessing or using our website, you agree to comply with these
                terms.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Use of Website
              </h2>
              <p className="text-gray-600 mb-4">
                You may use our website for personal, non-commercial purposes
                only. Any unauthorized use, including data mining, scraping, or
                hacking, is strictly prohibited.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Intellectual Property
              </h2>
              <p className="text-gray-600 mb-4">
                All content on this website, including images, logos, text, and
                designs, is the property of Ajwa Dry Fruits and protected by
                copyright laws. Reproduction or distribution without permission
                is prohibited.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Product Information
              </h2>
              <p className="text-gray-600 mb-4">
                We strive to provide accurate product descriptions and images,
                but we do not guarantee that all information is error-free or
                up-to-date. If you find any discrepancies, please contact us.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Pricing and Payment
              </h2>
              <ul className="list-disc pl-5 text-gray-600">
                <li>
                  All prices listed on our website are in USD and include
                  applicable taxes.
                </li>
                <li>
                  Payments must be made using accepted methods displayed at
                  checkout.
                </li>
                <li>
                  We reserve the right to modify prices at any time without
                  notice.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Shipping and Delivery
              </h2>
              <p className="text-gray-600 mb-4">
                Shipping times and costs are outlined in our{" "}
                <a
                  href="/shipping-policy"
                  className="text-blue-600 underline"
                >
                  Shipping Policy
                </a>
                . Delays caused by external factors are beyond our control.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Returns and Refunds
              </h2>
              <p className="text-gray-600 mb-4">
                For information about returns and refunds, please review our{" "}
                <a
                  href="/refund-policy"
                  className="text-blue-600 underline"
                >
                  Refund Policy
                </a>
                .
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-4">
                Ajwa Dry Fruits is not responsible for any indirect, incidental,
                or consequential damages arising from the use of our website or
                products. Our liability is limited to the purchase price of the
                product.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Governing Law
              </h2>
              <p className="text-gray-600 mb-4">
                These terms and conditions are governed by the laws of [Your
                Country/State]. Any disputes will be resolved in accordance with
                these laws.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Changes to Terms
              </h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to update these terms at any time. Changes
                will be posted on this page, and it is your responsibility to
                review them periodically.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about these terms, please contact us
                at{" "}
                <a
                  href="mailto:support@ajwadryfruits.com"
                  className="text-blue-600 underline"
                >
                  support@ajwadryfruits.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermsAndConditions;
