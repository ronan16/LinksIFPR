import styled from "styled-components";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background: orange;
`;

function Container({ children }) {
  return <Div>{children}</Div>;
}

export default Container;
