import { Alert, Col, Row } from "react-bootstrap";

function Welcome() {
  return (
    <>
      <Alert variant="success" className="d-flex justify-content-center">
        Il sito si è caricato!!
      </Alert>
      <Row>
        <Col>
          <h1 className="h3 text-center">Acquista i nostri film</h1>
          <h2 className="h6 text-center">Prezzi davvero convenienti!!</h2>
        </Col>
      </Row>
    </>
  );
}
export default Welcome;
