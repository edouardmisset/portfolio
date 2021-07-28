import './Portfolio.css';

export default function Portfolio() {
  const projects = [
    {
      title: 'Face Recognition Smart Brain',
      src: 'https://edouardmisset.github.io/face-recognition-smart-brain/',
      githubUrl:
        'https://github.com/edouardmisset/face-recognition-smart-brain',
    },
    {
      title: 'Friendly Robots',
      src: 'https://edouardmisset.github.io/friendlyRobots/',
      githubUrl: 'https://github.com/edouardmisset/friendlyRobots',
    },
    {
      title: 'Rocket Man',
      src: 'https://edouardmisset.github.io/rocket-man/',
      githubUrl: 'https://github.com/edouardmisset/rocket-man',
    },
    {
      title: 'Calculator',
      src: 'https://edouardmisset.github.io/calculator/',
      githubUrl: 'https://github.com/edouardmisset/calculator',
    },
    {
      title: 'Count Down',
      src: 'https://edouardmisset.github.io/countdown/',
      githubUrl: 'https://github.com/edouardmisset/countdown',
    },
    {
      title: 'Follow Along',
      src: 'https://edouardmisset.github.io/followAlongDropdown/',
      githubUrl: 'https://github.com/edouardmisset/followAlongDropdown',
    },
    {
      title: 'Sticky Navigation',
      src: 'https://edouardmisset.github.io/stickyNav/',
      githubUrl: 'https://github.com/edouardmisset/stickyNav',
    },
    {
      title: 'Clock',
      src: 'https://edouardmisset.github.io/simpleClock/',
      githubUrl: 'https://github.com/edouardmisset/simpleClock',
    },
    {
      title: 'Dark Theme',
      src: 'https://edouardmisset.github.io/lightDarkThemes/',
      githubUrl: 'https://github.com/edouardmisset/lightDarkThemes',
    },
    {
      title: 'Background Generator',
      src: 'https://edouardmisset.github.io/backgroundGenerator/',
      githubUrl: 'https://github.com/edouardmisset/backgroundGenerator',
    },
    {
      title: 'Canvas Fun',
      src: 'https://edouardmisset.github.io/canvasFun/',
      githubUrl: 'https://github.com/edouardmisset/canvasFun',
    },
    {
      title: 'To Do List',
      src: 'https://edouardmisset.github.io/simpleTODO',
      githubUrl: 'https://github.com/edouardmisset/simpleTODO',
    },
  ];

  return (
    <section>
      <h2 className="section-title" id="portfolio">
        Portfolio
      </h2>
      <div className="slider">
        {projects.map((project) => (
          <a key={project.title} href={`#${project.title}`}>
            {project.title}
          </a>
        ))}
        <div className="project-container">
          {projects.map((project) => (
            <div key={project.title} className="project">
              <iframe
                type="text/html"
                id={project.title}
                src={project.src}
                title={project.title}
                name={project.title}
                loading="lazy"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
