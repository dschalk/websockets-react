'use strict'
export {B4};
import React from 'react';
// let Immutable = require('immutable');
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class Button {
    shouldComponentUpdate = shouldPureComponentUpdate;

      render= () => { }
}


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
    console.log(this);
    if ((this.props.hidden2)) { return ( null ) }
    return (
      <div style={{marginLeft: 5}} >
        <label>New Group<input type="text" id='cow' onKeyDown={this.handleEnter.bind(this)}
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
    console.log(this);
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
    console.log(this);
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
    console.log(this);
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
    console.log(this);
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
    console.log(this);
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
    console.log(this);
    return (
          <input type="text" onKeyDown={this.handleEnter.bind(this)} onClick={this.click.bind(this)}
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
    console.log(this);
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
    console.log(this);
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

class Solutions2 extends React.Component {
    constructor(props) {
      super(props);
      let formatted;
  }
  clickHandler = () => {
    this.props.solFunc();
  }
  render = () => {
    let formatted = this.props.sol.map(function(line) {
      return (<p>{line}</p>);
    });
    if (this.props.hidden2) { return ( null ) }
    return (
        <div  onClick={this.clickHandler.bind(this)} >
          <div>
            Solutions <br /> <br />
            {formatted}
          </div>
        </div>
    )
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange (event) {
    this.props.change({name: event.target.value});
  }
  handleEnter (event) {
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
        });
      DES_ws.send('CC#$42'+name);
    }
  }
  render = () => {
    console.log(this);
    if ((this.props.hidden)) { return ( null ) }
    let name = this.props.name;
    return (
      <div>
        <input autoFocus type="text" name={name} onChange={this.handleChange.bind(this)}
          style={{backgroundColor: '#d8d17d'}}
        onKeyDown={this.handleEnter.bind(this)} />
        {this.props.name}
        <button onClick={this.click.bind(this)} style={{backgroundColor: '#d8d17d', color: '#f00'}} >
          Join
        </button>
      </div>
    );
  }
};

class B4 extends React.Component {
  constructor(props) {
    super(props);
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
        resPrevious: 'whatever',
        str1: "",
        str2: "",
        str3: "",
        str4: "",
        hidden: false,
        hidden2: true,
        togDice: false,
        name: "",
        DS_T: "PAUSE",
        N: 0,
        STRING: '',
        impossibleClicker: "a@F$Uy&imp",
        scoreClicker: "a@F$Uy&sc",
        interruptClicker: "a@F$intrup%$",
        scoreB: ["Greetings new player."],
        chatMessage: "",
        chatArray:[""],
        group: 'solo',
        info: '',
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
        buttonColor0: '#83f7d7',
        buttonColor1: '#83f7d7',
        buttonColor2: '#83f7d7',
        buttonColor3: '#83f7d7',
        buttonColor4: '#acf9a2',
        buttonColor5: '#acf9a2',
        buttonColor6: '#acf9a2',
        buttonColor7: '#acf9a2',
        buttonColor8: '#acf9a2',
        buttonColor9: '#83f7d8',
        buttonColor10: '#f4f7af',
        buttonColor11: '#f4f7af',
        buttonColor12: '#f4f7af',
        buttonColor13: '#f4f7af',
        buttonColor14: '#f4f7af',
        buttonColor: '#83f7d7',
        colorB42: '#000',
        startDisplay: 'none',
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
      }

let that = this;

DES_ws.onopen = function(e) {
	console.log("DES_ws.onopen");
  }

DES_ws.onmessage = function(event) {
  console.log("$$$$$$$$$$$$$$$$$$$$$___ incoming data ____")
  console.log(event.data);
  console.log("&&&&&&&&&&&&&&&&&&&& ___ that was incoming data ____")
  let gameArray = event.data.split(",");
  let d2 = event.data.substring(0,6);
  let d3 = event.data.substring(2,6);
  let sendersGroup = gameArray[1];   // The sender's group.
  let sender = gameArray[2];
  let extra = gameArray[3];
  let ext4 = gameArray[4];
  let ext5 = gameArray[5];
  let ext6 = gameArray[6];
  let ext7 = gameArray[7];
  let ext8 = gameArray[8];
  let group = that.state.group;
  let name = that.state.name;
  console.log('################################################### gameArray #################');
  console.log(gameArray);
  console.log('################################################# That was gameArray ##########');
  // let p = $(document.createElement('p')).text(event.data);
  let ar = extra.split("<br>");
  let ar2 = ar.map(function (x) {
    return x.split("_")
  })

  function inGroup (x) {
    return x[2] == ' ' + group
  }
  let ar3 = ar2.filter(inGroup)
  console.log("44444444444444444444444444444444444444444444444444444 ar, ar2 ")
  console.log(ar);
  console.log(ar2);
  console.log("4444444444444444444444444444444444444444444444444444444444444444444")

  // if ( ( that.state.group === gameArray[1]) || name === sender || extra === '%#8*&&^1#$%^' || d2 == "CB#$42") {
      switch (d2) {

          case "CC#$42":                         // Not broadcast. Login message.
            if (extra === '%#8*&&^1#$%^')  {
              that.setState({info: `You entered a name which is already taken`})
              setTimeout( function () {
                document.location.reload(false);
              },2000);
            }
            else {
              that.setState({
                group: "individual",
                info: "Click ROLL for numbers. Click SCORE! to try for a point."
              })
              DES_ws.send(`CO#$42,solo,${name},${name}`);
            }
          break;

          case "CZ#$42":                             // Solutions.
            let s = extra.split("<br />");
            that.setState({sol: s}); 
          break;

          case "CA#$42":                             // Triggered by ROLL
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
                DS_T: 'Click SCORE! to score points.',
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
                message: 'You must click SCORE! in order to gain a point.'
              }, function () {
                  return;
                });
          break;

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
            console.log("________________________CB extra");
            console.log(extra);
            console.log(ext4);
            console.log("________________________CB extra");
            //  }
          break;

