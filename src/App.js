import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ShoppingCart from './Shopping-Cart'
import TotalList from './TotalList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    return (
    <div className="App">    
      <Header/>
      <ShoppingCart features={this.props.features} updateFeature={this.updateFeature.bind(this)} selected= {this.state.selected} />
      <TotalList selected={this.state.selected}/>
    </div>
    );
  }
}

export default App;  
