import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavTabsExample() {
  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Link to={"/"}>ITEMS</Link>
          </Nav.Item>
          &nbsp;&nbsp;&nbsp;
          <Nav.Item>
            <Link to={"/cart"}>CART</Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
    </Card>
  );
}

export default NavTabsExample;
