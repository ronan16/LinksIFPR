import React from "react";
import styled from "styled-components";

const LogoImage = styled.img`
  height: 60px;
  margin-right: 20px;
  filter: brightness(100);
`;

const Logo = () => <LogoImage src="src\assets\img\logoH.png" alt="IFPR Logo" />;

export default Logo;
