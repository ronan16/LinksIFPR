import styled from "styled-components";

const TituloStyled = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  padding: 20px 0;
`;

function Titulo({ children }) {
  return <TituloStyled>{children}</TituloStyled>;
}

export default Titulo;
