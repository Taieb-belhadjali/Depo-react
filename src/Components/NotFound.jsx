import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <img
        src="/notfound.jfif"
        alt="Not Found"
        width="400"
      />
      <h2>404 - Page Not Found</h2>
    </Container>
  );
};

export default NotFound;
