import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FiSearch, FiGlobe, FiShoppingCart } from "react-icons/fi";
import styles from "./style.css";

const HeaderTuribus = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const Image = styled.img.attrs((props) => ({
    src: props.src,
  }))`
    background-color: transparent;
    height: 25px;
  `;

  return (
    <header className="header">
      <div className="logo">
        <a href="http://www.turibus.com.mx">
          <img src="https://www.turibus.com.mx/image/layout_set_logo?img_id=1315900&t=1686667257492" />
        </a>
      </div>
      {window.innerWidth <= 768 && (
        <button className="menu-button" onClick={toggleMenu}>
          {showMenu ? (
            <Image src="https://www.turibus.com.mx/o/turibus-theme/images/puntos-tur.png" />
          ) : (
            <Image src="https://www.turibus.com.mx/o/turibus-theme/images/puntos-tur.png" />
          )}
        </button>
      )}

      <div className="menu">
        <ul className={`nav-links ${showMenu ? "show" : "hide"}`}>
          <a href="http://www.turibus.com.mx">
            <li>Circuitos</li>
          </a>
          <a href="http://www.turibus.com.mx">
            <li>Experiencias</li>
          </a>
          <a href="http://www.turibus.com.mx">
            <li>Turitour</li>
          </a>
          <a href="http://www.turibus.com.mx">
            <li>Atracciones</li>
          </a>
          <a href="http://www.turibus.com.mx">
            <li>Temáticos</li>
          </a>
          <a href="http://www.turibus.com.mx">
            <li>Avisos</li>
          </a>
          <li>
            <div className="icons">
              <FiSearch className="icon" />
            </div>
          </li>
          <li>
            <div className="icons">
              <FiShoppingCart className="icon" />
            </div>
          </li>
          <li>
            <div className="icons">
              <FiGlobe className="icon" />
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderTuribus;
