import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import horror from "../books/horror.json";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";

import { Component } from "react";

class AllTheBook extends Component {
  state = {
    books: fantasy
  };
  render() {
    console.log("render");
    return (
      <Container>
        <div className="my-5 text-center">
          <Button
            className="mx-2 bg-success"
            onClick={() => this.setState({ books: horror })}
          >
            Horror
          </Button>
          <Button
            className="mx-2 text-bg-light"
            onClick={() => this.setState({ books: fantasy })}
          >
            Fantasy
          </Button>
          <Button
            className="mx-2 bg-danger"
            onClick={() => this.setState({ books: history })}
          >
            History
          </Button>
          <Button
            className="mx-2 text-bg-dark"
            onClick={() => this.setState({ books: scifi })}
          >
            Scifi
          </Button>
          <Button
            className="mx-2 bg-purple"
            onClick={() => this.setState({ books: romance })}
          >
            Romance
          </Button>
        </div>
        <Row xs={1} sm={1} md={2} lg={3} xl={4}>
          {this.state.books.map((book) => (
            <Col key={book.asin}>
              <Card bg="light">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price}€</Card.Text>
                  <Button variant="primary">{book.category}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBook;
