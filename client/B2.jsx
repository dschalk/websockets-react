'use strict'
import mobservable from 'mobservable';
import React from 'react';
import {render} from 'react-dom';
var Monad = require('reactive-monads').Monad;
var MonadObject = require('reactive-monads').MonadObject;
var MonadArray = require('reactive-monads').MonadArray;
import {observer} from 'mobservable-react';
export {B2};

let count = 0;


function createWebSocket(path) {
    let host = window.location.hostname;
    if(host == '') host = 'localhost';
    let uri = 'ws://' + host + ':3015' + path;

    let Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;
    return new Socket(uri);
}

const DES_ws = createWebSocket('/');

class GroupNew extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEnter (event) {
    let group = event.target.value;
    if (group == '') {
      return
    } else {
      if( event.keyCode == 13 ) {
        this.props.setGroup(group);
      }
    }
  }
  click (event) {
    let group = event.target.value;
    if (group == '') {
        return
    } else {
      this.props.setGroup(group);
    }
  }
  render = () => {
    if ((this.props.hidden2)) { return ( null ) }
    return (
      <div style={{marginLeft: 5}} >
        <label>Player defined group name:  <input type="text" id='cow' onKeyDown={this.handleEnter.bind(this)}
          onClick={this.click.bind(this)} style={{width: 90, backgroundColor: '#d8d17d', marginLeft: 10}} />
        </label>
      </div>
    );
  }
};

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEnter (event) {
    let message = event.target.value;
    if ( event.keyCode == 13 && message != '') {
      this.props.changeMessage(message);
      event.target.value = '';
    }
  }
  click (event) {
    let message = event.target.value;
    if (message != '') {
      this.props.changeMessage(message);
      event.target.value = '';
    }
  }
  render = () => {
    return (
      <div style={{fontSize: 22}}>
        Message:
        <label>
          <input type="text" onKeyDown={this.handleEnter.bind(this)} onClick={this.click.bind(this)}
          style={{width: 230, backgroundColor: '#d8d17d'}} />
        </label>
      </div>
    );
  }
};

class Number1 extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.change(event.target.value);
  }

  handleEnter = (event) => {
    let s1 = event.target.value;
    if ( event.keyCode == 13 && s1 != '') {
      this.props.change(s1);
      event.target.value = '';
    }
  }
  click = (event) => {
    let s1 = event.target.value;
    if (s1 != '') {
      this.props.change(s1);
      event.target.value = '';
    }
  }
  render = () => {
    return (
          <input type="text" onKeyDown={this.handleEnter} onChange={this.handleChange} onClick={this.click}
            style={{paddingTop: 1.1, paddingBottom: 0.9, paddingLeft: 1, paddingRight: 1, color: '#ff0000', 
              fontSize: 22,  backgroundColor: '#d8d17d', marginLeft: 8, width: 25, textAlign: 'center' }} />
    );
  }
};

class Number2 extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.change(event.target.value);
  }

  handleEnter = (event) => {
    let s2 = event.target.value;
    if ( event.keyCode == 13 && s2 != '') {
      this.props.change(s2);
      event.target.value = '';
    }
  }
  click = (event) => {
    let s2 = event.target.value;
    if (s2 != '') {
      this.props.change(s2);
      event.target.value = '';
    }
  }
  render = () => {
    return (
          <input type="text" onKeyDown={this.handleEnter} onChange={this.handleChange} onClick={this.click}
            style={{paddingTop: 1.1, paddingBottom: 0.9, paddingLeft: 1, paddingRight: 1, color: '#ff0000', 
              fontSize: 22,  backgroundColor: '#d8d17d', marginLeft: 8, width: 25, textAlign: 'center' }} />
    );
  }
};

class Number3 extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.change(event.target.value);
  }

  handleEnter (event) {
    let s3 = event.target.value;
    if ( event.keyCode == 13 && s3 != '') {
      this.props.change(s3);
      event.target.value = '';
    }
  }
  click (event) {
    let s3 = event.target.value;
    if (s3 != '') {
      this.props.change(s3);
      event.target.value = '';
    }
  }
  render = () => {
    return (
          <input type="text" onKeyDown={this.handleEnter.bind(this)} onChange={this.handleChange} onClick={this.click.bind(this)}
            style={{paddingTop: 1.1, paddingBottom: 0.9, paddingLeft: 1, paddingRight: 1, color: '#ff0000', 
              fontSize: 22,  backgroundColor: '#d8d17d', marginLeft: 8, width: 25, textAlign: 'center' }} />
    );
  }
};

class Number4 extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (event) => {

    this.props.change(event.target.value);
  }

  handleEnter (event) {
    let s4 = event.target.value;
    if ( event.keyCode == 13 && s4 != '') {
      this.props.change(s4);
      event.target.value = '';
    }
  }
  click (event) {
    let s4 = event.target.value;
    if (s4 != '') {
      this.props.change(s4);
      event.target.value = '';
    }
  }
  render = () => {
    return (
          <input type="text" onKeyDown={this.handleEnter.bind(this)} onChange={this.handleChange} onClick={this.click.bind(this)}
            style={{paddingTop: 1.1, paddingBottom: 0.9, paddingLeft: 1, paddingRight: 1, color: '#ff0000', 
              fontSize: 22,  backgroundColor: '#d8d17d', marginLeft: 8, width: 25, textAlign: 'center' }} />
    );
  }
};

class Goal extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEnter (event) {
    let g = event.target.value;
    if ( event.keyCode == 13 && g != '') {
      this.props.change(g);
      event.target.value = '';
    }
  }
  click (event) {
    let g = event.target.value;
    if (g != '') {
      this.props.change(g);
      event.target.value = '';
    }
  }
  render = () => {
    return (
          <input type="text" onKeyDown={this.handleEnter.bind(this)} onClick={this.click.bind(this)}
            style={{paddingTop: 1.1, paddingBottom: 0.9, paddingLeft: 1, paddingRight: 1, color: '#ff0000', 
              fontSize: 22,  backgroundColor: '#d8d17d', marginLeft: 8, width: 25, textAlign: 'center' }} />
    );
  }
};

class Sides1 extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEnter (event) {
    let s1 = event.target.value;
    if ( event.keyCode == 13 && s1 != '') {
      this.props.change({sides1: s1});
      event.target.value = '';
    }
  }
  click (event) {
    let s1 = event.target.value;
    if (s1 != '') {
      this.props.change({sides1: s1});
      event.target.value = '';
    }
  }
  render = () => {
    return (
          <input type="text" onKeyDown={this.handleEnter.bind(this)} onClick={this.click.bind(this)}
            style={{paddingTop: 1.1, paddingBottom: 0.9, paddingLeft: 1, paddingRight: 1, color: '#ff0000', 
              fontSize: 22,  backgroundColor: '#d8d17d', marginLeft: 8, width: 25, textAlign: 'center' }} />
    );
  }
};

class Sides2 extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEnter (event) {
    let s2 = event.target.value;
    if ( event.keyCode == 13 && s2 != '') {
      this.props.change({sides2: s2});
      event.target.value = '';
    }
  }
  click (event) {
    let s2 = event.target.value;
    if (s2 != '') {
      this.props.change({sides2: s2});
      event.target.value = '';
    }
  }
  render = () => {
    return (
          <input type="text" onKeyDown={this.handleEnter.bind(this)} onClick={this.click.bind(this)}
            style={{paddingTop: 1.1, paddingBottom: 0.9, paddingLeft: 1, paddingRight: 1, color: '#ff0000', 
              fontSize: 22,  backgroundColor: '#d8d17d', marginLeft: 8, width: 25, textAlign: 'center' }} />
    );
  }
};

class Sides3 extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEnter (event) {
    let s3 = event.target.value;
    if ( event.keyCode == 13 && s3 != '') {
      this.props.change({sides3: s3});
      event.target.value = '';
    }
  }
  click (event) {
    let s3 = event.target.value;
    if (s3 != '') {
      this.props.change({sides3: s3});
      event.target.value = '';
    }
  }
  render = () => {
    return (
          <input type="text" onKeyDown={this.handleEnter.bind(this)} onClick={this.click.bind(this)}
            style={{paddingTop: 1.1, paddingBottom: 0.9, paddingLeft: 1, paddingRight: 1, color: '#ff0000', 
              fontSize: 22,  backgroundColor: '#d8d17d', marginLeft: 8, width: 25, textAlign: 'center' }} />
    );
  }
};

class Sides4 extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEnter (event) {
    let s4 = event.target.value;
    if ( event.keyCode == 13 && s4 != '') {
      this.props.change({sides4: s4});
      event.target.value = '';
    }
  }
  click (event) {
    let s4 = event.target.value;
    if (s4 != '') {
      this.props.change({sides4: s4});
      event.target.value = '';
    }
  }
  render = () => {
    return (
          <input type="text" onKeyDown={this.handleEnter.bind(this)} onClick={this.click.bind(this)}
            style={{paddingTop: 1.1, paddingBottom: 0.9, paddingLeft: 1, paddingRight: 1, color: '#ff0000', 
              fontSize: 22,  backgroundColor: '#d8d17d', marginLeft: 8, width: 25, textAlign: 'center' }} />
    );
  }
};

class SetGoal extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEnter (event) {
    let g = event.target.value;
    if ( event.keyCode == 13 && g != '') {
      this.props.change({goal: g});
      event.target.value = '';
    }
  }
  click (event) {
    let g = event.target.value;
    if (g != '') {
      this.props.change({goal: g});
      event.target.value = '';
    }
  }
  render = () => {
    return (
          <input type="text" onKeyDown={this.handleEnter.bind(this)} onClick={this.click.bind(this)}
            style={{paddingTop: 1.1, paddingBottom: 0.9, paddingLeft: 1, paddingRight: 1, color: '#ff0000', 
              fontSize: 22,  backgroundColor: '#d8d17d', marginLeft: 8, width: 25, textAlign: 'center' }} />
    );
  }
};

class ChangeCountdown extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    data.COUNTDOWN = event.target.value;
  }

  handleEnter = (event) => {
    let cd = event.target.value;
    if ( event.keyCode == 13 && cd != '') {
      data.COUNTDOWN = cd;
      event.target.value = '';
    }
  }
  click = (event) => {
    let cd = event.target.value;
    if (cd != '') {
      data.COUNTDOWN = cd;
      event.target.value = '';
    }
  }
  render = () => {
    return (
          <input type="text" onKeyDown={this.handleEnter} onChange={this.handleChange} onClick={this.click}
            style={{paddingTop: 1.1, paddingBottom: 0.9, paddingLeft: 1, paddingRight: 1, color: '#ff0000', 
              fontSize: 22,  backgroundColor: '#d8d17d', marginLeft: 8, width: 25, textAlign: 'center' }} />
    );
  }
};

