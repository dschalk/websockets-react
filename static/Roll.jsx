'use strict'
export {Roll};
import React from 'react';

class Roll extends React.Component {
  constructor(props) {
    super(props);
  }

clickHandler () {
  ws.send("CA#$42,pass,Susan,6,6,12,20")
  this.props.rollDice();
}

doubleHandler () {
  this.props.rollDice();
}

  render () {
    console.log(this);
    return (
        <div
          style={{backgroundColor: '#000', color: '#d5f765', fontSize:"32",
            textAlign: "center", padding: 20, float: "left"}} onClick={this.clickHandler.bind(this)}
            onDoubleClick={this.doubleHandler.bind(this)}>

                  Roll

        </div>
    )}
  };
