import { Col, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    FilterQuery: "",
    selectedAsin: ""
  };

  changeSelectedAsin = (newAsin) => {
    this.setState({ selectedAsin: newAsin });
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mb-3">
          <Col xs={4}>
            <Form.Control
              type="text"
              placeholder="cerca i tuoi libri"
              value={this.state.FilterQuery}
              onChange={(e) => this.setState({ FilterQuery: e.target.value })}
            />
          </Col>
        </Row>

        <Row>
          <Col md={9}>
            <Row>
              {this.props.books
                .filter((book) =>
                  book.title
                    .toLowerCase()
                    .includes(this.state.FilterQuery.toLowerCase())
                )
                .map((book) => (
                  <Col key={book.asin} sm={4} lg={4}>
                    <SingleBook
                      book={book}
                      changeSelectedAsin={this.changeSelectedAsin}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={3}>
            <CommentArea asin={this.state.selectedAsin} />
          </Col>
        </Row>
      </>
    );
  }
}
export default BookList;
