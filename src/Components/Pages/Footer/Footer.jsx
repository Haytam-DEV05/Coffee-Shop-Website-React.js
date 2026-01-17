import "./Footer.css";
import { FiCoffee } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

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
        <div className="icon">
          <FaFacebookF size={30}/>
        </div>
        <div className="icon">
          <FaLinkedinIn size={30}/>
        </div>
        <div className="icon">
          <FaTwitter size={30}/>
        </div>
        <div className="icon">
          <FaGithubSquare size={30}/>
        </div>
      </div>
    </footer>
  );
}