class ChangeColor extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEnter (event) {
    let color = event.target.value;
    if ( event.keyCode == 13 && color != '') {
        this.props.changeC(color);
      }
    }
  click (event) {
    let color = event.target.value;
    if (color != '') {
      this.props.changeC(color);
    }
  }
  render = () => {
    return (
      <div style={{fontSize: 22}}>
        <label>
          <input type="text" onKeyDown={this.handleEnter.bind(this)} onClick={this.click.bind(this)}
          style={{width: 70, backgroundColor: '#d8d17d'}} />
          Font Color
        </label>
      </div>
    );
  }
};

class ChangeBackground extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEnter (event) {
    let color = event.target.value;
    if ( event.keyCode == 13 && color != '') {
        this.props.changeB(color);
      }
    }
  click (event) {
    let col = event.target.value;
    if (col != '') {
      this.props.changeC(col);
    }
  }
  render = () => {
    return (
      <div style={{fontSize: 22}}>
        <label>
          <input type="text" onKeyDown={this.handleEnter.bind(this)} onClick={this.click.bind(this)}
          style={{width: 70, backgroundColor: '#d8d17d'}} />
          Background Color
        </label>
      </div>
    );
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.change({name: event.target.value});
  }

  handleEnter = (event) => {
    mouseHandler.Sbackground = mouseHandler.rSbackground;
    mouseHandler.Sborder  = mouseHandler.rSborder;
    mouseHandler.Scolor = mouseHandler.rScolor;
    if (this.props.name == '') {
      this.props.change({
        info: ``
      })
    }
    else {
    let ENTER = 13;
      if( event.keyCode == ENTER ) {
        let name = this.props.name;
        this.props.change({
          hidden: true,
          hidden2: false,
          name: name,
          startDisplay: 'inline',
          });
        DES_ws.send('CC#$42'+name);
      }
    }
  }
  click = () => {
    if (this.props.name == '') {
      this.props.change({
        info: `Please enter a name.`
      });
    } else {
      let name = this.props.name;
      this.props.change({
        hidden: true,
        hidden2: false,
        name: name,
        startDisplay: 'inline',
        messageDisplay: 'inline'
        });
      DES_ws.send('CC#$42'+name);
    }
  }
  render = () => {
    if ((this.props.hidden)) { return ( null ) }
    let name = this.props.name;
    return (
      <div>
        <button onClick={this.click} style={{backgroundColor: '#d8d17d', color: '#f00'}} >
          Please enter a name:
        </button>
        <input autoFocus type="text" name={name} onChange={this.handleChange}
          style={{backgroundColor: '#d8d17d'}}
        onKeyDown={this.handleEnter} />
        {this.props.name}
      </div>
    );
  }
};

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (
        <button style={{fontSize: 17, marginLeft: 7, backgroundColor: '#2C2106', color: '#F8EDD2', 
          textAlign: 'left', borderColor: '#000', borderRadius: 12 }}>
                    {this.props.information}
        </button>
    );
  }
};

let mouseHandler = {
    Abackground: '#000',
    Aborder: 'green',
    Acolor: '#d5f765',
    Asize: 12,
    Bbackground: '#000',
    Bborder: 'green',
    Bcolor: '#d5f765',
    Bsize: 12,
    Cbackground: '#000',
    Cborder: 'green',
    Ccolor: '#d5f765',
    Csize: 12,
    Sbackground: '#000',
    Sborder: 'green',
    Scolor: '#d5f765',
    Ssize: 12,
    rSbackground: 'green',
    rSborder: 'lightgreen',
    rScolor: 'yellow',
    2100: 'gold',
    550: '#01afaf',
    55010: 'blue',
    5501: '#40E0D0',
    551: '#01afaf',
    55110: 'blue',
    5511: '#40E0D0',
    552: '#01afaf',
    55210: 'blue',
    5521: '#40E0D0',
    3: '#01afaf',
    310: 'blue',
    31: '#40E0D0',
    4: '#01afaf',
    410: 'blue',
    41: '#40E0D0',
    5: '#01afaf',
    510: 'blue',
    51: '#40E0D0',
    6: '#01afaf',
    610: 'blue',
    61: '#40E0D0',
    7: '#01afaf',
    710: 'blue',
    71: '#40E0D0',
    8: '#01afaf',
    810: 'blue',
    81: '#40E0D0',
    559: '#01afaf',
    55910: 'blue',
    5591: '#40E0D0',
    90: 'darkred',
    10: '#f7b16f',
    11: '#f7b16f',
    12: '#f7b16f',
    13: '#000',
    14: '#000',
    15: '#f7b16f',
    19: '#000',
    9: '#000',
    20: '#9fc972',
    22: '#000000',
    23: '#000000',
    24: '#000000',
    25: '#000000',
    26: '#000000',
    120: '#01afaf',
    130: 'darkred',
    140: 'darkred',
    150: '#01afaf',
    160: '#01afaf',
    170: '#01afaf',
    180: '#01afaf',
    190: 'darkred',
    1000: '#01afaf',
    1100: '#01afaf',
    1200: '#01afaf',
    1300: '#01afaf',
    1400: '#01afaf',
    220: 'darkred',
    230: 'darkred',
    240: 'darkred',
    250: 'darkred',
    260: 'darkred',
    270: 'darkred',
    27: '#000000',
};

let data = mobservable.observable({
  group: 'solo',
  timerSize: '18',
  groupBackup: 'solo',
  chatMessage: '',
  chatArray: [],
  information: 'click ROLL to begin playing.',
  resPrevious: '',
  dd1: 0,
  dd2: 0,
  dd3: 0,
  dd4: 0,
  goal2: 20,
  COUNTDOWN: 10,
  test: true,
  groupWatch: function() {
    if (this.group === 'GroupA' && this.test) {
      mouseHandler.Abackground = 'green';
      mouseHandler.Aborder = 'lawngreen';
      mouseHandler.Acolor = 'yellow';
      mouseHandler.Bbackground = '#000';
      mouseHandler.Bborder = 'green';
      mouseHandler.Bcolor = '#d5f765';
      mouseHandler.Cbackground = '#000';
      mouseHandler.Cborder = 'green';
      mouseHandler.Ccolor = '#d5f765';
      mouseHandler.Sbackground = '#000';
      mouseHandler.Sborder = 'green';
      mouseHandler.Scolor = '#d5f765';
    }
    else if (this.group === 'GroupB' && this.test) { 
      mouseHandler.Bbackground = 'green';
      mouseHandler.Bborder = 'lawngreen';
      mouseHandler.Bcolor = 'yellow';
      mouseHandler.Abackground = '#000';
      mouseHandler.Aborder = 'green';
      mouseHandler.Acolor = '#d5f765';
      mouseHandler.Cbackground = '#000';
      mouseHandler.Cborder = 'green';
      mouseHandler.Ccolor = '#d5f765';
      mouseHandler.Sbackground = '#000';
      mouseHandler.Sborder = 'green';
      mouseHandler.Scolor = '#d5f765';
    }
    else if (this.group === 'GroupC' && this.test) {
      mouseHandler.Cbackground = 'green';
      mouseHandler.Cborder = 'lawngreen';
      mouseHandler.Ccolor = 'yellow';
      mouseHandler.Abackground = '#000';
      mouseHandler.Aborder = 'green';
      mouseHandler.Acolor = '#d5f765';
      mouseHandler.Bbackground = '#000';
      mouseHandler.Bborder = 'green';
      mouseHandler.Bcolor = '#d5f765';
      mouseHandler.Sbackground = '#000';
      mouseHandler.Sborder = 'green';
      mouseHandler.Scolor = '#d5f765';
    }
    else if (this.group === 'solo' && this.test) {
      mouseHandler.Sbackground = 'green';
      mouseHandler.Sborder = 'lawngreen';
      mouseHandler.Scolor = 'yellow';
      mouseHandler.Abackground = '#000';
      mouseHandler.Aborder = 'green';
      mouseHandler.Acolor = '#d5f765';
      mouseHandler.Bbackground = '#000';
      mouseHandler.Bborder = 'green';
      mouseHandler.Bcolor = '#d5f765';
      mouseHandler.Cbackground = '#000';
      mouseHandler.Cborder = 'green';
      mouseHandler.Ccolor = '#d5f765';
    }
    else if (this.test) {
      mouseHandler.Abackground = '#000';
      mouseHandler.Aborder = 'green';
      mouseHandler.Acolor = '#d5f765';
      mouseHandler.Bbackground = '#000';
      mouseHandler.Bborder = 'green';
      mouseHandler.Bcolor = '#d5f765';
      mouseHandler.Cbackground = '#000';
      mouseHandler.Cborder = 'green';
      mouseHandler.Ccolor = '#d5f765';
      mouseHandler.Sbackground = '#000';
      mouseHandler.Sborder = 'green';
      mouseHandler.Scolor = '#d5f765';
    }
  }
});

data.ddChange1 = x => { data.dd1 = x };
data.ddChange2 = x => { data.dd2 = x };
data.ddChange3 = x => { data.dd3 = x };
data.ddChange4 = x => { data.dd4 = x };
data.ddChangeGoal2 = x => { data.goal2 = x };

let disp = mobservable.makeReactive({
  rulesDisplayOn: 'none',
  rulesDisplayOff: 'inline',
  scoreDisplay: 'inline',
  scoreDisplay2: 'none'
});

