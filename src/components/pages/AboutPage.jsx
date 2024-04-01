import React, { useEffect } from 'react';
import Navbar2 from '../navbar/Navbar2';
import bn7 from '../../assets/bn7.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutPage() {
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 500,
          easing: 'ease-in-sine',
          delay: 100,
        });
        AOS.refresh();
    }, []);
  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <Navbar2 />
      </div>

      {/* About Section */}
      <section className="container mx-auto py-10 pt-20"> {/* Added top padding */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About Bin-IT</h1>
          <p className="text-lg md:text-xl text-gray-700 mt-2">Your Trusted Partner in Cleaning Solutions</p>
        </div>

        {/* Hero Section */}
        <section className="hero-section flex items-center justify-center mt-4 md:mt-8">
          <img src={bn7} alt="Group Photo" className="w-full h-auto object-cover rounded-lg shadow-xl" />
        </section>

        {/* Spacer to prevent content overlap */}
        <div className="h-8 md:h-12"></div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At bin-it, our mission is to provide exceptional cleaning services tailored to meet the unique needs of our clients. We strive for excellence in every aspect of our work, from residential cleaning to commercial janitorial services.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our vision is to be the leading provider of cleaning solutions, known for our reliability, professionalism, and commitment to customer satisfaction. We aim to set the industry standard for quality and innovation, continuously improving and expanding our services to exceed the expectations of our clients.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-900">Our Core Values</h2>
          <ul className="text-lg text-gray-700">
            <li className="mb-2">
              <span className="font-semibold">Quality:</span> We are dedicated to delivering high-quality cleaning services with attention to detail and precision.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Integrity:</span> We conduct business with honesty, transparency, and integrity, earning the trust and respect of our clients and employees.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Reliability:</span> We are committed to being dependable and consistent in our service delivery, always meeting deadlines and exceeding expectations.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Innovation:</span> We embrace innovation and technology to enhance our cleaning processes, stay ahead of industry trends, and provide cutting-edge solutions to our clients.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Customer Satisfaction:</span> We prioritize customer satisfaction above all else, striving to exceed our clients' expectations and build long-lasting relationships based on trust and mutual respect.
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-900">Contact Us</h2>
          <div className="text-lg text-gray-700 text-center">
            <p>Have a question or need a quote? Contact us today!</p>
            <p>Email: info@bin-it.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Main Street, City, State, Zip Code</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
