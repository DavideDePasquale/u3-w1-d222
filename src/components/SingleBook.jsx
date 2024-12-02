import { Component } from "react";
import { Card, Container } from "react-bootstrap";

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
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
export default SingleBook;
