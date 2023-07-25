"use client";

import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex items-center flex-col w-full md:w-1/2">
      <h2 className="font-bold text-3xl mb-2">CONTACT</h2>
      <div className="flex flex-col items-center md:max-w-3xl lg:max-w-5xl">
        <h3 className="font-bold text-xl mt-4">Phone</h3>
        <p>734-355-9792</p>
        <h3 className="font-bold text-xl mt-4">Email</h3>
        <p>katieschultzdev@gmail.com</p>
      </div>
      <ContactForm />
    </div>
  );
}
