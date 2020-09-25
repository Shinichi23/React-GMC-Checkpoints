/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import { Button, Jumbotron} from 'react-bootstrap';



function App() {
  return (
    
    <div>
      <div> 
        <Jumbotron>
          <h1>Welcome, world!</h1>
          <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
         </p>
        </Jumbotron>
      </div>
    <div className='container'>
      <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="warning" type="submit">
    Submit
  </Button>
</Form>
</div>
</div>
  );
}

export default App;