          case "CD#$42":
            let xm = that.state.chatMessage;
            let newM = event.data.split("&@3#^7$")[1];
            let xmess = newM + "<br>" + xm;
            let ar3 = xmess.split("<br>");
            that.setState({
              chatMessage: xmess,
              chatArray: ar3
            });
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

          case "CY#$42": // Triggered by clicking "SCORE!".
            that.setState( {
              scoreClicker: extra,
              score: true,
              message: '',
              DS_T: 10,
              impossibleDisplay: 'none',
              solutionsDisplay: 'none',
              paramsDisplay: 'none',
              shrinkSol: 'none',
              solutionsButton: 'none',
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

          case "XY#$42":              // Triggered by clicking "SCORE!" after "IMPOSSIBLE".
            that.setState( {
              interruptClicker: extra,
              interrupt: true,
              message: '',
              DS_T: 10,
              scoreDisplay: 'none',
              solutionsDisplay: 'none',
              paramsDisplay: 'none',
              shrinkSol: 'none',
              solutionsButton: 'none',
              paramsButton : 'none',
              shrinkPar: 'none',
              numDisplay: 'inline',
              rollnumsDisplay: 'none'
            } )
          break;

          case "DY#$42":                               // Triggered by clicking  "IMPOSSIBLE".
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
        showSolutionsButton: 'inline',
        hideSolutionsButton: 'none',
            })
          break;

          case "DC#$42":
            console.log("___________________########$$$$$$$$__________Name taken.");
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
    let group = this.state.group;
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

