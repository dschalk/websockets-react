'use strict'
export {B4};
import React from 'react';

var mes0 = 'Number';
var mes1 = 'Operator';
var mes2 = 'Number';
var temp = 'temp';
var sol = [];
var message1 = 0;
var message2 = 0;
var message3 = 0;
var message4 = 0;
var mAr = [0,0,0,0,'result'];
var op1 = '+';
var op2 = '-';
var op3 = '*';
var op4 = '/';
var op5 = 'Concat';
var selection0 = '77777';
var selection1 = '88888';
var selection2 = '99999';
var res = 'result';
var setIntervalVar = 0;
var str1 = "";
var str2 = "";
var str3 = "";
var str4 = "";
var hidden = true;
var hidden2 = false;
var togDice = false;
var value = "";
var T = "SCORE!";
var that = this;
var numberAr = [0,0,0,0,0];
var NUMARRAY = [];
var N = 0;

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

var ws = createWebSocket('/');

class B40 extends React.Component {
  constructor(props) {
    super(props);
  }
  click () {
    var name = this.props.value;
    var num = this.props.message1;
    this.props.change({message1: '' });
    if (this.props.mes0 === 'Number') {
      ws.send(`CQ#$42,pass,${name},mes0,${num}`);
    }
    else if (this.props.mes2 === 'Number') {
      ws.send(`CQ#$42,pass,${name},mes2,${num}`);
      if (this.props.mes1 !== 'Operator') {
        this.props.calc();
      }
    }
  }
  render () {
    console.log(this);
    return (
        <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
          fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
          {this.props.message1}
        </div>
    )}
  };

class B41 extends React.Component {
  constructor(props) {
    super(props);
  }

  click () {
    var name = this.props.value;
    var num = this.props.message2;
    this.props.change({message2: '' });
    if (this.props.mes0 === 'Number') {
      ws.send(`CQ#$42,pass,${name},mes0,${num}`);
    }
    else if (this.props.mes2 === 'Number') {
      ws.send(`CQ#$42,pass,${name},mes2,${num}`);
      if (this.props.mes1 !== 'Operator') {
        this.props.calc();
      }
    }
  }

    render () {
      console.log(this);
      return (
          <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
            fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
            {this.props.message2}
          </div>
      )}
};

  class B42 extends React.Component {
    constructor(props) {
      super(props);
    }

  click () {
    var name = this.props.value;
    var num = this.props.message3;
    this.props.change({message3: '' });
    if (this.props.mes0 === 'Number') {
      ws.send(`CQ#$42,pass,${name},mes0,${num}`);
    }
    else if (this.props.mes2 === 'Number') {
      ws.send(`CQ#$42,pass,${name},mes2,${num}`);
      if (this.props.mes1 !== 'Operator') {
        this.props.calc();
      }
    }
  }

    render () {
      console.log(this);
      return (
        <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
          fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
          {this.props.message3}
        </div>
      )}
    };

  class B43 extends React.Component {
    constructor(props) {
      super(props);
    }

  click () {
    var name = this.props.value;
    var num = this.props.message4;
    this.props.change({message4: '' });
    if (this.props.mes0 === 'Number') {
      ws.send(`CQ#$42,pass,${name},mes0,${num}`);
    }
    else if (this.props.mes2 === 'Number') {
      ws.send(`CQ#$42,pass,${name},mes2,${num}`);
      if (this.props.mes1 !== 'Operator') {
        this.props.calc();
      }
    }
  }

  render () {
    console.log(this);
    return (
      <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
        fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
        {this.props.message4}
      </div>
    )}
};

class Op0 extends React.Component {
  constructor(props) {
    super(props);
  }

  click () { 
    var name = this.props.value;
    this.props.change({mes1: '+' });
    var test = this.props.mes0 !== 'Number' && this.props.mes2 !== 'Number';
    if (test) {
        this.props.calc();
    }
  }
  
  render () {
    console.log(this);
    return (
        <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
          fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
          +
        </div>
    )}
};

