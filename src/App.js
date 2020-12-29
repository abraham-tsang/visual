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
        {ebitda: 250, debttoequityratio: 580, costs: 750, qualifiedmarketingtraffic: 730, debtratio: 540, customerlifetimevalue: 230,customerchurn: 830, z: 340},
        {ebitda: 990, debttoequityratio: 630, costs: 200, qualifiedmarketingtraffic: 400, debtratio: 230, customerlifetimevalue: 920,customerchurn: 800, z: 850},
        {ebitda: 800, debttoequityratio: 720, costs: 280, qualifiedmarketingtraffic: 70, debtratio: 230, customerlifetimevalue: 710,customerchurn: 80, z: 790},
        {ebitda: 160, debttoequityratio: 340, costs: 80, qualifiedmarketingtraffic: 670, debtratio: 880, customerlifetimevalue: 550,customerchurn: 300, z: 680},
        {ebitda: 180, debttoequityratio: 700, costs: 540, qualifiedmarketingtraffic: 310, debtratio: 460, customerlifetimevalue: 710,customerchurn: 870, z: 680},
      ],
      [
        {ebitda: 180, debttoequityratio: 700, costs: 350, qualifiedmarketingtraffic: 860, debtratio: 550, customerlifetimevalue: 900,customerchurn: 290, z: 360},
        {ebitda: 240, debttoequityratio: 870, costs: 130, qualifiedmarketingtraffic: 700, debtratio: 720, customerlifetimevalue: 490,customerchurn: 250, z: 130},
        {ebitda: 360, debttoequityratio: 670, costs: 580, qualifiedmarketingtraffic: 240, debtratio: 130, customerlifetimevalue: 190,customerchurn: 860, z: 570},
        {ebitda: 560, debttoequityratio: 1000, costs: 520, qualifiedmarketingtraffic: 580, debtratio: 120, customerlifetimevalue: 940,customerchurn: 820, z: 380},
        {ebitda: 310, debttoequityratio: 900, costs: 430, qualifiedmarketingtraffic: 250, debtratio: 570, customerlifetimevalue: 330,customerchurn: 50, z: 180},
      ],
      [
        {ebitda: 870, debttoequityratio: 510, costs: 890, qualifiedmarketingtraffic: 480, debtratio: 410, customerlifetimevalue: 770,customerchurn: 420, z: 730},
        {ebitda: 750, debttoequityratio: 360, costs: 640, qualifiedmarketingtraffic: 240, debtratio: 620, customerlifetimevalue: 920,customerchurn: 110, z: 300},
        {ebitda: 410, debttoequityratio: 140, costs: 620, qualifiedmarketingtraffic: 400, debtratio: 490, customerlifetimevalue: 580,customerchurn: 640, z: 670},
        {ebitda: 820, debttoequityratio: 390, costs: 190, qualifiedmarketingtraffic: 900, debtratio: 970, customerlifetimevalue: 210,customerchurn: 800, z: 650},
        {ebitda: 460, debttoequityratio: 140, costs: 450, qualifiedmarketingtraffic: 660, debtratio: 740, customerlifetimevalue: 260,customerchurn: 340, z: 820},
      ],
      [
        {ebitda: 670, debttoequityratio: 500, costs: 720, qualifiedmarketingtraffic: 560, debtratio: 200, customerlifetimevalue: 210,customerchurn: 810, z: 430},
        {ebitda: 470, debttoequityratio: 630, costs: 420, qualifiedmarketingtraffic: 910, debtratio: 880, customerlifetimevalue: 730,customerchurn: 180, z: 820},
        {ebitda: 10, debttoequityratio: 710, costs: 10, qualifiedmarketingtraffic: 890, debtratio: 440, customerlifetimevalue: 170,customerchurn: 500, z: 500},
        {ebitda: 530, debttoequityratio: 280, costs: 590, qualifiedmarketingtraffic: 460, debtratio: 650, customerlifetimevalue: 150,customerchurn: 990, z: 140},
        {ebitda: 790, debttoequityratio: 850, costs: 90, qualifiedmarketingtraffic: 590, debtratio: 620, customerlifetimevalue: 220,customerchurn: 180, z: 690},
      ],
      [
        {ebitda: 230, debttoequityratio: 610, costs: 830, qualifiedmarketingtraffic: 600, debtratio: 540, customerlifetimevalue: 610,customerchurn: 960, z: 430},
        {ebitda: 400, debttoequityratio: 570, costs: 490, qualifiedmarketingtraffic: 520, debtratio: 210, customerlifetimevalue: 140,customerchurn: 700, z: 160},
        {ebitda: 30, debttoequityratio: 760, costs: 470, qualifiedmarketingtraffic: 510, debtratio: 10, customerlifetimevalue: 560,customerchurn: 780, z: 90},
        {ebitda: 820, debttoequityratio: 560, costs: 210, qualifiedmarketingtraffic: 150, debtratio: 510, customerlifetimevalue: 200,customerchurn: 800, z: 160},
        {ebitda: 470, debttoequityratio: 720, costs: 970, qualifiedmarketingtraffic: 140, debtratio: 770, customerlifetimevalue: 550,customerchurn: 20, z: 460},
      ],
    ],
    [
      [
        {ebitda: 990, debttoequityratio: 830, costs: 900, qualifiedmarketingtraffic: 780, debtratio: 910, customerlifetimevalue: 240,customerchurn: 770, z: 340},
        {ebitda: 980, debttoequityratio: 450, costs: 110, qualifiedmarketingtraffic: 850, debtratio: 830, customerlifetimevalue: 1000,customerchurn: 250, z: 740},
        {ebitda: 80, debttoequityratio: 670, costs: 980, qualifiedmarketingtraffic: 20, debtratio: 870, customerlifetimevalue: 860,customerchurn: 620, z: 140},
        {ebitda: 530, debttoequityratio: 590, costs: 230, qualifiedmarketingtraffic: 930, debtratio: 500, customerlifetimevalue: 60,customerchurn: 770, z: 920},
        {ebitda: 730, debttoequityratio: 120, costs: 60, qualifiedmarketingtraffic: 830, debtratio: 90, customerlifetimevalue: 100,customerchurn: 120, z: 750},
      ],
      [
        {ebitda: 520, debttoequityratio: 980, costs: 400, qualifiedmarketingtraffic: 570, debtratio: 830, customerlifetimevalue: 60,customerchurn: 330, z: 210},
        {ebitda: 680, debttoequityratio: 240, costs: 810, qualifiedmarketingtraffic: 80, debtratio: 320, customerlifetimevalue: 960,customerchurn: 800, z: 350},
        {ebitda: 50, debttoequityratio: 920, costs: 210, qualifiedmarketingtraffic: 890, debtratio: 570, customerlifetimevalue: 350,customerchurn: 870, z: 960},
        {ebitda: 390, debttoequityratio: 980, costs: 560, qualifiedmarketingtraffic: 660, debtratio: 70, customerlifetimevalue: 200,customerchurn: 950, z: 340},
        {ebitda: 60, debttoequityratio: 100, costs: 640, qualifiedmarketingtraffic: 410, debtratio: 60, customerlifetimevalue: 370,customerchurn: 550, z: 440},
      ],
      [
        {ebitda: 320, debttoequityratio: 360, costs: 570, qualifiedmarketingtraffic: 830, debtratio: 150, customerlifetimevalue: 160,customerchurn: 220, z: 840},
        {ebitda: 670, debttoequityratio: 470, costs: 710, qualifiedmarketingtraffic: 860, debtratio: 990, customerlifetimevalue: 920,customerchurn: 580, z: 180},
        {ebitda: 970, debttoequityratio: 330, costs: 790, qualifiedmarketingtraffic: 190, debtratio: 650, customerlifetimevalue: 290,customerchurn: 210, z: 410},
        {ebitda: 310, debttoequityratio: 820, costs: 220, qualifiedmarketingtraffic: 950, debtratio: 550, customerlifetimevalue: 580,customerchurn: 930, z: 60},
        {ebitda: 910, debttoequityratio: 830, costs: 620, qualifiedmarketingtraffic: 90, debtratio: 770, customerlifetimevalue: 530,customerchurn: 600, z: 800},
      ],
      [
        {ebitda: 730, debttoequityratio: 180, costs: 30, qualifiedmarketingtraffic: 580, debtratio: 100, customerlifetimevalue: 540,customerchurn: 530, z: 530},
        {ebitda: 810, debttoequityratio: 240, costs: 190, qualifiedmarketingtraffic: 940, debtratio: 880, customerlifetimevalue: 560,customerchurn: 80, z: 180},
        {ebitda: 590, debttoequityratio: 360, costs: 560, qualifiedmarketingtraffic: 720, debtratio: 820, customerlifetimevalue: 170,customerchurn: 670, z: 310},
        {ebitda: 620, debttoequityratio: 500, costs: 980, qualifiedmarketingtraffic: 160, debtratio: 590, customerlifetimevalue: 270,customerchurn: 570, z: 180},
        {ebitda: 40, debttoequityratio: 790, costs: 680, qualifiedmarketingtraffic: 670, debtratio: 70, customerlifetimevalue: 90,customerchurn: 870, z: 850},
      ],
      [
        {ebitda: 160, debttoequityratio: 520, costs: 430, qualifiedmarketingtraffic: 820, debtratio: 240, customerlifetimevalue: 210,customerchurn: 930, z: 200},
        {ebitda: 580, debttoequityratio: 670, costs: 430, qualifiedmarketingtraffic: 60, debtratio: 90, customerlifetimevalue: 420,customerchurn: 620, z: 950},
        {ebitda: 590, debttoequityratio: 280, costs: 90, qualifiedmarketingtraffic: 160, debtratio: 620, customerlifetimevalue: 710,customerchurn: 550, z: 60},
        {ebitda: 910, debttoequityratio: 110, costs: 560, qualifiedmarketingtraffic: 300, debtratio: 890, customerlifetimevalue: 130,customerchurn: 40, z: 730},
        {ebitda: 950, debttoequityratio: 140, costs: 720, qualifiedmarketingtraffic: 270, debtratio: 800, customerlifetimevalue: 370,customerchurn: 580, z: 520},
      ],
    ],
  ],
  [
    [
      [
        {ebitda: 530, debttoequityratio: 890, costs: 780, qualifiedmarketingtraffic: 890, debtratio: 620, customerlifetimevalue: 970,customerchurn: 670, z: 510},
        {ebitda: 340, debttoequityratio: 870, costs: 790, qualifiedmarketingtraffic: 290, debtratio: 510, customerlifetimevalue: 100,customerchurn: 640, z: 20},
        {ebitda: 720, debttoequityratio: 440, costs: 260, qualifiedmarketingtraffic: 680, debtratio: 50, customerlifetimevalue: 30,customerchurn: 410, z: 150},
        {ebitda: 970, debttoequityratio: 20, costs: 710, qualifiedmarketingtraffic: 780, debtratio: 990, customerlifetimevalue: 120,customerchurn: 110, z: 900},
        {ebitda: 660, debttoequityratio: 210, costs: 50, qualifiedmarketingtraffic: 350, debtratio: 690, customerlifetimevalue: 620,customerchurn: 110, z: 380},
      ],
      [
        {ebitda: 190, debttoequityratio: 910, costs: 870, qualifiedmarketingtraffic: 170, debtratio: 470, customerlifetimevalue: 640,customerchurn: 310, z: 670},
        {ebitda: 220, debttoequityratio: 800, costs: 60, qualifiedmarketingtraffic: 550, debtratio: 460, customerlifetimevalue: 120,customerchurn: 480, z: 880},
        {ebitda: 250, debttoequityratio: 560, costs: 270, qualifiedmarketingtraffic: 390, debtratio: 240, customerlifetimevalue: 800,customerchurn: 120, z: 700},
        {ebitda: 10, debttoequityratio: 980, costs: 700, qualifiedmarketingtraffic: 900, debtratio: 590, customerlifetimevalue: 970,customerchurn: 690, z: 800},
        {ebitda: 320, debttoequityratio: 960, costs: 10, qualifiedmarketingtraffic: 820, debtratio: 120, customerlifetimevalue: 420,customerchurn: 700, z: 400},
      ],
      [
        {ebitda: 940, debttoequityratio: 960, costs: 180, qualifiedmarketingtraffic: 840, debtratio: 420, customerlifetimevalue: 170,customerchurn: 820, z: 760},
        {ebitda: 870, debttoequityratio: 420, costs: 770, qualifiedmarketingtraffic: 730, debtratio: 930, customerlifetimevalue: 90,customerchurn: 840, z: 190},
        {ebitda: 980, debttoequityratio: 30, costs: 850, qualifiedmarketingtraffic: 680, debtratio: 960, customerlifetimevalue: 100,customerchurn: 40, z: 770},
        {ebitda: 490, debttoequityratio: 20, costs: 500, qualifiedmarketingtraffic: 120, debtratio: 830, customerlifetimevalue: 630,customerchurn: 1000, z: 200},
        {ebitda: 860, debttoequityratio: 320, costs: 870, qualifiedmarketingtraffic: 20, debtratio: 950, customerlifetimevalue: 290,customerchurn: 980, z: 280},
      ],
      [
        {ebitda: 670, debttoequityratio: 950, costs: 380, qualifiedmarketingtraffic: 350, debtratio: 290, customerlifetimevalue: 140,customerchurn: 740, z: 230},
        {ebitda: 790, debttoequityratio: 180, costs: 150, qualifiedmarketingtraffic: 310, debtratio: 630, customerlifetimevalue: 730,customerchurn: 260, z: 570},
        {ebitda: 560, debttoequityratio: 640, costs: 770, qualifiedmarketingtraffic: 650, debtratio: 100, customerlifetimevalue: 210,customerchurn: 290, z: 580},
        {ebitda: 600, debttoequityratio: 810, costs: 520, qualifiedmarketingtraffic: 20, debtratio: 210, customerlifetimevalue: 30,customerchurn: 980, z: 140},
        {ebitda: 90, debttoequityratio: 570, costs: 60, qualifiedmarketingtraffic: 330, debtratio: 40, customerlifetimevalue: 140,customerchurn: 660, z: 410},
      ],
      [
        {ebitda: 500, debttoequityratio: 360, costs: 440, qualifiedmarketingtraffic: 750, debtratio: 630, customerlifetimevalue: 250,customerchurn: 390, z: 210},
        {ebitda: 850, debttoequityratio: 110, costs: 570, qualifiedmarketingtraffic: 740, debtratio: 670, customerlifetimevalue: 520,customerchurn: 640, z: 410},
        {ebitda: 900, debttoequityratio: 680, costs: 820, qualifiedmarketingtraffic: 210, debtratio: 100, customerlifetimevalue: 360,customerchurn: 90, z: 220},
        {ebitda: 980, debttoequityratio: 420, costs: 560, qualifiedmarketingtraffic: 170, debtratio: 410, customerlifetimevalue: 790,customerchurn: 550, z: 500},
        {ebitda: 930, debttoequityratio: 870, costs: 960, qualifiedmarketingtraffic: 540, debtratio: 640, customerlifetimevalue: 380,customerchurn: 960, z: 960},
      ],
    ],
    [
      [
        {ebitda: 100, debttoequityratio: 870, costs: 930, qualifiedmarketingtraffic: 210, debtratio: 930, customerlifetimevalue: 770,customerchurn: 160, z: 460},
        {ebitda: 260, debttoequityratio: 150, costs: 450, qualifiedmarketingtraffic: 760, debtratio: 160, customerlifetimevalue: 650,customerchurn: 250, z: 190},
        {ebitda: 380, debttoequityratio: 720, costs: 390, qualifiedmarketingtraffic: 160, debtratio: 520, customerlifetimevalue: 750,customerchurn: 340, z: 520},
        {ebitda: 640, debttoequityratio: 90, costs: 900, qualifiedmarketingtraffic: 450, debtratio: 600, customerlifetimevalue: 290,customerchurn: 250, z: 230},
        {ebitda: 800, debttoequityratio: 130, costs: 450, qualifiedmarketingtraffic: 680, debtratio: 530, customerlifetimevalue: 100,customerchurn: 670, z: 630},
      ],
      [
        {ebitda: 550, debttoequityratio: 730, costs: 540, qualifiedmarketingtraffic: 990, debtratio: 90, customerlifetimevalue: 790,customerchurn: 870, z: 20},
        {ebitda: 790, debttoequityratio: 530, costs: 740, qualifiedmarketingtraffic: 790, debtratio: 50, customerlifetimevalue: 690,customerchurn: 140, z: 740},
        {ebitda: 440, debttoequityratio: 220, costs: 510, qualifiedmarketingtraffic: 530, debtratio: 160, customerlifetimevalue: 60,customerchurn: 190, z: 240},
        {ebitda: 500, debttoequityratio: 790, costs: 60, qualifiedmarketingtraffic: 770, debtratio: 400, customerlifetimevalue: 640,customerchurn: 730, z: 680},
        {ebitda: 500, debttoequityratio: 900, costs: 560, qualifiedmarketingtraffic: 210, debtratio: 880, customerlifetimevalue: 600,customerchurn: 190, z: 940},
      ],
      [
        {ebitda: 900, debttoequityratio: 20, costs: 320, qualifiedmarketingtraffic: 750, debtratio: 130, customerlifetimevalue: 790,customerchurn: 40, z: 70},
        {ebitda: 590, debttoequityratio: 700, costs: 840, qualifiedmarketingtraffic: 760, debtratio: 540, customerlifetimevalue: 290,customerchurn: 10, z: 360},
        {ebitda: 670, debttoequityratio: 430, costs: 550, qualifiedmarketingtraffic: 660, debtratio: 230, customerlifetimevalue: 460,customerchurn: 480, z: 700},
        {ebitda: 760, debttoequityratio: 100, costs: 420, qualifiedmarketingtraffic: 180, debtratio: 790, customerlifetimevalue: 410,customerchurn: 280, z: 280},
        {ebitda: 270, debttoequityratio: 180, costs: 720, qualifiedmarketingtraffic: 960, debtratio: 120, customerlifetimevalue: 740,customerchurn: 790, z: 720},
      ],
      [
        {ebitda: 70, debttoequityratio: 890, costs: 270, qualifiedmarketingtraffic: 90, debtratio: 580, customerlifetimevalue: 550,customerchurn: 630, z: 350},
        {ebitda: 740, debttoequityratio: 10, costs: 480, qualifiedmarketingtraffic: 600, debtratio: 480, customerlifetimevalue: 580,customerchurn: 530, z: 550},
        {ebitda: 200, debttoequityratio: 500, costs: 300, qualifiedmarketingtraffic: 250, debtratio: 470, customerlifetimevalue: 120,customerchurn: 160, z: 510},
        {ebitda: 810, debttoequityratio: 950, costs: 120, qualifiedmarketingtraffic: 760, debtratio: 250, customerlifetimevalue: 820,customerchurn: 870, z: 610},
        {ebitda: 670, debttoequityratio: 190, costs: 830, qualifiedmarketingtraffic: 650, debtratio: 940, customerlifetimevalue: 510,customerchurn: 620, z: 600},
      ],
      [
        {ebitda: 70, debttoequityratio: 870, costs: 760, qualifiedmarketingtraffic: 920, debtratio: 940, customerlifetimevalue: 840,customerchurn: 430, z: 320},
        {ebitda: 740, debttoequityratio: 830, costs: 280, qualifiedmarketingtraffic: 960, debtratio: 730, customerlifetimevalue: 20,customerchurn: 300, z: 730},
        {ebitda: 210, debttoequityratio: 530, costs: 900, qualifiedmarketingtraffic: 120, debtratio: 840, customerlifetimevalue: 990,customerchurn: 550, z: 440},
        {ebitda: 800, debttoequityratio: 260, costs: 160, qualifiedmarketingtraffic: 660, debtratio: 490, customerlifetimevalue: 510,customerchurn: 340, z: 620},
        {ebitda: 590, debttoequityratio: 510, costs: 20, qualifiedmarketingtraffic: 320, debtratio: 520, customerlifetimevalue: 550,customerchurn: 990, z: 30},
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
