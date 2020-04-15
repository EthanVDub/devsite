import styled from "styled-components";
import Projects from "./projects";
import Description from "./description";
import History from "./workhistory";

const StyledBody = styled.div`
  margin: 0% 20%;
`;

const Body = () => (
  <StyledBody>
    <Description />
    <Projects />
    <History />
  </StyledBody>
);

export default Body;
