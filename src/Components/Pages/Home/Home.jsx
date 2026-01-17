import "./Home.css";
import { FiCoffee } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    { id: 1, path: "#home", name: "Home" },
    { id: 2, path: "#about", name: "about" },
    { id: 3, path: "#menu", name: "Menu" },
    { id: 4, path: "#gallery", name: "Gallery" },
    { id: 5, path: "#reviews", name: "Reviews" },
    { id: 6, path: "#blogs", name: "Blogs" },
  ];

  return (
    <header id="header">
      <nav>
        <div className="logo">
          <FiCoffee />
          <h3>Coffee</h3>
        </div>
        <div className="right-menu">
          <ul className={`${openMenu ? "show-menu" : ""}`}>
            <li className={`${openMenu ? "show-icon" : ""}`}>
              <button onClick={() => setOpenMenu(false)}>
                <IoCloseSharp size={30} />
              </button>
            </li>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.path}>{link.name}</a>
                </li>
              );
            })}
          </ul>
          <div
            className="menu-navigation"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
              <IoCloseSharp size={26} />
            ) : (
              <RxHamburgerMenu size={26} />
            )}
          </div>
          <button>
            <FaRegUserCircle size={26} />
          </button>
        </div>
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
