import { Form, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

const EmployeeForm = ({saveEmployeeList}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');

    const firstNameOnChnage = (event) => {
        setFirstName(event.target.value);
    };

    const lastNameOnChnage = (event) => {
        setLastName(event.target.value);
    };

    const cityOnChnage = (event) => {
        setCity(event.target.value);
    };

    const saveEmployee = (event) => {
        event.preventDefault();
        const employee = { firstName, lastName, city };
        console.log('employee', employee);
        saveEmployeeList(employee);
        
    };

    return (
        <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="text" value={firstName} onChange={firstNameOnChnage} placeholder="Enter first name" />
              </Form.Group>
        
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={lastName} onChange={lastNameOnChnage} placeholder="Last Name" />
              </Form.Group>
            </Form.Row>
        
            <Form.Group controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" value={city} onChange={cityOnChnage} placeholder="City" />
            </Form.Group>
        
            <Button variant="primary" type="button" onClick={saveEmployee}>
              Save
            </Button>
        </Form>
    );
};

export default EmployeeForm;