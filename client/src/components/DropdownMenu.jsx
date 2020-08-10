import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import Icon from "react-icons-kit";
import { logIn } from "react-icons-kit/feather/";
import { shopping_cart, shop, arrow_left } from "react-icons-kit/ikons/";
import "./Dropdown.css";

export default () => {
  const [activeMenu, setActiveMenu] = useState("main");

  const DropdownItem = (props) => {
    return (
      <DownItem onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        {props.children}
      </DownItem>
    );
  };

  return (
    <Dropdown>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="main">
          <DropdownItem>
            <Icon icon={logIn} size={30} />
            <Down>Sign In</Down>
          </DropdownItem>

          <DropdownItem>
            <Icon icon={shopping_cart} size={30} />
            <Down>Cart</Down>
          </DropdownItem>

          <DropdownItem goToMenu="settings">
            <Icon icon={shop} size={30} />
            <Down>Categories</Down>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="main">
          <DropdownItem goToMenu="main">
            <Icon icon={arrow_left} size={30} />
          </DropdownItem>

          <DropdownItem>
            <Down>Fitness</Down>
          </DropdownItem>

          <DropdownItem>
            <Down>Medical</Down>
          </DropdownItem>
          <DropdownItem>
            <Down>Lifestyle</Down>
          </DropdownItem>
          <DropdownItem>
            <Down>Entertainment</Down>
          </DropdownItem>
          <DropdownItem>
            <Down>Industrial</Down>
          </DropdownItem>
          <DropdownItem>
            <Down>Pets And Animals</Down>
          </DropdownItem>
          <DropdownItem>
            <Down>Gaming</Down>
          </DropdownItem>
        </div>
      </CSSTransition>
    </Dropdown>
  );
};

const Dropdown = styled.a`
  position: absolute;
  top: 64px;
  width: 600px;
  transform: translateX(-95%);
  background-color: rgba(32, 48, 64, 0.95);
  padding: 1rem;
  overflow: hidden;
  transition: 500ms;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const DownItem = styled.div`
  margin-top: 2rem;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  transition: 500ms;
  padding: 0.5rem;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: rgba(124, 146, 169, 0.9);
  }
`;

const Down = styled.span`
  font-size: 1rem;
  margin-left: 0.5rem;
`;
