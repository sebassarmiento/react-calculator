import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: '',
      operation: false,
      currentNumber: 0
    }
  }

  componentDidMount(){
    document.body.onclick = this.handleClick.bind(this)
  }

  handleClick(e){
    if(e.target.getAttribute('name') === 'number'){
      this.setState({screen: this.state.screen + e.target.innerHTML, operation: false})
    }
    if(e.target.getAttribute('name') === 'clear'){
      this.setState({screen: ''})
    }
    if(e.target.getAttribute('name') === 'operation' && !this.state.operation){
      this.setState({screen: this.state.screen + e.target.innerHTML, operation: true})
    }
    if(e.target.getAttribute('name') === 'calculate'){
      this.setState({screen: eval(this.state.screen)})
    }
    console.log(this.state.screen)
  }

  render() {
    return (
      <div className="main-container">
        <div className="screen" >
          {this.state.screen !== '' ? this.state.screen : 0}
        </div>
        <div className="board" >
            <div name="clear" className="btn ac" >AC</div>
            <div name="operation" className="btn" >/</div>
            <div name="operation" className="btn" >*</div>
            <div name="number" className="btn" >7</div>
            <div name="number" className="btn" >8</div>
            <div name="number" className="btn" >9</div>
            <div name="operation" className="btn" >-</div>
            <div name="number" className="btn" >4</div>
            <div name="number" className="btn" >5</div>
            <div name="number" className="btn" >6</div>
            <div name="operation" className="btn" >+</div>
            <div name="number" className="btn" >1</div>
            <div name="number" className="btn" >2</div>
            <div name="number" className="btn" >3</div>
            <div name="calculate" className="btn result" >=</div>
            <div name="number" className="btn zero" >0</div>
            <div name="operation" className="btn" >.</div>
        </div>
      </div>
    );
  }
}

export default App;
