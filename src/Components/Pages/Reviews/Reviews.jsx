import { useEffect, useState } from "react";
import "./Reviews.css";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      img: "/images/pic-1.png",
      fullName: "Haitam Nefal",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              dolor molestias expedita veritatis aliquam ipsa recusandae,
              laudantium eos aliquid. Necessitatibus libero neque quisquam
              suscipit officiis minus pariatur. Mollitia incidunt iure impedit
              eius aliquid, quam quisquam?`,
    },
    {
      id: 2,
      img: "/images/pic-2.png",
      fullName: "Asmaa Nouri",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              dolor molestias expedita veritatis aliquam ipsa recusandae,
              laudantium eos aliquid. Necessitatibus libero neque quisquam
              suscipit officiis minus pariatur. Mollitia incidunt iure impedit
              eius aliquid, quam quisquam?`,
    },
    {
      id: 3,
      img: "/images/pic-3.png",
      fullName: "Anouare Adiri",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              dolor molestias expedita veritatis aliquam ipsa recusandae,
              laudantium eos aliquid. Necessitatibus libero neque quisquam
              suscipit officiis minus pariatur. Mollitia incidunt iure impedit
              eius aliquid, quam quisquam?`,
    },
  ];

  const handlePrevReview = () => {
    if (currentReview === 0) {
      return setCurrentReview(reviews.length - 1);
    }
    return setCurrentReview(currentReview - 1);
  };

  const handleNextReview = () => {
    if (currentReview === reviews.length - 1) {
      return setCurrentReview(0);
    }
    return setCurrentReview(currentReview + 1);
  };

  useEffect(() => {
    const intervel = setInterval(() => {
      setCurrentReview((prev) => {
        return prev === reviews.length - 1 ? 0 : prev + 1;
      });
    }, 2000);
    return () => clearInterval(intervel);
  }, []);

  return (
    <section id="reviews">
      <div className="container">
        <h1>customers reviews</h1>
        <div className="clients-reviews">
          {reviews.map((review, index) => {
            return (
              <div
                className={`review ${currentReview === index ? "show" : ""}`}
                key={review.id}
              >
                <img src={review.img} aria-label="picture personne" />
                <h3>{review.fullName}</h3>
                <p>{review.description}</p>
              </div>
            );
          })}
          <div className="buttons-controlle">
            <button className="prev" onClick={handlePrevReview}>
              <GrPrevious />
            </button>
            <button className="next" onClick={handleNextReview}>
              <GrNext />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
