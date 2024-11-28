import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    review: {
      comment: "",
      rate: "1",
      elementId: this.props.asin
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.review),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4Njg0ODA2ZmM4YzAwMTU2Yjg2ZTciLCJpYXQiOjE3MzI4MTY1NjEsImV4cCI6MTczNDAyNjE2MX0.F57Jji8XsC7Kn4idVyVuXxgoGrahg7-zgJDm0xHFvB0"
      }
    }).then((resp) => {
      if (resp.ok) {
        alert("commento inviato!!");
      }
    });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h6 className="mt-4">Aggiungi un commento</h6>
        <Form.Group
          className="mb-3"
          controlId="review-text"
          value={this.state.review.comment}
          onChange={(e) =>
            this.setState({
              review: { ...this.state.review, comment: e.target.value }
            })
          }
          required
        >
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="inserisci la tua rec" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="review-rating"
          value={this.state.review.rate}
          onChange={(e) =>
            this.setState({
              review: { ...this.state.review, rate: e.target.value }
            })
          }
          required
        >
          <Form.Label>Voto Libro</Form.Label>

          <Form.Select aria-label="Default select example">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
          </Form.Select>
        </Form.Group>
        <Button variant="success" type="submit">
          Invia Recensione
        </Button>
      </Form>
    );
  }
}
export default AddComment;
