import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Title from "./Title";
import { colors } from "../styles/colors";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  padding: 20px;
  border-bottom: 4px solid ${colors.secondary};
`;

const Header = () => (
  <HeaderContainer>
    <Title>
      {" "}
      <Logo />
      Página de Links
    </Title>
  </HeaderContainer>
);

export default Header;
