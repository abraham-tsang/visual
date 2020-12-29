import React from 'react';

import {ScatterChart, XAxis, YAxis, ZAxis, Scatter, CartesianGrid, Tooltip} from 'recharts';

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

const data = 
[
  [
    [
      [
        {ebitda: 250, debttoequityratio: 580, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 340},
        {ebitda: 990, debttoequityratio: 630, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 850},
        {ebitda: 800, debttoequityratio: 720, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 790},
        {ebitda: 160, debttoequityratio: 340, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 680},
        {ebitda: 180, debttoequityratio: 700, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 680},
      ],
      [
        {ebitda: 180, debttoequityratio: 700, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 360},
        {ebitda: 240, debttoequityratio: 870, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 130},
        {ebitda: 360, debttoequityratio: 670, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 570},
        {ebitda: 560, debttoequityratio: 1000, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 380},
        {ebitda: 310, debttoequityratio: 900, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 180},
      ],
      [
        {ebitda: 870, debttoequityratio: 510, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 730},
        {ebitda: 750, debttoequityratio: 360, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 300},
        {ebitda: 410, debttoequityratio: 140, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 670},
        {ebitda: 820, debttoequityratio: 390, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 650},
        {ebitda: 460, debttoequityratio: 140, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 820},
      ],
      [
        {ebitda: 670, debttoequityratio: 500, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 430},
        {ebitda: 470, debttoequityratio: 630, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 820},
        {ebitda: 10, debttoequityratio: 710, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 500},
        {ebitda: 530, debttoequityratio: 280, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 140},
        {ebitda: 790, debttoequityratio: 850, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 690},
      ],
      [
        {ebitda: 230, debttoequityratio: 610, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 430},
        {ebitda: 400, debttoequityratio: 570, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 160},
        {ebitda: 30, debttoequityratio: 760, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 90},
        {ebitda: 820, debttoequityratio: 560, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 160},
        {ebitda: 470, debttoequityratio: 720, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 460},
      ],
    ],
    [
      [
        {ebitda: 990, debttoequityratio: 830, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 340},
        {ebitda: 980, debttoequityratio: 450, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 740},
        {ebitda: 80, debttoequityratio: 670, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 140},
        {ebitda: 530, debttoequityratio: 590, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 920},
        {ebitda: 730, debttoequityratio: 120, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 750},
      ],
      [
        {ebitda: 520, debttoequityratio: 980, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 210},
        {ebitda: 680, debttoequityratio: 240, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 350},
        {ebitda: 50, debttoequityratio: 920, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 960},
        {ebitda: 390, debttoequityratio: 980, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 340},
        {ebitda: 60, debttoequityratio: 100, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 440},
      ],
      [
        {ebitda: 320, debttoequityratio: 360, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 840},
        {ebitda: 670, debttoequityratio: 470, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 180},
        {ebitda: 970, debttoequityratio: 330, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 410},
        {ebitda: 310, debttoequityratio: 820, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 60},
        {ebitda: 910, debttoequityratio: 830, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 800},
      ],
      [
        {ebitda: 730, debttoequityratio: 180, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 530},
        {ebitda: 810, debttoequityratio: 240, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 180},
        {ebitda: 590, debttoequityratio: 360, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 310},
        {ebitda: 620, debttoequityratio: 500, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 180},
        {ebitda: 40, debttoequityratio: 790, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 850},
      ],
      [
        {ebitda: 160, debttoequityratio: 520, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 200},
        {ebitda: 580, debttoequityratio: 670, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 950},
        {ebitda: 590, debttoequityratio: 280, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 60},
        {ebitda: 910, debttoequityratio: 110, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 730},
        {ebitda: 950, debttoequityratio: 140, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 520},
      ],
    ],
  ],
  [
    [
      [
        {ebitda: 530, debttoequityratio: 890, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 510},
        {ebitda: 340, debttoequityratio: 870, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 20},
        {ebitda: 720, debttoequityratio: 440, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 150},
        {ebitda: 970, debttoequityratio: 20, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 900},
        {ebitda: 660, debttoequityratio: 210, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 380},
      ],
      [
        {ebitda: 190, debttoequityratio: 910, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 670},
        {ebitda: 220, debttoequityratio: 800, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 880},
        {ebitda: 250, debttoequityratio: 560, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 700},
        {ebitda: 10, debttoequityratio: 980, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 800},
        {ebitda: 320, debttoequityratio: 960, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 400},
      ],
      [
        {ebitda: 940, debttoequityratio: 960, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 760},
        {ebitda: 870, debttoequityratio: 420, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 190},
        {ebitda: 980, debttoequityratio: 30, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 770},
        {ebitda: 490, debttoequityratio: 20, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 200},
        {ebitda: 860, debttoequityratio: 320, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 280},
      ],
      [
        {ebitda: 670, debttoequityratio: 950, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 230},
        {ebitda: 790, debttoequityratio: 180, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 570},
        {ebitda: 560, debttoequityratio: 640, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 580},
        {ebitda: 600, debttoequityratio: 810, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 140},
        {ebitda: 90, debttoequityratio: 570, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 410},
      ],
      [
        {ebitda: 500, debttoequityratio: 360, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 210},
        {ebitda: 850, debttoequityratio: 110, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 410},
        {ebitda: 900, debttoequityratio: 680, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 220},
        {ebitda: 980, debttoequityratio: 420, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 500},
        {ebitda: 930, debttoequityratio: 870, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 960},
      ],
    ],
    [
      [
        {ebitda: 100, debttoequityratio: 870, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 460},
        {ebitda: 260, debttoequityratio: 150, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 190},
        {ebitda: 380, debttoequityratio: 720, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 520},
        {ebitda: 640, debttoequityratio: 90, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 230},
        {ebitda: 800, debttoequityratio: 130, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 630},
      ],
      [
        {ebitda: 550, debttoequityratio: 730, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 20},
        {ebitda: 790, debttoequityratio: 530, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 740},
        {ebitda: 440, debttoequityratio: 220, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 240},
        {ebitda: 500, debttoequityratio: 790, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 680},
        {ebitda: 500, debttoequityratio: 900, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 940},
      ],
      [
        {ebitda: 900, debttoequityratio: 20, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 70},
        {ebitda: 590, debttoequityratio: 700, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 360},
        {ebitda: 670, debttoequityratio: 430, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 700},
        {ebitda: 760, debttoequityratio: 100, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 280},
        {ebitda: 270, debttoequityratio: 180, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 720},
      ],
      [
        {ebitda: 70, debttoequityratio: 890, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 350},
        {ebitda: 740, debttoequityratio: 10, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 550},
        {ebitda: 200, debttoequityratio: 500, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 510},
        {ebitda: 810, debttoequityratio: 950, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 610},
        {ebitda: 670, debttoequityratio: 190, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 600},
      ],
      [
        {ebitda: 70, debttoequityratio: 870, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 320},
        {ebitda: 740, debttoequityratio: 830, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 730},
        {ebitda: 210, debttoequityratio: 530, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 440},
        {ebitda: 800, debttoequityratio: 260, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 620},
        {ebitda: 590, debttoequityratio: 510, costs: 0, qualifiedmarketingtraffic: 0, debtratio: 0, customerlifetimevalue: 0,customerchurn: 0, z: 30},
      ],
    ],
  ],
];

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      x: 0,
      y: 0,
      shownData: data[0][0],
    }
    this.continentSelect = this.continentSelect.bind(this);
    this.sectorSelect = this.sectorSelect.bind(this);
    this.allowDrop = this.allowDrop.bind(this);
    this.drag = this.drag.bind(this);
    this.drop = this.drop.bind(this);
  }

  continentSelect = () => {
    var continent = document.getElementById("continents").value;
    var shownData;
    var x;
    var y = this.state.y;
    if(continent === "africa"){
      x = 0;
    }
    else if(continent === "asia"){
      x = 1;
    }
    shownData = data[x][y];
	 console.log(shownData);
    this.setState({x: x, shownData: shownData});
  }
  
  sectorSelect = () => {
    var sector = document.getElementById("sectors").value;
    var shownData;
    var x = this.state.x;
    var y;
    if(sector === "fintech"){
      y = 0;
    }
    else if(sector === "agriculture"){
      y = 1;
    }
    shownData = data[x][y];
    console.log(shownData);
    this.setState({y: y, shownData: shownData});
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
            <XAxis type="number" dataKey="ebitda" />
            <YAxis type="number" dataKey="debttoequityratio" />
            <ZAxis type="number" dataKey="z" range={[16, 400]} />
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="data" data={this.state.shownData[0]} fill="#cd5c5c"/>
            <Scatter name="data" data={this.state.shownData[1]} fill="#ff8c00"/>
            <Scatter name="data" data={this.state.shownData[2]} fill="#f0e68c"/>
            <Scatter name="data" data={this.state.shownData[3]} fill="#90ee90"/>
            <Scatter name="data" data={this.state.shownData[4]} fill="#4169e1"/>
          </ScatterChart>
        </div>
	<div>
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
      </div>
    );
  }
}


export default App;
