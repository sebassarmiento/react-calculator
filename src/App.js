import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 0
    }
  }

  componentDidMount(){
    document.body.onclick = this.handleClick.bind(this)
  }

  handleClick(e){
    if(e.target.getAttribute('name') === 'number'){
      this.setState({screen: (this.state.screen * 10) + parseFloat(e.target.innerHTML)})
    }
    if(e.target.getAttribute('name') === 'clear'){
      this.setState({screen: 0})
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="screen" >
          {this.state.screen}
        </div>
        <div className="board" >
            <div name="clear" className="btn ac" >AC</div>
            <div className="btn" >/</div>
            <div className="btn" >X</div>
            <div name="number" className="btn" >7</div>
            <div name="number" className="btn" >8</div>
            <div name="number" className="btn" >9</div>
            <div className="btn" >-</div>
            <div name="number" className="btn" >4</div>
            <div name="number" className="btn" >5</div>
            <div name="number" className="btn" >6</div>
            <div className="btn" >+</div>
            <div name="number" className="btn" >1</div>
            <div name="number" className="btn" >2</div>
            <div name="number" className="btn" >3</div>
            <div className="btn result" >=</div>
            <div name="number" className="btn zero" >0</div>
            <div className="btn" >.</div>
        </div>
      </div>
    );
  }
}

export default App;
