'use strict'
export {B4};
import React from 'react';

let mes0 = 'Number';
let mes1 = 'Operator';
let mes2 = 'Number';
let temp = 'temp';
let sol = [];
let message1 = 0;
let message2 = 0;
let message3 = 0;
let message4 = 0;
let mAr = [0,0,0,0,'result'];
let op1 = '+';
let op2 = '-';
let op3 = '*';
let op4 = '/';
let op5 = 'Concat';
let selection0 = '77777';
let selection1 = '88888';
let selection2 = '99999';
let res = 'result';
let setIntervallet = 0;
let str1 = "";
let str2 = "";
let str3 = "";
let str4 = "";

let hidden = false;
let hidden2 = true;
let hidden3 = false;
let hidden4 = true;

let togDice = false;
let name = "";
let DS_T = "SCORE!";
let N = 0;
let STRING = '';
let impossibleClicker = "a@F$Uy&imp";
let scoreClicker = "a@F$Uy&sc";
let scoreBoard = ["Greetings new player."];
let INPLAY = false;
let group = 'solo';
let info = 'Please enter a name.';

/*
var users = [];
var ar = [];
var bool = [];
var createFunctions;
var createDom;
var createOperators;
var createDropboxes;
var createDrop1;
var createDrop2;
var timer;
var refreshDropboxes;
var populate;
var refresh;
var calc;
var DS_ar = [];
var rollM = "6,6,12,20";
var playerM = "Jack of Hearts";
var impossibleClickerM = "a@F$Uy&impossible";
var scoreClickerM = "a@F$Uy&score";
var groupM = "private";
var rollTextM = "1,1,1,1";
var dM = -1;
var gameM = "off";
var goalM = 20;
var goal32M = 20;
var DS_ob = {};
DS_ob.ar = [];
DS_ob.bool = [];
DS_ob.scoreFunc = function() {
        $("#countdown").html("");
        $("#a0").html("");
        if (playerM === scoreClickerM) {
            ws.send("CL#$42," + groupM + "," + playerM + "," + "place holder");
        }
        if ( playerM === impossibleClickerM) {
            ws.send("CM#$42,"+ groupM + "," + playerM + "," + "place holder");
        }
    };

*/

function createWebSocket(path) {
    var host = window.location.hostname;
    if(host == '') host = 'localhost';
    var uri = 'ws://' + host + ':3015' + path;

    var Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;
    return new Socket(uri);
}

const ws = createWebSocket('/');

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
      var formatted = this.props.scoreBoard.map(function(line) {
        return (<p>{line}</p>);
      });
      console.log(formatted);
      console.log(this);
        return (
            <div style={{backgroundColor: '#000', color: '#d5f765', fontSize:"26",
                padding: 20, paddingRight: 100, float: "right"}} >
                Score Board <br /> name_score_group <br />
                {formatted}
            </div>
        )
    }
  }

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    console.log(this);
    return (
        <div style={{backgroundColor: '#000', color: '#fc0000', fontSize:'28',
            padding: 20, paddingLeft: 100, float: 'left'}} >
            {this.props.info}
        </div>
    )}
  }

class GroupA extends React.Component {
  constructor(props) {
    super(props);
  }
  click () {
    this.props.setGroup('GroupA');
  }
  render () {
        if (this.props.hidden2) { return ( null ) } 
    else {
        return (
            <div style={{backgroundColor: '#000', color: '#d5f765', fontSize:"26",
                padding: 20, paddingRight: 100, float: "left"}} onClick={this.click.bind(this)}  >
                GroupA
            </div>
        )
      }
    }
  }

class GroupB extends React.Component {
  constructor(props) {
    super(props);
  }
  click () {
    this.props.setGroup('GroupB');
  }
  render () {
        if (this.props.hidden2) { return ( null ) } 
    else {
        return (
            <div style={{backgroundColor: '#000', color: '#d5f765', fontSize:"26",
                padding: 20, paddingRight: 100, float: "left"}} onClick={this.click.bind(this)}  >
                GroupB
            </div>
        )
      }
    }
  }

