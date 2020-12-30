import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';

function AlertDismissibleExample() {
    // const [show, setShow] = useState(false);

    const [isShow, setIsShow] = useState(false);
  
    if (isShow) {
      return (
        <Alert variant="danger" onClose={() => setIsShow(false)} dismissible>
          <Alert.Heading>
           Hello All
          </Alert.Heading>
          <p>
            Test for state management
          </p>
        </Alert>
      );
    }
    return (
      <Button variant="info" onClick={() => setIsShow(true)}>
        Show Custom Styled Alert
      </Button>
    );
}

export default AlertDismissibleExample;
