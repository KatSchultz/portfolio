import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef(null);
  const [showThanks, setShowThanks] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setShowThanks(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_xvk06y5",
          "template_iqwfvfb",
          form.current,
          "KkDso4WOZLLM3b9if"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full">
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        className="border-2 border-slate-700 my-2 w-full p-2"
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        className="border-2 border-slate-700 my-2 w-full p-2"
      />
      <label>Message</label>
      <textarea
        name="message"
        rows={4}
        required
        className="border-2 border-slate-700 my-2 w-full p-2 "
      />
      <div className="flex items-center">
        <button
          type="submit"
          className="bubble bubble-form h-24 w-24 rounded-full flex justify-center items-center bg-my-teal text-white font-bold"
        >
          Submit
        </button>
        <p className={`${showThanks ? "fade-in" : "hidden"} pl-4`}>
          Thanks for reaching out!
        </p>
      </div>
    </form>
  );
}