class GroupNew extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange (event) {       // ISSUE: Input box won't accept data without this handleChange function. ??
    group = event.target.value;
    this.props.change({group: group});
    this.props.setGroup(group);
  }

  handleEnter (event) {
    if (this.props.group == '') { 
      return 
    } else {
      if( event.keyCode == 13 ) {
        this.props.setGroup(group);
      }
    }
  }
  click (event) { 
    if (this.props.name == '') { 
        return 
    } else { 
      this.props.setGroup(group);
    }
  }
  render () {
    console.log(this);
    if ((this.props.hidden2)) { return ( null ) } 
    var name = this.props.name;
    return (
      <div style={{backgroundColor: '#000', color: '#00f0f0', fontSize:"32",
              padding: 38, float: "left"}}  >
        <input type="text" name={name} onChange={this.handleChange.bind(this)} 
        onKeyDown={this.handleEnter.bind(this)} />
        {this.props.group}
        <button onClick={this.click.bind(this)}>New Group</button>
      </div>
    );
  }
};

/*
class GroupDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
        if (this.props.hidden2) { return ( null ) } 
    else {
        return (
            <div style={{backgroundColor: '#000', color: '#d5f765', fontSize:"26",
                padding: 20, paddingRight: 100, float: "left"}} >
                {this.props.name} has joined {this.props.group}
            </div>
        )
      }
    }
  }
*/

class B40 extends React.Component {
  constructor(props) {
    super(props);
  }
  click () {
    var name = this.props.name;
    var group = this.props.group;
    var num = this.props.message1;
    this.props.change({message1: '' });
    if (this.props.mes0 === 'Number') {
      ws.send(`CQ#$42,${group},${name},mes0,${num}`);
    }
    else if (this.props.mes2 === 'Number') {
      ws.send(`CQ#$42,${group},${name},mes2,${num}`);
      if (this.props.mes1 !== 'Operator') {
        this.props.calc();
      }
    }
  }
  render () {
        if (this.props.hidden2 || this.props.hidden3) { return ( null ) } 
    else {
      console.log(this);
      return (
          <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
            fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
            {this.props.message1}
          </div>
      )}
    }
  }

class B41 extends React.Component {
  constructor(props) {
    super(props);
  }
  click () {
    var name = this.props.name;
    var group = this.props.group;
    var num = this.props.message2;
    this.props.change({message2: '' });
    if (this.props.mes0 === 'Number') {
      ws.send(`CQ#$42,${group},${name},mes0,${num}`);
    }
    else if (this.props.mes2 === 'Number') {
      ws.send(`CQ#$42,${group},${name},mes2,${num}`);
      if (this.props.mes1 !== 'Operator') {
        this.props.calc();
      }
    }
  }
  render () {
      if (this.props.hidden2 || this.props.hidden3) { return ( null ) } 
  else {
    console.log(this);
    return (
        <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
          fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
          {this.props.message2}
        </div>
    )}
  }
}

class B42 extends React.Component {
  constructor(props) {
    super(props);
  }
  click () {
    var name = this.props.name;
    var group = this.props.group;
    var num = this.props.message3;
    this.props.change({message3: '' });
    if (this.props.mes0 === 'Number') {
      ws.send(`CQ#$42,${group},${name},mes0,${num}`);
    }
    else if (this.props.mes2 === 'Number') {
      ws.send(`CQ#$42,${group},${name},mes2,${num}`);
      if (this.props.mes1 !== 'Operator') {
        this.props.calc();
      }
    }
  }
  render () {
      if (this.props.hidden2 || this.props.hidden3) { return ( null ) } 
  else {
    console.log(this);
    return (
        <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
          fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
          {this.props.message3}
        </div>
    )}
  }
}


class B43 extends React.Component {
  constructor(props) {
    super(props);
  }
  click () {
    var name = this.props.name;
    var group = this.props.group;
    var num = this.props.message4;
    this.props.change({message4: '' });
    if (this.props.mes0 === 'Number') {
      ws.send(`CQ#$42,${group},${name},mes0,${num}`);
    }
    else if (this.props.mes2 === 'Number') {
      ws.send(`CQ#$42,${group},${name},mes2,${num}`);
      if (this.props.mes1 !== 'Operator') {
        this.props.calc();
      }
    }
  }
  render () {
      if (this.props.hidden2 || this.props.hidden3) { return ( null ) } 
  else {
    console.log(this);
    return (
        <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
          fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
          {this.props.message4}
        </div>
    )}
  }
}

class Op0 extends React.Component {
  constructor(props) {
    super(props);
  }
  click () { 
    var name = this.props.name;
    var group = this.props.group;
    ws.send(`CQ#$42,${group},${name},mes1,+`);
    var test = this.props.mes0 !== 'Number' && this.props.mes2 !== 'Number';
    if (test) {
        this.props.calc();
    }
  }
  render () {
        if (this.props.hidden2 || this.props.hidden3) { return ( null ) } 
    else {
    console.log(this);
    return (
        <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
          fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
          +
        </div>
    )}
  }
}

