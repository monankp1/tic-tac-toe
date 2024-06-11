import React from "react";

class ClassComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            name: 'monank'
        };
    }

    changeColor = () => {
        this.setState({ color: 'blue' });
    }

    render() {
        return (
            <div>
                <h2>Hi, i am Monank and my fav color is {this.state.color}</h2>
                <button onClick={this.changeColor}>Change color</button>
            </div>
        )


    }
}
export default ClassComponents;