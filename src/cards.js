import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "./REDUX/SLICE/cartSlice";

function Cards({ item }) {
  let { title, image, description, id } = item;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(add(id));
  };

  return (
    <Card className="m-2" style={{ width: "18rem" }}>
      <Card.Img variant="top" style={{ width: 135 }} src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description.slice(0, 100)}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            handleClick();
          }}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
