import "./Home.css";
import { FiCoffee } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

export default function Home() {
  return (
    <header id="header">
      <nav>
        <div className="logo">
          <FiCoffee />
          <h3>Coffee</h3>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="">
              <FaRegUserCircle />
            </a>
          </li>
        </ul>
      </nav>

      <div className="home" id="home">
        <div className="content fade-In">
          <h1>coffee house</h1>
          <p>start your day with our coffee</p>
          <button>Get Started</button>
        </div>
      </div>
    </header>
  );
}
