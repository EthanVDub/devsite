import styled from "styled-components";
import Header from "./header";
import Body from "./body";

const StyledMain = styled.div`
  display: flex;
`;

const Main = () => (
  <StyledMain>
    <Header />
    <Body />
  </StyledMain>
);

export default Main;
