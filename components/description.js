import styled from "styled-components";

const StyledDescription = styled.div`
  color: #013c63;
  text-align: center;
  font-family: Lucida, sans-serif;
  font-size: 20px;

  p span {
    display: block;
  }
`;

const Description = () => (
  <StyledDescription>
    <p>
      <span>Intent on designing software for the every day person, </span>
      <span>and striving to provide the best possible user experience.</span>
    </p>
  </StyledDescription>
);

export default Description;
