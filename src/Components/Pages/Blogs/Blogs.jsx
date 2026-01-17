import "./Blog.css";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

export default function Blogs() {
  const carts = [
    {
      id: 1,
      img: "/public/images/g-img-1.jpg",
      title: "blog title goes here.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,illum ?",
    },
    {
      id: 2,
      img: "/public/images/g-img-2.jpg",
      title: "blog title goes here.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,illum ?",
    },
    {
      id: 3,
      img: "/public/images/g-img-3.jpg",
      title: "blog title goes here.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,illum ?",
    },
  ];
  // icon01: <FaCalendarAlt />,
  // date: "21st may, 2022",
  // icon02: <FaRegUser />,
  // info: "by admin",

  return (
    <section id="blogs">
      <div className="container">
        <h2>Our Daily Posts</h2>
        <div className="carts">
          {carts.map((cart) => {
            return (
              <div className="cart" key={cart.id}>
                <div className="image">
                    <img src={cart.img} alt="pic-1" aria-label="picture" />
                </div>
                <h3 className="title">{cart.title}</h3>
                <p className="description">{cart.description}</p>
                <button className="btn">read more</button>
                <div className="bottom-cart">
                  <div className="left">
                    <FaCalendarAlt />
                    <span>21st may, 2022</span>
                  </div>
                  <div className="right">
                    <FaRegUser />
                    <span>by admin</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
