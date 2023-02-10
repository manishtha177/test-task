import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container className="__header">
          <Navbar.Brand href="/">Star Wars</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