class Op1 extends React.Component {
  constructor(props) {
    super(props);
  }
  click () { 
    var name = this.props.name;
    var group = this.props.group;
    ws.send(`CQ#$42,${group},${name},mes1,-`);
    var test = this.props.mes0 !== 'Number' && this.props.mes2 !== 'Number';
    if (test) {
        this.props.calc();
    }
  }
  render () {
        if (this.props.hidden2 || this.props.hidden3) { return ( null ) } 
    else {
    console.log(this);
    return (
        <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
          fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
          -
        </div>
    )}
  }
}

class Op2 extends React.Component {
  constructor(props) {
    super(props);
  }
  click () { 
    var name = this.props.name;
    var group = this.props.group;
    ws.send(`CQ#$42,${group},${name},mes1,*`);
    var test = this.props.mes0 !== 'Number' && this.props.mes2 !== 'Number';
    if (test) {
        this.props.calc();
    }
  }
  render () {
        if (this.props.hidden2 || this.props.hidden3) { return ( null ) } 
    else {
    console.log(this);
    return (
        <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
          fontSize: "38", Align: "center", padding: "20", float: "left" }} >
          *
        </div>
    )}
  }
}

  class Op3 extends React.Component {
    constructor(props) {
      super(props);
    }
  click () { 
    var name = this.props.name;
    var group = this.props.group;
    ws.send(`CQ#$42,${group},${name},mes1,/`);
    var test = this.props.mes0 !== 'Number' && this.props.mes2 !== 'Number';
    if (test) {
        this.props.calc();
    }
  }
    render () {
        if (this.props.hidden2 || this.props.hidden3) { return ( null ) } 
    else {
      console.log(this);
      return (
          <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
            fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
            /
          </div>
      )}
    }
  }

class Op4 extends React.Component {
  constructor(props) {
    super(props);
  }
  click () { 
    var name = this.props.name;
    var group = this.props.group;
    ws.send(`CQ#$42,${group},${name},mes1,Concat`);
    var test = this.props.mes0 !== 'Number' && this.props.mes2 !== 'Number';
    if (test) {
        this.props.calc();
    }
  }
  render () {
        if (this.props.hidden2 || this.props.hidden3) { return ( null ) } 
    else {
    console.log(this);
    return (
        <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
          fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
          Concat
        </div>
    )}
  }
}

class B30 extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    console.log(this);
    return (
        <div
          style={{backgroundColor: '#000', color: '#d5f765', fontSize:"32",
            textAlign: "center", padding: 20, float: "left" }} >
                {this.props.mes0}
        </div>
    )}
  };

class B31 extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this);
    return (
        <div
          style={{backgroundColor: '#000', color: '#d5f765', fontSize:"32",
            textAlign: "center", padding: 20, float: "left" }} >
                {this.props.mes1}
        </div>
    )}
  };

class B32 extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this);
    return (
        <div
          style={{backgroundColor: '#000', color: '#d5f765', fontSize:"32",
            textAlign: "center", padding: 20, float: "left" }} >
                {this.props.mes2}
        </div>
    )}
  };

class B33 extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this);
    return (
        <div
          style={{backgroundColor: '#000', color: '#d5f765', fontSize:"32",
            textAlign: "center", padding: 20, float: "left" }} >
                =
        </div>
    )}
  };

class B34 extends React.Component {
  constructor(props) {
    super(props);
  }

render () {
  console.log(this);
  return (
      <div
        style={{backgroundColor: '#000', color: '#d5f765', fontSize:"32",
          textAlign: "center", padding: 20, float: "left"}}  >
                {this.props.res}
      </div>
  )}
};

class Roll extends React.Component {
    constructor(props) {
      super(props);
  }
  clickHandler () {
      this.props.roll();
      this.props.setInfo(`Click SCORE to begin.`);
  }
  render () {
    console.log(this);
    if (this.props.hidden2 || this.props.hidden3) { return ( null ) } 
    else {
      return (
          <div
            style={{backgroundColor: '#000', color: '#d5f765', fontSize:"32",
              textAlign: "center", padding: 20, float: "left"}} onClick={this.clickHandler.bind(this)} >
              ROLL
          </div>
      )
    }
  }
};

