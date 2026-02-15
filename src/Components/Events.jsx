import React, { useState, useEffect } from "react";
import { Row, Alert, Container } from "react-bootstrap";
import Event from "./Event";
import eventsData from "../events.json";

const Events = () => {
  const [events, setEvents] = useState(eventsData);
  const [showAlert, setShowAlert] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    console.log("Component Mounted");

    setTimeout(() => {
      setShowWelcome(true);

      setTimeout(() => {
        setShowWelcome(false);
      }, 3000);
    }, 0);
  }, []);

  useEffect(() => {
    console.log("Events Updated");
  }, [events]);

  const buyEvent = (id) => {
    const updatedEvents = events.map((event) => {
      if (event.id === id && event.nbTickets > 0) {
        return {
          ...event,
          nbParticipants: event.nbParticipants + 1,
          nbTickets: event.nbTickets - 1,
        };
      }
      return event;
    });

    setEvents(updatedEvents);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const toggleLike = (id) => {
    const updatedEvents = events.map((event) => {
      if (event.id === id) {
        return {
          ...event,
          like: !event.like,
        };
      }
      return event;
    });

    setEvents(updatedEvents);
  };

  return (
    <Container className="mt-4">
      {showWelcome && (
        <Alert variant="success">
          Welcome to ESPRIT Events Platform 🎉
        </Alert>
      )}

      {showAlert && (
        <Alert variant="info">
          You have booked an event
        </Alert>
      )}

      <Row>
        {events.map((event) => (
          <Event
            key={event.id}
            event={event}
            buyEvent={buyEvent}
            toggleLike={toggleLike}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Events;