@observer class B2 extends React.Component {
  // shouldComponentUpdate = shouldPureComponentUpdate;
  constructor(props) {
    super(props);
    this.mouse = mouseHandler;
    this.data = data;
    this.disp = disp;
    this.state = {
        d1: 0,
        d2: 0,
        d3: 0,
        d4: 0,
        sides1: '6',
        sides2: '6',
        sides3: '12',
        sides4: '20',
        mes0: 'Number',
        mes1: 'Operator',
        mes2: 'Number',
        temp: 'temp',
        sol: [],
        message1: 0,
        message2: 0,
        message3: 0,
        message4: 0,
        mAr: [0,0,0,0,'result'],
        op1: '+',
        op2: '-',
        op3: '*',
        op4: '/',
        op5: 'Concat',
        selection0: '77777',
        selection1: '88888',
        selection2: '99999',
        res: 'result',
        str1: "",
        str2: "",
        str3: "",
        str4: "",
        hidden: false,
        hidden2: true,
        togDice: false,
        name: "",
        N: 0,
        DS_T: 'Click ROLL to begin playing. Otherwise, you can change game parameters in the "Create a New Group" section, or you can get all of the solutions to any roll you select in the "Get All Solutions." section',
        impossibleClicker: "a@F$Uy&imp",
        scoreClicker: "a@F$Uy&sc",
        interruptClicker: "a@F$intrup%$",
        scoreB: ["Greetings new player."],
        chatArray:[""],
        info:'',
        dynamicBg: '#000000',
        dynamicColor: '#d5f765',
        dynamicFont: 20,
        test: false,
        message: '',
        score: false,
        impossible: false,
        interrupt: false,
        goal: '20',
        sty: {color: '#d5f765', width: 50, marginLeft: 30, padding: 10},
        startDisplay: 'none',
        messageDisplay: 'none',
        impossibleDisplay: 'none',
        scoreDisplay: 'none',
        scoreDisplay2: 'none',
        timerDisplay: 'none',
        rollDisplay: 'inline',
        rollnumsDisplay: 'none',
        numDisplay: 'none',
        showParamsButton: 'inline',
        hideParamsButton: 'none',
        showSolutionsButton: 'inline',
        hideSolutionsButton: 'none',
        paramsDiv: 'none',
        timeSize: 20,
        extraDisplay: 'none',
        gameDisplay: 'inlineBlock',
        leftDisplay: 'inlineBlock',
        rightDisplay: 'inlineBlock'
      };

let that = this;

DES_ws.onopen = function(e) {
  console.log("DES_ws.onopen");
    }

DES_ws.onmessage = function(event) {
  let gameArray = event.data.split(",");
  console.log(event);
  console.log(gameArray);
  let makeStr = x => {
    let l = x.length;
    let str = '';
      for (let i=5; i<l; i+=1) {
        str = str + ', ' + x[i];
      }
    return (x[4] + ' ' + str);
  }
  let d2 = event.data.substring(0,6);
  // let d3 = event.data.substring(2,6);
  let sendersGroup = gameArray[1]; 
  let sender = gameArray[2];
  let extra = gameArray[3];
  let ext4 = gameArray[4];
  let ext5 = gameArray[5];
  let ext6 = gameArray[6];
  let ext7 = gameArray[7];
  let ext8 = gameArray[8];
  let group = that.data.group;
  let name = that.state.name;
  let ar = extra.split("<br>");
  let ar2 = ar.map(function (x) {
    return x.split("_")
  })
      switch (d2) {
          case "CC#$42":                         // Not broadcast. Login message.
            if (extra === '%#8*&&^1#$%^')  {
              that.setState({info: `You entered a name which is already taken`})
              setTimeout( function () {
                document.location.reload(false);
              },2000);
            }
            else {
              that.data.group = 'solo';
              that.setState({
                info: "Click ROLL for numbers. Click SCORE! to try for a point."
              })
              DES_ws.send(`CO#$42,solo,${name},${name}`);
            }
          break;

          case "CZ#$42":                             // Solutions.
            that.data.information = 'You must hide the solutions in order to resume play';
            let s = extra.split("<br />");
            that.setState({sol: s}); 
          break;
          
          case "CA#$42":                             // Triggedarkred by ROLL
              that.data.information = 'You must click SCORE! or IMPOSSIBLE to gain a point.';
              that.setState
              ({
                message1: extra,
                message2: ext4,
                message3: ext5,
                message4: ext6,
                str1: '',
                str2: '',
                str3: '',
                scoreDisplay2: 'none',
                scoreClicker: "a@F$Uy&sc",
                impossibleClicker: "a@F$Uy&imp",
                interruptClicker: "a@F$intrup%$",
                sol: [],
                d1: extra,
                d2: ext4,
                d3: ext5,
                d4: ext6,
                score: false,
                impossible: false,
                interrupt: false,
                DS_T: 'ready',
                numDisplay: 'inline',
                impossibleDisplay: 'inline',
                rollDisplay: 'inline',
                rollnumsDisplay: 'none',
                showParamsButton: 'inline',
                hideParamsButton: 'none',
                paramsDiv: 'none',
                showSolutionsButton: 'inline',
                hideSolutionsButton: 'none',
                timerDisplay: 'none',
                scoreDisplay: 'inline',
              });
          break;

          case "DI#$42":                              // Changes data.information .
              that.data.information = extra;
          break

          case "CE#$42":                             // Updates numbers during play.
              that.setState
              ({
                message1: extra,
                message2: ext4,
                message3: ext5,
                message4: ext6
              });
          break;

          case "CB#$42":                               // Updates the scoreboaard.
            that.setState({
              scoreB: ar2
            });
            //  }
          break;

          case "CD#$42":
            let xm = that.data.chatMessage;
            let newM = makeStr(gameArray);
            let xmess = newM + "<br>" + xm;
            that.data.chatArray = xmess.split("<br>");
            that.data.chatMessage = xmess;
          break;

          case "CF#$42":                              // Re-set after a each clculation.
            that.setState
            ({
              mes0: 'Number',
              mes1: 'Operator',
              mes2: 'Number',
              res:  'result',
              timeSize: 20,
              DS_T: extra,
              info: extra
            });
          break;

          case "CH#$42":
            that.data.information = ext4;
            that.setState
            ({
              DS_T: extra,
              rollDisplay: 'inline',
              numDisplay: 'none',
              scoreDisplay: 'none',
              scoreDisplay2: 'none'
            });
          break;

          case "CK#$42":                      // Updates DS_T after each calculation.
              that.data.information = ext4;
              that.setState
              ({
                mes0: 'Number',
                mes1: 'Operator',
                mes2: 'Number',
                res:  'result',
                info: extra,
                DS_T: extra
              });
          break;

          case "CQ#$42":                 
              that.setState({mes0: extra})
          break;

          case "DQ#$42":                 
              that.setState({mes2: extra})
          break;

          case "EQ#$42":                 
              that.setState({mes1: extra})
          break;

          case "FQ#$42":                 
              that.setState({str1: extra})
          break;

          case "GQ#$42":                 
              that.setState({str2: extra})
          break;

          case "HQ#$42":                 
              that.setState({str3: extra})
          break;

          case "CR#$42":                 // Resets the player interface after each round.
            that.setState({
              impossibleDisplay: 'none',
              numDisplay: 'none',
        showParamsButton: 'inline',
        hideParamsButton: 'none',
        paramsDiv: 'none',
        showSolutionsButton: 'inline',
        hideSolutionsButton: 'none',
              rollDisplay: 'inline',
              scoreDisplay: 'none',
              scoreDisplay2: 'none',
              message1: 0,
              message2: 0,
              message3: 0,
              message4: 0,
              timeSize: 20,
              mes0: 'Number',
              mes1: 'Operator',
              mes2: 'Number',
              res:  'result',
            });
          break;

          case "CY#$42": // Triggedarkred by clicking "SCORE!".
            that.data.information = '';
            that.data.timerSize = 35;
            that.setState( {
              scoreClicker: extra,
              score: true,
              DS_T: that.data.COUNTDOWN,
              impossibleDisplay: 'none',
              solutionsDisplay: 'none',
              paramsDisplay: 'none',
              shrinkSol: 'none',
              showSolutionsButton: 'none',
              paramsButton : 'none',
              shrinkPar: 'none',
              timerDisplay: 'inline',
              scoreDisplay: 'none',
              rollDisplay: 'none',
            } )
            if (extra !== name) {
				that.setState({numDisplay: 'none'}) // Players can see calculations after wait.
                setTimeout ( () => {
                  that.setState({solutionsDisplay: 'inline'});
                },8000 )
            }
          break;

          case "XY#$42":              // Triggedarkred by clicking "SCORE!" after "IMPOSSIBLE".
            that.data.information = sender + ' clicked SCORE!.';
            that.setState({
              interruptClicker: extra,
              interrupt: true,
              message: '',
              DS_T: that.data.COUNTDOWN,    // Default is set at 10 in data.
              scoreDisplay2: 'none',
              solutionsDisplay: 'none',
              paramsDisplay: 'none',
              shrinkSol: 'none',
              showSolutionsButton: 'none',
              paramsButton : 'none',
              shrinkPar: 'none',
              rollnumsDisplay: 'none'
            })
          break;

          case "DY#$42":                               // Triggered by clicking  "IMPOSSIBLE".
            that.data.information = 'Click SCORE! if you want to show a solution and gain a point.';
            that.setState({
              impossibleClicker: extra,
              impossible: true,
              message: '',
              DS_T: 60,
              impossibleDisplay: 'none',
							numDisplay: 'none',
              scoreDisplay: 'none',
              scoreDisplay2: 'inline',
              timerDisplay: 'inline',
              rollDisplay: 'none',
              rollnumsDisplay: 'inline',
        showParamsButton: 'inline',
        hideParamsButton: 'none',
        paramsDiv: 'none',
        showSolutionsButton: 'none',
        hideSolutionsButton: 'none',
            })
          break;

          case "DC#$42":
            that.setState({})
          break;

          case "DZ#$42":                                  // NOT IN USE
            let this2 = that;
            if (that.state.scoreClicker !== name) {
              let solutions = extra;
              that.delay(8000)
              .then( () => {
                  this2.setState({
                    sol: solutions.split("<br />"),
                  });
              })
            }
          break;

          case "IA#$42":
            that.setState({info: extra});         // Broadcast to update info message.
          break;

          default:
              console.log( "fell through to default");
          break;
      }
    }
  
  setInterval( () => {
    let name = this.state.name;
    let gr = this.data.group;
    let COUNTDOWN = this.data.COUNTDOWN;
    let scoreClicker = this.state.scoreClicker;
		let impossibleClicker = this.state.impossibleClicker;
		let interruptClicker = this.state.interruptClicker
		let score = this.state.score;
		let impossible = this.state.impossible;
		let interrupt = this.state.interrupt;

    if ( this.state.DS_T > 0 ) {
      this.setState({
        DS_T: this.state.DS_T - 1,
        timeSize: 40
      });
      this.setState({info: this.state.DS_T});

    }

    if ( this.state.DS_T === 0 ) {
      this.setState ({
            message1: 0,  // Wipes the old numbers.
            message2: 0,
            message3: 0,
            message4: 0,
            info: '',
            timeSize: 20, // Returns number display to normal size.
            rollDisplay: 'inline', // Displays the ROLL button.
        showParamsButton: 'inline',
        hideParamsButton: 'none',
        paramsDiv: 'none',
        showSolutionsButton: 'inline',
        hideSolutionsButton: 'none',
            DS_t: -1
        })

  	  let z = scoreClicker === name;
  		let z2 = impossibleClicker === name && interruptClicker !== name;
  		let z3 = impossibleClicker === name && interruptClicker === name;

			if (z) {
        	DES_ws.send(`CG#$42,${gr},${name},-1`);
          DES_ws.send(`CH#$42,${gr},${name},${COUNTDOWN} seconds expired. ${scoreClicker} loses one point.`);
      }

			else if (z2) {
        	DES_ws.send(`CG#$42,${gr},${name},1`);
        	DES_ws.send(`CG#$42,${gr},${interruptClicker},-1`);
          DES_ws.send(`CH#$42,${gr},${name},${interruptClicker} did not show a solution; one was point deducted. One point for ${impossibleClicker}, `);
      }

      else if (z3) {
        DES_ws.send(`CG#$42,${gr},${interruptClicker},-2`);
        DES_ws.send(`CH#$42,${gr},${impossibleClicker},
                      ${impossibleClicker} forfeits two points for blocking with SCORE!,
                      ${impossibleClicker} clicked IMPOSSIBLE and blocked others from solving by clicking SCORE!
       `);
		  }
		}
  }, 1000 )
}

