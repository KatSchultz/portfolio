"use client";

import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex items-center w-full flex-col fade-in">
      <h2 className="font-bold text-3xl mb-2">CONTACT</h2>
      <p className="pb-4">I look forward to hearing from you</p>
      <div className="flex items-start flex-col md:flex-row w-full md:max-w-3xl">
        <div className="w-full md:min-w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
