import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const AboutUs = () => {
  return (
    <>
      <Meta title={"About Us"} />
      <BreadCrumb title="About Us" />
      <Container className="about-wrapper py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Us
            </h1>
            <p className="text-lg text-gray-600">
              Discover our journey, our outlets, and what makes us your favorite dry fruit destination.
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-700 text-lg leading-8">
              Established in 2019, we started our humble beginnings from 
              <span className="font-semibold text-gray-800"> Raja Bazar, Rawalpindi</span>, with a vision to provide top-quality dry fruits to our customers. 
              Over the years, our commitment to excellence has allowed us to expand to three outlets, including our most popular store at 
              <span className="font-semibold text-gray-800"> F11, Islamabad</span> and our newly launched outlet in 
              <span className="font-semibold text-gray-800"> Gulzar e Quaid, Rawalpindi</span>. We take pride in being your trusted partner for dry fruits and wholesale supplies.
            </p>
          </div>

          {/* Outlets Section */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Our Outlets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Outlet 1 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src="/images/brand-01.png"
                  alt="F11 Islamabad Outlet"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    F11, Islamabad
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Our most famous outlet, loved by customers for its high-quality dry fruits and exceptional service.
                  </p>
                </div>
              </div>

              {/* Outlet 2 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src="/images/tv.jpg"
                  alt="Raja Bazar Rawalpindi Outlet"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    Raja Bazar, Rawalpindi
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Our main outlet, primarily focused on wholesale business. This is where our journey began.
                  </p>
                </div>
              </div>

              {/* Outlet 3 */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src="/images/tv.jpg"
                  alt="Gulzar e Quaid Rawalpindi Outlet"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    Gulzar e Quaid, Rawalpindi
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Our newest outlet, bringing high-quality dry fruits closer to our customers in the area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
