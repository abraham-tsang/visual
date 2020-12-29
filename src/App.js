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
    this.continentSelect = this.continentSelect.bind(this);
    this.sectorSelect = this.sectorSelect.bind(this);
    this.allowDrop = this.allowDrop.bind(this);
    this.drag = this.drag.bind(this);
    this.drop = this.drop.bind(this);
  }

  continentSelect = () => {
    var data = document.getElementById("continents").value;
    console.log(data);
  }
  
  sectorSelect = () => {
    var data = document.getElementById("sectors").value;
    console.log(data);
  }

  allowDrop = (ev) => {
    ev.preventDefault();
  }

  drag = (ev) => {
    ev.dataTransfer.setData("Text", ev.target.id);
  }

  drop = (ev) => {
    var data = ev.dataTransfer.getData("Text");
    console.log(data);
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
        <select name="continents" id="continents" onChange={(event => this.continentSelect(event))}>
	  <option value="africa">Africa</option>
	  <option value="asia">Asia</option>
	</select>
        <select name="sectors" id="sectors" onChange={(event => this.sectorSelect(event))}>
	  <option value="fintech">Fintech</option>
	  <option value="agriculture">Agriculture</option>
	</select>
        <p id="ebitda" draggable="true" onDragStart={(event => this.drag(event))}>EBITDA</p>
        <p id="debttoequityratio" draggable="true" onDragStart={(event => this.drag(event))}>Debt-To-Equity Ratio</p>
        <p id="costs" draggable="true" onDragStart={(event => this.drag(event))}>Costs</p>
        <p id="qualifiedmarketingtraffic" draggable="true" onDragStart={(event => this.drag(event))}>Qualified Marketing Traffic</p>
        <p id="debtratio" draggable="true" onDragStart={(event => this.drag(event))}>Debt Ratio</p>
        <p id="customerlifetimevalue" draggable="true" onDragStart={(event => this.drag(event))}>Customer Lifetime Value</p>
        <p id="customerchurn" draggable="true" onDragStart={(event => this.drag(event))}>Customer Churn</p>
      </div>
    );
  }
}


export default App;
