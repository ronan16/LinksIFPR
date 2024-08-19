import React from "react";
import styled from "styled-components";

// Importando a imagem
import logoH from "../assets/img/logoH.png";

const LogoImage = styled.img`
  height: 60px;
  margin-right: 20px;
  filter: brightness(100);
`;

const Logo = () => <LogoImage src={logoH} alt="IFPR Logo" />;

export default Logo;
