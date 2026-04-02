// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Mail, MessageCircle, User, Send, Loader2, CheckCircle } from 'lucide-react';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

// type QueryType = 'document' | 'visa' | 'accommodation' | 'loan' | 'other';

// interface BlogPost {
//   id: number;
//   title: string;
//   category: string;
//   description: string;
//   content: string;
//   image: string;
//   date: string;
//   author: string;
//   slug?: string;
//   views?: number;
// }

// interface FormData {
//   firstName: string;
//   lastName: string;
//   phone: string;
//   email: string;
//   queryType: QueryType;
//   message: string;
//   agreeTerms: boolean;
// }

// const BlogPage: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const [blog, setBlog] = useState<BlogPost | null>(null);
//   const [allBlogs, setAllBlogs] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(true);
  
//   // Animation states
//   const [isImageVisible, setIsImageVisible] = useState(false);
//   const [isCategoryVisible, setIsCategoryVisible] = useState(false);
//   const [isTitleVisible, setIsTitleVisible] = useState(false);
//   const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
//   const [isAuthorVisible, setIsAuthorVisible] = useState(false);
//   const [isContentVisible, setIsContentVisible] = useState(false);
  
//   // Form state
//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     queryType: 'document',
//     message: '',
//     agreeTerms: false,
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   // Reset animations when blog changes
//   useEffect(() => {
//     if (!loading && blog) {
//       // Reset all animation states
//       setIsImageVisible(false);
//       setIsCategoryVisible(false);
//       setIsTitleVisible(false);
//       setIsDescriptionVisible(false);
//       setIsAuthorVisible(false);
//       setIsContentVisible(false);
      
//       // Start animations sequence
//       setTimeout(() => setIsImageVisible(true), 100);
//       setTimeout(() => setIsCategoryVisible(true), 400);
//       setTimeout(() => setIsTitleVisible(true), 600);
//       setTimeout(() => setIsDescriptionVisible(true), 800);
//       setTimeout(() => setIsAuthorVisible(true), 1000);
//       setTimeout(() => setIsContentVisible(true), 1200);
//     }
//   }, [blog, loading]);

//   // Fetch blog from backend API
//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
//         const data = await response.json();
        
//         if (data.success && data.data) {
//           setBlog(data.data);
//         }
//       } catch (error) {
//         console.error('Error fetching blog:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchBlog();
//     }
//   }, [id]);

//   // Fetch all blogs for sidebar
//   useEffect(() => {
//     const fetchAllBlogs = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/blogs');
//         const data = await response.json();
        
//         if (data.success) {
//           // Filter out current blog if it exists
//           const filteredBlogs = data.data.filter((b: BlogPost) => b.id !== parseInt(id || '0'));
//           setAllBlogs(filteredBlogs);
//         }
//       } catch (error) {
//         console.error('Error fetching all blogs:', error);
//       }
//     };

//     if (id) {
//       fetchAllBlogs();
//     }
//   }, [id]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target;
    
//     if (type === 'checkbox') {
//       const checked = (e.target as HTMLInputElement).checked;
//       setFormData(prev => ({ ...prev, [name]: checked }));
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
//   };

//   const handlePhoneChange = (value: string) => {
//     setFormData(prev => ({ 
//       ...prev, 
//       phone: value,
//     }));
//   };

