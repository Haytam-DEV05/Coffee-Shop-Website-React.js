import "./Footer.css";
import { FiCoffee } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const icons = [
  {
    id: 1,
    icon: <FaFacebookF size={30} />,
  },
  {
    id: 2,
    icon: <FaLinkedinIn size={30} />,
  },
  {
    id: 3,
    icon: <FaTwitter size={30} />,
  },
  {
    id: 4,
    icon: <FaGithubSquare size={30} />,
  },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="top-footer">
        <FiCoffee size={40} />
        <span>Coffee</span>
      </div>
      <p>
        Created By{" "}
        <a href="https://haitam-nefal.vercel.app" target="_blank">
          Haitam Nefal
        </a>
        All Right Reserved
      </p>
      <div className="social-icons">
        {icons.map((icon) => {
          return (
            <div className="icon" key={icon.id}>
              {icon.icon}
            </div>
          );
        })}
      </div>
    </footer>
  );
}
