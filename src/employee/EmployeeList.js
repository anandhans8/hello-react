import { Table } from 'react-bootstrap';

const EmployeeList = (props) => (
    <Table striped bordered hover>
        <thead>
            <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>City</td>
            </tr>
        </thead>
        <tbody>
            {
                props.employees.map(employee => (
                    <tr>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.city}</td>
                    </tr>
                ))
            }
        </tbody>
    </Table>
);

export default EmployeeList;