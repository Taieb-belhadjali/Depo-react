import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { getallEvents, editEvent } from '../service/api';
import { eventSchema } from '../schemas/eventSchema';

export function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    image: '',
    price: 0,
    nbTickets: 0,
    nbParticipants: 0,
    like: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(true);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getallEvents(id);
        setEventData(response.data);
      } catch (error) {
        console.error('Error fetching event:', error);
        setError('Failed to load event details');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseFloat(value) : value
    }));
    // Clear validation error when field is modified
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setValidationErrors({});

    try {
      // Validate form data
      eventSchema.parse(eventData);
      
      await editEvent(id, eventData);
      setSuccess('Event updated successfully!');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      if (error.name === 'ZodError') {
        // Handle validation errors
        const errors = {};
        error.issues.forEach(issue => {
          errors[issue.path[0]] = issue.message;
        });
        setValidationErrors(errors);
      } else {
        // Handle API errors
        console.error('Error updating event:', error);
        setError('Failed to update event. Please try again.');
      }
    }
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <p>Loading event details...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">Update Event</h1>

      {error && (
        <Alert variant="danger" className="mb-4">
          {error}
        </Alert>
      )}

      {success && (
        <Alert variant="success" className="mb-4">
          {success}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleChange}
            isInvalid={!!validationErrors.name}
          />
          {validationErrors.name && (
            <Form.Control.Feedback type="invalid">
              {validationErrors.name}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={eventData.description}
            onChange={handleChange}
            isInvalid={!!validationErrors.description}
          />
          {validationErrors.description && (
            <Form.Control.Feedback type="invalid">
              {validationErrors.description}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={eventData.image}
            onChange={handleChange}
            isInvalid={!!validationErrors.image}
          />
          {validationErrors.image && (
            <Form.Control.Feedback type="invalid">
              {validationErrors.image}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price (TND)</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={eventData.price}
            onChange={handleChange}
            min="0"
            isInvalid={!!validationErrors.price}
          />
          {validationErrors.price && (
            <Form.Control.Feedback type="invalid">
              {validationErrors.price}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Available Tickets</Form.Label>
          <Form.Control
            type="number"
            name="nbTickets"
            value={eventData.nbTickets}
            onChange={handleChange}
            min="0"
            isInvalid={!!validationErrors.nbTickets}
          />
          {validationErrors.nbTickets && (
            <Form.Control.Feedback type="invalid">
              {validationErrors.nbTickets}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Participants</Form.Label>
          <Form.Control
            type="number"
            name="nbParticipants"
            value={eventData.nbParticipants}
            onChange={handleChange}
            min="0"
            isInvalid={!!validationErrors.nbParticipants}
          />
          {validationErrors.nbParticipants && (
            <Form.Control.Feedback type="invalid">
              {validationErrors.nbParticipants}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <div className="d-flex gap-2">
          <Button variant="primary" type="submit">
            Update Event
          </Button>
          <Button variant="secondary" onClick={() => navigate('/')}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default UpdateEvent;