import { useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!");
        },
        (error) => {
          console.log(error.text);
          console.log(process.env.REACT_APP_SERVICE_ID);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <h1> Contact </h1>
      <p>
        If youd like to discuss art, my teaching schedule or if you are interested in purchasing a painting please send
        me a message and I'll get back to you a soon as I can.{" "}
      </p>
      <p>Thanks,</p> <p>Birgit</p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Your name:</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
