import styled from "styled-components";
import Header from "./header";
import Body from "./body";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = () => (
  <StyledMain>
    <Header />
    <Body />
  </StyledMain>
);

export default Main;
