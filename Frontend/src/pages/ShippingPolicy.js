import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shipping Policy"} />
      <BreadCrumb title="Shipping Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
                Shipping Policy
              </h1>
              <p className="text-gray-600 mb-4">
                At Ajwa Dry Fruits, we are committed to delivering your orders
                efficiently and on time. This shipping policy outlines how we
                handle shipping, delivery times, and associated costs.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Shipping Destinations
              </h2>
              <ul className="list-disc pl-5 text-gray-600">
                <li>We ship to all major cities within Pakistan.</li>
                <li>International shipping is available for select regions.</li>
                <li>Remote or rural areas may require additional delivery time.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Delivery Timeframe
              </h2>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Orders are processed within 1-2 business days.</li>
                <li>
                  Domestic delivery typically takes 3-6 business days after
                  processing.
                </li>
                <li>
                  International delivery may take 14-30 business days depending
                  on the region.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Shipping Costs
              </h2>
              <p className="text-gray-600 mb-4">
                Shipping charges are calculated based on the weight of the
                package, destination, and delivery method chosen:
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Free shipping is available for orders above Rs. 5000.</li>
                <li>
                  Standard shipping charges apply for orders below Rs. 5000 and will
                  be displayed at checkout.
                </li>
                <li>
                  International shipping costs are calculated based on the
                  destination.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Tracking Your Order
              </h2>
              <p className="text-gray-600 mb-4">
                Once your order is shipped, you will receive an email with a
                tracking number and a link to track your package in real-time.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Delays and Exceptions
              </h2>
              <p className="text-gray-600 mb-4">
                While we strive to deliver your orders on time, delays may occur
                due to unforeseen circumstances such as weather, holidays, or
                customs clearance for international shipments. In such cases,
                we will notify you promptly.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-700">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about your shipment, please reach out
                to us at{" "}
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

export default ShippingPolicy;
