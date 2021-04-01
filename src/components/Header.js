import './Header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li className="link">
            <a href="#about">About</a>
          </li>
          <li className="link">
            <a href="#skills">Skills</a>
          </li>
          <li className="link">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

/* 
<header class="container">
      <input type="checkbox" name="menu" id="menu" class="menu-toggler" />
      <label for="menu" class="menu-toggler-label">
        <i data-feather="menu"> </i>
      </label>
      <ul class="stagger-menu hover-nav">
        <li style="--i: 0"><a href="#">Home</a></li>
        <li style="--i: 1"><a href="#">Pricing</a></li>
        <li style="--i: 2"><a href="#">Account</a></li>
        <li style="--i: 3"><a href="#">Support</a></li>
        <li style="--i: 4"><a href="#">About</a></li>
      </ul>
    </header>
*/
