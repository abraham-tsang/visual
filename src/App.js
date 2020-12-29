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
        {x: 250, y: 580, z: 340},
        {x: 990, y: 630, z: 850},
        {x: 800, y: 720, z: 790},
        {x: 160, y: 340, z: 680},
        {x: 180, y: 700, z: 680},
      ],
      [
        {x: 180, y: 700, z: 360},
        {x: 240, y: 870, z: 130},
        {x: 360, y: 670, z: 570},
        {x: 560, y: 1000, z: 380},
        {x: 310, y: 900, z: 180},
      ],
      [
        {x: 870, y: 510, z: 730},
        {x: 750, y: 360, z: 300},
        {x: 410, y: 140, z: 670},
        {x: 820, y: 390, z: 650},
        {x: 460, y: 140, z: 820},
      ],
      [
        {x: 670, y: 500, z: 430},
        {x: 470, y: 630, z: 820},
        {x: 10, y: 710, z: 500},
        {x: 530, y: 280, z: 140},
        {x: 790, y: 850, z: 690},
      ],
      [
        {x: 230, y: 610, z: 430},
        {x: 400, y: 570, z: 160},
        {x: 30, y: 760, z: 90},
        {x: 820, y: 560, z: 160},
        {x: 470, y: 720, z: 460},
      ],
    ],
    [
      [
        {x: 990, y: 830, z: 340},
        {x: 980, y: 450, z: 740},
        {x: 80, y: 670, z: 140},
        {x: 530, y: 590, z: 920},
        {x: 730, y: 120, z: 750},
      ],
      [
        {x: 520, y: 980, z: 210},
        {x: 680, y: 240, z: 350},
        {x: 50, y: 920, z: 960},
        {x: 390, y: 980, z: 340},
        {x: 60, y: 100, z: 440},
      ],
      [
        {x: 320, y: 360, z: 840},
        {x: 670, y: 470, z: 180},
        {x: 970, y: 330, z: 410},
        {x: 310, y: 820, z: 60},
        {x: 910, y: 830, z: 800},
      ],
      [
        {x: 730, y: 180, z: 530},
        {x: 810, y: 240, z: 180},
        {x: 590, y: 360, z: 310},
        {x: 620, y: 500, z: 180},
        {x: 40, y: 790, z: 850},
      ],
      [
        {x: 160, y: 520, z: 200},
        {x: 580, y: 670, z: 950},
        {x: 590, y: 280, z: 60},
        {x: 910, y: 110, z: 730},
        {x: 950, y: 140, z: 520},
      ],
    ],
  ],
  [
    [
      [
        {x: 530, y: 890, z: 510},
        {x: 340, y: 870, z: 20},
        {x: 720, y: 440, z: 150},
        {x: 970, y: 20, z: 900},
        {x: 660, y: 210, z: 380},
      ],
      [
        {x: 190, y: 910, z: 670},
        {x: 220, y: 800, z: 880},
        {x: 250, y: 560, z: 700},
        {x: 10, y: 980, z: 800},
        {x: 320, y: 960, z: 400},
      ],
      [
        {x: 940, y: 960, z: 760},
        {x: 870, y: 420, z: 190},
        {x: 980, y: 30, z: 770},
        {x: 490, y: 20, z: 200},
        {x: 860, y: 320, z: 280},
      ],
      [
        {x: 670, y: 950, z: 230},
        {x: 790, y: 180, z: 570},
        {x: 560, y: 640, z: 580},
        {x: 600, y: 810, z: 140},
        {x: 90, y: 570, z: 410},
      ],
      [
        {x: 500, y: 360, z: 210},
        {x: 850, y: 110, z: 410},
        {x: 900, y: 680, z: 220},
        {x: 980, y: 420, z: 500},
        {x: 930, y: 870, z: 960},
      ],
    ],
    [
      [
        {x: 100, y: 870, z: 460},
        {x: 260, y: 150, z: 190},
        {x: 380, y: 720, z: 520},
        {x: 640, y: 90, z: 230},
        {x: 800, y: 130, z: 630},
      ],
      [
        {x: 550, y: 730, z: 20},
        {x: 790, y: 530, z: 740},
        {x: 440, y: 220, z: 240},
        {x: 500, y: 790, z: 680},
        {x: 500, y: 900, z: 940},
      ],
      [
        {x: 900, y: 20, z: 70},
        {x: 590, y: 700, z: 360},
        {x: 670, y: 430, z: 700},
        {x: 760, y: 100, z: 280},
        {x: 270, y: 180, z: 720},
      ],
      [
        {x: 70, y: 890, z: 350},
        {x: 740, y: 10, z: 550},
        {x: 200, y: 500, z: 510},
        {x: 810, y: 950, z: 610},
        {x: 670, y: 190, z: 600},
      ],
      [
        {x: 70, y: 870, z: 320},
        {x: 740, y: 830, z: 730},
        {x: 210, y: 530, z: 440},
        {x: 800, y: 260, z: 620},
        {x: 590, y: 510, z: 30},
      ],
    ],
  ],
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
            <Scatter name="data" data={data} fill="#8884d8"/>
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
