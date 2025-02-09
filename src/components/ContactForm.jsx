import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_gh58fkr';
        const templateID = 'template_56znm89';
        const userID = 'rjKVt0S7Lu0iIiQZY';

        // Send the email
        emailjs
            .send(serviceID, templateID, formData, userID)
            .then(
                (response) => {
                    console.log('Email sent successfully!', response);
                    alert('Email sent successfully!');
                    setFormData({ name: '', email: '', message: '' }); // Clear the form
                },
                (error) => {
                    console.error('Error sending email:', error);
                    alert('Error sending email');
                }
            );
    };

    return (
        <div className='pb-24'>
            <motion.h1 whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-4xl text-center text-stone-800'>Get In Touch</motion.h1>
            <div className='flex flex-wrap gap-10 pb-5 text-stone-800'>
                <motion.form
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }} onSubmit={handleSubmit} className="lg:w-1/2 w-full p-4 border">
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-2 mb-4 border rounded" rows="4" required />
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Send
                    </button>
                </motion.form>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='flex-row justify-center'>
                    <h1 className='text-xl sm:text-4xl ml-10 bg-gradient-to-l from-stone-400 to-stone-800 bg-clip-text text-transparent'>Feel free to mail me anytime!</h1>
                    <div className='text-center text-stone-600 ml-10 mt-10 lg:text-xl flex flex-col gap-4'>
                        <div>📧 : arshadhahamed777@gmail.com</div>
                        <div>📍 : Triplicane, Chennai, India</div>
                        <div>📞 : 9176959002</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default ContactForm;