  changeMessage = (x) => {
    let name = this.state.name;
    let gr = this.data.group;
    DES_ws.send (`CD#$42,${gr},${name},${name},${name}: ${x}`);
  }

  setColorState = (fn) => {
    return this.setState(({colors}) => ({
      colors: fn(colors)
   }));
  }

  changeBackground = (color) => {
    this.setState({
      dynamicBg: color
    });
  }

  changeColor = (col) => {
    this.setState({
      dynamicColor: col,
      sty: {color: col, width: 50, marginLeft: 30, padding: 10}
    });
  }

  solutions = () => {
    let group = this.data.group;
    let name = this.state.name;
    let goal = this.state.goal;
    DES_ws.send( `CZ#$42,${group},${name},${goal}` );
  }

  delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
  }

  displayHandler = () => {
  }

  rollDice = () => {
    let col = this.state.dynamicColor;
    this.mouse[2] = '#83f7d8';
    this.setState({
      DS_T: '',
      test: false,
      score: false,
      impossible: false,
      interrupt: false,
      sty: {color: col, width: 50, marginLeft: 30, padding: 10},
      impossibleDisplay: 'inline',
      scoreDisplay: 'inline',
      scoreDisplay2: 'none',
      numDisplay: 'inline',
      rollnumsDisplay: 'none',
      showParamsButton: 'inline',
      hideParamsButton: 'none',
      paramsDiv: 'none',
      showSolutionsButton: 'inline',
      hideSolutionsButton: 'none',
    });
    let name = this.state.name;
    let group = this.data.group;
    let a = this.state.sides1;
    let b = this.state.sides2;
    let c = this.state.sides3;
    let d = this.state.sides4;
    DES_ws.send(`CF#$42,${group},${name},`);
    DES_ws.send(`CA#$42,${group},${name},${a},${b},${c},${d}`);
  }

  handleGroupA = () => {
      if (this.data.group !== 'GroupA') {
      let name = this.state.name;
      let group = this.data.group;
    }
  }

  handleGroupB = () => {
      if (this.data.group !== 'GroupB') {
      let name = this.state.name;
      let group = this.data.group;
    }
  }

  handleGroupC = () => {
      if (this.data.group !== 'GroupC') {
      let name = this.state.name;
      let group = this.data.group;
    }
  }

  setGroup = x => {
    let name = this.state.name;
    let group = this.data.group;
    this.data.group = x;
    DES_ws.send( `CO#$42,${group},${name},${x}` );
    this.data.chatMessage = '';
    this.data.chatArray = [];
  }

  calc (mes0,mes1,mes2) { 
    let that = this;
    let res = 0;
    let delay = this.delay;
    let n = this.state.N;
    let resP = this.data.resPrevious;
    let ar5 = [mes0,mes2];
    let test = (resP === mes0 || resP === mes2);
    switch (mes1) {
      case "+": that.comp( parseFloat(mes0) + parseFloat(mes2),mes0,mes1,mes2,test );
      break;
      case "-": that.comp( parseFloat(mes0) - parseFloat(mes2),mes0,mes1,mes2,test );
      break;
      case "*": that.comp( parseFloat(mes0) * parseFloat(mes2),mes0,mes1,mes2,test );;
      break;
      case "/": that.comp( parseFloat(mes0) / parseFloat(mes2),mes0,mes1,mes2,test );
      break;t
      case "Concat": that.comp( parseFloat(mes0+""+mes2),mes0,mes1,mes2,test );
      break;
      default : 'operator not selected';
    }
  }

  comp (result,mes0,mes1,mes2,test) {
    let str = `${mes0} ${mes1} ${mes2} = ${result}`;
    this.data.resPrevious = result.toString();
    let w1 = this.state.message1;
    let w2 = this.state.message2;
    let w3 = this.state.message3;
    let w4 = this.state.message4;
    let startArray = [w1, w2, w3, w4, result];
    this.newNums(result,str,test,startArray);
  }

  newNums (result,str,test,numbers) {
    let j = 0;
    let gr = this.data.group;
    let COUNTDOWN = this.data.COUNTDOWN;
    let ar = [];
    let clock = '';
    let name = this.state.name;
    let impossibleClicker = this.state.impossibleClicker;
    let interruptClicker = this.state.interruptClicker;
    let scoreClicker = this.state.scoreClicker;
    let interrupt = this.state.interrupt;
    let test2 = this.state.score || this.state.impossible;
    let goal = 1*(this.state.goal); // '1*' and '==' is technically overkill, but seems like insurance.

    for (let k in numbers) {
        if (numbers[k] !== "" && numbers[k] !== undefined) {
        ar[j] = numbers[k];
        j += 1;
      }
    }
    if (j === 3) {
      DES_ws.send(`FQ#$42,${gr},${name},${str}`);
      DES_ws.send(`CE#$42,${gr},${name},${ar[0]},${ar[1]},${ar[2]},`);
      this.mouse[3] = 'yellow';
      if (test2) {
        DES_ws.send( `CK#$42,${gr},${name},${COUNTDOWN},To score in this computation: Use the yellow background number.` );
      }
      else {
        DES_ws.send( `CK#$42,${gr},${name},Did not click SCORE!,Not competing.` );
      }
    }
    else if (j === 2) {
      this.setState({message: ''});
      DES_ws.send(`GQ#$42,${gr},${name},${str}`);
      DES_ws.send(`CE#$42,${gr},${name},${ar[0]},${ar[1]},,`);
      if ( (result == goal) && test && test2 && !interrupt ) {
          this.setState({DS_T: -1});
          DES_ws.send( `CK#$42,${gr},${name},One point for ${name},Success!`);
          DES_ws.send( `CR#$42,${gr},${name},${name}` );
          DES_ws.send( `CG#$42,${gr},${name},1` );
      }
      else if ( (result == goal) && test && test2 && interrupt ) {
        this.setState({DS_T: -1});
        DES_ws.send( `CK#$42,${gr},${name},Two points deducted from ${impossibleClicker},One point for ${name}`);
        DES_ws.send( `CR#$42,${gr},${name},${name}` );
        DES_ws.send( `CG#$42,${gr},${name},1` );
        DES_ws.send( `CG#$42,${gr},${impossibleClicker},-2` );
      }
      else if (test2) {
        DES_ws.send( `CK#$42,${gr},${name},${COUNTDOWN}, ` );
      }
      else {
        DES_ws.send( `CK#$42,${gr},${name},Did not click SCORE!, ` );
      }
    }
    else if (j === 1) {
      this.setState ({
            message1: 0,  // Wipes the old numbers.
            message2: 0,
            message3: 0,
            message4: 0,
            info: '',
            timeSize: 20, // Returns number display to normal size.
            rollDisplay: 'inline', // Displays the ROLL button.
        showParamsButton: 'inline',
        hideParamsButton: 'none',
        paramsDiv: 'none',
        showSolutionsButton: 'inline',
        hideSolutionsButton: 'none',
        DS_t: 'Round Over'  
        })

        let z = scoreClicker === name;
  		let z2 = interruptClicker === name && impossibleClicker !== name;
  		let z3 = interruptClicker === name && impossibleClicker === name;

			if (z && test2 && result === goal) {
        DES_ws.send( `CK#$42,${gr},${name},One point for ${name},Success` );
          DES_ws.send( `CR#$42,${gr},${name},${name}` );
          DES_ws.send( `CG#$42,${gr},${name},1` );
      }

			if (z && test2 && result !== goal) {
          DES_ws.send( `CK#$42,${gr},${name}, ${name} loses one point. The result is not '20'` );
          DES_ws.send( `CR#$42,${gr},${name},${name}` );
          DES_ws.send( `CG#$42,${gr},${name},-1` );
      }

			if (z2 && test2 && result === goal) {
          DES_ws.send( `CK#$42,${gr},${name},Twopoints taken from ${impossibleClicker},${name} found a solution. +1 for ${name}` );
          DES_ws.send( `CR#$42,${gr},${name},${name}` );
          DES_ws.send( `CG#$42,${gr},${name},1` );
          DES_ws.send( `CG#$42,${gr},${impossibleClicker},-2` );
      }

			if (z2 && test2 && result !== goal) {
          DES_ws.send( `CK#$42,${gr},${name},One point for ${impossibleClicker}. No solution found.,${interruptClicker} loses one point.The result is not ${goal}` );
          DES_ws.send( `CR#$42,${gr},${name},${name}` );
          DES_ws.send( `CG#$42,${gr},${name}, -1` );
          DES_ws.send( `CG#$42,${gr},${impossibleClicker},1` );
      }

			if (z3 && test2 && result === goal) {
          DES_ws.send( `CR#$42,${gr},${name},${name}` );
          DES_ws.send( `CG#$42,${gr},${name},-1` );
          DES_ws.send(`CH#$42,${gr},${impossibleClicker},
                      ${name} forfeits two points. A solution was found (by ${name})!,
                      ${name} gains one point for finding a solution. Net result is -1`);
      }

			if (z3 && test2 && result !== goal) {
          DES_ws.send( `CR#$42,${gr},${name},${name}` );
          DES_ws.send( `CG#$42,${gr},${name},-2` );
          DES_ws.send(`CH#$42,${gr},${impossibleClicker},
                      ${impossibleClicker} forfeits two points for blocking with SCORE!,
                      ${impossibleClicker} clicked IMPOSSIBLE and blocked others by clicking SCORE!
       `);
		  }

      DES_ws.send(`CE#$42,${gr},${name},${ar[0]},,,`);
      DES_ws.send(`HQ#$42,${gr},${name},${str}`);
    }
  }

  newPlayer = (x) => {
    this.setState({name: x});
    DES_ws.send("CC#42$"+x)
  }

  changeItem = (x) => {
    this.setState(x);
    }

  buttonHandler = () => {
    let name = this.state.name;
    let group = this.data.group;
    DES_ws.send(`IA#$42,${group},${name},Click SCORE to begin` );
    this.rollDice();
  }

  handleB40 = () => {
    let name = this.state.name;
    let group = this.data.group;
    let num = this.state.message1;
    if (this.state.mes0 === 'Number') {
      this.setState({message1: '', mes0: num}, () => {
        DES_ws.send(`CQ#$42,${group},${name},${num}`);
      })
    }
    else if (this.state.mes2 === 'Number') {
      this.setState({message1: '', mes2: num}, () => {
        DES_ws.send(`DQ#$42,${group},${name},${num}`);
        if (this.state.mes1 !== 'Operator') {
          this.calc(this.state.mes0, this.state.mes1, num);
        }
      })
    }
  }

  handleB41 = () => {
    let name = this.state.name;
    let group = this.data.group;
    let num = this.state.message2;
    if (this.state.mes0 === 'Number') {
      this.setState({message2: '', mes0: num},() => {
        DES_ws.send(`CQ#$42,${group},${name},${num}`);
      })
    }
    else if (this.state.mes2 === 'Number') {
      this.setState({message2: '', mes2: num}, () => {
        DES_ws.send(`DQ#$42,${group},${name},${num}`);
        if (this.state.mes1 !== 'Operator') {
          this.calc(this.state.mes0, this.state.mes1, num);
        }
      })
    }
  }

  handleB42 = () => {
    let name = this.state.name;
    let group = this.data.group;
    let num = this.state.message3;
    if (this.state.mes0 === 'Number') {
      this.setState({message3: '', mes0: num}, () => {
        DES_ws.send(`CQ#$42,${group},${name},${num}`);
      })
    }
    else if (this.state.mes2 === 'Number') {
      this.setState({message3: '', mes2: num}, () => {
        DES_ws.send(`DQ#$42,${group},${name},${num}`);
        if (this.state.mes1 !== 'Operator') {
          this.calc(this.state.mes0, this.state.mes1, num);
        }
      })
    }
  }

  handleB43 = () => {
    let name = this.state.name;
    let group = this.data.group;
    let num = this.state.message4;
    if (this.state.mes0 === 'Number') {
      this.setState({message4: '', mes0: num}, () => {
        DES_ws.send(`CQ#$42,${group},${name},${num}`);
      })
    }
    else if (this.state.mes2 === 'Number') {
      this.setState({message4: '', mes2: num}, () => {
        DES_ws.send(`DQ#$42,${group},${name},${num}`);
        if (this.state.mes1 !== 'Operator') {
          this.calc(this.state.mes0, this.state.mes1, num);
        }
      })
    }
  }

  handleOp0 = () => {
    let name = this.state.name;
    let group = this.data.group;
    DES_ws.send(`EQ#$42,${group},${name},+`);
    let test = this.state.mes0 !== 'Number' && this.state.mes2 !== 'Number';
    if (test) { 
      this.setState({mes1: '+'}, () => {
        this.calc(this.state.mes0, '+',this.state.mes2);
      })

    }
  }

  handleOp1 = () => {
    let name = this.state.name;
    let group = this.data.group;
    DES_ws.send(`EQ#$42,${group},${name},-`);
    let test = this.state.mes0 !== 'Number' && this.state.mes2 !== 'Number';
    if (test) { 
      this.setState({mes1: '-'}, () => {
        this.calc(this.state.mes0, '-',this.state.mes2);
      })

    }
  }

  handleOp2 = () => {
    let name = this.state.name;
    let group = this.data.group;
    DES_ws.send(`EQ#$42,${group},${name},*`);
    let test = this.state.mes0 !== 'Number' && this.state.mes2 !== 'Number';
    if (test) { 
      this.setState({mes1: '*'}, () => {
        this.calc(this.state.mes0, '*',this.state.mes2);
      })

    }
  }

  handleOp3 = () => {
    let name = this.state.name;
    let group = this.data.group;
    DES_ws.send(`EQ#$42,${group},${name},/`);
    let test = this.state.mes0 !== 'Number' && this.state.mes2 !== 'Number';
    if (test) { 
      this.setState({mes1: '/'}, () => {
        this.calc(this.state.mes0, '/',this.state.mes2);
      })

    }
  }

  handleOp4 = () => {
    let name = this.state.name;
    let group = this.data.group;
    DES_ws.send(`EQ#$42,${group},${name},Concat`);
    let test = this.state.mes0 !== 'Number' && this.state.mes2 !== 'Number';
    if (test) { 
      this.setState({mes1: 'Concat'}, () => {
        this.calc(this.state.mes0, 'Concat',this.state.mes2);
      })

    }
  }

  handleScore = () => {
    let name = this.state.name;
    let group = this.data.group;
    DES_ws.send( `CY#$42,${group},${name},${name}` );
  }

  handleScore2 = () => {
    let name = this.state.name;
    let group = this.data.group;
    this.setState({numDisplay: 'inline'});
    DES_ws.send( `XY#$42,${group},${name},${name}` );
  }

  handleImpossible = () => {
    let name = this.state.name;
    let group = this.data.group;
    DES_ws.send( `DY#$42,${group},${name},${name}` );
  }

  eraseMessages = () => {
    this.data.chatArray = [];
    this.data.chatMessage = ''
  }

  handleExtra = () => {
    this.setState({
      gameDisplay: 'none',
      extraDisplay: 'inlineBlock'
    })
  }

  handleGame = () => {
    this.setState({
      gameDisplay: 'inlineBlock',
      extraDisplay: 'none'
    })
  }

  showSolutionsHandler = () => {
      this.data.groupBackup = this.data.group;
      this.data.information = '';
      let playGroup = this.data.groupBackup;
      this.data.group = 'solo';
      let name = this.state.name;
      DES_ws.send( `DO#$42,${playGroup},${name},solo` );
      let a = this.state.d1;
      let b = this.state.d2;
      let c = this.state.d3;
      let d = this.state.d4;
      let goal = this.state.goal;
      DES_ws.send(`CZ#$42,solo,${name},${a},${b},${c},${d},${goal}`);
      this.setState({
        rollDisplay: 'none',
        scoreDisplay: 'none',
        impossibleDisplay: 'none',
        scoreDisplay2: 'none',
        showSolutionsButton: 'none',
        hideSolutionsButton: 'inline',
        DS_T: 'Group participation is temporarily suspended.'
      });
  }

  showSolutionsHandler_2 = () => {
      this.data.information = '';
      this.data.groupBackup = this.data.group;
      let playGroup = this.data.groupBackup;
      this.data.group = 'solo';
      let name = this.state.name;
      DES_ws.send( `DO#$42,${playGroup},${name},solo` );
      let goal2 = this.data.goal2;
      let a = this.data.dd1;
      let b = this.data.dd2;
      let c = this.data.dd3;
      let d = this.data.dd4;
      DES_ws.send(`CZ#$42,solo,${name},${a},${b},${c},${d},${goal2}`);
      this.setState({
        rollDisplay: 'none',
        scoreDisplay: 'none',
        impossibleDisplay: 'none',
        scoreDisplay2: 'none',
        showSolutionsButton: 'none',
        hideSolutionsButton: 'inline',
        DS_T: 'Group participation is temporarily suspended.'
      });
  }

  hideSolutionsHandler = () => {
    this.data.group = this.data.groupBackup;
    this.data.timerSize = 18;
    let group = this.data.groupBackup;
    let name = this.state.name;
    DES_ws.send( `DO#$42,${group},${name},${group}` );
    this.data.information = 'To resume play, click ROLL (or wait until another group member starts the next round).';
    this.setState({
        message: 'Solutions were displayed. Play can resume on the next round. ',
        DS_T: 'Caution. Clicking ROLL could disrupt a current group session. You might want to send a message asking other group members if it is ok to click ROLL.',
        showSolutionsButton: 'inline',
        hideSolutionsButton: 'none',
        rollDisplay: 'inline',
        sol: []
     });
  }

   showParamsHandler = () => {
      this.setState({
        scoreDisplay: 'none',
        scoreDisplay2: 'none',
        impossibleDisplay: 'none',
        message: 'SCORE! and IMPOSSIBLE will return when you shrink the Parameters area.',
        showParamsButton: 'none',
        hideParamsButton: 'inline',
        paramsDiv: 'inline'
      });
    }

    hideParamsHandler = () => {
      this.setState({
        paramsDisplay: 'none',
        scoreDisplay: 'inline',
        impossibleDisplay: 'inline',
        message: 'Back in competition.',
        showParamsButton: 'inline',
        hideParamsButton: 'none',
        paramsDiv: 'none'
      });
    }

    style4 = (x,y,z) => {return {backgroundColor: x, borderColor: y, borderTopWidth: 3, borderLeftWidth: 3,  
      borderBottomWidth: 2,  borderRightWidth: 2, color: z,
      paddingTop: 1.3, paddingLeft: 12, paddingRight:12,
              paddingBottom: 0.3, marginRight: 3, marginLeft: 10, fontSize: this.state.timeSize }};

    style5 = (x) => {return {backgroundColor: x, borderWidth: 2, borderColor: 'green', paddingTop: 1.3, paddingLeft: 12, paddingRight:12,
              paddingBottom: 0.9, marginRight: 3, marginLeft: 10, fontSize: this.state.timeSize }};

    style6 = (x,y) => {return {backgroundColor: x, display: y, paddingBottom: 0.9, 
              marginRight: 3, marginLeft: 10, fontSize: this.state.timeSize}};

    style7 = (x,y,z) => {return {backgroundColor: x, textAlign: 'left', color: '#fcca05', borderColor: y,
          display: z, borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20}};


    style8 = (x,y,z) => {return {backgroundColor: x, textAlign: 'left', borderColor: y,
          color: z, borderRadius: 10, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 12}};



    style9 = (x,y,z) => {return {backgroundColor: x, textAlign: 'left', borderColor: y, color: z, 
      borderRadius: 6, paddingTop: 1.1, paddingBottom: 0.4, marginRight: 3, 
      marginLeft: 18, fontSize: this.state.timeSize}};

  render = () => {
    let groupWatch = this.data.groupWatch;
    let styleGroupA = this.mouse.styleGroupA;
    let styleGroupB = this.mouse.styleGroupB;
    let styleGroupC = this.mouse.styleGroupC;
    let styleGroupS = this.mouse.styleGroupS;
    let Abackground = '#000';
    let Aborder = 'green';
    let Acolor = '#d5f765';
    let Bbackground = '#000';
    let Bborder = 'green';
    let Bcolor = '#d5f765';
    let Cbackground = '#000';
    let Cborder = 'green';
    let Ccolor = '#d5f765';
    let Sbackground = '#000';
    let Sborder = 'green';
    let Scolor = '#d5f765';
    let Ubackground = '#000';
    let Uborder = 'green';
    let Ucolor = '#d5f765';
    let Tbackground = '#000';
    let Tborder = 'green';
    let Tcolor = '#d5f765';
    let rAbackground = 'green';
    let rAborder = 'lightgreen';
    let rAcolor = 'yellow';
    let rBbackground = 'green';
    let rBborder = 'lightgreen';
    let rBcolor = 'yellow';
    let rCbackground = 'green';
    let rCborder = 'lightgreen';
    let rCcolor = 'yellow';
    let rSbackground = 'green';
    let rSborder = 'lightgreen';
    let rScolor = 'yellow';
    console.log(this);
    count += 1;
    console.log('The count is now ' + count + ' and the color is ' + this.mouse[15] );
    let data = this.data;
    let timerSize = this.data.timerSize;
    let information = this.data.information;
    let dd1 = this.data.dd1;
    let dd2 = this.data.dd2;
    let dd3 = this.data.dd3;
    let dd4 = this.data.dd4;
    let goal2 = this.data.goal2;
    let ddChange1 = this.data.ddChange1;
    let ddChange2 = this.data.ddChange2;
    let ddChange3 = this.data.ddChange3;
    let ddChange4 = this.data.ddChange4;
    let dataChange = this.data.dataChange;
    let ddChangeGoal2 = this.data.ddChangeGoal2;
    let name = this.state.name;
    let group = this.data.group;
    let dynB = this.state.dynamicBg;
    let dynC = this.state.dynamicColor;
    let dynF = this.state.dynamicFont;
    let buttonDisplay = this.state.buttonDisplay;
    let startDisplay = this.state.startDisplay;
    let impossibleDisplay = this.state.impossibleDisplay;
    let scoreDisplay = this.state.scoreDisplay;
    let scoreDisplay2 = this.state.scoreDisplay2;
    let timerDisplay = this.state.timerDisplay;
    let timerDisplay2 = this.state.timerDisplay2;
    let rollDisplay = this.state.rollDisplay;
    let messageDisplay = this.state.messageDisplay;
    let numDisplay = this.state.numDisplay;
    let solutionsDisplay = this.state.solutionsDisplay;
    let rollnumsDisplay = this.state.rollnumsDisplay;
    let rightDisplay = this.state.rightDisplay;
    let leftDisplay = this.state.leftDisplay;
    let extraDisplay = this.state.extraDisplay;
    let m1 = this.state.message1;
    let timeSize = this.state.timeSize;
    let paramsDisplay = this.state.paramsDisplay;
    let paramsButton = this.state.paramsButton;
    let paramsDiv = this.state.paramsDiv;
    let shrinkSol = this.state.shrinkSol;
    let shrinkPar = this.state.shrinkPar;
    let showSolutionsButton = this.state.showSolutionsButton;
    let hideSolutionsButton = this.state.hideSolutionsButton;
    let showParamsButton = this.state.showParamsButton;
    let hideParamsButton = this.state.hideParamsButton;
    let sol = this.state.sol;
    let base = '#f7b16f';  
    let base2 = '#000000';  
    let d1 = this.state.d1;
    let d2 = this.state.d2;
    let d3 = this.state.d3;
    let d4 = this.state.d4;
    let sides1 = this.state.sides1;
    let sides2 = this.state.sides2;
    let sides3 = this.state.sides3;
    let sides4 = this.state.sides4;
    let goal = this.state.goal;
    let cr2100 = this.mouse[2100];
    let cr15 = this.mouse[15];
    let cr11 = this.mouse[11];
    let cr12 = this.mouse[12];
    let cr550 = this.mouse[550];
    let cr5501 = this.mouse[5501];
    let cr55010 = this.mouse[55010];
    let cr551 = this.mouse[551];
    let cr5511 = this.mouse[5511];
    let cr55110 = this.mouse[55110];
    let cr552 = this.mouse[552];
    let cr5521 = this.mouse[5521];
    let cr55210 = this.mouse[55210];
    let cr3 = this.mouse[3];
    let cr31 = this.mouse[31];
    let cr310 = this.mouse[310];
    let cr4 = this.mouse[4];
    let cr41 = this.mouse[41];
    let cr410 = this.mouse[410];
    let cr5 = this.mouse[5];
    let cr51 = this.mouse[51];
    let cr510 = this.mouse[510];
    let cr6 = this.mouse[6];
    let cr61 = this.mouse[61];
    let cr610 = this.mouse[610];
    let cr7 = this.mouse[7];
    let cr71 = this.mouse[71];
    let cr710 = this.mouse[710];
    let cr8 = this.mouse[8];
    let cr81 = this.mouse[81];
    let cr810 = this.mouse[810];
    let cr559 = this.mouse[559];
    let cr5591 = this.mouse[5591];
    let cr55910 = this.mouse[55910];
    let cr90 = this.mouse[90];
    let cr9 = this.mouse[9];
    let cr10 = this.mouse[10];
    let cr13 = this.mouse[13];
    let cr130 = this.mouse[130];
    let cr14 = this.mouse[14];
    let cr140 = this.mouse[140];
    let cr19 = this.mouse[19];
    let cr190 = this.mouse[190];
    let cr20 = this.mouse[20];
    let cr22 = this.mouse[22];
    let cr220 = this.mouse[220];
    let cr23 = this.mouse[23];
    let cr230 = this.mouse[230];
    let cr24 = this.mouse[24];
    let cr240 = this.mouse[240];
    let cr25 = this.mouse[25];
    let cr250 = this.mouse[250];
    let cr26 = this.mouse[26];
    let cr260 = this.mouse[260];
    let cr27 = this.mouse[27];
    let cr270 = this.mouse[270];
    let cr100 = this.mouse[100];


    let rulesDisplayOn = this.disp.rulesDisplayOn;
    let rulesDisplayOff = this.disp.rulesDisplayOff;
    let toggleRules = this.disp.toggleRules
    let handleRulesDisplay = this.data.handleRulesDisplay;
    let handleRulesDisplay2 = this.data.handleRulesDisplay2;
    let style3 =  {paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 10, fontSize: 18}
    return (
      <div style={{backgroundColor: dynB, color: dynC, fontSize: dynF, 
          display: rightDisplay, width: '100%', height: '200%'}} >
        <div style={{width: '35%', float: 'right', display: startDisplay }} >
            <ChangeColor key='ChangeColor' changeC={this.changeColor}
              style={{width: 8}} />
            <ChangeBackground key='ChangeBackground' changeB={this.changeBackground}
              style={{width: 8}} />
              <br /><br />
            <button  style={{backgroundColor: '#4c1616', color: '#f2f246', textAlign: 'center',
                display: 'inline', paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, fontSize: 18}} >
                Score Board <br />
                name [score]
                <div style={{textAlign: 'left'}} > {
                          this.state.scoreB.map(function(line) {
                            return (<p key={line.id} > {line} </p>);
                          })
                      }
                </div>
            </button>
            <br /> <br />
            <button  style={{backgroundColor: '#4c1616', color: '#f2f246', textAlign: 'center',
                display: 'inlineBlock', paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, fontSize: 18}} >
                Message Board <br />
                <div style={{textAlign: 'left'}} > {
                          this.data.chatArray.map(function(line) {
                            return (<p key={line.id} > {line} </p>);
                          })
                      }
                </div>
            </button>
            <button  onClick={this.eraseMessages} style={{backgroundColor: '#4c1616', color: '#f2f246', 
              fontSize: 14, marginLeft: 10}} >
              Erase Messages
            </button>
            <Chat changeMessage={this.changeMessage} > </Chat>
            <br /><br /> 
            <h2 >Get All Solutions</h2>
          Current Numbers:
            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 24, 
              paddingTop: 1.8, paddingBottom: 0.4 }} > {dd1} </button> 

            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 24, 
              paddingTop: 1.8, paddingBottom: 0.4 }} > {dd2} </button> 

            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 24, 
              paddingTop: 1.8, paddingBottom: 0.4 }} > {dd3} </button> 

            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 24, 
              paddingTop: 1.8, paddingBottom: 0.4 }} > {dd4} </button> 
            <br />
            Current Goal:
            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 24, 
              paddingTop: 1.8, paddingBottom: 0.4 }} > {goal2} </button> 
            <br /><br />
            Put new number in a box, then click on the box or press 'Enter'. The number disappears and the result is shown above. Click "Solutions" when you are done.
              <br />
            New Numbers:
            <Number1 change={ddChange1} />
            <Number2 change={ddChange2} />
            <Number3 change={ddChange3} />
            <Number4 change={ddChange4} />
            <br/ >
            New Goal:
            <Goal change={ddChangeGoal2} />
            <br/ >
        Show Solutions
        <button  onClick={this.showSolutionsHandler_2}
          style={this.style7(cr26,cr260,showSolutionsButton)}
          onMouseEnter={() => {this.mouse[26] = 'blue'; this.mouse[260]  = '#01afaf' }}
          onMouseLeave={() => {this.mouse[26] = '#000'; this.mouse[260]  = 'darkred' }} >
          Solutions
        </button>
     </div>

        <Login key='Login' newPlayer={this.newPlayer.bind(this)} name={this.state.name}
          setGroup={this.setGroup} change={this.changeItem}
          group={group} hidden={this.state.hidden} info={this.state.info} >
        </Login>

     <div style = {{ display: startDisplay, paddingTop: 3.8, width: '60%',
              paddingBottom: 0.8, fontSize: 20, marginLeft: 5 }}>
          <div style={{display: rulesDisplayOn, color: '#e9eab6' }} >
            <span style={{fontSize:26}} >Dedication:</span> This game is dedicated to Bloomington, Indiana's Templeton Elementary School and to the "K through 6" program's teachers, Risa Reinier and Kevin Gallagher, who nurture and sustain a wonderful community which will always be a home away from home for my son Alexander. -- David Schalk, August 22, 2015.<br /><br /> 
                The table-top game of Score involves four dice and a one-minute 'hourglass'. The dice might include one twenty-sided, one twelve-sided, and two six-sided dice. Twelve and twenty-sided dice are completely symetrical and therefore roll nicely on the table. 
                <br /><br />
                After the dice are rolled, each player has the opportunity to call out "Score" or "Impossible". A player who calls "Score" must quickly show how to make the number "20" in two or three steps using addition, subtraction, multiplication, division, and/or concatenation. Success gains the player one point. Floundering and failing to quickly show a solution costs the player one point.
                If a player calls "Impossible", the hourglass is turned over and all participants, including the player who called "Impossible", may call "Score" untill the hourglass runs out; that is, the players have one minute in which to find a solution. If the time runs out, the player who called "Impossible" gains one point. If someone calls "Score" before the time runs out and succeeds in quickly making the number "20", that player gains one point and the player who called "Impossible" loses two points. If the player who called "Impossible" subsequently calls "Score" and succeeds in quickly making the number "20", that player loses two points and gains one point for a net loss of one point. If a player calls "Impossible" and then calls "Score" but fails to quickly show a solution, the normal rules are superceded by the "Blocking Violation" rule. The normal rules would give the player one point because nobody found a solution within one minute and subtact one point for failure to quickly show a solution after calling "Score". The net result would be 1 - 1 = 0; that is, no change in score. That would be like calling "Impossible" and then taking it back.  But because the player called "Score" and thereby prevented other players from calling "Score" and possibly succeeding, the player committed a blocking violation. A blocking violation costs the player two points.
                <br /><br />
                The online Game of Score! is slightly different. After clicking "Score", a player has ten seconds in which to perform the first computation and then another ten seconds in which to perform a second computation. If the second computation uses the result of the first computation and results in the number "20", the player gains one point. Otherwise, if any computation is performed within the ten-second window of opportunity, the player gets another ten seconds in which to try to compute the number "20". Letting the time run out or computing anything other than "20" in the third computation costs the player one point.
                <br /><br />
                Players can join one of the three standard groups, or they can create a group of their own by clicking "Create a New Group" and entering whatever group name they choose. Players would need to coordinate through the chat window, email, or telephone so they can agree on a group name. As explained below, they can also agree on different sided dice and a goal other than "20". 
                <br /><br />
                Each group has its own scoreboard and chat area. A player who has not joined a group is automatically in group "solo". Players in "solo" do not share a scoreboard or chat message box. They play solitairre until they join a regular group.
                <br /><br />
                There is an area under the chat window where players can see all possible solutions for whatever four dice numbers and whatever goal they choose. Players cannot use the "Get All Solutions" area during competition, but once they hide the solutions and click ROLL, or wait for another group member to click ROLL, play resumes where it left off.
                <br /><br />
                A detailed explanation of computer code underlying the game can be found at <a href="https://www.fpcomplete.com/user/dschalk/Websockets%20Game%20of%20Score" target="_blank" style={{color: 'darkred'}} >Game Analysis</a>. The source code is available at <a href="https://github.com/dschalk/websockets-react" target="_blank" style={{color: 'red'}} >Game Source Code</a>
                <br /><br /> <span style={{fontSize:26}} >Modifying The Game: </span>
