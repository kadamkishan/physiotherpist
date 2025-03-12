"use client"

import React from "react";

// ImageUploader Component - Can be placed in a separate file: components/ImageUploader.js
// const ImageUploader = ({ onImageSelect, label = "Upload Image" }) => {
//   const [previewUrl, setPreviewUrl] = React.useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = () => {
//       setPreviewUrl(reader.result);
//       if (onImageSelect) onImageSelect(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="relative w-full h-full">
//       {previewUrl ? (
//         <div className="relative w-full h-full">
//           <img
//             src={previewUrl}
//             alt="Uploaded preview"
//             className="w-full h-full object-cover rounded-lg"
//           />
//           <button
//             onClick={() => document.getElementById("fileInput").click()}
//             className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
//           >
//             Change Image
//           </button>
//         </div>
//       ) : (
//         <div
//           onClick={() => document.getElementById("fileInput").click()}
//           className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 transition duration-300"
//         >
//           <div className="text-center">
//             <svg
//               className="mx-auto h-12 w-12 text-gray-400"
//               stroke="currentColor"
//               fill="none"
//               viewBox="0 0 48 48"
//               aria-hidden="true"
//             >
//               <path
//                 d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4h-12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//             <p className="mt-2 text-sm text-gray-600">{label}</p>
//           </div>
//         </div>
//       )}
//       <input
//         id="fileInput"
//         type="file"
//         className="hidden"
//         accept="image/*"
//         onChange={handleFileChange}
//       />
//     </div>
//   );
// };
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const heroImage = require('../../public/KushalWaniImage.jpeg')
  const profileImage = require('../../public/kushal-personal-image.png')

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Handle scroll to update active section
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Get all sections
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const servicesSection = document.getElementById("services");
      const contactSection = document.getElementById("contact");

      // Determine which section is currently in view
      if (contactSection && scrollPosition >= contactSection.offsetTop - 100) {
        setActiveSection("contact");
      } else if (
        servicesSection &&
        scrollPosition >= servicesSection.offsetTop - 100
      ) {
        setActiveSection("services");
      } else if (
        aboutSection &&
        scrollPosition >= aboutSection.offsetTop - 100
      ) {
        setActiveSection("about");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Dr. Kushal Wani - Physiotherapist</title>
        <meta
          name="description"
          content="Professional portfolio of Dr. Kushal Wani, experienced physiotherapist"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-blue-600">
                  Dr. Kushal Wani
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className={`${
                    activeSection === "home"
                      ? "border-blue-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`${
                    activeSection === "about"
                      ? "border-blue-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className={`${
                    activeSection === "services"
                      ? "border-blue-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`${
                    activeSection === "contact"
                      ? "border-blue-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Contact
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm flex items-center"
                >
                  <span>Menu</span>
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      mobileMenuOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-2 px-4">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection("home")}
                  className={`${
                    activeSection === "home"
                      ? "text-blue-600 font-medium"
                      : "text-gray-600"
                  } block py-2 px-3 rounded-md hover:bg-gray-50`}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`${
                    activeSection === "about"
                      ? "text-blue-600 font-medium"
                      : "text-gray-600"
                  } block py-2 px-3 rounded-md hover:bg-gray-50`}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className={`${
                    activeSection === "services"
                      ? "text-blue-600 font-medium"
                      : "text-gray-600"
                  } block py-2 px-3 rounded-md hover:bg-gray-50`}
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`${
                    activeSection === "contact"
                      ? "text-blue-600 font-medium"
                      : "text-gray-600"
                  } block py-2 px-3 rounded-md hover:bg-gray-50`}
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6 xl:col-span-6">
              <div className="text-center lg:text-left md:max-w-2xl md:mx-auto lg:mx-0">
                <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Dr. Kushal Wani</span>
                  <span className="block text-blue-600 mt-1">
                    Physiotherapist
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Dedicated to helping you recover, rehabilitate, and regain
                  your mobility through expert physiotherapy treatment.
                </p>
                <div className="mt-8 sm:mt-12">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300"
                  >
                    Book an Appointment
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-6 xl:col-span-6">
              <div className="lg:flex lg:justify-end">
                <div className="relative mx-auto w-full max-w-md lg:max-w-full">
                  <div className="aspect-w-6 aspect-h-5 rounded-lg shadow-xl overflow-hidden">
                    <div className="w-full h-96">
                    
                        <div className="relative w-full h-full">
                          <Image
                            src={heroImage}
                            alt="Dr. Kushal Wani"
                            width={500}
                            height={200}
                            className="w-full h-full object-center rounded-lg"
                          />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-5xl font-bold text-blue-600">2+</h3>
              <p className="mt-2 text-lg text-gray-700">Years Experience</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-5xl font-bold text-blue-600">100+</h3>
              <p className="mt-2 text-lg text-gray-700">Happy Patients</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-5xl font-bold text-blue-600">5</h3>
              <p className="mt-2 text-lg text-gray-700">
                Specialized Treatments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Dr. Kushal Wani
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Dedicated physiotherapist with a passion for helping patients
              recover and improve their quality of life.
            </p>
          </div>

          <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="aspect-w-3 aspect-h-2 rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-96">
                
                    <div className="relative w-full h-full">
                      <Image
                        src={profileImage}
                        alt="Dr. Kushal Wani Profile"
                        className="w-full h-full object-center rounded-lg"
                      />
                    </div>
                  <input
                    id="profileImageInput"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (!file) return;

                      const reader = new FileReader();
                      reader.onload = () => {
                        setProfileImage(reader.result);
                      };
                      reader.readAsDataURL(file);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:row-start-1 lg:col-start-1">
              <h3 className="text-2xl font-bold text-gray-900">
                Educational Background
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Dr. Kushal Wani holds a Bachelor&apos;s degree in Physiotherapy from
                a prestigious medical institution, followed by specialized
                training in sports rehabilitation and orthopedic physiotherapy.
              </p>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900">
                  Professional Experience
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  With 2 years of hands-on experience, Dr. Wani has worked with
                  patients of all ages, helping them recover from injuries,
                  surgeries, and chronic conditions. His approach combines
                  evidence-based techniques with personalized care plans.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900">
                  Philosophy of Care
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  `My goal is to not only treat the symptoms but to address the
                  root cause of my patients pain and discomfort. I believe in
                  empowering patients through education and personalized
                  exercise programs for long-term wellness.`
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Services
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Comprehensive physiotherapy treatments tailored to your specific
              needs
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Sports Rehabilitation
              </h3>
              <p className="mt-4 text-gray-500">
                Specialized treatment for sports-related injuries, helping
                athletes return to their peak performance safely.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Orthopedic Physiotherapy
              </h3>
              <p className="mt-4 text-gray-500">
                Treatment for musculoskeletal conditions affecting bones,
                joints, muscles, and soft tissues.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Neurological Rehabilitation
              </h3>
              <p className="mt-4 text-gray-500">
                Specialized care for patients with neurological conditions to
                improve function and quality of life.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Pain Management
              </h3>
              <p className="mt-4 text-gray-500">
                Evidence-based approaches to reduce pain and improve function
                through manual therapy and targeted exercises.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Geriatric Physiotherapy
              </h3>
              <p className="mt-4 text-gray-500">
                Specialized care for elderly patients focusing on mobility,
                balance, and overall physical function.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Post-Surgical Rehabilitation
              </h3>
              <p className="mt-4 text-gray-500">
                Structured programs to help patients recover effectively after
                surgeries and regain their independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Patients Say
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Rajesh Kumar</h4>
                  <p className="text-gray-500">Sports Injury</p>
                </div>
              </div>
              <p className="text-gray-600">
                `Dr. Kushal&apos;s expertise in sports rehabilitation helped me
                recover from a severe ankle sprain in record time. His
                personalized treatment plan and constant support made all the
                difference.`
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Priya Sharma</h4>
                  <p className="text-gray-500">Back Pain</p>
                </div>
              </div>
              <p className="text-gray-600">
                `After years of chronic back pain, I finally found relief
                through Dr. Wani&apos;s treatment. His holistic approach addressed
                not just my pain but also improved my overall mobility and
                quality of life.`
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Amir Khan</h4>
                  <p className="text-gray-500">Post-Surgery</p>
                </div>
              </div>
              <p className="text-gray-600">
                `Following my knee replacement surgery, Dr. Kushal&apos;s
                rehabilitation program was crucial to my recovery. His patience
                and encouragement helped me stay motivated throughout the
                process.`
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Dr. Kushal Wani
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Have questions or ready to schedule an appointment? Reach out
              today.
            </p>
          </div>

          <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Clinic Information
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>Reehab Physiotherapist and fitness center</p>
                    <p className="mt-1">Bramha Suncity Pune </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>The Pune Physiotherapy clinic Pune</p>
                    {/* <p className="mt-1">Pune</p> */}
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+91 7767085921</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>drkushalwani@gmail.com</p>
                  </div>
                </div>
              </div>

              <h3 className="mt-10 text-xl font-bold text-gray-900">
                Clinic Hours
              </h3>
              <div className="mt-6 border-t border-b border-gray-200 py-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <p className="text-base text-gray-500">Monday - Friday</p>
                    <p className="text-base text-gray-500">9:00 AM - 7:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-base text-gray-500">Saturday</p>
                    <p className="text-base text-gray-500">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-base text-gray-500">Sunday</p>
                    <p className="text-base text-gray-500">Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <h3 className="text-xl font-bold text-gray-900">
                Send a Message
              </h3>
              <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
