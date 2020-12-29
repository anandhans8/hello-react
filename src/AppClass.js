
const employeeName = 'Durai'; // camel case => variable and function names
const EmployeeName = 'Durai'; // pascal case => File, Class and component names

import React from 'react';

class App extends React.Component {

  // const getDate = () => new Date().toString();

  constructor(props) {
    super(props);
  }
   
  // getDate = () => {
  //   return new Date().toString();
  // }

  render() {
    // const getDate = new Date().toString();
    return (
      <div>
        <h1>Hello world!</h1>
        <p>{`Today date is : ${new Date().toString()}`}</p>
      </div>
    )
  }
}

export default App;