import styled from "styled-components";
import Button from "./button";
import Link from "next/link";

const StyledHeader = styled.div`
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  color: #013c63;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 1em 20%;
  border-bottom: 1px solid #013c63;
  padding: 0 5%;
  background: white;

  h1 {
    margin-right: auto;
    font-family: Lucida Grande, sans-serif;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: static;
  }
`;

const Navigation = styled.div`
  display: flex;
`;

const Header = () => (
  <StyledHeader>
    <h1>Ethan Vander Wiel</h1>
    <Navigation>
      <Link href="/">
        <Button>Home</Button>
      </Link>
      <Link href="/about">
        <Button>About</Button>
      </Link>
    </Navigation>
  </StyledHeader>
);

export default Header;
