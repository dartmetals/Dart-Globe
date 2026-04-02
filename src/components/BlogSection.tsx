// // import React, { useState, useEffect, useRef } from 'react';
// // import { ChevronLeft, ChevronRight } from 'lucide-react';
// // import { useNavigate } from 'react-router-dom';

// // interface BlogPost {
// //   id: number;
// //   title: string;
// //   category: string;
// //   description: string;
// //   content: string;
// //   image: string;
// //   date: string;
// //   author: string;
// // }

// // const BlogSection: React.FC = () => {
// //   const navigate = useNavigate();
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [nextIndex, setNextIndex] = useState(1);
// //   const [isFlipping, setIsFlipping] = useState(false);
// //   const [touchStart, setTouchStart] = useState(0);
// //   const [touchEnd, setTouchEnd] = useState(0);
// //   const [autoPlay, setAutoPlay] = useState(true);
// //   const [isAnimating, setIsAnimating] = useState(false);
// //   const [isResetting, setIsResetting] = useState(false);
// //   const [activeTitleIndex, setActiveTitleIndex] = useState<number | null>(null);
// //   const autoPlayRef = useRef<any>(null);

// //   const blogPosts: BlogPost[] = [
// //     {
// //       id: 1,
// //       title: "The Future of Digital Transformation in 2024",
// //       category: "Digital Transformation",
// //       description: "How businesses are leveraging technology to reshape their operations and customer experiences.",
// //       content: "Digital transformation continues to evolve at a rapid pace. In 2024, we're seeing a shift towards more integrated, AI-driven solutions that not only automate processes but also provide deep insights for decision-making. Companies that embrace these changes are seeing significant improvements in efficiency, customer satisfaction, and bottom-line results.",
// //       image: "/blog1.jpg",
// //       date: "March 15, 2024",
// //       author: "Sarah Johnson"
// //     },
// //     {
// //       id: 2,
// //       title: "Cloud Computing: Strategies for Scalable Growth",
// //       category: "Cloud Computing",
// //       description: "Best practices for implementing cloud solutions that grow with your business.",
// //       content: "Cloud computing has become the backbone of modern business operations. From startups to enterprises, organizations are leveraging cloud infrastructure to scale rapidly, reduce costs, and improve flexibility. This article explores key strategies for successful cloud adoption and migration.",
// //       image: "/blog2.jpg",
// //       date: "March 10, 2024",
// //       author: "Michael Chen"
// //     },
// //     {
// //       id: 3,
// //       title: "AI and Machine Learning: Transforming Industries",
// //       category: "Artificial Intelligence",
// //       description: "Real-world applications of AI that are revolutionizing various sectors.",
// //       content: "Artificial Intelligence and Machine Learning are no longer futuristic concepts—they're here and transforming industries today. From healthcare diagnostics to financial forecasting, AI is enabling unprecedented levels of accuracy and efficiency. Learn how businesses are implementing these technologies to gain competitive advantages.",
// //       image: "/blog3.jpg",
// //       date: "March 5, 2024",
// //       author: "Emily Rodriguez"
// //     },
// //     {
// //       id: 4,
// //       title: "Cybersecurity Best Practices for Remote Teams",
// //       category: "Security",
// //       description: "Essential security measures to protect your distributed workforce.",
// //       content: "With remote work becoming the norm, cybersecurity has never been more critical. This comprehensive guide covers essential security practices for remote teams, including VPN usage, multi-factor authentication, and employee training programs to prevent security breaches.",
// //       image: "/blog4.jpg",
// //       date: "February 28, 2024",
// //       author: "David Kim"
// //     },
// //     {
// //       id: 5,
// //       title: "Data Analytics: Turning Information into Insights",
// //       category: "Data Analytics",
// //       description: "How to leverage data analytics for better business decisions.",
// //       content: "Data is everywhere, but turning that data into actionable insights requires the right tools and expertise. This article explores modern data analytics techniques, from predictive modeling to real-time dashboards, and how they can drive business growth.",
// //       image: "/blog5.jpg",
// //       date: "February 20, 2024",
// //       author: "Lisa Thompson"
// //     }
// //   ];

// //   // Auto-play functionality
// //   useEffect(() => {
// //     if (autoPlay && !isFlipping && !isAnimating && !isResetting) {
// //       autoPlayRef.current = setInterval(() => {
// //         handleNext();
// //       }, 3000);
// //     }

// //     return () => {
// //       if (autoPlayRef.current) {
// //         clearInterval(autoPlayRef.current);
// //       }
// //     };
// //   }, [autoPlay, isFlipping, isAnimating, isResetting]);

