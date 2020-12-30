import { Jumbotron, Container, Row} from 'react-bootstrap';
import AlertDismissibleExample from './alert';
import EmployeeList from './table';

const employees = [
  { id: 1, name: 'Durai', city:'Chennai' },
  { id: 2, name: 'Abul', city:'Trichy' },
  { id: 3, name: 'Anand', city:'Theni' },
  { id: 4, name: 'Kumaresan', city:'Karur' },
  { id: 5, name: 'Mani', city:'Madurai' },
  { id: 6, name: 'Sarathi', city:'Salem' },
];

const BootstrapSample = () => (
  <Container className="p-3">
    <Jumbotron className="pb-1">
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <h2 className="header">Using Sass with custom theming</h2>
      <AlertDismissibleExample />
      <hr />
      <p>
        You can check further in information on the official Bootstrap docs{' '}
        <a
          href="https://getbootstrap.com/docs/4.3/getting-started/theming/#importing"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </Jumbotron>
    <Row>
      <EmployeeList employees={employees} />
    </Row>
  </Container>
);


export default BootstrapSample;
