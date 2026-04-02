// // AdminBlogForm.tsx
// import React, { useState } from 'react';

// const AdminBlogForm: React.FC = () => {
//     const [formData, setFormData] = useState({
//         title: '',
//         category: '',
//         description: '',
//         content: '',
//         author: '',
//     });
//     const [imageFile, setImageFile] = useState<File | null>(null);
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setLoading(true);

//         const data = new FormData();
//         data.append('title', formData.title);
//         data.append('category', formData.category);
//         data.append('description', formData.description);
//         data.append('content', formData.content);
//         data.append('author', formData.author);
//         if (imageFile) {
//             data.append('image', imageFile);
//         }

//         try {
//             const response = await fetch('http://localhost:5000/api/admin/blogs', {
//                 method: 'POST',
//                 body: data, // Don't set Content-Type header, browser will set it with boundary
//             });
            
//             const result = await response.json();
//             if (result.success) {
//                 alert('Blog created successfully!');
//                 // Reset form
//                 setFormData({
//                     title: '',
//                     category: '',
//                     description: '',
//                     content: '',
//                     author: '',
//                 });
//                 setImageFile(null);
//             }
//         } catch (error) {
//             console.error('Error creating blog:', error);
//             alert('Failed to create blog');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files[0]) {
//             setImageFile(e.target.files[0]);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} encType="multipart/form-data">
//             <input
//                 type="text"
//                 placeholder="Title"
//                 value={formData.title}
//                 onChange={(e) => setFormData({...formData, title: e.target.value})}
//                 required
//             />
//             <input
//                 type="text"
//                 placeholder="Category"
//                 value={formData.category}
//                 onChange={(e) => setFormData({...formData, category: e.target.value})}
//                 required
//             />
//             <textarea
//                 placeholder="Description"
//                 value={formData.description}
//                 onChange={(e) => setFormData({...formData, description: e.target.value})}
//                 required
//             />
//             <textarea
//                 placeholder="Content (HTML)"
//                 value={formData.content}
//                 onChange={(e) => setFormData({...formData, content: e.target.value})}
//                 required
//             />
//             <input
//                 type="text"
//                 placeholder="Author"
//                 value={formData.author}
//                 onChange={(e) => setFormData({...formData, author: e.target.value})}
//                 required
//             />
//             <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 required
//             />
//             {imageFile && (
//                 <img 
//                     src={URL.createObjectURL(imageFile)} 
//                     alt="Preview" 
//                     style={{ width: '200px', marginTop: '10px' }}
//                 />
//             )}
//             <button type="submit" disabled={loading}>
//                 {loading ? 'Creating...' : 'Create Blog'}
//             </button>
//         </form>
//     );
// };

// export default AdminBlogForm;