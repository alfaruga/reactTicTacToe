import React from 'react';
import classes from './Square.module.css'

class Square extends React.Component {
    render() {
        let hide = '';
        let text = '';
        if (this.props.symbol !== '') {
            hide = 'AvoidClicks'
            text = this.props.symbol === 1 ? 'O' : 'X'
        }


        return (
            <span onClick={this.props.play}
                id={this.props.id}
                symbol={this.props.symbol}
                className={[classes.Square, classes[hide]].join(' ')}
            >{text}</span>
        )
    }
}

export default Square;