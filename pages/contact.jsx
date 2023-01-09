import Head from 'next/head';

import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              Feel free to contact me if you want to collaborate.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: katja.sabando@gmail.com</li>
              <li className="contact-item">Phone: +43 677 6377 6273</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