To modify the game, click "Create a New Group" and change the number of sides of whichever die you select. You can also change the goal to something other than the default number "20". Each player in a modified group must modify his or her own game interface in order to coordinate with other players. Modified games are fun for competition and also for solitairre experimentation.
<br /><br />
              </div>

        <button  onClick = {() => {
                  this.disp.rulesDisplayOff = 'none';
                  this.disp.rulesDisplayOn = 'inline';
          }} style={this.style7(cr27,cr270,rulesDisplayOff)}
            onMouseEnter={() => {this.mouse[27] = 'blue'; this.mouse[270]  = '#01afaf'}} 
            onMouseLeave={() => {this.mouse[27] = '#000'; this.mouse[270]  = 'darkred'  }} >
            Show Rules
          </button>

        <button  onClick = {() => {
                  this.disp.rulesDisplayOn = 'none';
                  this.disp.rulesDisplayOff = 'inline';
          }} style={this.style7(cr27,cr270,rulesDisplayOn)}
            onMouseEnter={() => {this.mouse[27] = 'blue'; this.mouse[270]  = '#01afaf' }} 
            onMouseLeave={() => {this.mouse[27] = '#000'; this.mouse[270]  = 'darkred'  }} >
            Hide Rules
        </button>

        <br />

          Current roll:
            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 24, 
              paddingTop: 1.8, paddingBottom: 0.4 }} > {d1} </button> 

            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 24, 
              paddingTop: 1.8, paddingBottom: 0.4 }} > {d2} </button> 

            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 24, 
              paddingTop: 1.8, paddingBottom: 0.4 }} > {d3} </button> 

            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 24, 
              paddingTop: 1.8, paddingBottom: 0.4 }} > {d4} </button> 

            <div style={{marginLeft: 5}} >

              Group:
              <button style={{backgroundColor: '#000', color: '#f00', marginLeft: 5, borderColor: '#93b1f2'}}> 
                {this.data.group} </button>
              Sides:
              <button style={{backgroundColor: '#000', color: '#f00', marginLeft: 5, borderColor: '#93b1f2'}}> 
                {sides1}, {sides2}, {sides3}, {sides4}  </button>
              Goal:
              <button style={{backgroundColor: '#000', color: '#f00', marginLeft: 5, borderColor: '#93b1f2'}}> 
                {goal} </button>
            </div>

          <div style={{marginLeft: 5}} > {this.state.info} </div>

          <button onClick={() => {
                  this.data.group = 'GroupA';
                  this.data.test = true;
                  this.data.chatMessage = '';
                  this.data.chatArray = [];
                  DES_ws.send( `CO#$42,${group},${name},GroupA` );
          }}
            onMouseEnter={() => {
              if (group !== 'GroupA') {
                  this.data.test = false;
                  this.mouse.Abackground = rAbackground;
                  this.mouse.Aborder  = rAborder;
                  this.mouse.Acolor = rAcolor;
                }
              }
            }
            onMouseLeave={() => {
              if (group !== 'GroupA') {
                  this.data.test = true;
                  this.mouse.Abackground = Abackground;
                  this.mouse.Aborder  = Aborder;
                  this.mouse.Acolor = Acolor; 
                }
              }
            }
              style={this.style8(this.mouse.Abackground,this.mouse.Aborder,this.mouse.Acolor)} >
            GroupA
          </button>


          <button onClick={() => {
                  this.data.group = 'GroupB';
                  this.data.test = true;
                  this.data.chatMessage = '';
                  this.data.chatArray = [];
                  DES_ws.send( `CO#$42,${group},${name},GroupB` );
          }}
            onMouseEnter={() => {
              if (group !== 'GroupB') {
                  this.data.test = false;
                  this.mouse.Bbackground = rBbackground;
                  this.mouse.Bborder  = rBborder;
                  this.mouse.Ncolor = rBcolor;
                }
              }
            }
            onMouseLeave={() => {
              if (group !== 'GroupB') {
                  this.data.test = true;
                  this.mouse.Bbackground = Bbackground;
                  this.mouse.Bborder  = Bborder;
                  this.mouse.Bcolor = Bcolor; 
                }
              }
            }
              style={this.style8(this.mouse.Bbackground,this.mouse.Bborder,this.mouse.Bcolor)} >
            GroupB
          </button>



          <button onClick={() => {
                  this.data.group = 'GroupC';
                  this.data.test = true;
                  this.data.chatMessage = '';
                  this.data.chatArray = [];
                  DES_ws.send( `CO#$42,${group},${name},GroupC` );
          }}
            onMouseEnter={() => {
              if (group !== 'GroupC') {
                  this.data.test = false;
                  this.mouse.Cbackground = rCbackground;
                  this.mouse.Cborder  = rCborder;
                  this.mouse.Ccolor = rCcolor;
                }
              }
            }
            onMouseLeave={() => {
              if (group !== 'GroupC') {
                  this.data.test = true;
                  this.mouse.Cbackground = Cbackground;
                  this.mouse.Cborder  = Cborder;
                  this.mouse.Ccolor = Ccolor; 
                }
              }
            }
              style={this.style8(this.mouse.Cbackground,this.mouse.Cborder,this.mouse.Ccolor)} >
            GroupC
          </button>


          <button onClick={() => {
                  this.data.group = 'solo';
                  this.data.test = true;
                  this.data.chatMessage = '';
                  this.data.chatArray = [];
                  DES_ws.send( `CO#$42,${group},${name},GroupA` );
          }}
            onMouseEnter={() => {
              if (group !== 'solo') {
                  this.data.test = false;
                  this.mouse.Sbackground = rSbackground;
                  this.mouse.Sborder  = rSborder;
                  this.mouse.Scolor = rScolor;
                }
              }
            }
            onMouseLeave={() => {
              if (group !== 'solo') {
                  this.data.test = true;
                  this.mouse.Sbackground = Sbackground;
                  this.mouse.Sborder  = Sborder;
                  this.mouse.Scolor = Scolor; 
                }
              }
            }
              style={this.style8(this.mouse.Sbackground,this.mouse.Sborder,this.mouse.Scolor)} >
            solo
          </button>

          <br />

          <GroupNew key='GroupNew' setGroup={this.setGroup} name={this.state.name} />
          <br />
          <div style={{width: '60%'}}>
            <Messages information={information} />
          </div>

          <div style={{paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, fontSize: 20}} >
             {this.state.str1} <br /> {this.state.str2} <br /> {this.state.str3} <br /> {this.state.str4}
          </div>

          <div style={{width: '60%', backgroundColor: dynB, textAlign: 'left',  padding: 0}} >
            <button style={this.style9('#2C2106','#000','#F8EDD2')}>
              {this.state.DS_T}
            </button>
          </div>

          <div style={{width: '60%', backgroundColor: dynB,  padding: 10}} > </div>

          <div style={{ display: rollnumsDisplay }} > 
            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 24, 
              paddingTop: 1.8, paddingBottom: 0.4 }} > {d1} </button> 

            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 24, 
              paddingTop: 1.8, paddingBottom: 0.4 }} > {d2} </button> 

            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 24, 
              paddingTop: 1.8, paddingBottom: 0.4 }} > {d3} </button> 

            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 24, 
              paddingTop: 1.8, paddingBottom: 0.4 }} > {d4} </button> 

          </div>

          <button onClick={this.handleScore}
          style={this.style7(cr9,cr90,scoreDisplay)}
          onMouseEnter={() => {this.mouse[9] = 'blue'; this.mouse[90]  = '#01afaf' }}
          onMouseLeave={() => {this.mouse[9] = '#000'; this.mouse[90]  = 'darkred' }} >
            SCORE!
          </button>

          <button onClick={this.handleScore2}
          style={this.style7(cr19,cr190,scoreDisplay2)}
          onMouseEnter={() => {this.mouse[19] = 'blue'; this.mouse[190]  = '#01afaf' }}
          onMouseLeave={() => {this.mouse[19] = '#000'; this.mouse[190]  = 'darkred' }} >
            SCORE!
          </button>

          <button onClick={this.handleImpossible}
          style={this.style7(cr14,cr140,impossibleDisplay)}
          onMouseEnter={() => {this.mouse[14] = 'blue'; this.mouse[140]  = '#01afaf' }}
          onMouseLeave={() => {this.mouse[14] = '#000'; this.mouse[140]  = 'darkred' }} >
            IMPOSSIBLE
          </button>

          <div style={{width: '60%', backgroundColor: dynB,  padding: 10}} > </div>

       <div style={{width: '60%', backgroundColor: dynB,  padding: 10, display: numDisplay }} >

          <button onClick={this.handleB40}
            onMouseEnter={() => {this.mouse[551] = '#40E0D0'; this.mouse[5511]  = '#01afaf'; this.mouse[55110] = 'purple' }} 
            onMouseLeave={() => {this.mouse[551] = '#01afaf'; this.mouse[5511]  = '#40E0D0'; this.mouse[55110] = 'blue' }} 
            style={this.style4(cr551,cr5511,cr55110)} >
            {this.state.message1}
          </button>

          <button onClick={this.handleB41}
            onMouseEnter={() => {this.mouse[552] = '#40E0D0'; this.mouse[5521]  = '#01afaf'; this.mouse[55210] = 'purple' }} 
            onMouseLeave={() => {this.mouse[552] = '#01afaf'; this.mouse[5521]  = '#40E0D0'; this.mouse[55210] = 'blue' }} 
            style={this.style4(cr552,cr5521,cr55210)} >
            {this.state.message2}
          </button>

          <button onClick={this.handleB42}
            onMouseEnter={() => {this.mouse[3] = '#40E0D0'; this.mouse[31]  = '#01afaf'; this.mouse[310] = 'purple' }} 
            onMouseLeave={() => {this.mouse[3] = '#01afaf'; this.mouse[31]  = '#40E0D0'; this.mouse[310] = 'blue' }} 
            style={this.style4(cr3,cr31,cr310)} >
            {this.state.message3}
          </button>

          <button onClick={this.handleB43}
            onMouseEnter={() => {this.mouse[4] = '#40E0D0'; this.mouse[41]  = '#01afaf'; this.mouse[410] = 'purple' }} 
            onMouseLeave={() => {this.mouse[4] = '#01afaf'; this.mouse[41]  = '#40E0D0'; this.mouse[410] = 'blue' }} 
            style={this.style4(cr4,cr41,cr410)} >
            {this.state.message4}
          </button>

          <div style={{width: '60%',  padding: 10}} > </div>

          <button onClick={this.handleOp0}
            onMouseEnter={() => {this.mouse[5] = '#40E0D0'; this.mouse[51]  = '#01afaf'; this.mouse[510] = 'purple' }} 
            onMouseLeave={() => {this.mouse[5] = '#01afaf'; this.mouse[51]  = '#40E0D0'; this.mouse[510] = 'blue' }} 
            style={this.style4(cr5,cr51,cr510)} >
            +
          </button>

          <button onClick={this.handleOp1}
            onMouseEnter={() => {this.mouse[6] = '#40E0D0'; this.mouse[61]  = '#01afaf'; this.mouse[610] = 'purple' }} 
            onMouseLeave={() => {this.mouse[6] = '#01afaf'; this.mouse[61]  = '#40E0D0'; this.mouse[610] = 'blue' }} 
            style={this.style4(cr6,cr61,cr610)} >
            -
          </button>

          <button onClick={this.handleOp2}
            onMouseEnter={() => {this.mouse[7] = '#40E0D0'; this.mouse[71]  = '#01afaf'; this.mouse[710] = 'purple' }} 
            onMouseLeave={() => {this.mouse[7] = '#01afaf'; this.mouse[71]  = '#40E0D0'; this.mouse[710] = 'blue' }} 
            style={this.style4(cr7,cr71,cr710)} >
            *
          </button>

          <button onClick={this.handleOp3}
            onMouseEnter={() => {this.mouse[8] = '#40E0D0'; this.mouse[81]  = '#01afaf'; this.mouse[810] = 'purple' }} 
            onMouseLeave={() => {this.mouse[8] = '#01afaf'; this.mouse[81]  = '#40E0D0'; this.mouse[810] = 'blue' }} 
            style={this.style4(cr8,cr81,cr810)} >
            /
          </button>

          <button onClick={this.handleOp4}
            onMouseEnter={() => {this.mouse[559] = '#40E0D0'; this.mouse[5591]  = '#01afaf'; this.mouse[55910] = 'purple' }} 
            onMouseLeave={() => {this.mouse[559] = '#01afaf'; this.mouse[5591]  = '#40E0D0'; this.mouse[55910] = 'blue' }} 
            style={this.style4(cr559,cr5591,cr55910)} >
            Concat
          </button>
       </div>
            <div style={{width: '60%',  padding: 10}} />

          <span style={style3} >
            {this.state.mes0}
          </span>

          <span style={style3} >
            {this.state.mes1}
          </span>

          <span style={style3} >
            {this.state.mes2}
          </span>

          <span style={style3} >
            =
          </span>

          <span style={style3} >
            {this.state.res}
          </span>

          <div style={{width: '00%',  padding: 10}} >  </div>

        <div style={{display: rollDisplay}} >
          <button 
          style={this.style7(cr13,cr130,showSolutionsButton)}
          onMouseEnter={() => {this.mouse[13] = 'blue'; this.mouse[130]  = '#01afaf' }} 
          onMouseLeave={() => {this.mouse[13] = '#000'; this.mouse[130]  = 'darkred' }}
              onClick={this.buttonHandler} >
             Roll
          </button>
        </div>
        <br /> <br /> <br /> <br />

        <button  onClick={this.showSolutionsHandler}
          style={this.style7(cr22,cr220,showSolutionsButton)}
          onMouseEnter={() => {this.mouse[22] = 'blue'; this.mouse[220]  = '#01afaf' }} 
          onMouseLeave={() => {this.mouse[22] = '#000'; this.mouse[220]  = 'darkred' }} >
          Solutions
        </button>

        <button  onClick={this.hideSolutionsHandler}
          style={this.style7(cr23,cr230,hideSolutionsButton)}
          onMouseEnter={() => {this.mouse[23] = 'blue'; this.mouse[230]  = '#01afaf' }} 
          onMouseLeave={() => {this.mouse[23] = '#000'; this.mouse[230]  = 'darkred' }} >
          Hide Solutions
        </button>

        <div style={{backgroundColor: '#000038', textAlign: 'left', color: '#fcca05', width: '64%',
          paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20}} >
              {
                    sol.map(function(line) {
                      return (<p>{line}</p>)
                    })
              }
        </div>
        <br />

        <button  onClick={this.hideSolutionsHandler}
          style={this.style7(cr23,cr230,hideSolutionsButton)}
          onMouseEnter={() => {this.mouse[23] = 'blue'; this.mouse[230]  = '#01afaf' }} 
          onMouseLeave={() => {this.mouse[23] = '#000'; this.mouse[230]  = 'darkred'  }} >
          Hide Solutions
        </button>
        <br /><br />

        <button  onClick={this.showParamsHandler}
          style={this.style7(cr24,cr240,showParamsButton)}
          onMouseEnter={() => {this.mouse[24] = 'blue'; this.mouse[240]  = '#01afaf' }} 
          onMouseLeave={() => {this.mouse[24] = '#000'; this.mouse[240]  = 'darkred'  }} >
          Create a New Group 
        </button>

        <div style={{  display: paramsDiv, width: '60%', float: 'left' }} >

          <GroupNew key='GroupNew' setGroup={this.setGroup} name={this.state.name} />

          <p>In this section, you can change the number of seconds you have for each computation. If you don't change it, the time interval will stay at the default value of 10 seconds. <br /><br />
        <ChangeCountdown>
        </ChangeCountdown>
          {this.data.COUNTDOWN}
          <br /><br />
            You can also choose the numbers of sides of each of the dice, and you can also select the goal. For example, you could select 6,6,6, and 6 for the dice and 10 for the goal. A roll of 1,1,2,3 would have a solution:<br />
            1 + 1 = 2<br />
            2 + 3 = 5<br />
            2 * 5 = 10<br />
