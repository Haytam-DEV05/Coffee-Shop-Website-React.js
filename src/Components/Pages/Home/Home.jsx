import "./Home.css";
import { FiCoffee } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

export default function Home() {
  const links = [
    { id: 1, path: "home", name: "Home" },
    { id: 2, path: "about", name: "about" },
    { id: 3, path: "menu", name: "Menu" },
    { id: 4, path: "gallery", name: "Gallery" },
    { id: 5, path: "reviews", name: "Reviews" },
    { id: 5, path: "contact", name: "Contact" },
    { id: 5, path: "blogs", name: "Blogs" },
  ];

  return (
    <header id="header">
      <nav>
        <div className="logo">
          <FiCoffee />
          <h3>Coffee</h3>
        </div>
        <div className="right-menu">
          <ul>
            {links.map((link) => {
              return (
                <li>
                  <a href={link.path}>{link.name}</a>
                </li>
              );
            })}
          </ul>
          <button>
            <FaRegUserCircle />
          </button>
        </div>

        {/* MOBILE MENU */}
        {/* <div className="right-menu">
          <div className="menu-navigation"></div>
        </div> */}
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
