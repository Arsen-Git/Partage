import "./Header.scss";

export default function Header() {
  return (
    <header className="head">
      <div className="head__container">
        <h2 className="head__logo">PARTAGE {"<|>"}</h2>
        <menu className="head__menu">
          <li className="head__menu__item">Create</li>
          <li className="head__menu__item">Sell</li>
          <li className="head__menu__item">Buy</li>
          <li className="head__menu__item">Whitepaper</li>
          <button className="btn-fill">Contact Us</button>
        </menu>
      </div>
    </header>
  );
}
