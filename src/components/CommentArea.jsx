import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    reviews: []
  };
  getReview = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4Njg0ODA2ZmM4YzAwMTU2Yjg2ZTciLCJpYXQiOjE3MzI4MTY1NjEsImV4cCI6MTczNDAyNjE2MX0.F57Jji8XsC7Kn4idVyVuXxgoGrahg7-zgJDm0xHFvB0"
        }
      }
    )
      .then((resp) => resp.json())
      .then((reviews) => {
        this.setState({ reviews });
      });
  };

  componentDidMount() {
    this.getReview();
  }

  render() {
    return (
      <>
        <p>Sono COMMENT AREA</p>
        <CommentList reviews={this.state.reviews} />
      </>
    );
  }
}
export default CommentArea;
