// import React from 'react';

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();

//   const quickLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About Us', href: '#about' },
//     { name: 'Services', href: '#services' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Process', href: '#process' },
//     { name: 'Why Choose Us', href: '#why-choose-us' },
//     { name: 'Testimonials', href: '#testimonials' },
//     { name: 'Contact', href: '#contact' }
//   ];

//   const services = [
//     { name: 'Residential Construction', href: '#services' },
//     { name: 'Commercial Projects', href: '#services' },
//     { name: 'Real Estate Development', href: '#services' },
//     { name: 'Infrastructure Projects', href: '#services' },
//     { name: 'Renovation & Interiors', href: '#services' }
//   ];

//   const contactInfo = [
//     {
//       icon: (
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//         </svg>
//       ),
//       text: '123 Construction Avenue, Business District, City - 560001'
//     },
//     {
//       icon: (
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//         </svg>
//       ),
//       text: '+1 (555) 123-4567'
//     },
//     {
//       icon: (
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//         </svg>
//       ),
//       text: 'hello@landmarkcreations.com'
//     },
//     {
//       icon: (
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       text: 'Mon - Fri: 9:00 AM - 6:00 PM'
//     }
//   ];

//   const socialLinks = [
//     {
//       name: 'Facebook',
//       href: '#',
//       icon: (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//         </svg>
//       )
//     },
//     {
//       name: 'Twitter',
//       href: '#',
//       icon: (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//         </svg>
//       )
//     },
//     {
//       name: 'LinkedIn',
//       href: '#',
//       icon: (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//         </svg>
//       )
//     },
//     {
//       name: 'Instagram',
//       href: '#',
//       icon: (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.22 14.815 3.73 13.664 3.73 12.367s.49-2.448 1.396-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.906.875 1.396 2.026 1.396 3.323s-.49 2.448-1.396 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
//         </svg>
//       )
//     }
//   ];

//   const certifications = [
//     'ISO 9001:2015 Certified',
//     'ISO 14001:2015 Certified',
//     'OHSAS 18001 Certified',
//     'CREDAI Member',
//     'Green Building Certified'
//   ];

//   return (
//     <footer className="w-full bg-gray-900 text-white">
//       {/* Main Footer Content */}
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="lg:col-span-1">
//             <div className="mb-6">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 Landmark Creations
//               </h3>
//               <p className="text-blue-300 font-semibold text-sm">
//                 Innovative Structures, Trusted Quality
//               </p>
//             </div>
//             <p className="text-gray-300 mb-6 leading-relaxed">
//               Building dreams into reality with exceptional craftsmanship, innovative designs, 
//               and unwavering commitment to quality since 2009.
//             </p>
            
//             {/* Social Links */}
//             <div className="flex space-x-4 mb-6">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   className="bg-gray-800 hover:bg-blue-600 text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>

//             {/* Certifications */}
//             <div className="space-y-2">
//               <h4 className="font-semibold text-gray-200 text-sm mb-3">Certifications</h4>
//               <div className="flex flex-wrap gap-2">
//                 {certifications.map((cert, index) => (
//                   <span
//                     key={index}
//                     className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700"
//                   >
//                     {cert}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
//                   >
//                     <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                     <span>{link.name}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
//             <ul className="space-y-3">
//               {services.map((service) => (
//                 <li key={service.name}>
//                   <a
//                     href={service.href}
//                     className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
//                   >
//                     <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                     <span>{service.name}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
//             <div className="space-y-4">
//               {contactInfo.map((contact, index) => (
//                 <div key={index} className="flex items-start space-x-3">
//                   <div className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0">
//                     {contact.icon}
//                   </div>
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     {contact.text}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Newsletter Signup */}
//             {/* <div className="mt-6">
//               <h4 className="font-semibold text-gray-200 mb-3">Stay Updated</h4>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//                 />
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-200 text-sm font-semibold">
//                   Subscribe
//                 </button>
//               </div> */}
//             {/* </div> */}
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="container mx-auto px-6 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             {/* Copyright */}
//             <div className="text-gray-400 text-sm">
//               <p>&copy; {currentYear} Landmark Creations. All rights reserved.</p>
//             </div>

//             {/* Legal Links */}
//             <div className="flex flex-wrap justify-center space-x-6 text-sm">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
//                 Terms of Service
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
//                 Cookie Policy
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
//                 Sitemap
//               </a>
//             </div>

//             {/* Trust Seals */}
//             <div className="flex items-center space-x-4">
//               <div className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
//                 🏆 Award Winning 2023
//               </div>
//               <div className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
//                 ✅ Trusted Partner
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;