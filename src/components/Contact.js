import './Contact.css';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <h2>Let's get in touch 👋</h2>
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
    </section>
  );
}
