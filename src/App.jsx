import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Menu from "./Components/Pages/Menu/Menu";
import Gallery from "./Components/Pages/Gallery/Gallery";
import Reviews from "./Components/Pages/Reviews/Reviews";
import Blogs from "./Components/Pages/Blogs/Blogs";
import NewsLetter from "./Components/Pages/NewsLetter/NewsLetter";
import Footer from "./Components/Pages/Footer/Footer";

export default function App() {
  return (
    <div>
      <Home />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Blogs />
      <NewsLetter />
      <Footer />
    </div>
  );
}
