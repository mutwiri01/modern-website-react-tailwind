import React, { useEffect } from 'react';
import Navbar2 from '../navbar/Navbar2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bn1 from '../../assets/bn1.jpg'
import bn2 from '../../assets/bn2.jpg'
import bn3 from '../../assets/bn3.jpg'
import bn4 from '../../assets/bn4.jpg'
import bn5 from '../../assets/bn5.jpg'
import bn6 from '../../assets/bn6.jpg'
function ServicePage({ reverse, img }) {
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
      <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900">
        <Navbar2 />
      </div>

      <div className="pt-20">
        <section className="container mx-auto">
          <h1 className="text-3xl md:text-4xl text-center mb-8">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: Residential Bin Cleaning */}
            <div data-aos="fade-up" data-aos-duration="400" className="rounded-lg overflow-hidden bg-white shadow-md">
              <img src={bn2} alt="Residential Bin Cleaning" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Residential Bin Cleaning</h2>
                <p className="text-gray-700">
                  Keep your residential bins clean, sanitized, and odor-free with our professional bin cleaning service.
                </p>
              </div>
            </div>

            {/* Service 2: Commercial Bin Cleaning */}
            <div data-aos="fade-up" data-aos-duration="400" className="rounded-lg overflow-hidden bg-white shadow-md">
              <img src={bn3} alt="Commercial Bin Cleaning" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Commercial Bin Cleaning</h2>
                <p className="text-gray-700">
                  Our commercial bin cleaning service is tailored to meet the unique needs of businesses. 
                </p>
              </div>
            </div>

            {/* Service 3: Event Cleanup */}
            <div data-aos="fade-up" data-aos-duration="400" className="rounded-lg overflow-hidden bg-white shadow-md">
              <img src={bn1} alt="Event Cleanup" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Event Cleanup</h2>
                <p className="text-gray-700">
                  Planning an event? Let us handle the cleanup! Our event cleanup services include waste management, recycling, and post-event sanitation.
                </p>
              </div>
            </div>

            {/* Service 4: Janitorial Services */}
            <div data-aos="fade-up" data-aos-duration="400" className="rounded-lg overflow-hidden bg-white shadow-md">
              <img src={bn4} alt="Janitorial Services" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Janitorial Services</h2>
                <p className="text-gray-700">
                  Our janitorial services cover all aspects of facility cleaning and maintenance. 
                </p>
              </div>
            </div>

            {/* Service 5: Specialized Cleaning Projects */}
            <div data-aos="fade-up" data-aos-duration="400" className="rounded-lg overflow-hidden bg-white shadow-md">
              <img src={bn5} alt="Specialized Cleaning Projects" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Specialized Cleaning Projects</h2>
                <p className="text-gray-700">
                Customized cleaning solutions for unique situations, such as construction site cleanup, property restoration, or industrial facility cleaning.
                </p>
              </div>
            </div>

            {/* Service 8: Office Cleaning */}
            <div data-aos="fade-up" data-aos-duration="400" className="rounded-lg overflow-hidden bg-white shadow-md">
              <img src={bn6} alt="Office Cleaning" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Office Cleaning</h2>
                <p className="text-gray-700">
                  Maintain a clean and healthy work environment with our comprehensive office cleaning services.
                </p>
              </div>
            </div>

            {/* Add more services here */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServicePage;
