import React, { useState } from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";

import Icon from "react-icons-kit";
import { circle_down } from "react-icons-kit/ikons/";
import "./Dropdown.css";

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <IconWrapper>
        <Btn onClick={() => setOpen(!open)}>
          <Icon icon={circle_down} size={40} style={{ color: "white" }} />
        </Btn>
      </IconWrapper>
      {open && <DropdownMenu />}
    </Wrapper>
  );
};

//css styling
const Wrapper = styled.div``;

const IconWrapper = styled.div`
  margin-right: 1rem;
`;

const Btn = styled.button`
  transition: fliter 400ms;
  cursor: pointer;
  background-color: rgba(32, 48, 64, 0.1);
  border: none;
  &:hover {
    filter: brightness(1.3);
  }
`;