// //   // Reset to all equal widths after completing cycle
// //   useEffect(() => {
// //     if (currentIndex === blogPosts.length - 1 && !isResetting) {
// //       setTimeout(() => {
// //         setIsResetting(true);
// //         setAutoPlay(false);
        
// //         setTimeout(() => {
// //           setCurrentIndex(0);
// //           setIsResetting(false);
// //           setAutoPlay(true);
// //         }, 3000);
// //       }, 2000);
// //     }
// //   }, [currentIndex, blogPosts.length, isResetting]);

// //   // Pause auto-play on user interaction
// //   const pauseAutoPlay = () => {
// //     setAutoPlay(false);
// //     if (autoPlayRef.current) {
// //       clearInterval(autoPlayRef.current);
// //     }
    
// //     setTimeout(() => {
// //       setAutoPlay(true);
// //     }, 5000);
// //   };

// //   const handlePrevious = () => {
// //     if (!isFlipping && !isAnimating && !isResetting) {
// //       pauseAutoPlay();
// //       setIsFlipping(true);
// //       setIsAnimating(true);
// //       setNextIndex(currentIndex === 0 ? blogPosts.length - 1 : currentIndex - 1);
      
// //       setTimeout(() => {
// //         setCurrentIndex(currentIndex === 0 ? blogPosts.length - 1 : currentIndex - 1);
// //         setIsFlipping(false);
// //         setIsAnimating(false);
// //       }, 500);
// //     }
// //   };

// //   const handleNext = () => {
// //     if (!isFlipping && !isAnimating && !isResetting) {
// //       pauseAutoPlay();
// //       setIsFlipping(true);
// //       setIsAnimating(true);
// //       setNextIndex((currentIndex + 1) % blogPosts.length);
      
// //       setTimeout(() => {
// //         setCurrentIndex((currentIndex + 1) % blogPosts.length);
// //         setIsFlipping(false);
// //         setIsAnimating(false);
// //       }, 500);
// //     }
// //   };

// //   // const handleThumbnailClick = (index: number) => {
// //   //   if (!isFlipping && !isAnimating && !isResetting) {
// //   //     pauseAutoPlay();
// //   //     setIsFlipping(true);
// //   //     setIsAnimating(true);
// //   //     setNextIndex(index);
      
// //   //     setTimeout(() => {
// //   //       setCurrentIndex(index);
// //   //       setIsFlipping(false);
// //   //       setIsAnimating(false);
// //   //     }, 500);
// //   //   }
// //   // };

// //   const handleBlogClick = (blog: BlogPost) => {
// //     navigate(`/blog/${blog.id}`);
// //   };

// //   // Touch handlers for mobile
// //   const handleTouchStart = (e: React.TouchEvent) => {
// //     setTouchStart(e.targetTouches[0].clientX);
// //   };

// //   const handleTouchMove = (e: React.TouchEvent) => {
// //     setTouchEnd(e.targetTouches[0].clientX);
// //   };

// //   const handleTouchEnd = () => {
// //     if (touchStart - touchEnd > 100) {
// //       handleNext();
// //     } else if (touchStart - touchEnd < -100) {
// //       handlePrevious();
// //     }
// //   };

// //   // Handle title animation on hover
// //   const handleTitleHover = (index: number) => {
// //     setActiveTitleIndex(index);
// //   };

// //   const handleTitleLeave = () => {
// //     setActiveTitleIndex(null);
// //   };

// //   return (
// //     <section className="py- bg-gradient-to-b from-gray-50 to-white mb-12">
// //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Section Header */}
// //         <div className="text-left mb- ">
// //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 px-12 mb-4">
// //             Latest <span className="text-blue-600">Insights</span>
// //           </h2>
// //         </div>

// //         {/* Main Content - Full width with padding on both sides */}
// //         <div className="w-full px-4 md:px-6 lg:px-8">
// //           <div className="flex flex-col lg:flex-row gap-8">
// //             {/* Right Side - Images Full Width */}
// //             <div className="w-full flex justify-center">
// //               <div 
// //                 className="relative w-full max-w-5xl rounded-3xl bg-gray-100 overflow-hidden"
// //                 style={{ height: '80vh' }}
// //                 onTouchStart={handleTouchStart}
// //                 onTouchMove={handleTouchMove}
// //                 onTouchEnd={handleTouchEnd}
// //               >
// //                 {/* Image Container with Padding */}
// //                 <div className="absolute inset-0 p-4">
// //                   {/* Single row with 5 columns */}
// //                   <div className="flex flex-row h-full w-full">
// //                     {blogPosts.map((post, index) => {
// //                       // Calculate width based on state
// //                       let width = '20%';
                      
