import './About.css';

export default function About() {
  return (
    <section id="about">
      <h1 className="title" id="about-me">
        Hi there! 👋
        <br /> I'm{' '}
        <strong id="my-name" className="fancy">
          Edouard
        </strong>{' '}
        a full-stack developer!
      </h1>
      <p id="tag-line">Let's build something different together</p>
    </section>
  );
}
