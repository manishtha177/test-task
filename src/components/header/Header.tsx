import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useParams } from "react-router-dom";

const Header = () => {
  const { id } = useParams();

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
