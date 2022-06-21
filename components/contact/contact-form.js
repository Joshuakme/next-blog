// Import React Components
import { useEffect, useState } from "react";
// Import Components
import Notification from "../ui/notification";
// Import Styles
import classes from "./contact-form.module.css";

function ContactForm() {
  const initialInputs = {
    email: "",
    name: "",
    message: "",
  };
  const [enteredInputs, setEnteredInputs] = useState(initialInputs);
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [reqError, setReqError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setReqError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  function inputHandler(e) {
    const { name, value } = e.target;

    setEnteredInputs({ ...enteredInputs, [name]: value });
  }

  async function sendContactData(contactDetails) {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
  }

  async function sendMessageHandler(e) {
    e.preventDefault();

    // Add Client-Side Validation (Optional)

    setRequestStatus("pending");
    try {
      await sendContactData(enteredInputs);
      setRequestStatus("success");
      setEnteredInputs(initialInputs);
    } catch (err) {
      setReqError(err.message);
      setRequestStatus("error");
    }
  }

  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way",
    };
  } else if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  } else if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: reqError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={enteredInputs.email}
              onChange={inputHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={enteredInputs.name}
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            value={enteredInputs.message}
            onChange={inputHandler}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
