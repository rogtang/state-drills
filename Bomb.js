import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = {
          count: 0,
        }
      }
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
          console.log('setInterval')
          this.setState({
            count: this.state.count + 1
          })
        }, 1000)
      }
    componentWillUnmount() {
        clearInterval(this.interval)
      }
    renderDisplay () {
        
        if (this.state.count >=8 ) {
            clearInterval(this.interval);
            return "Boom!"
        } else if (this.state.count % 2 === 0) {
                return "tick"
            } else {
                return "tock"
        }
    }
    render() {
        return (
            <div>
            <p>{this.renderDisplay()}</p>
            </div>
        )
    }
}

export default Bomb