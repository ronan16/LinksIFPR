import styled from "styled-components";
import { colors } from "../styles/colors";

const StyledButton = styled.a`
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  margin: 10px 0;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
  background-color: ${(props) =>
    props.primary ? colors.primary : colors.secondary};
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.primary ? colors.secondary : colors.primary};
  }
`;

export default StyledButton;
