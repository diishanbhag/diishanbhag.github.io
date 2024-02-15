"use client"
import React, { useState } from "react";
import emailjs from 'emailjs-com';




const SendEmail = () => {
    
    return (
        <form onSubmit={submitHandler}>
            <div>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
            </div>
            <div>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
            </div>
            <div>
                <textarea type="text" rows={5} name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
            </div>
            <button className="primary__btn" type="submit">
                Send
            </button>
        </form>
    );
};

export default SendEmail;