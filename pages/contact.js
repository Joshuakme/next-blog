// Import Next & React Components
import Head from "next/head";
import { Fragment } from "react";
// Import Components
import ContactForm from "../components/contact/contact-form";

function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />;
    </Fragment>
  );
}

export default Contact;
