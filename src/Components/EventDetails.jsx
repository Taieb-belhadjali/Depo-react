import { useParams } from "react-router-dom";
import eventsData from "../events.json";
import { Container, Card } from "react-bootstrap";

const EventDetails = () => {
  const { name } = useParams();

  const event = eventsData.find(
    (e) => e.name === name
  );

  if (!event) {
    return <h2>Event not found</h2>;
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
            <Card.Img
              variant="top"
              src={`/${event.img}`}
              style={{ width: "300px", height: "200px", objectFit: "cover" }}
            />
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Card.Text>Price: {event.price} DT</Card.Text>
          <Card.Text>Participants: {event.nbParticipants}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventDetails;