class Solutions extends React.Component {
    constructor(props) {
      super(props);
      var formatted;
  }
  clickHandler () {
    this.props.solFunc();
  }

  render () {
    var formatted = this.props.sol.map(function(line) {
      return (<p>{line}</p>);
    });
    if (this.props.hidden4) { return ( null ) } 
    else {
      return (
          <div style={{backgroundColor: '#000', color: '#d5f765', fontSize:"32",
              padding: 20, float: "left"}} onClick={this.clickHandler.bind(this)} >
              Solutions <br /> <br />
              {formatted}
          </div>
      )
    }
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    console.log(this);
    return (
        <div
          style={{backgroundColor: '#000', color: '#d5f765', fontSize:"32",
            padding: 20, float: "left"}}  >
            {this.props.str1} <br /> {this.props.str2} <br /> {this.props.str3} <br /> {this.props.str4}
        </div>
    )
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange (event) {       // ISSUE: Input box won't accept data without this handleChange function. ??
    this.props.change({name: event.target.value});
  }
  handleEnter (event) {
    if (this.props.name == '') { 
      this.props.change({
        scoreBoard: [`Please enter a name.`],
        info: ``
      }); 
    } 
    else {
    var ENTER = 13;
      if( event.keyCode == ENTER ) {
        var name = this.props.name;
        this.props.change({ hidden: true});
        this.props.change({ hidden2: false});
        this.props.change({ hidden3: false});
        this.props.change({ hidden4: false});
        this.props.change({ name: name});
        ws.send('CC#$42'+name);
      }
    }
  }
  click () { 
    if (this.props.name == '') { 
      this.props.change({
        scoreBoard: [`Please enter a name.`],
        info: `Please enter a name.`
      }); 
    } else { 
      var name = this.props.name;
      this.props.change({ hidden: true});
      this.props.change({ hidden2: false});
      this.props.change({ hidden3: false});
      this.props.change({ hidden4: false});
      this.props.change({ name: name});
      ws.send('CC#$42'+name);
    }
  }
  render () {
    console.log(this);
    if ((this.props.hidden)) { return ( null ) } 
    var name = this.props.name;
    return (
      <div style={{backgroundColor: '#000', color: '#00f0f0', fontSize:"32",
              padding: 38, float: "left"}}  >
        <input type="text" name={name} onChange={this.handleChange.bind(this)} 
        onKeyDown={this.handleEnter.bind(this)} />
        {this.props.name}
        <button onClick={this.click.bind(this)}>Join</button>
      </div>
    );
  }
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
  }
  click () {
    if (this.props.t === "SCORE!") {   // Click works only at the start of each round
      this.props.change({INPLAY: true});
      var name = this.props.name;
    var group = this.props.group;
      // this.props.change({hidden4: false});
      ws.send( `CK#$42,${group},${name},10` );
      ws.send( `CY#$42,${group},${name},${name}` );   // After 8 seconds, non-clickers see solutions.
    } 
  }
  render () {
    console.log(this);
    if (this.props.hidden2) { return ( null ) } 
    return (
        <div
          style={{backgroundColor: '#000', color: '#ff0000', fontSize:"32",
            padding: 30, float: "left"}} onClick={this.click.bind(this)} >
             {this.props.t}
        </div>
    )
  }
};

class B4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mes0: mes0,
      mes1: mes1,
      mes2: mes2,
      message1: message1,
      message2: message2,
      message3: message3,
      message4: message4,
      selection0: selection0,
      selection1: selection0,
      selection2: selection0,
      res: res,
      ws: ws,
      str1: str1,
      str2: str2,
      str3: str3,
      str4: str4,
      sol: sol,
      hidden: hidden,
      hidden2: hidden2,
      hidden3: hidden3,
      hidden4: hidden4,
      name: name,
      DS_T: DS_T,
      N: N,
      STRING: STRING,
      scoreClicker: scoreClicker,
      impossibleClicker: impossibleClicker,
      scoreBoard: scoreBoard,
      group: group,
      info: info
      }

var that = this;

ws.onopen = function(e) {
	console.log("ws.onopen");
  }

