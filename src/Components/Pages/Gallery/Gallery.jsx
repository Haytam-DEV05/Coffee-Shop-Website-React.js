import "./Gallery.css";

export default function Gallery() {
  const boxeGallery = [
    {
      id: 1,
      imgPath: "/public/images/g-img-1.jpg",
      title: "morning coffee",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolore?",
    },
    {
      id: 2,
      imgPath: "/public/images/g-img-2.jpg",
      title: "morning coffee",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolore?",
    },
    {
      id: 3,
      imgPath: "/public/images/g-img-3.jpg",
      title: "morning coffee",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolore?",
    },
    {
      id: 4,
      imgPath: "/public/images/g-img-4.jpg",
      title: "morning coffee",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolore?",
    },
    {
      id: 5,
      imgPath: "/public/images/g-img-5.jpg",
      title: "morning coffee",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolore?",
    },
    {
      id: 6,
      imgPath: "/public/images/g-img-6.jpg",
      title: "morning coffee",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolore?",
    },
  ];
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className="gallery-container">
          {boxeGallery.map((gallery) => (
            <div className="gallery" key={gallery.id}>
              <img src={gallery.imgPath} alt={gallery.title} />
              <div className="content">
                <h3>{gallery.title}</h3>
                <p>{gallery.description}</p>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