// //                       if (!isResetting) {
// //                         width = index === currentIndex ? '60%' : '20%';
// //                       }
                      
// //                       return (
// //                         <div
// //                           key={post.id}
// //                           onClick={() => handleBlogClick(post)}
// //                           onMouseEnter={() => handleTitleHover(index)}
// //                           onMouseLeave={handleTitleLeave}
// //                           className="relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:shadow-xl group"
// //                           style={{
// //                             width: width,
// //                             height: '100%',
// //                           }}
// //                         >
// //                           <img
// //                             src={post.image}
// //                             alt={post.title}
// //                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// //                           />
// //                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
// //                             {!isResetting && (
// //                               <div 
// //                                 className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out ${
// //                                   index === currentIndex
// //                                     ? 'top-1/2 -translate-y-1/2 opacity-100' 
// //                                     : 'top-[100%] translate-y-0 opacity-0'
// //                                 }`}
// //                               >
// //                                 <p className="text-white font-semibold text-center px-4 py-2 rounded-lg text-base md:text-lg">
// //                                   {post.title}
// //                                 </p>
// //                               </div>
// //                             )}
// //                           </div>
// //                         </div>
// //                       );
// //                     })}
// //                   </div>
// //                 </div>

// //                 {/* Navigation Arrows (Desktop) */}
// //                 <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
// //                   <button
// //                     onClick={handlePrevious}
// //                     disabled={isFlipping || isResetting}
// //                     className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed pointer-events-auto transform hover:scale-110"
// //                     aria-label="Previous image"
// //                   >
// //                     <ChevronLeft className="w-5 h-5 text-gray-700" />
// //                   </button>
// //                   <button
// //                     onClick={handleNext}
// //                     disabled={isFlipping || isResetting}
// //                     className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed pointer-events-auto transform hover:scale-110"
// //                     aria-label="Next image"
// //                   >
// //                     <ChevronRight className="w-5 h-5 text-gray-700" />
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default BlogSection;
// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// interface BlogPost {
//   id: number;
//   title: string;
//   category: string;
//   description: string;
//   content: string;
//   image: string;
//   date: string;
//   author: string;
// }

// const BlogSection: React.FC = () => {
//   const navigate = useNavigate();
//   const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [nextIndex, setNextIndex] = useState(1);
//   const [isFlipping, setIsFlipping] = useState(false);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isResetting, setIsResetting] = useState(false);
//   const [activeTitleIndex, setActiveTitleIndex] = useState<number | null>(null);
//   const autoPlayRef = useRef<any>(null);

//   // Fetch blogs from backend API
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/blogs');
//         const data = await response.json();
//         if (data.success) {
//           setBlogPosts(data.data);
//         }
//       } catch (error) {
//         console.error('Error fetching blogs:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   // Auto-play functionality
//   useEffect(() => {
//     if (autoPlay && !isFlipping && !isAnimating && !isResetting && blogPosts.length > 0) {
//       autoPlayRef.current = setInterval(() => {
//         handleNext();
//       }, 3000);
//     }

//     return () => {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current);
//       }
//     };
//   }, [autoPlay, isFlipping, isAnimating, isResetting, blogPosts.length]);

//   // Reset to all equal widths after completing cycle
//   useEffect(() => {
//     if (blogPosts.length > 0 && currentIndex === blogPosts.length - 1 && !isResetting) {
//       setTimeout(() => {
//         setIsResetting(true);
//         setAutoPlay(false);
        
//         setTimeout(() => {
//           setCurrentIndex(0);
//           setIsResetting(false);
//           setAutoPlay(true);
//         }, 3000);
//       }, 2000);
//     }
//   }, [currentIndex, blogPosts.length, isResetting]);

//   // Pause auto-play on user interaction
//   const pauseAutoPlay = () => {
//     setAutoPlay(false);
//     if (autoPlayRef.current) {
//       clearInterval(autoPlayRef.current);
//     }
    
//     setTimeout(() => {
//       setAutoPlay(true);
//     }, 5000);
//   };

//   const handlePrevious = () => {
//     if (!isFlipping && !isAnimating && !isResetting && blogPosts.length > 0) {
//       pauseAutoPlay();
//       setIsFlipping(true);
//       setIsAnimating(true);
//       setNextIndex(currentIndex === 0 ? blogPosts.length - 1 : currentIndex - 1);
      