class Op1 extends React.Component {
  constructor(props) {
    super(props);
  }

  click () { 
    var name = this.props.value;
    this.props.change({mes1: '-' });
    var test = this.props.mes0 !== 'Number' && this.props.mes2 !== 'Number';
    if (test) {
        this.props.calc();
    }
  }

  render () {
    console.log(this);
    return (
        <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
          fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
          -
        </div>
    )}
};

class Op2 extends React.Component {
  constructor(props) {
    super(props);
  }

  click () { 
    var name = this.props.value;
    this.props.change({mes1: '*' });
    var test = this.props.mes0 !== 'Number' && this.props.mes2 !== 'Number';
    if (test) {
        this.props.calc();
    }
  }


  render () {
    console.log(this);
    return (
        <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
          fontSize: "38", Align: "center", padding: "20", float: "left" }} >
          *
        </div>
    )}
};

  class Op3 extends React.Component {
    constructor(props) {
      super(props);
    }

  click () { 
    var name = this.props.value;
    this.props.change({mes1: '/' });
    var test = this.props.mes0 !== 'Number' && this.props.mes2 !== 'Number';
    if (test) {
        this.props.calc();
    }
  }


    render () {
      console.log(this);
      return (
          <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
            fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
            /
          </div>
      )}
    };

class Op4 extends React.Component {
  constructor(props) {
    super(props);
  }

  click () { 
    var name = this.props.value;
    this.props.change({mes1: 'Concat' });
    var test = this.props.mes0 !== 'Number' && this.props.mes2 !== 'Number';
    if (test) {
        this.props.calc();
    }
  }

  render () {
    console.log(this);
    return (
        <div onClick={this.click.bind(this)} style={{backgroundColor: '#000', color: '#d5f765',
          fontSize: "38", textAlign: "center", padding: "20", float: "left" }} >
          Concat
        </div>
    )}
};

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
  }
  render () {
    console.log(this);
    if (this.props.hidden) { return ( null ) } 
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
    console.log(formatted);
    console.log(this);
    if (this.props.hidden) { return ( null ) } 
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
    this.props.change({value: event.target.value});
  }
  
  handleEnter (event) {
    if (this.props.value == '') { 
      return 
    } else {
    var ENTER = 13;
      if( event.keyCode == ENTER ) {
        var name = this.props.value;
        this.props.change({ hidden: false});
        ws.send('CC#$42'+name);
      }
    }
  }

  click () { 
    if (this.props.value == '') { 
      return 
    } else { 
      var name = this.props.value;
      this.props.change({ hidden: false});
      ws.send('CC#$42'+name);
    }
  }
  
  render () {
    console.log(this);
    if ((this.props.hidden) == false) { return ( null ) } 
    var value = this.props.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange.bind(this)} onKeyDown={this.handleEnter.bind(this)} />
        {this.props.value}
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
    var name = this.props.value;
    ws.send(`CK#$42,pass,${name},10`)
  }

  render () {
    console.log(this);
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
      sol: sol,
      hidden: hidden,
      hidden2: hidden2, 
      value: value,
      T: T,
      numberAr: numberAr,
      NUMARRAY: NUMARRAY,
      N: N
      }