You can click 'Solutions' to see a computer-generated list of all the solutions.
</p><p>Changing parameters does not change them for other group members. You can use the chat window, email, telephone, or whatever to coordinate a change with other players. If other group members don't know that you modified the parameters in your browser, they might be very surprised to see you get a point for computing, say, the number '18'.
</p><br />

          Sides: 

          <Sides1 change={this.changeItem} > Side 1 </Sides1>
          <Sides2 change={this.changeItem} > Side 2 </Sides2>
          <Sides3 change={this.changeItem} > Side 3 </Sides3>
          <Sides4 change={this.changeItem} > Side 4 </Sides4>
         <br /> <br />
         Goal
        <SetGoal change={this.changeItem} />
        <br /> <br />
        Collapse Parameters Display: 
        <button  onClick={this.hideParamsHandler.bind(this)}
          style={this.style7(cr25,cr250,hideParamsButton)}
          onMouseEnter={() => {this.mouse[25] = 'blue'; this.mouse[250]  = '#01afaf' }} 
          onMouseLeave={() => {this.mouse[25] = '#000'; this.mouse[250]  = 'darkred'  }} >
          Hide New Group Parameters
        </button>
        </div>
     </div>

    <div style={{paddingBottom: 500}} />
  </div>
    )}
  };

render(<B2 key='B2' />, document.getElementById('divSix'));
