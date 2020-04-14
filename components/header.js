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
  margin: 1em 20%;
  width: 80%;
  border-bottom: 1px solid #013c63;
  padding: 0 5%;
`;

const Header = () => (
  <StyledHeader>
    <Link href="/">
      <Button>Home</Button>
    </Link>
    <Link href="/about">
      <Button>About</Button>
    </Link>
  </StyledHeader>
);

export default Header;