ws.onmessage = function(event) {
  console.log("$$$$$$$$$$$$$$$$$$$$$___ incoming data ____")
  console.log(event.data);
  console.log("&&&&&&&&&&&&&&&&&&&& ___ that was incoming data ____")
  var gameArray = event.data.split(",");
  var d2 = event.data.substring(0,6);
  var d3 = event.data.substring(2,6);
  var sendersGroup = gameArray[1];   // The sender's group.
  var sender = gameArray[2];
  var extra = gameArray[3];
  var ext4 = gameArray[4];
  var ext5 = gameArray[5];
  var ext6 = gameArray[6];
  var ext7 = gameArray[7];
  var ext8 = gameArray[8];
  console.log('################################################### gameArray #################');
  console.log(gameArray);
  console.log('################################################# That was gameArray ##########');
  // var p = $(document.createElement('p')).text(event.data);
  if ( ( (that.state.group === gameArray[1]) && (that.state.group !== "solo")) || 
        that.state.name === sender || extra === '%#8*&&^1#$%^') {
      switch (d2) {

          case "CC#$42":
            if (extra === '%#8*&&^1#$%^')  {
              that.setState({info: `You entered a name which is already taken`})
              setTimeout( function() {
                document.location.reload(false);
              },2000);
              // ws.send(`CO#42,solo,Angel Eyes,filler`);
            }
            else {
              that.setGroup('solo');
              ws.send(`CO#$42,solo,${sender},filler`);
            }
          break;

          case "CZ#$42":
              sol = extra.split("<br />");
              that.setState({sol: sol});
            //  $("#a2").html(sender + " clicked SOLUTIONS.<br><br>");
          break;

          case "CA#$42":               // Triggered by ROLL
              that.setState
              ({
                message1: extra,
                message2: ext4,
                message3: ext5,
                message4: ext6,
                str1: '',
                str2: '',
                str3: '',
                scoreClicker: "a@F$Uy&sc",
                impossibleClicker: "a@F$Uy&imp",
                sol: []
              });
          break;

          case "CE#$42":          
              that.setState
              ({
                message1: extra,
                message2: ext4,
                message3: ext5,
                message4: ext6,
              });
          break;

          case "CB#$42":
            //  if ("private" !== sendersGroup || sender == playerM) 
            if (that.state.group !== 'solo') {
              that.setState({
                scoreBoard: extra.split("<br>"),
              });
            } else {
              that.setState({
                scoreBoard: ['Data is visible to group players.']
              })
            }
            console.log("________________________CB extra");
            console.log(extra);
            console.log("________________________CB extra"); 
            //  }
          break;

          case "CD#$42":
            
          break;

          case "CF#$42":
            that.setState
            ({
              mes0: 'Number',
              mes1: 'Operator',
              mes2: 'Number',
              res:  'result'
            });
          break;

          case "CH#$42":
            that.setState
            ({
              hidden: true,
              str1: extra,
              str2: ext4,
              str3: ext5,
            });
          break;

          case "CJ#$42":
              that.setState
              ({
                hidden2: false,
              });
          break;

          case "CK#$42":
              that.setState({DS_T: extra});
          break;

          case "CP#$42":
              that.setState({res: extra});
          break;

          case "CQ#$42":
              that.state[extra]=ext4;
              that.forceUpdate();
          break;

          case "CR#$42":
            that.setState({hidden2: false});
            that.setState({hidden3: false});
          break;

          case "CS#$42":
            if (sender !== name) {
              that.state[extra]=ext4;
              that.forceUpdate();
            };
          break;

          case "CY#$42":
            that.setState({hidden4: true});
            var playerName = that.state.name;
            scoreClicker = extra;   // 'scoreClicker' declared at the top of this file.
            that.setState({
              scoreClicker: scoreClicker,
              sol: []
            }, function() {    // Probably no benefit in waiting for rendering to complete, but making
                               // this synchronous might result in a little less stress for the browser.
              if (scoreClicker !== playerName) {  
                  that.setState({
                    hidden2: true,
                    hidden3: false,
                  });
                var a = that.state.message1;
                var b = that.state.message2;
                var c = that.state.message3;
                var d = that.state.message4;
                ws.send(`DZ#$42,${group},${name},${a},${b},${c},${d},20`);
              }
          });
          break;

          case "DC#$42":
            console.log("___________________########$$$$$$$$__________Name taken.");
            that.setState({})
          break;

          case "DZ#$42":
            var this2 = that;
            if (that.state.scoreClicker !== that.state.name) {
              var solutions = extra;
              that.delay(8000)
              .then( function() {
                  this2.setState({
                    sol: solutions.split("<br />"),
                    hidden4: false
                  });
              })
            }
          break;

          case "IA#$42":
            that.setState({info: extra});
          break;

          case "SX#$42":
            ws.send(`SX#$42,${group},${name},filler`);
            //  ws.send("SX#$42," + groupM + "," + playerM + "," + rollM);
          break;

          default:
              console.log( "fell through to default");
          break;
      }
    }
  }

  setInterval( function () { 
    var name = that.state.name;
    var group = that.state.group;
    var group = that.state.group;
    if (that.state.DS_T === 0) {
      ws.send(`CR#$42,${group},${name},filler`);  
      if (that.state.name === that.state.scoreClicker) {
        ws.send(`CI#$42,${group},${name},filler`);   
      }
      that.setState
      ({
        DS_T: `10 seconds expired. Deduct one point from ${that.state.scoreClicker}`,
        message1: '',
        message2: '',
        message3: '',
        message4: ''
      });
    }
    if ( that.state.DS_T > -1 ) {
      var X = that.state.DS_T - 1
      that.setState({DS_T: X});
      that.setState({info: X});
    }
    if (that.state.DS_T === -1) {
      that.setState({
        DS_T: '',
        info: ''
      });
    }
  },1000 );
}

  delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
  }

  displayHandler () {
    console.log("##################$$$$$$$$$$$$$$$$$$$$$$$$___ IN displayHandler ___")
  }

  rollDice () {
    this.setState({
      hidden4: false
    });
    var name = this.state.name;
    var group = this.state.group;
    ws.send(`CK#$42,${group},${name},SCORE!`);
    ws.send(`CF#$42,${group},${name},filler`);
    var that = this;
    var delay = this.delay
    var s = ws.readyState
    if (s === 1) {
      ws.send(`CA#$42,${group},${name},6,6,12,20`);
    } else this.delay(300).then( function () {
      that.rollDice()
    })
  }

  getSolutions () {
    if (this.state.message4 !== '') {  // That is, no calculations have been made.
      var name = this.state.name;
      var group = this.state.group;
      var a = this.state.message1;
      var b = this.state.message2;
      var c = this.state.message3;
      var d = this.state.message4;
      ws.send(`CZ#$42,${group},${name},${a},${b},${c},${d},20`);
    }
  }

  setNumberAr () {
    var w1 = this.state.message1;
    var w2 = this.state.message2;
    var w3 = this.state.message3;
    var w4 = this.state.message4;
    var result = this.state.res;
    var startArray = [w1, w2, w3, w4, result];
    this.newNums(startArray);   
  }

  setGroup (x) {
    var name = this.state.name;
    ws.send( `CO#$42,${x},${name},filler` );
    this.setState({group: x});
  }

  setInfo (x) {
    var name = this.state.name;
    var group = this.state.group;
    ws.send( `IA#$42,${group},${name},${x}` );
  }

  newNums (x) {
    var j = 0;
    var ar = [];
    var clock;
    var string = this.state.STRING;
    var result = this.state.res;
    var name = this.state.name;
    for (let k in x) {
        if (x[k] !== "" && x[k] !== undefined) {
        ar[j] = x[k];
        j += 1;
      }
    }
    this.setState({N: j});
    if (j === 3) {
      ws.send(`CQ#$42,${group},${name},str1,${string}`);
      ws.send(`CE#$42,${group},${name},${ar[0]},${ar[1]},${ar[2]}`)
      clock = 10;
    }
    else if (j === 2) {
      ws.send(`CQ#$42,${group},${name},str2,${string}`);
      ws.send(`CE#$42,${group},${name},${ar[0]},${ar[1]},`)
      if (result === 20) {
          clock = "One Point For " + name;
          ws.send( `CR#$42,${group},${name},filler` ); 
          ws.send( `CG#$42,${group},${name},filler` ); 
      } else {clock = 10;}
    }
    else if (j === 1) {
      ws.send(`CQ#$42,${group},${name},str3,${string}`);
      ws.send(`CE#$42,${group},${name},${ar[0]}`)
      if (result === 20) {
          clock = "One Point For " + name;
          ws.send( `CR#$42,${group},${name},filler` ); 
          ws.send( `CG#$42,${group},${name},filler` ); 
      }
      if (result !== 20) {
        clock = "Take One Point From " + name;
        ws.send( `CR#$42,${group},${name},filler` ); 
        ws.send( `CI#$42,${group},${name},filler` ); 
      }
    }
    ws.send( `CK#$42,${group},${name},${clock}` );
    ws.send( `CF#$42,${group},${name},filler` );
  }

