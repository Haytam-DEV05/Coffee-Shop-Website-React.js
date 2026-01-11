import "./Menu.css";
export default function Menu() {
  const arrMenu = [
    {
      id: 1,
      pathImage: "/public/images/menu-1.png",
      title: "coffee bean",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi debitis veritatis porro, molestias cumque odio corrupti asperiores",
    },
    {
      id: 2,
      pathImage: "/public/images/menu-2.png",
      title: "coffee bean",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi debitis veritatis porro, molestias cumque odio corrupti asperiores",
    },
    {
      id: 3,
      pathImage: "/public/images/menu-3.png",
      title: "coffee bean",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi debitis veritatis porro, molestias cumque odio corrupti asperiores",
    },
    {
      id: 4,
      pathImage: "/public/images/menu-4.png",
      title: "coffee bean",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi debitis veritatis porro, molestias cumque odio corrupti asperiores",
    },
    {
      id: 5,
      pathImage: "/public/images/menu-5.png",
      title: "coffee bean",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi debitis veritatis porro, molestias cumque odio corrupti asperiores",
    },
    {
      id: 6,
      pathImage: "/public/images/menu-6.png",
      title: "coffee bean",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi debitis veritatis porro, molestias cumque odio corrupti asperiores",
    },
  ];
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Our Menu</h2>
        <div className="container-menu">
          {arrMenu.map((menu) => (
            <div className="box" key={menu.id}>
              <img src={menu.pathImage} alt={menu.title} />
              <h3>{menu.title}</h3>
              <p>{menu.description}</p>
              <button className="btn">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
