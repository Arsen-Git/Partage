import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <h1 className="hero__title">
            Shared <br /> NFT utilities
          </h1>
          <p className="hero__subtitle">
            Get the most out of fractionalization
          </p>
          <button className="btn-fill">Let’s start</button>
        </div>
        <figure className="hero__laptop">
          <img src="./images/hero-laptop.png" alt="laptop" />
        </figure>
        <figure className="hero__hand">
          <img src="./images/hero-arm.png" alt="arm" />
        </figure>
      </div>
    </section>
  );
}
