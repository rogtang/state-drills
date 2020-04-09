import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
      };
    
    state = {
        chamber: null,
        spinningTheChamber: false
      };

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    
    renderDisplay () {
        
        if (this.state.spinningTheChamber === true ) {
            return "spinning the chamber and pulling the trigger! ...."
        } else if (this.state.chamber === this.props.bulletInChamber) {
                return "BANG!!!!"
            } else {
                return "YOU\'RE SAFE!"
        }
    }
    
    handleClick = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
              })
            }, 2000)
    }

    render() {
        return (
            <div>
            <p>Hello, {this.renderDisplay()}</p>
            <button onClick={this.handleClick}>
            PULL THE TRIGGER
            </button>
            </div>
        )
    }
}


export default RouletteGun