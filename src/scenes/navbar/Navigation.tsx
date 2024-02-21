import Link from "./Link";
import "./Navigation.css";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <nav>
      <div className="navbar-container navbar">
        <div className="navbar-container navbar-content">
          <div className="navbar-container navbar-menu">
            <div className="logo">
              <span className="logo-text">009.md </span>
            </div>
            <div className="navbar-container navbar-buttons">
              <div className="navbar-container nav-list">
                <Link
                  page="Главная"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="О нас"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Самоубийство"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Пострадать"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="navbar-container navbar-signup">
                <p className="">Стать участником</p>
                <button className="button-40">Войти</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
