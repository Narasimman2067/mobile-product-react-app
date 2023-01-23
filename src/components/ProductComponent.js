// if you use any new file always import to that required page

import { data } from "../data";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./ProductComponent.css";

export function ProductComponent() {
  const [card, setCard] = useState(data);
  const [item, setItems] = useState(0);

  return (
    <div>
      <h1>mobile product store</h1>
      <a href="">
        <Button className="btn-cart" variant="secondary">
          cart {item}
        </Button>
      </a>
      <div className="product-data">
        {/* how to map the one card to multiple card */}

        {card.map((prod, idx) => (
          <CardDetails
            key={idx}
            prodPrice={prod.prodPrice}
            prodDescription={prod.prodDescription}
            prodImage={prod.prodImage}
            prodName={prod.prodName}
            prodRating={prod.prodRating}
            idx={idx}
            setItems={setItems}
            setCard={setCard}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

function CardDetails({
  setCard={setCard},
  setItems,
  prodPrice,
  prodRating,
  prodImage,
  prodName,
  prodDescription,
  idx={idx},
  item,
}) {
  let count = 0;
  const [showBtn, setShowBtn] = useState(true);
  const handleCartAdd = (idx, setItems, item) => {
    setShowBtn(!showBtn);
    setItems(item + 1);
  };
  const handleCartRemove = (idx, setItems, item, setCard) => {
    setShowBtn(!showBtn);
    setItems(item - 1);
  };
  return (
    <Card className="card-style">
      {/* to import product image use curly bracis */}
      <Card.Img variant="top" src={prodImage} />
      <Card.Body>
        <Card.Title>{prodName}</Card.Title>
        <p className="price-cart">Rs. {prodPrice}</p>
        <p className="rating-data">❤️{prodRating}</p>
        <Card.Text>{prodDescription}</Card.Text>
      </Card.Body>
      <div className="btn-area">
        {showBtn ? (
          <Button
            onClick={() => handleCartAdd(idx, setItems, item)}
            className="btn-primary"
            variant="primary"
          >
            add
          </Button>
        ) : (
          <Button
            onClick={() => handleCartRemove(idx, setItems, item)}
            className="btn-size"
            variant="danger"
          >
            remove
          </Button>
        )}
      </div>
    </Card>
  );
}
