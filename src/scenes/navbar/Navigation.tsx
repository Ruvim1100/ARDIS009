import React from "react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import "./Navigation.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className="navbar navbar1">
        <div className="navbar navbar2">
          <div className="navbar navbar3">
            <p className="Logo_text">009.md</p>
            <div className="navbar navbar4">
              <div className="navbar Nav_List">
                <p>Главная</p>
                <p>О нас</p>
                <p>Самоубийство</p>
                <p>Пострадать</p>
              </div>
              <div className="navbar">
                <p>Войти</p>
                <button>Присоедениться</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