that = this;

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
  var name = that.state.value;
  // var p = $(document.createElement('p')).text(event.data);
  // if (((groupM === gameArray[1]) && (groupM !== "private")) || (playerM === sender) || sendersGroup === "pass") {}
      switch (d2) {

          case "CC#$42":
          break;

          case "CZ#$42":
              sol = extra.split("<br />")
            //  $("#show").prepend("<br>" + extra);
            //  $("#a2").html(sender + " clicked SOLUTIONS.<br><br>");
          break;

          case "CA#$42":               // Triggered by ROLL
              message1 = extra;
              message2 = ext4;
              message3 = ext5;
              message4 = ext6;
              numberAr = [extra, ext4, ext5, ext6, res];
              that.setState
              ({
                message1: extra,
                message2: ext4,
                message3: ext5,
                message4: ext6,
                str1: '',
                str2: '',
                str3: '',
                numberAr: [extra, ext4, ext5, ext6, res]
              });
          break;

          case "CE#$42":          
              message1 = extra;
              message2 = ext4;
              message3 = ext5;
              message4 = ext6;
              that.setState
              ({
                message1: extra,
                message2: ext4,
                message3: ext5,
                message4: ext6
              });
          break;

          case "CB#$42":
            //  if ("private" !== sendersGroup || sender == playerM) {
                var scoreBoard = extra;
            //  }
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
            that.setState({hidden2: true});
            that.setState({T: 10});
            str1 = extra;
            str2 = ext4;
            str3 = ext5;
            that.setState
            ({
              str1: extra,
              str2: ext4,
              str3: ext5,
              str4: ext6
            });
          break;

          case "CJ#$42":
              T = extra;
              hidden2 = false;
              that.setState
              ({
                T: extra,
                hidden2: false
              });
          break;


          case "CK#$42":
              that.setState({T: extra});
          break;

          case "CP#$42":
              that.setState({res: extra});
          break;

          case "CQ#$42":
              that.state[extra]=ext4;
              that.forceUpdate();
          break;

          case "CS#$42":
            if (sender !== name) {
              that.state[extra]=ext4;
              that.forceUpdate();
            };
          break;

          case "SX#$42":
            //  ws.send("SX#$42," + groupM + "," + playerM + "," + rollM);
          break;

          default:
              console.log( " fell through to default");
          break;
      }
  }

  setInterval( function () { 
    if (that.state.T === 0) {
      // DS_ob.scoreFunc();
      that.setState({T: 'Window of opportunity closed.'});
      that.setState({hidden2: false});
      that.setState({message1: ''});
      that.setState({message2: ''});
      that.setState({message3: ''});
      that.setState({message4: ''});
    }
    if ( that.state.T > -1 ) {
      var X = that.state.T - 1
      that.setState({T: X});
    }
    if (that.state.T === -1) {
      that.setState({T: ''});
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
    var name = that.state.value;
    this.setState({T: 'SCORE!'});
    that = this;
    var delay = this.delay
    var s = ws.readyState
    if (s === 1) {
      ws.send(`CA#$42,pass,${name},6,6,12,20`);
    } else this.delay(300).then( function () {
      that.rollDice()
    })
  }

  getSolutions () {
    if (this.state.message4 !== '') {  
      var that = this;
      var setSol = function () {
        that.setState({sol: sol});
      };
      var a = this.state.message1;
      var b = this.state.message2;
      var c = this.state.message3;
      var d = this.state.message4;
      ws.send(`CZ#$42,pass,Steve,${a},${b},${c},${d},20`);
      this.delay(500).then( function () {
        setSol();
      })
    }
  }

  setNumberAr () {
    var delay = this.delay;
    var that = this;
    var w1 = this.state.message1;
    var w2 = this.state.message2;
    var w3 = this.state.message3;
    var w4 = this.state.message4;
    var result = this.state.res;
    var startArray = [w1, w2, w3, w4, result];
    console.log("$$$$$$$$$$$$$$$ &&_____ startArray in setNumberAr $$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(startArray);
    console.log("######$$$$$$$$$$$ %%%%%%%%%%%%%%% ^^^^^^^ that was startArray   Now leaving setNumberAr()"); 
    this.newNums(startArray);   
  }

  newNums (x) {
    var j = 0;
    var ar = [];
    for (let k in x) {
        if (x[k] != "" && x[k] != undefined) {
        ar[j] = x[k];
        j += 1;
      }
    }
    this.setState({NUMARRAY: ar});
    this.setState({N: j});
    if (j === 3) {
      ws.send(`CE#$42,pass,Jim,${ar[0]},${ar[1]},${ar[2]}`);     
    }
    else if (j === 2) {
      ws.send(`CE#$42,pass,Jim,${ar[0]},${ar[1]}`);     
    }
    else if (j === 1) {
      ws.send(`CE#$42,pass,Jim,${ar[0]}`);     
    }
    else {
      ws.send(`CE#$42,pass,Jim,OOOPS!! Check newNums()`);
    }
    ws.send( `CF#$42,pass,${name},filler` );
  }




  nextRound () {
    var that = this;
    var n;
    var delay = this.delay;
    delay(5).then( function () {
      that.setNumberAr();
    }).then(delay(50)).then(function() {
      n = that.state.N;
    })
    var name = this.state.value;
    var result = this.state.res;
    var a = this.state.mes0;
    var b = this.state.mes1;
    var c = this.state.mes2;
    var filler = 'dummy';
    var clock = 10;
    var equation = `${a} ${b} ${c} = ${result}`;
    var mesArX = [];
    this.delay(200).then( function () {
      console.log(that.state.numberAr);
      console.log("######$$$$$$$$$$$ %%%%%%%%%%%%%%% ^^^^^^^ next will be n %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
      console.log(n);
      console.log("######$$$$$$$$$$$ %%%%%%%%%%%%%%% ^^^^^^^ that was n %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    })     
    if ( n === 3 ) {
      message0 = ar[0];
      message1 = ar[1];
      message2 = ar[2];
      message3 = '' ;

      this.setState({message0: ar[0]});
      this.setState({message1: ar[1]});
      this.setState({message2: ar[2]});
      this.setState({message3: '' });
      this.setState({str1: string});
    }
    else if ( n === 2 ) {
      message0 = ar[0];
      message1 = ar[1];
      message2 = '' ;
      message3 = '' ;
      this.setState({message0: ar[0]});
      this.setState({message1: ar[1]});
      this.setState({message2: '' });
      this.setState({message3: '' });
      this.setState({str2: string});
      if (result === 20) {
          clock = `One Point For ${name}`;
          this.setState({T: clock})
          // ws.send( `CJ#$42,pass,${name},${clock}` );
      }
    }
    else if ( n === 1) {
      var t = this.state.T;
      message0 = ar[0];
      message1 = '' ;
      message2 = '' ;
      message3 = '' ;
      this.setState({message0: ar[0]});
      this.setState({message1: '' });
      this.setState({message2: '' });
      this.setState({message3: '' });
      this.setState({str3: string});
      if (result === 20) {
          clock = `One Point For ${name}`;
          this.setState({T: clock});
      }
      if (result !== 20) {
        clock = `Take One Point From ${name}`;
        this.setState({T: clock});
      } else {
        console.log("OOOOOOOOPPPPSS!!!!");
      }
    } 
    /* delay(30).then( function () {
      var z1 = this.state.message1;
      var z2 = this.state.message2;
      var z3 = this.state.message3;
      var z4 = this.state.message4;
      var newNums = `${z1},${z2},${z3},${z4}`;
      ws.send( `CE#$42,pass,${name}, ${newNums}` );
      */
      var x1 = this.state.str1;
      var x2 = this.state.str2;
      var x3 = this.state.str3;
      var newStrings = `${x1},${x2},${x3}`
      ws.send( `CH#$42,pass,${name},${newStrings},${t}` );
      ws.send( `CF#$42,pass,${name}, ${filler}` );

      console.log("$$$$$$$$$$$$$$$ &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
      console.log(newStrings);
      console.log("######$$$$$$$$$$$ %%%%%%%%%%%%%%% ^^^^^^^ that was mAr mAr0");

    // })
  }

  calc () {
    var that = this;
    this.delay(200).then( function() {
      var m0 = that.state.mes0;
      var m1 = that.state.mes1;
      var m2 = that.state.mes2;
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
      that.delay(50).then( function () {
        that.setNumberAr();
        console.log("$$$$$$$$$$$$$$$ &&&&&&&&&&&&&& in calc() %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        console.log("res is " + that.state.res);
        console.log("m1 is " + m1);
        console.log("######$$$$$$$$$$$ %%%%%%%%%%%%%%%  in calc() %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
      })
    })
  }

  newPlayer (x) {
    this.setState({value: x});
    ws.send("CC#42$"+x)
  }

  changeItem (x) {
    this.setState(x)
  }


  render () {
    console.log(this);
    return (
      <div>
          <Login key='Login' newPlayer={this.newPlayer.bind(this)} value={this.state.value} 
            change={this.changeItem.bind(this)}  hidden={this.state.hidden} />

          <Display key='Display' str1={this.state.str1} str2={this.state.str2} str3={this.state.str3} 
            str4={this.state.str4}/>

          <Clock key='Clock' change={this.changeItem.bind(this)} t={this.state.T} 
              value={this.state.value} />

          <div style={{width: 8000, float: "left", padding: 10}} />

          <B40 key='B40' message1={this.state.message1} change={this.changeItem.bind(this)} 
            mes0={this.state.mes0} mes2={this.state.mes2} mes1={this.state.mes1} calc={this.calc.bind(this)} 
            delay={this.delay.bind(this)} next={this.nextRound.bind(this)} value={this.state.value}/>

          <B41 key='B41' message2={this.state.message2} change={this.changeItem.bind(this)} 
            mes0={this.state.mes0} mes2={this.state.mes2} mes1={this.state.mes1} calc={this.calc.bind(this)} 
            delay={this.delay.bind(this)} next={this.nextRound.bind(this)} value={this.state.value}/>

          <B42 key='B42' message3={this.state.message3} change={this.changeItem.bind(this)} 
            mes0={this.state.mes0} mes2={this.state.mes2} mes1={this.state.mes1} calc={this.calc.bind(this)} 
            delay={this.delay.bind(this)} next={this.nextRound.bind(this)} value={this.state.value}/>

          <B43 key='B43' message4={this.state.message4} change={this.changeItem.bind(this)} 
            mes0={this.state.mes0} mes2={this.state.mes2} mes1={this.state.mes1} calc={this.calc.bind(this)} 
            delay={this.delay.bind(this)} next={this.nextRound.bind(this)} value={this.state.value}/>

          <div style={{width: 8000, float: "left", padding: 10}} />

          <Op0 key='Op0' mes0={this.state.mes0} mes2={this.state.mes2} change={this.changeItem.bind(this)} 
            mes1={this.state.mes1} calc={this.calc.bind(this)} value={this.state.value}/>

          <Op1 key='Op1' mes0={this.state.mes0} mes2={this.state.mes2} change={this.changeItem.bind(this)} 
            mes1={this.state.mes1} calc={this.calc.bind(this)} value={this.state.value}/>

          <Op2 key='Op2' mes0={this.state.mes0} mes2={this.state.mes2} change={this.changeItem.bind(this)} 
            mes1={this.state.mes1} calc={this.calc.bind(this)} value={this.state.value}/>

          <Op3 key='Op3' mes0={this.state.mes0} mes2={this.state.mes2} change={this.changeItem.bind(this)} 
            mes1={this.state.mes1} calc={this.calc.bind(this)} value={this.state.value}/>

          <Op4 key='Op4' mes0={this.state.mes0} mes2={this.state.mes2} change={this.changeItem.bind(this)} 
            mes1={this.state.mes1} calc={this.calc.bind(this)} value={this.state.value}/>

          <div style={{width: 8000, float: "left", padding: 10}} />

          <B30 key='B30' mes0={this.state.mes0} />
          <B31 key='B31' mes1={this.state.mes1} />
          <B32 key='B32' mes2={this.state.mes2} />
          <B33 key='B33' />
          <B34 key='B34' res={this.state.res} />

          <div style={{width: 8000, float: "left", padding: 10}} />

          <Roll key='Roll' roll={this.rollDice.bind(this)} hidden={this.state.hidden} hidden2={this.state.hidden2} />

          <div style={{width: 8000, float: "left", padding: 10}} />

          <Solutions key='Solutions' solFunc={this.getSolutions.bind(this)} sol={this.state.sol} hidden={this.state.hidden} />
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
