import { Table } from 'react-bootstrap';

const EmployeeList = (props) => (
    <Table striped bordered hover>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>City</td>
            </tr>
        </thead>
        <tbody>
            {
                props.employees.map(employee => (
                    <tr>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.city}</td>
                    </tr>
                ))
            }
        </tbody>
    </Table>
);

export default EmployeeList;