    if ( this.state.DS_T*1 === 0 ) {
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
  		let z2 = impossibleClicker === name;
  		let z3 = interruptClicker === name;
  	  let gr = group;
      if (!interrupt) {
				if (z) {
        	DES_ws.send(`CG#$42,${gr},${name},-1`);
          DES_ws.send(`CH#$42,${gr},${name},10 seconds expired. Deduct one point from ${scoreClicker}`);

      	}
			  else if (z2) {
        	DES_ws.send(`CG#$42,${gr},${name},1`);
          DES_ws.send(`CH#$42,${gr},${name},60 seconds expired. One point for ${impossibleClicker}`);

				}
			}
      else if (z3) {
        DES_ws.send(`CG#$42,${gr},${interruptClicker},-1`);
				DES_ws.send(`CH#$42,${group},${interruptClicker},10 seconds expired. One point awarded to ${that.state.impossibleClicker}. One point deducted from ${interruptClicker}.`);

				DES_ws.send(`CG#$42,${gr},${impossibleClicker},1`);
		  }
		}
  }, 1000 )
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

  hoverHandler = () => {
    this.setState( {buttonColor: '#f99094' })
  }
  leaveHandler = () => {
    this.setState( {buttonColor: '#83f7d8' })
  }
  hoverHandler0 = () => {
    this.setState( {buttonColor0: '#f99094' })
  }
  leaveHandler0 = () => {
    this.setState( {buttonColor0: '#83f7d8' })
  }
  hoverHandler1 = () => {
    this.setState( {buttonColor1: '#f99094' })
  }
  leaveHandler1 = () => {
    this.setState( {buttonColor1: '#83f7d8' })
  }
  hoverHandler2 = () => {
    this.setState( {buttonColor2: '#f99094' })
  }
  leaveHandler2 = () => {
    this.setState( {buttonColor2: '#83f7d8' })
  }
  hoverHandler3 = () => {
    this.setState( {buttonColor3: '#f99094' })
  }
  leaveHandler3 = () => {
    this.setState( {buttonColor3: '#83f7d8' })
  }

  hoverHandler4 = () => {
    this.setState( {buttonColor4: '#f99094' })
  }

  leaveHandler4 = () => {
    this.setState( {buttonColor4: '#acf9a2' })
  }

  hoverHandler5 = () => {
    this.setState( {buttonColor5: '#f99094' })
  }

  leaveHandler5 = () => {
    this.setState( {buttonColor5: '#acf9a2' })
  }

  hoverHandler6 = () => {
    this.setState( {buttonColor6: '#f99094' })
  }

  leaveHandler6 = () => {
    this.setState( {buttonColor6: '#acf9a2' })
  }

  hoverHandler7 = () => {
    this.setState( {buttonColor7: '#f99094' })
  }

  leaveHandler7 = () => {
    this.setState( {buttonColor7: '#acf9a2' })
  }

  hoverHandler8 = () => {
    this.setState( {buttonColor8: '#f99094' })
  }

  leaveHandler8 = () => {
    this.setState( {buttonColor8: '#acf9a2' })
  }

  hoverHandler9 = () => {
    this.setState( {buttonColor9: '#f99094' })
  }

  leaveHandler9 = () => {
    this.setState( {buttonColor9: '#83f7d8' })
  }

  hoverHandler10 = () => {
    this.setState( {buttonColor10: '#f99094' })
  }

  leaveHandler10 = () => {
    this.setState( {buttonColor10: '#f7b16f' })
  }

  hoverHandler11 = () => {
    this.setState( {buttonColor11: '#f99094' })
  }

  leaveHandler11 = () => {
    this.setState( {buttonColor11: '#f7b16f' })
  }

  hoverHandler12 = () => {
    this.setState( {buttonColor12: '#f99094' })
  }

  leaveHandler12 = () => {
    this.setState( {buttonColor12: '#f7b16f' })
  }

  hoverHandler13 = () => {
    this.setState( {buttonColor13: '#f99094' })
  }

  leaveHandler13 = () => {
    this.setState( {buttonColor13: '#83f7d8' })
  }

  hoverHandler14 = () => {
    this.setState( {buttonColor14: '#f99094' })
  }

  leaveHandler14 = () => {
    this.setState( {buttonColor14: '#83f7d8' })
  }

  hoverHandler15 = () => {
    this.setState( {buttonColor5: '#f99094' })
  }

  leaveHandler15 = () => {
    this.setState( {buttonColor5: '#acf9a2' })
  }

  solutions = () => {
    let group = this.state.group;
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
    console.log("############$$$$$$$$$$$$$$$$$$___ IN displayHandler ___")
  }

  rollDice = () => {
    let col = this.state.dynamicColor;
    this.setState({
      DS_T: '',
      test: false,
      score: false,
      impossible: false,
      interrupt: false,
      sty: {color: col, width: 50, marginLeft: 30, padding: 10},
      colorB42: '#ff0000',
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
    let group = this.state.group;
    let a = this.state.sides1;
    let b = this.state.sides2;
    let c = this.state.sides3;
    let d = this.state.sides4;
    DES_ws.send(`CF#$42,${group},${name},`);
    DES_ws.send(`CA#$42,${group},${name},${a},${b},${c},${d}`);
  }

  handleGroupA = () => {
    let name = this.state.name;
    let group = this.state.group;
    DES_ws.send( `CO#$42,${group},${name},GroupA` );
    this.setState({
      group: 'GroupA',
      chatMessage: '',
      chatArray: []
    });
  }

  handleGroupB = () => {
    let name = this.state.name;
    let group = this.state.group;
    DES_ws.send( `CO#$42,${group},${name},GroupB` );
    this.setState({
      group: 'GroupB',
      chatMessage: '',
      chatArray: []
    });
  }

  handleGroupC = () => {
    let name = this.state.name;
    let group = this.state.group;
    DES_ws.send( `CO#$42,${group},${name},GroupC` );
    this.setState({
      group: 'GroupC',
      chatMessage: '',
      chatArray: []
    });
  }

  setGroup = x => {
    let name = this.state.name;
    let group = this.state.group;
    this.setState({
      group: x,
      chatMessage: '',
      chatArray: []
    });
    DES_ws.send( `CO#$42,${group},${name},${x}` );
  }

  setNumberAr (result,str,test) {
    let w1 = this.state.message1;
    let w2 = this.state.message2;
    let w3 = this.state.message3;
    let w4 = this.state.message4;
    let startArray = [w1, w2, w3, w4, result];
    this.newNums(result,str,test,teststartArray);
  }

  calc (mes0,mes1,mes2) { 
    let that = this;
    let res = 0;
    let delay = this.delay;
    let n = this.state.N;
    let resP = this.state.resPrevious;
    let ar5 = [mes0,mes2];
    let test = (resP === mes0 || resP === mes2);
    this.setState({
      test: test
    });
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
    this.setState({
      STRING: str,
      resPrevious: result.toString(),
      message: '',
      colorB42: '#ff0000'
    })
    let w1 = this.state.message1;
    let w2 = this.state.message2;
    let w3 = this.state.message3;
    let w4 = this.state.message4;
    let startArray = [w1, w2, w3, w4, result];
    this.newNums(result,str,test,startArray);
  }

  newNums (result,str,test,numbers) {
    let j = 0;
    let gr = this.state.group;
    let ar = [];
    let clock = '';
    let name = this.state.name;
    let impossibleClicker = this.state.impossibleClicker;
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
      this.setState({message: 'You must use the red number in order to score in this round.'});
      if (test2) {
        DES_ws.send( `CK#$42,${gr},${name},10` );
      }
      else {
        DES_ws.send( `CK#$42,${gr},${name},Did not click SCORE!` );
      }
    }
    else if (j === 2) {
      DES_ws.send(`GQ#$42,${gr},${name},${str}`);
      DES_ws.send(`CE#$42,${gr},${name},${ar[0]},${ar[1]},,`);
      if ( (result == goal) && test && test2 && !interrupt ) {
          this.setState({DS_T: -1});
          DES_ws.send( `CK#$42,${gr},${name},One point for ${name}` );
          DES_ws.send( `CR#$42,${gr},${name},${name}` );
          DES_ws.send( `CG#$42,${gr},${name},1` );
      }
      else if ( (result == goal) && test && test2 && interrupt ) {
        this.setState({DS_T: -1});
        DES_ws.send( `CK#$42,${gr},${name},One point for ${name}. Two points deducted from ${impossibleClicker}`);
        DES_ws.send( `CR#$42,${gr},${name},${name}` );
        DES_ws.send( `CG#$42,${gr},${name},1` );
        DES_ws.send( `CG#$42,${gr},${impossibleClicker},-2` );
      }
      else if (test2) {
        DES_ws.send( `CK#$42,${gr},${name},10` );
      }
      else {
        DES_ws.send( `CK#$42,${gr},${name},Did not click SCORE!` );
      }
    }
    else if (j === 1) {
      DES_ws.send(`HQ#$42,${gr},${name},${str}`);
      DES_ws.send(`CE#$42,${gr},${name},${ar[0]},,,`)
      if (result == goal && test && test2 && !interrupt) {
          DES_ws.send( `CK#$42,${gr},${name},One point for ${name}` );
          DES_ws.send( `CR#$42,${gr},${name},${name}` );
          DES_ws.send( `CG#$42,${gr},${name},1` );
      }
      else if (result == goal && test2) {
        this.setState({DS_T: -1});
          DES_ws.send( `CK#$42,${gr},${name},One point for ${name}. Two points deducted from ${impossibleClicker}`);
          DES_ws.send( `CR#$42,${gr},${name},${name}` );
          DES_ws.send( `CG#$42,${gr},${name},1` );
          DES_ws.send( `CG#$42,${gr},${impossibleClicker},-2` );
        }
      else if (result != goal && test && test2 && !interrupt) {
          DES_ws.send( `CK#$42,${gr},${name},The result is not 20. ${name} lost one point.` );
          DES_ws.send( `CR#$42,${gr},${name},${name}` );
          DES_ws.send( `CG#$42,${gr},${name},-1` );
        }
      else if (result != goal && test && test2 && interrupt) {
          DES_ws.send( `CK#$42,${gr},${name},The result is not 20. ${name} lost one point.
                      One point awarded to ${impossibleClicker}.`);
          DES_ws.send( `CR#$42,${gr},${name},${name}` );
          DES_ws.send( `CG#$42,${gr},${impossibleClicker},1` );
          DES_ws.send( `CG#$42,${gr},${name},-1` );
        }
      }
    }

  newPlayer (x) {
    this.setState({name: x});
    DES_ws.send("CC#42$"+x)
  }

  changeItem (x) {
    this.setState(x, () => {
      this.setState(x);
    })
  }

  changeMessage (x) {
    let name = this.state.name;
    let gr = this.state.group;
    DES_ws.send (`CD#$42,${gr},${name},&@3#^7$${name}: ${x}`);
  }

  logMessage = () => {
    console.log("*************************************************************************** Message from logMessage");
  }

  buttonHandler = () => {
    let name = this.state.name;
    let group = this.state.group;
    DES_ws.send( `IA#$42,${group},${name},Click SCORE to begin` );
    this.rollDice();
  }

  handleB40 = () => {
    let name = this.state.name;
    let group = this.state.group;
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
    let group = this.state.group;
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
    let group = this.state.group;
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
    let group = this.state.group;
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
    let group = this.state.group;
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
    let group = this.state.group;
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
    let group = this.state.group;
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
    let group = this.state.group;
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
    let group = this.state.group;
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
    let group = this.state.group;
    DES_ws.send( `CY#$42,${group},${name},${name}` );
  }

  handleScore2 = () => {
    let name = this.state.name;
    let group = this.state.group;
    DES_ws.send( `XY#$42,${group},${name},${name}` );
  }

  handleImpossible = () => {
    let name = this.state.name;
    let group = this.state.group;
    DES_ws.send( `DY#$42,${group},${name},${name}` );
  }

  eraseMessages = () => {
    this.setState({
      chatArray: [],
      chatMessage: ''
    });
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
    let name = this.state.name;
      let group = this.state.group;
      let a = this.state.d1;
      let b = this.state.d2;
      let c = this.state.d3;
      let d = this.state.d4;
      let goal = this.state.goal;
      DES_ws.send(`CZ#$42,${group},${name},${a},${b},${c},${d},${goal}`);
      this.setState({
        rollDisplay: 'none',
        scoreDisplay: 'none',
        impossibleDisplay: 'none',
        scoreDisplay2: 'none',
        showSolutionsButton: 'none',
        hideSolutionsButton: 'inline',
      });
  }

  hideSolutionsHandler = () => {
    let _this = this;
    this.setState({
        message: 'Play forfeited for this round by opening Solutions',
        DS_t: 'Please wait for the next roll. You displayed solutions.',
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

  render = () => {
    let buttonCol = this.state.buttonColor;
    let buttonCol0 = this.state.buttonColor0;
    let buttonCol1 = this.state.buttonColor1;
    let buttonCol2 = this.state.buttonColor2;
    let buttonCol3 = this.state.buttonColor3;
    let buttonCol4 = this.state.buttonColor4;
    let buttonCol5 = this.state.buttonColor5;
    let buttonCol6 = this.state.buttonColor6;
    let buttonCol7 = this.state.buttonColor7;
    let buttonCol8 = this.state.buttonColor8;
    let buttonCol9 = this.state.buttonColor9;
    let buttonCol10 = this.state.buttonColor10;
    let buttonCol11 = this.state.buttonColor11;
    let buttonCol12 = this.state.buttonColor12;
    let buttonCol13 = this.state.buttonColor13;
    let buttonCol14 = this.state.buttonColor14;
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

    console.log(this);
    return (
   <div style={{backgroundColor: dynB, color: dynC, fontSize: dynF, 
      display: rightDisplay, width: '100%', height: '100%'}} >
      <div style={{width: '35%', float: 'right'}} >
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
                          this.state.chatArray.map(function(line) {
                            return (<p key={line.id} > {line} </p>);
                          })
                      }
                </div>
            </button>
            <button  onClick={this.eraseMessages} style={{backgroundColor: '#4c1616', color: '#f2f246', 
              fontSize: 14, marginLeft: 10}} >
              Erase Messages
            </button>
            <Chat changeMessage={this.changeMessage.bind(this)} > </Chat>
            <div style={{paddingBottom: 200}} />
     </div>

        <Login key='Login' newPlayer={this.newPlayer.bind(this)} name={this.state.name}
          setGroup={this.setGroup.bind(this)} change={this.changeItem.bind(this)}
          group={this.state.group} hidden={this.state.hidden} info={this.state.info} >
        </Login>

     <div style = {{ display: startDisplay, paddingTop: 1.1, width: '65%',
              paddingBottom: 0.9, fontSize: 20, marginLeft: 5 }}>
          Current roll:
						<button style={{backgroundColor: '#000', color: '#f00',marginLeft: 5, borderColor: '#93b1f2' }}>  
								{ this.state.d1} </button>
            <button style={{backgroundColor: '#000', color: '#f00', borderColor: '#93b1f2'}}>
                {this.state.d2} </button>
            <button style={{backgroundColor: '#000', color: '#f00', borderColor: '#93b1f2'}}>
                {this.state.d3} </button>
            <button style={{backgroundColor: '#000', color: '#f00', borderColor: '#93b1f2'}}>
                {this.state.d4} </button>
            <div style={{marginLeft: 5}} >
              Group:
              <button style={{backgroundColor: '#000', color: '#f00', marginLeft: 5, borderColor: '#93b1f2'}}> 
                {this.state.group} </button>
            </div>

          <div style={{marginLeft: 5}} > {this.state.info} </div>

          <button onMouseEnter={this.hoverHandler10} onClick={this.handleGroupA}
            onMouseLeave={this.leaveHandler10}
            style={{backgroundColor: buttonCol10,  paddingTop: 1.1, 
              paddingBottom: 0.9, marginRight: 3, fontSize: 14, marginLeft: 10}} >
            GroupA
          </button>

          <button onMouseEnter={this.hoverHandler11} onClick={this.handleGroupB}
            onMouseLeave={this.leaveHandler11}
            style={{backgroundColor: buttonCol11,  paddingTop: 1.1,
              paddingBottom: 0.9, marginRight: 3, fontSize: 14, marginLeft: 10}} >
            GroupB
          </button>

          <button onMouseEnter={this.hoverHandler12} onClick={this.handleGroupC}
            onMouseLeave={this.leaveHandler12}
            style={{backgroundColor: buttonCol12,  paddingTop: 1.1,
              paddingBottom: 0.9, marginRight: 3, fontSize: 14, marginLeft: 10}} >
            GroupC
          </button>

          <GroupNew key='GroupNew' setGroup={this.setGroup} hidden2={this.state.hidden2}
            name={this.state.name} />

          <br />

          <div style={{paddingTop: 1.1,
              paddingBottom: 0.9, marginRight: 3, fontSize: 20}} >
             {this.state.str1} <br /> {this.state.str2} <br /> {this.state.str3} <br /> {this.state.str4}
          </div>

          <div style={{width: '100%', backgroundColor: dynB,  padding: 10}} > </div>

          <button onMouseEnter={this.hoverHandler9} 
            onMouseLeave={this.leaveHandler9}
            style={{backgroundColor: buttonCol9, display: timerDisplay, paddingTop: 1.1,
              paddingBottom: 0.9, marginRight: 3, marginLeft: 10, fontSize: timeSize}} >
            {this.state.DS_T}
          </button>
          <div style={{ display: rollnumsDisplay }} > 
            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 26 }} > {this.state.d1} </button> 
            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 26 }} > {this.state.d2} </button> 
            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 26 }} > {this.state.d3} </button> 
            <button style={{backgroundColor: '#000', color: 'red', borderColor: 'lightBlue', fontSize: 26 }} > {this.state.d4} </button> 
          </div>
          <button onMouseEnter={this.hoverHandler9} onClick={this.handleScore}
            onMouseLeave={this.leaveHandler9}
            style={{backgroundColor: buttonCol9, display: scoreDisplay, paddingTop: 1.1,
              paddingBottom: 0.9, marginRight: 3, marginLeft: 10, fontSize: timeSize}} >
            SCORE!
          </button>

          <button onMouseEnter={this.hoverHandler9} onClick={this.handleScore2}
            onMouseLeave={this.leaveHandler9}
            style={{backgroundColor: buttonCol9, display: scoreDisplay2, paddingTop: 1.1,
              paddingBottom: 0.9, marginRight: 3, marginLeft: 10, fontSize: timeSize}} >
            SCORE!
          </button>       

          <button onMouseEnter={this.hoverHandler14} onClick={this.handleImpossible}
            onMouseLeave={this.leaveHandler14}
            style={{backgroundColor: buttonCol14, display: impossibleDisplay, paddingTop: 1.1,
              paddingBottom: 0.9, marginRight: 3, marginLeft: 10, fontSize: timeSize  }} >
            IMPOSSIBLE
          </button>

          <div style={{width: '100%', backgroundColor: dynB,  padding: 10}} > </div>

          <div style={{marginLeft: 12}} > {this.state.message } </div>
          <br />

       <div style={{width: '100%', backgroundColor: dynB,  padding: 10, display: numDisplay }} >

          <button onMouseEnter={this.hoverHandler0} onClick={this.handleB40}
            onMouseLeave={this.leaveHandler0}
            style={{backgroundColor: buttonCol0,  paddingTop: 1.1, paddingLeft: 12, paddingRight:12,
              paddingBottom: 0.9, marginRight: 3, fontSize: timeSize  }} >
            {this.state.message1}
          </button>

          <button onMouseEnter={this.hoverHandler1} onClick={this.handleB41}
            onMouseLeave={this.leaveHandler1}
            style={{backgroundColor: buttonCol1,  paddingTop: 1.1, paddingLeft: 12, paddingRight:12,
              paddingBottom: 0.9, marginRight: 3, fontSize: timeSize  }} >
            {this.state.message2}
          </button>

          <button onMouseEnter={this.hoverHandler2} onClick={this.handleB42}
            onMouseLeave={this.leaveHandler2}
            style={{backgroundColor: buttonCol2,  paddingTop: 1.1, paddingLeft: 12, paddingRight:12,
              paddingBottom: 0.9, marginRight: 3, fontSize: timeSize  }} >
            {this.state.message3}
          </button>

          <button onMouseEnter={this.hoverHandler3} onClick={this.handleB43}
            onMouseLeave={this.leaveHandler3}
            style={{backgroundColor: buttonCol3,  paddingTop: 1.1, paddingLeft: 12, paddingRight:12,
              paddingBottom: 0.9, marginRight: 3, fontSize: timeSize  }} >
            {this.state.message4}
          </button>

          <div style={{width: '100%',  padding: 10}} > </div>

          <button onMouseEnter={this.hoverHandler4} onClick={this.handleOp0}
            onMouseLeave={this.leaveHandler4}
            style={{backgroundColor: buttonCol4,  paddingTop: 1.1, paddingLeft: 12, paddingRight:12,
              paddingBottom: 0.9, marginRight: 3, marginLeft: 10, fontSize: timeSize  }} >
            +
          </button>

          <button onMouseEnter={this.hoverHandler5} onClick={this.handleOp1}
            onMouseLeave={this.leaveHandler5}
            style={{backgroundColor: buttonCol5,  paddingTop: 1.1, paddingLeft: 12, paddingRight:12,
              paddingBottom: 0.9, marginRight: 3, fontSize: timeSize  }} >
            -
          </button>

          <button onMouseEnter={this.hoverHandler6} onClick={this.handleOp2}
            onMouseLeave={this.leaveHandler6}
            style={{backgroundColor: buttonCol6,  paddingTop: 1.1, paddingLeft: 12, paddingRight:12,
              paddingBottom: 0.9, marginRight: 3, fontSize: timeSize  }} >
            *
          </button>

          <button onMouseEnter={this.hoverHandler7} onClick={this.handleOp3}
            onMouseLeave={this.leaveHandler7}
            style={{backgroundColor: buttonCol7,  paddingTop: 1.1, paddingLeft: 12, paddingRight:12,
              paddingBottom: 0.9, marginRight: 3, fontSize: timeSize  }} >
            /
          </button>

          <button onMouseEnter={this.hoverHandler8} onClick={this.handleOp4}
            onMouseLeave={this.leaveHandler8}
            style={{backgroundColor: buttonCol8,  paddingTop: 1.1,
              paddingBottom: 0.9, marginRight: 3, fontSize: timeSize  }} >
            Concat
          </button>
       </div>
          <div style={{width: '100%',  padding: 10}} />

          <span style={{paddingTop: 1.1,
              paddingBottom: 0.9, marginRight: 3, marginLeft: 10, fontSize: 16}} >
            {this.state.mes0}
          </span>

          <span style={{paddingTop: 1.1,
              paddingBottom: 0.9, marginRight: 3, fontSize: 16}} >
            {this.state.mes1}
          </span>

          <span style={{paddingTop: 1.1,
              paddingBottom: 0.9, marginRight: 3, fontSize: 16}} >
            {this.state.mes2}
          </span>

          <span style={{paddingTop: 1.1,
              paddingBottom: 0.9, marginRight: 3, fontSize: 16}} >
            =
          </span>

          <span style={{paddingTop: 1.1,
              paddingBottom: 0.9, marginRight: 3, fontSize: 16}} >
            {this.state.res}
          </span>

          <div style={{width: 1200,  padding: 10}} >  </div>

        <div style={{display: rollDisplay}} >
          <button onMouseEnter={this.hoverHandler}
            onMouseLeave={this.leaveHandler} style={{backgroundColor: buttonCol, marginLeft: 10, display: buttonDisplay}}
              onClick={this.buttonHandler} >
             Roll
          </button>
        </div>
        <br /> <br/>


        <button  onClick={this.showSolutionsHandler} style={{backgroundColor: '#000038', textAlign: 'left', color: '#fcca05',
          display: showSolutionsButton, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20}} >
          Solutions
        </button>

        <button  onClick={this.hideSolutionsHandler} style={{backgroundColor: '#000038', textAlign: 'left', color: '#fcca05',
          display: hideSolutionsButton, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20}} >
          Hide Solutions
        </button>

        <div style={{backgroundColor: '#000038', textAlign: 'left', color: '#fcca05',
          paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20}} >
              {
                    sol.map(function(line) {
                      return (<p>{line}</p>)
                    })
              }
        </div>



        <button  onClick={this.showParamsHandler} style={{backgroundColor: '#000038', textAlign: 'left', color: '#fcca05',
          display: showParamsButton, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20}} >
          Parameters 
        </button>

        <button  onClick={this.hideParamsHandler} style={{backgroundColor: '#000038', textAlign: 'left', color: '#fcca05',
          display: hideParamsButton, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20}} >
          Hide Parameters
        </button>

        <div style={{  display: paramsDiv, width: '100%', float: 'left' }} >
          <p>In this section, you can choose the numbers of sides of each of the dice, and you can also select the goal. For example, you could select 6,6,6, and 6 for the dice and 10 for the goal. A roll of 1,1,2,3 would have a solution:<br />
            1 + 1 = 2<br />
            2 + 3 = 5<br />
            2 * 5 = 10<br />
