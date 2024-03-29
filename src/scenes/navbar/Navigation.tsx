import { SelectedPage } from "@/shared/types";
import Link from "./Link";
import "./Navigation.css";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-menu">
            <div className="logo">
              <span className="logo-text">009.md </span>
            </div>
            {isAboveMediumScreens ? (<div className="navbar-buttons">
              <div className="nav-list">
                <Link
                  page="Главная"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Услуги"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="О нас"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Цены"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Присоедениться к нам"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="navbar-signup">
                <p className="">Язык</p>
                <button className="button-40">Войти</button>
              </div>
            </div>
            ) : (
              <button className="nav-burger-menu"
              onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src="./src/assets/bar.svg" alt="bar-icon"/>
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled &&
      (
        <div className="mobile-menu-modal">
          <div className="close-icon-block">
            <button
            className="close-icon"
            onClick={() => setIsMenuToggled(!isMenuToggled)} >
              <img src="./src/assets/xmark.svg" alt="xmark-icon" className="bar-icon"/>
            </button>
          </div>
          <div className="mobile-menu-items">
                <Link
                  page="Главная"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Услуги"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="О нас"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Цены"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Присоедениться к нам"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
