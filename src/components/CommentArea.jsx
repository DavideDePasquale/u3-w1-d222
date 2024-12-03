import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = (props) => {
  const [reviews, setReviews] = useState([]);
  const getReview = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4Njg0ODA2ZmM4YzAwMTU2Yjg2ZTciLCJpYXQiOjE3MzI4MTY1NjEsImV4cCI6MTczNDAyNjE2MX0.F57Jji8XsC7Kn4idVyVuXxgoGrahg7-zgJDm0xHFvB0"
      }
    })
      .then((resp) => resp.json())
      .then((reviews) => {
        setReviews({ reviews });
      });
  };

  useEffect(() => {
    if (props.asin) {
      console.log("AAAAAA", getReview());
    } else {
      console.log("commenti non cambiati!!");
    }
  });

  return (
    <>
      <p>Sono COMMENT AREA</p>
      <CommentList reviews={reviews} />
      <AddComment asin={props.asin} />
    </>
  );
};
export default CommentArea;
