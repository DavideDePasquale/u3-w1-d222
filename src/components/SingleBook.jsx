import { Component } from "react";
import { Card, Container } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false
  };
  render() {
    const { book } = this.props;
    return (
      <Container>
        <Card className={this.state.selected ? "border-danger" : ""}>
          <Card.Img
            variant="top"
            src={book.img}
            onClick={() =>
              this.setState({
                selected: !this.state.selected
              })
            }
          />

          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            {this.state.selected && <CommentArea asin={book.asin} />}
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
export default SingleBook;
