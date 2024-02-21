import React from "react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import "./Navigation.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
    <div className="navbar-container navbar">
      <div className="navbar-container navbar-content">
        <div className="navbar-container navbar-menu">
          <img className="logo" src={Logo} alt="Logo"/>
          <div className="navbar-container navbar-buttons">
            <div className="navbar-container nav-list">
              <p>Главная</p>
              <p>О нас</p>
              <p>Самоубийство</p>
              <p>Пострадать</p>
            </div>
            <div>
              <p>Войти</p>
              <button>Присоединиться</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
