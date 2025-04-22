"use client"

import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  setFormData({ ...formData, [e.target.name]: e.target.value});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    
  };
  return (

    
    <main className="bg-gray-800 min-h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center px-4 py-16">
        <h1 className="text-4xl sm:text-6xl text-blue-400 font-bold text-center mb-4">Contact</h1>
        <p className="text-sm text-center text-white">I&quot;m available for freelance work</p>
        
        <button onClick={() => window.open("https://wa.me/6285607264055", "_blank")}
         className="mt-5 px-6 py-2 text-white rounded-3xl hover:bg-white hover:text-blue-500 cursor-pointer bg-blue-500 transition">
          Send Me A Message!
        </button>

      <form onSubmit={handleSubmit} className="mt-5 w-full max-w-2xl bg-gray-900 p-6 rounded-xl shadow-lg space-y-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-bold text-blue-500 mb-1" htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-blue-500 focus:outline-none py-2
               text-white"
              required
            />
            </div>
            <div>
            <label className="block font-bold text-blue-500 mb-1" htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your e-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-blue-500 focus:outline-none py-2 text-white"
              required
            />
            </div>
            <div>
            <label className="block font-bold text-blue-500 mb-1" htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-blue-500 py-2 text-white focus:outline-none"
              required
            />
            </div>
         
            </div>
            <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-semibold rounded-3xl py-2 px-6 transition-duration-300 cursor-pointer">
                Submit
            </button>
            </div>
          </form>  
            </div>

      {/* Footer */}
      <footer className="bg-blue-500 flex flex-col sm:flex-row justify-between items-center px-4 py-3 text-white text-sm">
        <div>2025 BrandonIsades. All rights reserved</div>
        <p>Designed by Brandon</p>
      </footer>
    </main>
      
    );
  };