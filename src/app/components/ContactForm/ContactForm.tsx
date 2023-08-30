import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    // if (form.current) {
    //   emailjs
    //     .sendForm(
    //       "service_xvk06y5",
    //       "template_iqwfvfb",
    //       form.current,
    //       "KkDso4WOZLLM3b9if"
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    // }
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
          className="h-24 w-24 rounded-full flex justify-center items-center bg-my-teal text-white font-bold"
        >
          Submit
        </button>
        <p className="pl-4">Thanks for reaching out!</p>
      </div>
    </form>
  );
}
