import Form from "react-bootstrap/Form";
function MyFooter() {
  return (
    <>
      <Form className="d-column justify-content-center bg-white">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <div className="text-center pt-5">
            <h6>Come possiamo migliorare il servizio?</h6>
            <p>Aiutaci a migliorarlo inviandoci un tuo Feed</p>
          </div>

          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="RosarioMuniz@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Cosa possiamo migliorare?</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </>
  );
}

export default MyFooter;
