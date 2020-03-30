import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function Task() {
  return (
    <div>
      <div className="tasktitle">  <ListGroup.Item  variant="danger">What needs to be done ?</ListGroup.Item></div>
      <div style={{ paddingTop: "2%" }}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Add Tasks"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button style={{ backgroundColor: "#313620" }} variant="outline-secondary">Add Task</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <ListGroup >
        <ListGroup.Item className="task"  action variant="secondary"> Secondary
        <span className="bouton"><Button variant="outline-primary">Edit</Button>{' '}<Button variant="outline-secondary">Delete</Button>{' '}</span>
        </ListGroup.Item>
        <ListGroup.Item className="task"  action variant="secondary"> Secondary
        <span className="bouton"><Button variant="outline-primary">Edit</Button>{' '}<Button variant="outline-secondary">Delete</Button>{' '}</span>
        </ListGroup.Item>
        <ListGroup.Item className="task"  action variant="secondary"> Secondary
        <span className="bouton"><Button variant="outline-primary">Edit</Button>{' '}<Button variant="outline-secondary">Delete</Button>{' '}</span>
        </ListGroup.Item>
        <ListGroup.Item className="task"  action variant="secondary"> Secondary
        <span className="bouton"><Button variant="outline-primary">Edit</Button>{' '}<Button variant="outline-secondary">Delete</Button>{' '}</span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Task;