/*
  nextRound () {
    var name = this.state.name;
    var that = this;
    var string1;
    var string2;
    var string3;
    var n;
    var name = this.state.name;
    var result = this.state.res;
    var a = this.state.mes0;
    var b = this.state.mes1;
    var c = this.state.mes2;
    var filler = 'dummy';
    var clock = 10;
    var equation = `${a} ${b} ${c} = ${result}`;
    var mesArX = [];
    if ( n === 3 ) {
      string1 = equation;
      ws.send(`CK#$42,${group},${name},10`);
    }
    else if ( n === 2 ) {
      string2 = equation;
      ws.send(`CK#$42,${group},${name},10`);
  s   if (result === 20) {
          clock = `One Point For ${name}`;
      }
      else {clock = 10;}
    }
    else if ( n === 1) {
      var t = this.state.T;
      this.setState({str3: string});
      if (result === 20) {
          clock = `One Point For ${name}`;
      }
      if (result !== 20) {
        clock = `Take One Point From ${name}`;
      }
    }
      var newStrings = `${string1},${string2},${string3}`
      ws.send( `CH#$42,${group},${name},${newStrings}` );
      ws.send( `CF#$42,${group},${name},${filler}` );
  }
*/

  calc () {
    var that = this;
    var delay = this.delay;
    var res;
    var n = this.state.N;
    var m0;
    var m1;
    var m2;
    var name = this.state.name;
    if (this.state.DS_T !== "SCORE!") {
      ws.send( `CK#$42,${group},${name},10` );
    }
    delay(100).then( function() {
      m0 = that.state.mes0;
      m1 = that.state.mes1;
      m2 = that.state.mes2;
      switch (m1) {
          case "+": that.setState({res: parseFloat(m0) + parseFloat(m2)});
          break;
          case "-": that.setState({res: parseFloat(m0) - parseFloat(m2)});
          break;
          case "*": that.setState({res: parseFloat(m0) * parseFloat(m2)});
          break;
          case "/": that.setState({res: parseFloat(m0) / parseFloat(m2)});
          break;t
          case "Concat": that.setState({res: parseFloat(m0+""+m2)});
          break;
          default : 'operator not selected';
      }
    })
    .then( delay(25) )
    .then( function() {
      var res = that.state.res;
      that.setState({STRING: `${m0} ${m1} ${m2} = ${res}`});
    })
    .then( delay(25) )
    .then( function () {
      that.setNumberAr();
    });
  }

