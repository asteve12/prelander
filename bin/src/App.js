import logo from './logo.svg';
import style from './App.css';

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
    };
    return (
      <>
        <div>
          <div className={style.redder}>{this.state.person[0].name}</div>

          <button
            style={styles}
            onClick={this.switchNameHandler.bind(this, 'akin')}
          >
            switch
          </button>
        </div>
      </>
    );
  }
}

export default App;
