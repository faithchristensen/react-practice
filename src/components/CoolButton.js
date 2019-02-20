import React, { Component } from 'react';

class CoolButton extends Component {

  render() {
    return (
        <button
            style={{
                backgroundColor: this.props.backgroundColor,
                borderRadius: '50%',
                width: 200,
                height: 200,
                marginTop: 25,
                color: this.props.color,
                fontSize: 40,
                outline: 'none'
            }}
            onClick={this.props.onClick}
        >
            {this.props.children}
        </button>
    )
  }
}

export default CoolButton
