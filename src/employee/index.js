import React, { useState } from 'react';
import { Jumbotron, Container, Row} from 'react-bootstrap';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';

const Employee = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const saveEmployeeList = (employee) => {
    setEmployeeList([...employeeList, employee]);
  };
  return (
      <Container className="p-3">
        <Jumbotron className="pb-1">
          <h1 className="header">Employee List</h1>
          <hr />
        </Jumbotron>
        <EmployeeForm saveEmployeeList={saveEmployeeList} />
        <br />
        <Row>
          <EmployeeList employees={employeeList} />
        </Row>
      </Container>
  );
}

export default Employee;
