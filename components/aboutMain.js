import styled from "styled-components";
import Header from "./header";

const StyledAboutMain = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutMain = () => (
  <StyledAboutMain>
    <Header />
    <h1>About</h1>
  </StyledAboutMain>
);

export default AboutMain;
