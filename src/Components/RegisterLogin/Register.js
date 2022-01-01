import React, {useState} from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';

const Register = () => {
    const [user, setUser]= useState({name:'', email:'',address:'', phone:'', area:'', age:'', vehicle:'', carName:'', carModel:'', carPalate:'', password:'', cpassword:''});

    const handleInputField=(e)=>{
        console.log(e.target.value);
        const field=e.target.name;
        const value=e.target.value;
        setUser({...user, [field]:value});
    }
    const submitForm=e=>{
      const userData={...user}
        e.preventDefault();
        const url= " https://intense-brook-70605.herokuapp.com/rider";
        axios.post(url, userData).then(res=>console.log(res.data));
    }
    return (
        <div>
         <h1>Welcome  for Registration</h1>
         <Form onSubmit={submitForm} className='w-50 mx-auto'>
          <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridEmail">
             <Form.Label>Full Name</Form.Label>
             <Form.Control 
             name='name'
             value={user.value}
             onBlur={handleInputField}
             type="text"
              placeholder="Full Name"
              />
           </Form.Group>
           <Form.Group as={Col} controlId="formGridEmail">
             <Form.Label>Email</Form.Label>
             <Form.Control
              name='name'
              value={user.value}
              onBlur={handleInputField}
              type="email" 
              placeholder="Enter email" 
              />
           </Form.Group>
      </Row>

     <Form.Group className="mb-3" controlId="formGridAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control 
     name='name'
     value={user.value}
     onBlur={handleInputField}
    placeholder="1234 Main St" 
    />
  </Form.Group>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Phone</Form.Label>
      <Form.Control 
       name='name'
       value={user.value}
       onBlur={handleInputField}
      />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Area</Form.Label>
      <Form.Control 
       name='name'
       value={user.value}
       onBlur={handleInputField}
      />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Age</Form.Label>
      <Form.Control 
       name='name'
       value={user.value}
       onBlur={handleInputField}
      />
    </Form.Group>
  </Row>
  <Row className='mb-3'>
  <Form.Group as={Col} controlId="formFile">
    <Form.Label>Driving licence picture</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
  <Form.Group as={Col} controlId="formFile">
    <Form.Label>NID picture</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
  <Form.Group as={Col} controlId="formFile">
    <Form.Label>Profile picture</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
  </Row>
  <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Vehicle Type
      </Form.Label>
      <Col sm={10}>
        <Form.Check
         name='name'
         value={user.value}
         onBlur={handleInputField}
          type="radio"
          label="Car"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Bike"
          name='name'
          value={user.value}
          onBlur={handleInputField}
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <Row className="mb-3">
  <Form.Label>Car Information</Form.Label>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Car Name</Form.Label>
      <Form.Control 
       name='name'
       value={user.value}
       onBlur={handleInputField}
      />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Car Model</Form.Label>
      <Form.Control 
       name='name'
       value={user.value}
       onBlur={handleInputField}
      />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Car Palate</Form.Label>
      <Form.Control
       name='name'
       value={user.value}
       onBlur={handleInputField}
      />
    </Form.Group>
  </Row>
  <Row className="mb-3">
         <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control
          name='name'
          value={user.value}
          onBlur={handleInputField}
          type="password" 
          placeholder="Password" 
          />
        </Form.Group>
         <Form.Group as={Col} controlId="formGridPassword">
         <Form.Label>Confirm Password</Form.Label>
         <Form.Control
          name='name'
          value={user.value}
          onBlur={handleInputField}
          type="password"
           placeholder="Password"
            />
        </Form.Group>
      </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default Register;