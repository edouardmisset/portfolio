import './Section.css';

export default function Section({ className, sectionName }) {
  return (
    <section className={className} id={sectionName}>
      <h2>{sectionName}</h2>
    </section>
  );
}
