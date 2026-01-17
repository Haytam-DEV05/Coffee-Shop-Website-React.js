import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="newsletter" id="newsletter">
      <div className="container">
        <div className="content">
          <h2>NewsLetter</h2>
          <p>subscribe for latest upadates</p>
        </div>
        <form>
          <input type="email" placeholder="enter your email" />
          <button>subscribe</button>
        </form>
      </div>
    </div>
  );
}