//       setTimeout(() => {
//         setCurrentIndex(currentIndex === 0 ? blogPosts.length - 1 : currentIndex - 1);
//         setIsFlipping(false);
//         setIsAnimating(false);
//       }, 500);
//     }
//   };

//   const handleNext = () => {
//     if (!isFlipping && !isAnimating && !isResetting && blogPosts.length > 0) {
//       pauseAutoPlay();
//       setIsFlipping(true);
//       setIsAnimating(true);
//       setNextIndex((currentIndex + 1) % blogPosts.length);
      
//       setTimeout(() => {
//         setCurrentIndex((currentIndex + 1) % blogPosts.length);
//         setIsFlipping(false);
//         setIsAnimating(false);
//       }, 500);
//     }
//   };

//   const handleBlogClick = (blog: BlogPost, e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     navigate(`/blog/${blog.id}`);
//   };

//   // Touch handlers for mobile
//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (touchStart - touchEnd > 100) {
//       handleNext();
//     } else if (touchStart - touchEnd < -100) {
//       handlePrevious();
//     }
//   };

//   // Handle title animation on hover
//   const handleTitleHover = (index: number) => {
//     setActiveTitleIndex(index);
//   };

//   const handleTitleLeave = () => {
//     setActiveTitleIndex(null);
//   };

//   // Show loading state while fetching data
//   if (loading) {
//     return (
//       <section className="py- bg-gradient-to-b from-gray-50 to-white mb-12">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-center items-center h-96">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (blogPosts.length === 0) {
//     return (
//       <section className="py- bg-gradient-to-b from-gray-50 to-white mb-12">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center py-20">
//             <p className="text-gray-500">No blog posts available</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py- bg-gradient-to-b from-gray-50 to-white mb-12">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-left mb- ">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 px-12 mb-4">
//             Latest <span className="text-blue-600">Insights</span>
//           </h2>
//         </div>

//         {/* Main Content - Full width with padding on both sides */}
//         <div className="w-full px-4 md:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Right Side - Images Full Width */}
//             <div className="w-full flex justify-center">
//               <div 
//                 className="relative w-full max-w-5xl rounded-3xl bg-gray-100 overflow-hidden"
//                 style={{ height: '80vh' }}
//                 onTouchStart={handleTouchStart}
//                 onTouchMove={handleTouchMove}
//                 onTouchEnd={handleTouchEnd}
//               >
//                 {/* Image Container with Padding */}
//                 <div className="absolute inset-0 p-4">
//                   {/* Single row with dynamic columns based on blog count */}
//                   <div className="flex flex-row h-full w-full">
//                     {blogPosts.map((post, index) => {
//                       // Calculate width based on state
//                       let width = `${100 / blogPosts.length}%`;
                      
//                       if (!isResetting) {
//                         // Normal mode - one image is 60%, others are distributed equally
//                         width = index === currentIndex ? '60%' : `${40 / (blogPosts.length - 1)}%`;
//                       }
                      
//                       return (
//                         <div
//                           key={post.id}
//                           onClick={(e) => handleBlogClick(post, e)}
//                           onMouseEnter={() => handleTitleHover(index)}
//                           onMouseLeave={handleTitleLeave}
//                           className="relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:shadow-xl group"
//                           style={{
//                             width: width,
//                             height: '100%',
//                           }}
//                         >
//                           <img
//                             src={post.image}
//                             alt={post.title}
//                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                           />
//                           {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"> */}
//                             {!isResetting && (
//                               <div 
//                                 className={`absolute left-16 md:left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out ${
//                                   index === currentIndex
//                                     ? 'top-1/2 -translate-y-1/2 opacity-100' 
//                                     : 'top-[100%] translate-y-0 opacity-0'
//                                 }`}
//                               >
//                                 <p className="text-white font-semibold text-center px-2 md:px-4  py-2 rounded-lg text-xs md:text-lg">
//                                   {post.title}
//                                 </p>
//                               </div>
//                             )}
//                           {/* </div> */}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* Navigation Arrows (Desktop) */}
//                 <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
//                   <button
//                     onClick={handlePrevious}
//                     disabled={isFlipping || isResetting}
//                     className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed pointer-events-auto transform hover:scale-110"
//                     aria-label="Previous image"
//                   >
//                     <ChevronLeft className="w-5 h-5 text-gray-700" />
//                   </button>
//                   <button
//                     onClick={handleNext}
//                     disabled={isFlipping || isResetting}
//                     className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed pointer-events-auto transform hover:scale-110"
//                     aria-label="Next image"
//                   >
//                     <ChevronRight className="w-5 h-5 text-gray-700" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;