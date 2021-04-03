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
        <label className="contact-form-label" htmlFor="name">
          Name <input type="text" name="name" id="name" />
        </label>

        <label className="contact-form-label" htmlFor="email">
          Email <input type="email" name="email" id="email" />
        </label>

        <label className="contact-form-label" htmlFor="message">
          Message <input type="text" name="message" id="message" />
        </label>
        <input type="submit" value="Send" />
      </form>
    </section>
  );
}
