import React from 'react';

import {ScatterChart, XAxis, YAxis, ZAxis, Scatter, CartesianGrid, Tooltip, Legend} from 'recharts';

import logo from './logo.svg';
import './App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

const africadata = [
 {x: 50, y: 300, z: 200},
 {x: 20, y: 150, z: 150},
 {x: 40, y: 450, z: 320},
 {x: 30, y: 650, z: 330},
 {x: 10, y: 350, z: 130},
];

class App extends React.Component{

  constructor(props){
    super(props);
    this.allowDrop = this.allowDrop.bind(this);
    this.drag = this.drag.bind(this);
    this.drop = this.drop.bind(this);
  }

  allowDrop = (ev) => {
    ev.preventDefault();
  }

  drag = (ev) => {
    ev.dataTransfer.setData("Text", ev.target.id);
  }

  drop = (ev) => {
    var data = ev.dataTransfer.getData("Text");
    console.log("abc");
    ev.preventDefault();
  }

  render(){
    return(
      <div>
        <div onDrop={(event => this.drop(event))} onDragOver={(event => this.allowDrop(event))}>
	  <ScatterChart width={730} height={250} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <XAxis type="number" dataKey="x" />
            <YAxis type="number" dataKey="y" />
            <ZAxis type="number" dataKey="z" range={[60, 400]} />
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="data" data={africadata} fill="#8884d8"/>
          </ScatterChart>
        </div>
        <select name="continents" id="continents">
	  <option value="africa">Africa</option>
	  <option value="asia">Asia</option>
	</select>
        <select name="sectors" id="sectors">
	  <option value="fintech">Fintech</option>
	  <option value="agriculture">Agriculture</option>
	</select>
        <p draggable="true" onDragStart={(event => this.drag(event))}>EBITDA</p>
        <p draggable="true" onDragStart={(event => this.drag(event))}>Debt-To-Equity Ratio</p>
        <p draggable="true" onDragStart={(event => this.drag(event))}>Costs</p>
        <p draggable="true" onDragStart={(event => this.drag(event))}>Qualified Marketing Traffic</p>
        <p draggable="true" onDragStart={(event => this.drag(event))}>Debt Ratio</p>
        <p draggable="true" onDragStart={(event => this.drag(event))}>Customer Lifetime Value</p>
        <p draggable="true" onDragStart={(event => this.drag(event))}>Customer Churn</p>
      </div>
    );
  }
}


export default App;