/*
this.setState({
  selected: input
}).then(function() {
  this.props.didSelect(this.state.selected);
}.bind(this));
*/

  newPlayer (x) {
    this.setState({name: x});
    ws.send("CC#42$"+x)
  }

  changeItem (x) {
    this.setState(x)
  }


  render () {
    console.log(this);
    return (
      <div>
          <ScoreBoard key='ScoreBoard' scoreBoard={this.state.scoreBoard} />

          <Messages key='Messages' info={this.state.info} />

          <GroupA key='GroupA' change={this.changeItem.bind(this)} setGroup={this.setGroup.bind(this)} 
            hidden2={this.state.hidden2} />

          <GroupB key='GroupB' change={this.changeItem.bind(this)} setGroup={this.setGroup.bind(this)} 
            hidden2={this.state.hidden2} />

          <GroupNew key='GroupNew' change={this.changeItem.bind(this)} setGroup={this.setGroup.bind(this)} 
            hidden2={this.state.hidden2} />

          <div style={{width: 8000, float: "left", padding: 5}} />

          <Login key='Login' newPlayer={this.newPlayer.bind(this)} name={this.state.name} 
            setGroup={this.setGroup.bind(this)} change={this.changeItem.bind(this)} 
            group={this.state.group} hidden={this.state.hidden} info={this.state.info} 
             setInfo={this.setInfo.bind(this)} />

          <Display key='Display' str1={this.state.str1} str2={this.state.str2} str3={this.state.str3} 
            str4={this.state.str4}/>

          <Clock key='Clock' t={this.state.DS_T} name={this.state.name} group={this.state.group} 
            hidden={this.state.hidden} hidden2={this.state.hidden2} hidden3={this.state.hidden3} 
            hidden4={this.state.hidden4} change={this.changeItem.bind(this)} />

          <div style={{width: 8000, float: "left", padding: 10}} />

          <B40 key='B40' message1={this.state.message1} change={this.changeItem.bind(this)} 
            mes0={this.state.mes0} mes2={this.state.mes2} mes1={this.state.mes1} calc={this.calc.bind(this)} 
            delay={this.delay.bind(this)} name={this.state.name} group={this.state.group} 
             hidden={this.state.hidden} hidden2={this.state.hidden2} hidden3={this.state.hidden3} />

          <B41 key='B41' message2={this.state.message2} change={this.changeItem.bind(this)} 
            mes0={this.state.mes0} mes2={this.state.mes2} mes1={this.state.mes1} calc={this.calc.bind(this)} 
            delay={this.delay.bind(this)} name={this.state.name} group={this.state.group} hidden={this.state.hidden} 
            hidden2={this.state.hidden2} hidden3={this.state.hidden3} />

          <B42 key='B42' message3={this.state.message3} change={this.changeItem.bind(this)} 
            mes0={this.state.mes0} mes2={this.state.mes2} mes1={this.state.mes1} calc={this.calc.bind(this)} 
            delay={this.delay.bind(this)} name={this.state.name} group={this.state.group} hidden={this.state.hidden} 
            hidden2={this.state.hidden2} hidden3={this.state.hidden3} />

          <B43 key='B43' message4={this.state.message4} change={this.changeItem.bind(this)} 
            mes0={this.state.mes0} mes2={this.state.mes2} mes1={this.state.mes1} calc={this.calc.bind(this)} 
            delay={this.delay.bind(this)} name={this.state.name} group={this.state.group} hidden={this.state.hidden} 
            hidden2={this.state.hidden2} hidden3={this.state.hidden3} />

          <div style={{width: 8000, float: "left", padding: 10}} />

          <Op0 key='Op0' mes0={this.state.mes0} mes2={this.state.mes2} change={this.changeItem.bind(this)} 
            mes1={this.state.mes1} calc={this.calc.bind(this)} name={this.state.name} 
            group={this.state.group} hidden={this.state.hidden} 
            hidden2={this.state.hidden2} hidden3={this.state.hidden3} />

          <Op1 key='Op1' mes0={this.state.mes0} mes2={this.state.mes2} change={this.changeItem.bind(this)} 
            mes1={this.state.mes1} calc={this.calc.bind(this)} name={this.state.name} 
            group={this.state.group} hidden={this.state.hidden} 
            hidden2={this.state.hidden2} hidden3={this.state.hidden3} />

          <Op2 key='Op2' mes0={this.state.mes0} mes2={this.state.mes2} change={this.changeItem.bind(this)} 
            mes1={this.state.mes1} calc={this.calc.bind(this)} name={this.state.name} 
            group={this.state.group} hidden={this.state.hidden} 
            hidden2={this.state.hidden2} hidden3={this.state.hidden3} />

          <Op3 key='Op3' mes0={this.state.mes0} mes2={this.state.mes2} change={this.changeItem.bind(this)} 
            mes1={this.state.mes1} calc={this.calc.bind(this)} name={this.state.name} 
            group={this.state.group} hidden={this.state.hidden} 
            hidden2={this.state.hidden2} hidden3={this.state.hidden3} />

          <Op4 key='Op4' mes0={this.state.mes0} mes2={this.state.mes2} change={this.changeItem.bind(this)} 
            mes1={this.state.mes1} calc={this.calc.bind(this)} name={this.state.name} 
            group={this.state.group} hidden={this.state.hidden} 
            hidden2={this.state.hidden2} hidden3={this.state.hidden3} />

          <div style={{width: 8000, float: "left", padding: 10}} />

          <B30 key='B30' mes0={this.state.mes0} />
          <B31 key='B31' mes1={this.state.mes1} />
          <B32 key='B32' mes2={this.state.mes2} />
          <B33 key='B33' />
          <B34 key='B34' res={this.state.res} />

          <div style={{width: 8000, float: "left", padding: 10}} />

          <Roll key='Roll' roll={this.rollDice.bind(this)} hidden={this.state.hidden} 
            hidden2={this.state.hidden2} hidden3={this.state.hidden3} setInfo={this.setInfo.bind(this)} />

          <div style={{width: 8000, float: "left", padding: 10}} />

          <Solutions key='Solutions' solFunc={this.getSolutions.bind(this)} sol={this.state.sol} 
            hidden4={this.state.hidden4} />
      </div>
    )}
  };

/*
  B4.defaultProps = {
    sol: sol
  }
  contentEditable={true}
*/
  React.render(<B4 />, document.getElementById('divSix'));
