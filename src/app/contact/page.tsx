"use client";  // Add this line to make the component client-side

import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission logic here (e.g., send to an email service)
    console.log({ name, email, message });
    alert('Your message has been sent!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-white bg-background">
      <h1 className="mb-8 text-4xl font-bold md:text-6xl text-neon">Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-black rounded-lg shadow-lg bg-opacity-40"
      >
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-neon" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 text-white bg-gray-800 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-neon" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 text-white bg-gray-800 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-neon" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 text-white bg-gray-800 rounded"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 text-lg transition-colors duration-300 border-2 rounded-full text-neon border-neon hover:bg-neon hover:text-background"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
