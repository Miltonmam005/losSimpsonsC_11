import { Card } from "react-bootstrap";

const Frase = ({ frasePops }) => {
  return (
    <section>
      <img
        src={frasePops.image}
        alt={frasePops.character}
        className="character mb-4"
      />
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{frasePops.character}</Card.Title>
          <Card.Text>{frasePops.quote}</Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frase;
