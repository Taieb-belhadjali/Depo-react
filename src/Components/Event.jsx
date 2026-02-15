import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Event = ({ event, buyEvent, toggleLike }) => {
  return (
    <Col md={4} sm={6} xs={12} className="mb-4">
      <Card>
        <Card.Img
          variant="top"
          src={`/${event.img}`}
        />
        <Card.Body>
          <Card.Title><Link to={`/event/${event.name}`}>{event.name}</Link></Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Card.Text>Price: {event.price} DT</Card.Text>
          <Card.Text>
            Tickets: {event.nbTickets === 0 ? "Sold Out" : event.nbTickets}
          </Card.Text>
          <Card.Text>Participants: {event.nbParticipants}</Card.Text>

          <Button
            variant="primary"
            onClick={() => buyEvent(event.id)}
            disabled={event.nbTickets === 0}
            className="me-2"
          >
            Book an event
          </Button>

          <Button
            variant={event.like ? "danger" : "success"}
            onClick={() => toggleLike(event.id)}
          >
            {event.like ? "Dislike" : "Like"}
          </Button>
          
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Event;
