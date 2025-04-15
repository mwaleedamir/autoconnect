import React from "react";
// import { IoMdSearch } from "react-icons/io";
import Navbar from "./Navbar";
import CarsLogoCards from "./CarsLogoCards";


const LandingPageLayoutBody = () => {
  return (  
    <div className="bg-gray-100  min-h-screen ">
      <Navbar />
      <CarsLogoCards/>
      
      {/* Features Section */}
      
      <section className="py-16 bg-gray-100 px-6 text-[#6b451a] text-center ">
      <div className="w-[80%] justify-self-center">

        <h2 className="text-3xl font-bold mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🚗",
              title: "Wide Selection",
              desc: "Access a wide range of vehicles from trusted showrooms."
            },
            {
              icon: "🔒",
              title: "Secure Transactions",
              desc: "Enjoy secure and hassle-free transactions."
            },
            {
              icon: "🤝",
              title: "Trusted Dealers",
              desc: "Connect with verified dealers and showrooms."
            }
          ].map((item, index) =>
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-gray-100 "
            >
              <span className="text-yellow-400 text-4xl mb-4">
                {item.icon}
              </span>
              <h3 className=" font-bold text-xl mb-2">
                {item.title}
              </h3>
              <p className=" ">
                {item.desc}
              </p>
            </div>
          )}
        </div>
          </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white text-[#6b451a] text-center ">
       <div className="w-[80%] justify-self-center">

        <h2 className="text-3xl font-bold   mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["John Doe", "Jane Smith", "Alex Johnson"].map((name, index) =>
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-white "
            >
              <p className="text-gray-600  italic mb-4">
                "AutoConnectPK made my car search so much easier!"
              </p>
              <p className=" font-bold">
                - {name}
              </p>
            </div>
          )}
        </div>
       </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-[#6b451a] text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Join thousands of users who trust AutoConnectPK.
        </p>
        <a
          href="/auth/signup"
          className="bg-yellow-400 text-[#6b451a] font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transition-all"
        >
          Sign Up Now
        </a>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} AutoConnect. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="/terms" className="text-yellow-400 hover:underline mx-2">
            Terms of Service
          </a>
          <a href="/privacy" className="text-yellow-400 hover:underline mx-2">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageLayoutBody;
