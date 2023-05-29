import { Form } from "./form.jsx";
import { ContactChannels } from "./channels.jsx";

export function ContactUS() {
  return (
    <>
      <Layout>
        <ContactHeader />
        <Form />
        <ContactChannels />
      </Layout>
    </>
  );
}

function Layout({ children }) {
  return (
    <>
      <div className="container">
        <main className="contact-us-layout">{children}</main>
      </div>
    </>
  );
}

function ContactHeader() {
  return (
    <>
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>We are here for for you! How can we help?</p>
      </div>
    </>
  );
}
