// dependencies
import React from "react";

// components
import Hello from "./components/Hello";



class App extends React.Component {
  render() {
    return (
      <div >
        <Hello to= "Brandon" from="Jasmine" />
      </div>
    );
  }
 
}

export default App;
