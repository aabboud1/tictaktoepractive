import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Game from './Component/Game';

class index extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default index;

  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );