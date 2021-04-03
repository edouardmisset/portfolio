import './About.css';

export default function About() {
  return (
    <section id="about">
      <h1 id="about-me">
        Hi there! <br /> I'm{' '}
        <span id="my-name" className="fancy">
          Edouard
        </span>{' '}
        a full-stack developer!
      </h1>
      <p id="tag-line">Let's build something different together</p>
    </section>
  );
}
