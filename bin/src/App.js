import logo from './logo.svg';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import React from 'react';

class App extends React.Component {
  state = {
    person: [
      {
        name: 'stephen',
        age: 12,
      },
      {
        name: 'segun',
        age: 14,
      },
    ],
  };

  switchNameHandler = (nam) => {
    this.setState({
      person: [
        {
          name: nam,
          age: 34,
        },
      ],
    });
  };

  render() {
    let styles = {
      backgroundColor: 'red',
      ':hover': {
        backgroundColor: 'blue',
      },
      '@media(max-width:450px)': {
        backgroundColor: 'green',
      },
    };
    return (
      <StyleRoot>
        <div>
          <div>{this.state.person[0].name}</div>

          <button
            style={styles}
            onClick={this.switchNameHandler.bind(this, 'akin')}
          >
            switch
          </button>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
