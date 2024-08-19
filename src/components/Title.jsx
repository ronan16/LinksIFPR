import React from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const TitleText = styled.h1`
  color: ${colors.white};
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;
`;

const Title = ({ children }) => <TitleText>{children}</TitleText>;

export default Title;
