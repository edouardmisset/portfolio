/* eslint-disable jsx-a11y/label-has-associated-control */
import './Contact.css';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <h2 className="section-title">Let's get in touch 👋</h2>
      {/* TODO: Grab mail, GH & LinkedIn SVG  */}
      <ul className="list-social">
        <li className="item-social">
          <a
            id="mail"
            className=""
            title="Mail"
            href="mailto:edouardmisset@gmail.com"
          >
            <svg />
          </a>
        </li>
        <li className="item-social">
          <a
            id="linkedin"
            className=""
            title="LinkedIn"
            href="https://www.linkedin.com/in/edouard-misset-6b01608b/"
          >
            <svg />
          </a>
        </li>
        <li className="item-social">
          <a
            id="github"
            className=""
            title="GitHub"
            href="https://github.com/edouardmisset"
          >
            <svg />
          </a>
        </li>
      </ul>

      <form id="contact-form">
        <div className="input-group">
          <label className="contact-form-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="fullname"
            id="name"
            placeholder="John Doe"
            autoComplete="true"
          />
        </div>
        <div className="input-group">
          <label className="contact-form-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john.doe@example.com"
            autoComplete="true"
          />
        </div>
        <div className="input-group">
          <label className="contact-form-label" htmlFor="message">
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Hi there! I would love to work with you 🙂"
          />
        </div>
        <input type="button" value="Submit" id="submit" />
      </form>
    </section>
  );
}
