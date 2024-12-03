import { Col, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = ({ books }) => {
  const [FilterQuery, setFilterQuery] = useState("");
  const [selectedAsin, setSelectedAsin] = useState(null);

  const changeSelectedAsin = (newAsin) => {
    setSelectedAsin(newAsin);
  };

  return (
    <>
      <Row className="justify-content-center mb-3">
        <Col xs={4}>
          <Form.Control
            type="text"
            placeholder="cerca i tuoi libri"
            value={FilterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
          />
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Row>
            {books
              .filter((book) =>
                book.title.toLowerCase().includes(FilterQuery.toLowerCase())
              )
              .map((book) => (
                <Col key={book.asin} sm={4} lg={4}>
                  <SingleBook
                    book={book}
                    changeSelectedAsin={changeSelectedAsin}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={selectedAsin} />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
