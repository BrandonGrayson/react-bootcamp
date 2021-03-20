import React from "react";

class Hello extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Hello </h1>
            </div>
        )
        
    }
};

export default Hello;