//   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxKvgNEJ4idu4E0Ki48hVHlfZfPS1GLfrr8Z743j9P3NfVqpifCiQsOj9YFiSlGxMNf/exec";

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!formData.agreeTerms) {
//       alert('Please agree to the terms and conditions');
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus('idle');

//     const payload = {
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       phoneNumber: `+${formData.phone}`,
//       email: formData.email,
//       queryType: formData.queryType,
//       message: formData.message
//     };

//     try {
//       await fetch(GOOGLE_SCRIPT_URL, {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(payload)
//       });

//       setSubmitStatus("success");
      
//       // Reset form
//       setFormData({
//         firstName: '',
//         lastName: '',
//         phone: '',
//         email: '',
//         queryType: 'document',
//         message: '',
//         agreeTerms: false,
//       });

//     } catch (error) {
//       console.error(error);
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       firstName: '',
//       lastName: '',
//       phone: '',
//       email: '',
//       queryType: 'document',
//       message: '',
//       agreeTerms: false,
//     });
//     setSubmitStatus('idle');
//   };

//   const queryTypes: { value: QueryType; label: string }[] = [
//     { value: 'document', label: 'University Admissions' },
//     { value: 'visa', label: 'Visa Assistance' },
//     { value: 'other', label: 'Other Queries' },
//   ];

//   // Handle navigation with animation
//   const handleNavigate = (blogId: number) => {
//     // Reset all animation states before navigation
//     setIsImageVisible(false);
//     setIsCategoryVisible(false);
//     setIsTitleVisible(false);
//     setIsDescriptionVisible(false);
//     setIsAuthorVisible(false);
//     setIsContentVisible(false);
    
//     // Navigate after a small delay
//     setTimeout(() => {
//       navigate(`/blog/${blogId}`);
//     }, 50);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog not found</h2>
//           <button onClick={() => handleNavigate(0)} className="text-blue-600 hover:underline">
//             Go back home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section with Blog Image - Slides in from Right */}
//       <section className="relative h-[40vh] sm:h-[50vh] md:h-[90vh] overflow-hidden mt-16">
//         <div className={`transition-all duration-700 ease-out ${
//           isImageVisible 
//             ? 'opacity-100 translate-x-0' 
//             : 'opacity-0 translate-x-full'
//         }`}>
//           <img 
//             src={blog.image} 
//             alt={blog.title}
//             className="w-full h-full object-contain sm:object-cover md:object-cover"
//             onError={(e) => {
//               e.currentTarget.src = '/blog-fallback.jpg';
//             }}
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/20 to-transparent"></div>
//         <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-2 md:pb-8">
//           <div className="max-w-3xl">
//             {/* Category - Fades in first */}
//             <div className={`transition-all duration-500 delay-100 ${
//               isCategoryVisible 
//                 ? 'opacity-100 translate-y-0' 
//                 : 'opacity-0 translate-y-8'
//             }`}>
//               <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold mb-2">
//                 {blog.category}
//               </div>
//             </div>
            
//             {/* Title - Fades in second */}
//             <div className={`transition-all duration-500 delay-300 ${
//               isTitleVisible 
//                 ? 'opacity-100 translate-y-0' 
//                 : 'opacity-0 translate-y-8'
//             }`}>
//               <h1 className="text-xl md:text-4xl font-bold text-white leading-tight md:mb-3">
//                 {blog.title}
//               </h1>
//             </div>
            
//             {/* Description - Fades in third */}
//             <div className={`transition-all duration-500 delay-500 ${
//               isDescriptionVisible 
//                 ? 'opacity-100 translate-y-0' 
//                 : 'opacity-0 translate-y-8'
//             }`}>
//               <p className="hidden sm:block md:block text-white/90 text-xs md:text-base max-w-2xl">
//                 {blog.description}
//               </p>
//             </div>
            
//             {/* Author & Views - Fades in fourth */}
//             <div className={`transition-all duration-500 delay-700 ${
//               isAuthorVisible 
//                 ? 'opacity-100 translate-y-0' 
//                 : 'opacity-0 translate-y-8'
//             }`}>
//               <div className="hidden sm:block md:block flex items-center gap-4 text-white/80 text-sm">
//                 <span>By {blog.author}</span>
//                 {blog.views !== undefined && (
//                   <>
//                     <span>•</span>
//                     <span>{blog.views} views</span>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content Section - 70% Content | 30% Sidebar */}
//       <div className="max-w-7xl mx-auto px-2 md:py-5">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left Side - Blog Content (70%) */}
//           <div className="lg:w-[70%]">
//             <div className="p-8">
//               {/* Blog Content - Fades in last */}
//               <div className={`transition-all duration-500 delay-900 ${
//                 isContentVisible 
//                   ? 'opacity-100 translate-y-0' 
//                   : 'opacity-0 translate-y-8'
//               }`}>
//                 <div 
//                   className="prose prose-lg max-w-none"
//                   dangerouslySetInnerHTML={{ __html: blog.content }}
//                 />
//               </div>
              
//               {/* Author Section - Fades in with content */}
//               <div className={`mt-12 pt-8 border-t border-gray-200 transition-all duration-500 delay-1000 ${
//                 isContentVisible 
//                   ? 'opacity-100 translate-y-0' 
//                   : 'opacity-0 translate-y-8'
//               }`}>
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
//                     <span className="text-blue-600 font-bold text-lg">
//                       {blog.author?.charAt(0) || 'A'}
//                     </span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">{blog.author}</h4>
//                     <p className="text-gray-600 text-sm">Technology Writer & Analyst</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Sidebar (30%) */}
//           <div className="lg:w-[30%] space-y-6">
//             {/* Registration Form - Fades in with content */}
//             <div className={`bg-white rounded-2xl shadow-lg p-6 sticky top-24 transition-all duration-500 delay-800 ${
//               isContentVisible 
//                 ? 'opacity-100 translate-y-0' 
//                 : 'opacity-0 translate-y-8'
//             }`}>
//               <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
//                 Get Free Consultation
//               </h3>
              
//               {/* Success Message */}
//               {submitStatus === 'success' && (
//                 <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl animate-fadeIn">
//                   <div className="flex items-center space-x-3">
//                     <div className="bg-emerald-100 p-2 rounded-full">
//                       <CheckCircle className="h-6 w-6 text-emerald-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-emerald-800">Message Sent Successfully!</h3>
//                       <p className="text-emerald-600 text-sm">Thank you for contacting us. We'll respond within 24 hours.</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={resetForm}
//                     className="mt-3 px-4 py-1.5 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors text-sm"
//                   >
//                     Send Another Message
//                   </button>
//                 </div>
//               )}

//               {/* Error Message */}
//               {submitStatus === 'error' && (
//                 <div className="mb-6 p-4 bg-gradient-to-r from-rose-50 to-red-50 border border-rose-100 rounded-2xl animate-fadeIn">
//                   <div className="flex items-center space-x-3">
//                     <div className="bg-rose-100 p-2 rounded-full">
//                       <svg className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-rose-800">Submission Failed</h3>
//                       <p className="text-rose-600 text-sm">Please try again or contact us directly.</p>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* First Name & Last Name Row */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       First Name *
//                     </label>
//                     <div className="relative">
//                       <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                       <input
//                         type="text"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         required
//                         disabled={isSubmitting || submitStatus === 'success'}
//                         className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
//                         placeholder="First Name"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Last Name *
//                     </label>
//                     <div className="relative">
//                       <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                       <input
//                         type="text"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         required
//                         disabled={isSubmitting || submitStatus === 'success'}
//                         className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
//                         placeholder="Last Name"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Phone Number with Country Code */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone Number *
//                   </label>
//                   <style>{`
//                     .react-tel-input .form-control {
//                       width: 100% !important;
//                       height: 42px !important;
//                       padding-left: 58px !important;
//                       border-radius: 0.5rem !important;
//                       border: 1px solid #d1d5db !important;
//                     }
//                     .react-tel-input .flag-dropdown {
//                       border-radius: 0.5rem 0 0 0.5rem !important;
//                       background: white !important;
//                     }
//                   `}</style>
//                   <PhoneInput
//                     country={'in'}
//                     value={formData.phone}
//                     onChange={handlePhoneChange}
//                     inputProps={{
//                       name: 'phone',
//                       required: true,
//                       disabled: isSubmitting || submitStatus === 'success'
//                     }}
//                     inputStyle={{
//                       width: '100%',
//                       height: '42px',
//                       fontSize: '0.875rem',
//                     }}
//                     buttonStyle={{
//                       border: '1px solid #d1d5db',
//                       borderRight: 'none',
//                       background: 'white',
//                     }}
//                     placeholder="+1 (555) 123-4567"
//                     enableSearch={true}
//                     disableSearchIcon={true}
//                   />
//                 </div>

//                 {/* Email Address */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email Address *
//                   </label>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       disabled={isSubmitting || submitStatus === 'success'}
//                       className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>

//                 {/* Query Type */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Type of Query *
//                   </label>
//                   <div className="grid grid-cols-1 gap-2">
//                     {queryTypes.map((type) => (
//                       <label
//                         key={type.value}
//                         className={`flex items-center space-x-2 p-2 rounded-lg border cursor-pointer transition-all ${
//                           formData.queryType === type.value
//                             ? 'border-red-500 bg-red-50'
//                             : 'border-gray-200 hover:border-gray-300'
//                         } ${(isSubmitting || submitStatus === 'success') ? 'opacity-50 cursor-not-allowed' : ''}`}
//                       >
//                         <input
//                           type="radio"
//                           name="queryType"
//                           value={type.value}
//                           checked={formData.queryType === type.value}
//                           onChange={handleChange}
//                           disabled={isSubmitting || submitStatus === 'success'}
//                           className="hidden"
//                         />
//                         <span className="text-sm text-gray-700">{type.label}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Your Message *
//                   </label>
//                   <div className="relative">
//                     <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       disabled={isSubmitting || submitStatus === 'success'}
//                       rows={3}
//                       className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
//                       placeholder="Tell us about your requirements..."
//                     />
//                   </div>
//                 </div>

//                 {/* Terms and Conditions */}
//                 <div className="flex items-start space-x-2">
//                   <input
//                     type="checkbox"
//                     id="agreeTerms"
//                     name="agreeTerms"
//                     checked={formData.agreeTerms}
//                     onChange={handleChange}
//                     disabled={isSubmitting || submitStatus === 'success'}
//                     className="mt-1"
//                   />
//                   <label htmlFor="agreeTerms" className="text-xs text-gray-600">
//                     I agree to the terms and conditions and acknowledge that my data will be processed in accordance with the privacy policy.
//                   </label>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting || submitStatus === 'success' || !formData.agreeTerms}
//                   className={`w-full py-2.5 font-semibold rounded-lg transition-all duration-300 ${
//                     isSubmitting || submitStatus === 'success' || !formData.agreeTerms
//                       ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
//                       : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     <span className="flex items-center justify-center">
//                       <Loader2 className="animate-spin mr-2 h-5 w-5" />
//                       Sending...
//                     </span>
//                   ) : submitStatus === 'success' ? (
//                     'Message Sent ✓'
//                   ) : (
//                     <span className="flex items-center justify-center">
//                       Submit Query
//                       <Send className="ml-2 h-5 w-5" />
//                     </span>
//                   )}
//                 </button>
//               </form>
//             </div>

//             {/* Other Blogs Section */}
//             <div className={`bg-white rounded-2xl shadow-lg p-6 transition-all duration-500 delay-900 ${
//               isContentVisible 
//                 ? 'opacity-100 translate-y-0' 
//                 : 'opacity-0 translate-y-8'
//             }`}>
//               <h3 className="text-lg font-bold text-gray-900 mb-4">
//                 More Articles
//               </h3>
//               <div className="space-y-4">
//                 {allBlogs.length > 0 ? (
//                   allBlogs.map((otherBlog) => (
//                     <div
//                       key={otherBlog.id}
//                       onClick={() => handleNavigate(otherBlog.id)}
//                       className="cursor-pointer group"
//                     >
//                       <div className="flex gap-3">
//                         <img
//                           src={otherBlog.image}
//                           alt={otherBlog.title}
//                           className="w-16 h-16 object-cover rounded-lg"
//                           onError={(e) => {
//                             e.currentTarget.src = '/blog-fallback.jpg';
//                           }}
//                         />
//                         <div className="flex-1">
//                           <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
//                             {otherBlog.title}
//                           </h4>
//                           <p className="text-xs text-gray-500 mt-1">
//                             {otherBlog.date ? new Date(otherBlog.date).toLocaleDateString() : otherBlog.date}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-sm text-gray-500 text-center py-4">No other articles available</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add custom animations */}
//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out;
//         }
        
//         @keyframes slideInFromRight {
//           from {
//             opacity: 0;
//             transform: translateX(100%);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         .animate-slideInRight {
//           animation: slideInFromRight 0.7s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BlogPage;