You can click 'Solutions' to see a computer-generated list of all the solutions.
</p><p>Changing parameters does not change them for other group members. You can use the chat window to coordinate a change. If other group members don't know that you modified the parameters in your browser, they might be very surprised to see you get a point for computing, say, the number '18'.
</p><br />
          
          Sides: 

          <Sides1 change={this.changeItem.bind(this)} > Side 1 </Sides1>
          <Sides2 change={this.changeItem.bind(this)} > Side 2 </Sides2>
          <Sides3 change={this.changeItem.bind(this)} > Side 3 </Sides3>
          <Sides4 change={this.changeItem.bind(this)} > Side 4 </Sides4>
         <br /> <br />
         Goal
        <SetGoal change={this.changeItem.bind(this)} />
        <br /> <br />
        Collapse Parameters Display: 
        <button  onClick={this.hideParamsHandler.bind(this)} style={{backgroundColor: '#000038', textAlign: 'left', color: '#fcca05',
          display: hideParamsButton, paddingTop: 1.1, paddingBottom: 0.9, marginRight: 3, marginLeft: 12, fontSize: 20}} >
          Shrink Parameters
        </button>
        </div>
     </div>


       <div style={{display: extraDisplay, width: '100%', float: 'left'}} >
          <button onMouseEnter={this.hoverHandler5.bind(this)} onMouseLeave={this.leaveHandler5.bind(this)}
            style={{backgroundColor: buttonCol5,  paddingTop: 1.1, paddingLeft: 12, paddingRight:12,
              paddingBottom: 0.9, marginRight: 3, fontSize: timeSize  }} >
            Return To Game
          </button>
        </div>


    <div style={{paddingBottom: 500}} />
  </div>
    )}
  };

  React.render(<B4 />, document.getElementById('divSix'));
