import { FaCoffee } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";
import "./About.css";

export default function About() {
  const boxes = [
    {
      id: 1,
      icon: <FaCoffee size={30} />,
      title: "best coffee",
    },
    {
      id: 2,
      icon: <TbTruckDelivery size={30} />,
      title: "free delivery",
    },
    {
      id: 3,
      icon: <RiCustomerServiceFill size={30} />,
      title: "24/7 service",
    },
  ];
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="grid">
          <img
            src="/public/images/about-img-1.png"
            alt="about image"
            aria-label="about image"
          />
          <div className="content">
            <h2>why choose us?</h2>
            <h3>the best coffee maker in the town</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              dolorem laborum itaque. Perspiciatis in veniam illum deserunt,
              quos animi maiores nisi officiis amet accusantium soluta a,
              excepturi vero obcaecati nobis.
            </p>
            <button className="btn btn-primary">Read More</button>
            <div className="services-box">
              {boxes.map((box) => {
                return (
                  <div className="box" key={box.id}>
                    {box.icon}
                    <p>{box.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
