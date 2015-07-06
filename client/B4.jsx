'use strict'
export {B4};
import React from 'react';


function createWebSocket(path) {
    let host = window.location.hostname;
    if(host == '') host = 'localhost';
    let uri = 'ws://' + host + ':3015' + path;

    let Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;
    return new Socket(uri);
}

const DES_ws = createWebSocket('/');

class ScoreBoard extends React.Component {

  constructor(props) {
    super(props);
  }
  render () {
      var formatted = this.props.scoreB.map(function(line) {
        return (<p key={line.id}>{line}</p>);
      });
      console.log(formatted);
      console.log(this);
        return (
            <div>
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
        <div  >
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
            <div  onClick={this.click.bind(this)} >
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
            <div onClick={this.click.bind(this)} >
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
  render () {
    console.log(this);
    if ((this.props.hidden2)) { return ( null ) } 
    return (
      <div>
        <label>New Group<input type="text" id='cow' onKeyDown={this.handleEnter.bind(this)} 
          onClick={this.click.bind(this)} style={{width: 90, backgroundColor: '#d8d17d'}} />
        </label>
      </div>
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
  render () {
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
  render () {
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

class B30 extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    console.log(this);
    return (
        <span style={{width: 50, marginLeft: 20}}>
            {this.props.mes0}
        </span>
    )}
  };

class B31 extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    console.log(this);
    return (
        <span style={{width: 50, marginLeft: 20}}>
                {this.props.mes1}
        </span>
    )}
  };

class B32 extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    console.log(this);
    return (
        <span style={{width: 50, marginLeft: 20}}>
                {this.props.mes2}
        </span>
    )}
  };

class B33 extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    console.log(this);
    return (
        <span style={{width: 50, marginLeft: 20}}>
                =
        </span>
    )}
  };

class B34 extends React.Component {
  constructor(props) {
    super(props);
  }
render () {
  console.log(this);
  return (
      <span style={{width: 50, marginLeft: 20}}>
                {this.props.res}
      </span>
  )}
};

class Solutions extends React.Component {
    constructor(props) {
      super(props);
      let formatted;
  }
  clickHandler () {
    this.props.solFunc();
  }
  render () {
    if (this.props.hidden2) { return ( null ) } 
    let formatted = this.props.sol.map(function(line) {
      return (<p>{line}</p>);
    });
    return (
      <div onClick={this.clickHandler.bind(this)} >
          Solutions (click) <br /> <br />
          {formatted}
      </div>
    )
  }
}

class SetGoal extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange (event) {       // ISSUE: Input box won't accept data without this handleChange function. ??
    goal = event.target.value;
    this.props.change({goal: goal});
    this.props.setgoal(goal);
  }
  handleEnter (event) {
    if (this.props.goal == '') { 
      return 
    } else {
      if( event.keyCode == 13 ) {
        this.props.setgoal(goal);
      }
    }
  }
  click (event) { 
    if (this.props.name == '') { 
        return 
    } else { 
      this.props.setgoal(goal);
    }
  }
  render () {
    console.log(this);
    if ((this.props.hidden2)) { return ( null ) } 
    let name = this.props.name;
    return (
      <div >
        <input type="text" name={name} onChange={this.handleChange.bind(this)} 
        onKeyDown={this.handleEnter.bind(this)} />
        {this.props.goal}
        <button onClick={this.click.bind(this)}>New goal</button>
      </div>
    );
  }
};

class Solutions2 extends React.Component {
    constructor(props) {
      super(props);
      let formatted;
  }
  clickHandler () {
    this.props.solFunc();
  }
  render () {
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

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    console.log(this);
    return (
        <div>
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
        scoreB: [``],
        info: ``
      }); 
    } 
    else {
    let ENTER = 13;
      if( event.keyCode == ENTER ) {
        let name = this.props.name;
        this.props.change({ hidden: true});
        this.props.change({ hidden2: false});
        this.props.change({ name: name});
        this.props.change({ buttonDisplay: 'inline'});
        DES_ws.send('CC#$42'+name);
      }
    }
  }
  click () { 
    if (this.props.name == '') { 
      this.props.change({
        scoreB: [`Please enter a name.`],
        info: `Please enter a name.`
      }); 
    } else { 
      let name = this.props.name;
      this.props.change({ buttonDisplay: 'inline'});
      this.props.change({ hidden: true});
      this.props.change({ hidden2: false});
      this.props.change({ name: name});
      DES_ws.send('CC#$42'+name);
    }
  }
  render () {
    console.log(this);
    if ((this.props.hidden)) { return ( null ) } 
    let name = this.props.name;
    return (
      <div>
        <input type="text" name={name} onChange={this.handleChange.bind(this)} 
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

class Messages2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    console.log(this);
    if (this.props.hidden2) { return ( null ) } 
    return (
        <div>
             {this.props.message}
        </div>
    )
  }
};

class B4 extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
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
        setInterval : 0,
        str1: "",
        str2: "",
        str3: "",
        str4: "",
        hidden: false,
        hidden2: true,
        hidden3: false,
        hidden4: true,
        togDice: false,
        name: "",
        DS_T: "SCORE!",
        N: 0,
        STRING: '',
        impossibleClicker: "a@F$Uy&imp",
        scoreClicker: "a@F$Uy&sc",
        scoreB: ["Greetings new player."],
        group: 'solo',
        info: 'Please enter a name.',
        used: [],
        dynamicBg: '#000000',
        dynamicColor: '#d5f765',
        dynamicFont: 20,
        test: false,
        message: '',
        score: false,
        goal: 29,
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
        buttonColor: '#83f7d7',
        colorB42: '#000',
        buttonDisplay: 'none'
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
  console.log("4444444444444444444444444444444444444444444444444444444444444444444")
  console.log(ar);
  console.log(ar2);
  console.log(ar3);

  if ( ( (that.state.group === gameArray[1]) && (that.state.group !== "solo")) || 
        that.state.name === sender || extra === '%#8*&&^1#$%^' || d2 === "CB#$42" ) {
      switch (d2) {

          case "CC#$42":
            if (extra === '%#8*&&^1#$%^')  {
              that.setState({info: `You entered a name which is already taken`})
              setTimeout( function() {
                document.location.reload(false);
              },2000);
              // DES_ws.send(`CO#42,solo,Angel Eyes,filler`);
            }
            else {
              that.setGroup('solo');
              DES_ws.send(`CO#$42,solo,${sender},filler`);
            }
          break;

          case "CZ#$42":
              let sol = extra.split("<br />");
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
                scoreB: ar3
              });
            } else {
              that.setState({
                scoreB: ['Data is visible to group players.']
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
            if (that.state.score) {
              that.setState({DS_T: extra});
            }
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
            let playerName = that.state.name;
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
                let a = that.state.message1;
                let b = that.state.message2;
                let c = that.state.message3;
                let d = that.state.message4;
                DES_ws.send(`DZ#$42,${group},${name},${a},${b},${c},${d},20`);
              }
          });
          break;

          case "DC#$42":
            console.log("___________________########$$$$$$$$__________Name taken.");
            that.setState({})
          break;

          case "DZ#$42":
            let this2 = that;
            if (that.state.scoreClicker !== that.state.name) {
              let solutions = extra;
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
            DES_ws.send(`SX#$42,${group},${name},filler`);
            //  DES_ws.send("SX#$42," + groupM + "," + playerM + "," + rollM);
          break;

          default:
              console.log( "fell through to default");
          break;
      }
    }
  }

  setInterval(() => {
    let name = this.state.name;
    let group = this.state.group;
    if (this.state.DS_T === 0) {
      DES_ws.send(`CR#$42,${group},${name},filler`);  
      if (this.state.name === this.state.scoreClicker) {
        DES_ws.send(`CI#$42,${group},${name},filler`);   
      }
      this.setState
      ({
        DS_T: `10 seconds expired. Deduct one point from ${this.state.scoreClicker}`,
        message1: '',
        message2: '',
        message3: '',
        message4: '',
        buttonDisplay: 'inline'
      });
    }
    if ( this.state.DS_T > -1 ) {
      let X = this.state.DS_T - 1
      this.setState({DS_T: X});
      this.setState({info: X});
    }
    if (this.state.DS_T === -1) {
      this.setState({
        DS_T: '',
        info: ''
      });
    }
  }, 1000 )
}

isElement (x, ar) { 
  var value = false;
  ar.map( e => {
    if (x === e) {
      value = true;
    };
  })
  return value;
}

  getStyles () {
    return {
      padding: "1em",
      borderRadius: 5,
      background: this.state.dynamicBg
    };
  }

  changeBackground (color) {
    this.setState({
      dynamicBg: color
    });
  }

  changeColor (col) {
    this.setState({
      dynamicColor: col,
      sty: {color: col, width: 50, marginLeft: 30, padding: 10}
    });
  }

increaseFont () {
  let x = this.state.dynamicFont;
  if (x > 0) {
    this.setState( {dynamicFont: (x + 4) })
  }
}

decreaseFont () {
  let x = this.state.dynamicFont;
  if (x < 80) {
    this.setState( {dynamicFont: (x - 4) })
  }
}

  hoverHandler () {
    this.setState( {buttonColor: '#f99094' })
  }
  leaveHandler () { 
    this.setState( {buttonColor: '#83f7d8' })
  }
  hoverHandler0 () {
    this.setState( {buttonColor0: '#f99094' })
  }
  leaveHandler0 () { 
    this.setState( {buttonColor0: '#83f7d8' })
  }
  hoverHandler1 () {
    this.setState( {buttonColor1: '#f99094' })
  }
  leaveHandler1 () { 
    this.setState( {buttonColor1: '#83f7d8' })
  }
  hoverHandler2 () {
    this.setState( {buttonColor2: '#f99094' })
  }
  leaveHandler2 () { 
    this.setState( {buttonColor2: '#83f7d8' })
  }
  hoverHandler3 () {
    this.setState( {buttonColor3: '#f99094' })
  }
  leaveHandler3 () { 
    this.setState( {buttonColor3: '#83f7d8' })
  }

  hoverHandler4 () {
    this.setState( {buttonColor4: '#f99094' })
  }
  
  leaveHandler4 () { 
    this.setState( {buttonColor4: '#acf9a2' })
  }

  hoverHandler5 () {
    this.setState( {buttonColor5: '#f99094' })
  }
  
  leaveHandler5 () { 
    this.setState( {buttonColor5: '#acf9a2' })
  }

  hoverHandler6 () {
    this.setState( {buttonColor6: '#f99094' })
  }
  
  leaveHandler6 () { 
    this.setState( {buttonColor6: '#acf9a2' })
  }

  hoverHandler7 () {
    this.setState( {buttonColor7: '#f99094' })
  }
  
  leaveHandler7 () { 
    this.setState( {buttonColor7: '#acf9a2' })
  }

  hoverHandler8 () {
    this.setState( {buttonColor8: '#f99094' })
  }
  
  leaveHandler8 () { 
    this.setState( {buttonColor8: '#acf9a2' })
  }

  hoverHandler9 () {
    this.setState( {buttonColor9: '#f99094' })
  }
  
  leaveHandler9 () { 
    this.setState( {buttonColor9: '#83f7d8' })
  }

  solutions () { 
    let group = this.state.group;
    let name = this.state.name;
    let goal = this.state.goal;
    DES_ws.send( `CZ#$42,${group},${name},${goal}` ); 
  }

  moreUsed (x) {
    let ar = this.state.used;
    ar.push(x);
    this.setState({ used: ar });
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
    let col = this.state.dynamicColor;
    this.setState({
      DS_T: 'SCORE!',
      hidden4: false,
      used: [],
      test: false,
      score: false,
      message: 'You must click SCORE in order to gain a point.',
      sty: {color: col, width: 50, marginLeft: 30, padding: 10},
      colorB42: '#ff0000'
    });
    let name = this.state.name;
    let group = this.state.group;
    DES_ws.send(`CK#$42,${group},${name},SCORE!`);
    DES_ws.send(`CF#$42,${group},${name},filler`);
    let that = this;
    let delay = this.delay
    let s = DES_ws.readyState
    if (s === 1) {
      DES_ws.send(`CA#$42,${group},${name},6,6,12,20`);
    } else this.delay(300).then( function () {
      that.rollDice()
    })
    // this.setState({sty: {color: '#d5f765', 
    //      fontSize: "38", textAlign: "center", padding: "20",  }});
  }

  getSolutions () {
    if (this.state.message4 !== '') {  // That is, no calculations have been made.
      let name = this.state.name;
      let group = this.state.group;
      let a = this.state.message1;
      let b = this.state.message2;
      let c = this.state.message3;
      let d = this.state.message4;
      DES_ws.send(`CZ#$42,${group},${name},${a},${b},${c},${d},20`);
    }
  }

  setNumberAr () {
    let w1 = this.state.message1;
    let w2 = this.state.message2;
    let w3 = this.state.message3;
    let w4 = this.state.message4;
    let result = this.state.res;
    let startArray = [w1, w2, w3, w4, result];
    this.newNums(startArray);   
  }

  setGroup (x) {
    let name = this.state.name;
    DES_ws.send( `CO#$42,${x},${name},setGroup` );
    this.setState({group: x});
  }

  setInfo (x) {
    let name = this.state.name;
    let group = this.state.group;
    DES_ws.send( `IA#$42,${group},${name},${x}` );
  }

  newNums (x) {
    let j = 0;
    let gr = this.state.group;
    let inPlay = this.state.score;
    let ar = [];
    let clock = 10;
    let string = this.state.STRING;
    let result = this.state.res;
    let name = this.state.name;
    for (let k in x) {
        if (x[k] !== "" && x[k] !== undefined) {
        ar[j] = x[k];
        j += 1;
      }
    }
    this.setState({N: j});
    if (j === 3) {
      DES_ws.send(`CQ#$42,${gr},${name},str1,${string}`);
      DES_ws.send(`CE#$42,${gr},${name},${ar[0]},${ar[1]},${ar[2]}`);
      this.setState({message: 'You must use the red number in order to score in this round.'})
    }
    else if (j === 2) {
      DES_ws.send(`CQ#$42,${gr},${name},str2,${string}`);
      DES_ws.send(`CE#$42,${gr},${name},${ar[0]},${ar[1]},`)
      if (result === 20 && this.state.test && inPlay) {
          clock = "One Point For " + name;
          DES_ws.send( `CR#$42,${gr},${name},filler` ); 
          DES_ws.send( `CG#$42,${gr},${name},filler` ); 
      }
    }
    else if (j === 1) {
      DES_ws.send(`CQ#$42,${gr},${name},str3,${string}`);
      DES_ws.send(`CE#$42,${gr},${name},${ar[0]}`)
      if (result === 20 && inPlay) {
          clock = "One Point For " + name;
          DES_ws.send( `CR#$42,${gr},${name},filler` ); 
          DES_ws.send( `CG#$42,${gr},${name},filler` ); 
      }
        if (result !== 20 && this.state.score) {
          clock = "Take One Point From " + name;
          DES_ws.send( `CR#$42,${gr},${name},filler` ); 
          DES_ws.send( `CI#$42,${gr},${name},filler` ); 
        }
      } 
      DES_ws.send( `CK#$42,${gr},${name},${clock}` );
      DES_ws.send( `CF#$42,${gr},${name},filler` );
    }

  calc () {
    let group = this.state.group;
    let that = this;
    let delay = this.delay;
    let res, m0, m1, m2;
    let n = this.state.N;
    let name = this.state.name;
    if (this.state.DS_T !== "SCORE!") {
      DES_ws.send( `CK#$42,${group},${name},10` );
    }
    delay(100).then( function() {
      m0 = that.state.mes0;
      m1 = that.state.mes1;
      m2 = that.state.mes2;
      let resP = that.state.resPrevious;
      let ar5 = [m0,m2];
      let usedTest = that.isElement(resP,[m0,m2]);
      console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
      console.log(m0,m2,resP,ar5,usedTest);
      console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
      that.setState({ test: usedTest })
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
    .then( this.forceUpdate() )
    .then( delay(150) )
    .then( function() {
      let resString = that.state.res.toString();
      that.setState({ 
        STRING: `${m0} ${m1} ${m2} = ${resString}`,
        resPrevious: resString,
        message: ''
        })
    })
    .then( delay(100) )
    .then( function () {
      that.setNumberAr();
    })
    .then(function() {
      that.setState({colorB42: '#ff0000' });
    });
  }

  newPlayer (x) {
    this.setState({name: x});
    DES_ws.send("CC#42$"+x)
  }

  changeItem (x) {
    this.setState(x)
  }

  logMessage () {
    console.log("*************************************************************************** Message from logMessage");
  }

  buttonHandler () {
    let name = this.state.name;
    let group = this.state.group;
    let x = `Click SCORE to begin.`
    DES_ws.send( `IA#$42,${group},${name},${x}` );
    this.rollDice();
  }

  handleB (m) {
    let name = this.state.name;
    let group = this.state.group;
    let num = this.state.m;
    this.moreUsed(num);
    this.setState({m: '' });
    if (this.state.mes0 === 'Number') {
      DES_ws.send(`CQ#$42,${group},${name},mes0,${num}`);
      console.log('_________________________________________________________in handleB40');
    }
    else if (this.state.mes2 === 'Number') {
      DES_ws.send(`CQ#$42,${group},${name},mes2,${num}`);
      if (this.state.mes1 !== 'Operator') {
        this.calc();
      }
    }
  }

  handleB40 () {
    let name = this.state.name;
    let group = this.state.group;
    let num = this.state.message1;
    this.moreUsed(num);
    this.setState({message1: '' });
    if (this.state.mes0 === 'Number') {
      DES_ws.send(`CQ#$42,${group},${name},mes0,${num}`);
      console.log('_________________________________________________________in handleB40');
    }
    else if (this.state.mes2 === 'Number') {
      DES_ws.send(`CQ#$42,${group},${name},mes2,${num}`);
      if (this.state.mes1 !== 'Operator') {
        this.calc();
      }
    }
  }

  handleB41 () {
    let name = this.state.name;
    let group = this.state.group;
    let num = this.state.message2;
    this.moreUsed(num);
    this.setState({message2: '' });
    if (this.state.mes0 === 'Number') {
      DES_ws.send(`CQ#$42,${group},${name},mes0,${num}`);
      console.log('_________________________________________________________in handleB40');
    }
    else if (this.state.mes2 === 'Number') {
      DES_ws.send(`CQ#$42,${group},${name},mes2,${num}`);
      if (this.state.mes1 !== 'Operator') {
        this.calc();
      }
    }
  }

  handleB42 () {
    let name = this.state.name;
    let group = this.state.group;
    let num = this.state.message3;
    this.moreUsed(num);
    this.setState({message3: '' });
    if (this.state.mes0 === 'Number') {
      DES_ws.send(`CQ#$42,${group},${name},mes0,${num}`);
      console.log('_________________________________________________________in handleB40');
    }
    else if (this.state.mes2 === 'Number') {
      DES_ws.send(`CQ#$42,${group},${name},mes2,${num}`);
      if (this.state.mes1 !== 'Operator') {
        this.calc();
      }
    }
  }

  handleB43 () {
    let name = this.state.name;
    let group = this.state.group;
    let num = this.state.message4;
    this.moreUsed(num);
    this.setState({message4: '' });
    if (this.state.mes0 === 'Number') {
      DES_ws.send(`CQ#$42,${group},${name},mes0,${num}`);
      console.log('_________________________________________________________in handleB40');
    }
    else if (this.state.mes2 === 'Number') {
      DES_ws.send(`CQ#$42,${group},${name},mes2,${num}`);
      if (this.state.mes1 !== 'Operator') {
        this.calc();
      }
    }
  }

  handleOp0 () { 
    let name = this.state.name;
    let group = this.state.group;
    DES_ws.send(`CQ#$42,${group},${name},mes1,+`);
    let test = this.state.mes0 !== 'Number' && this.state.mes2 !== 'Number';
    if (test) {
        this.calc();
    }
  }

  handleOp1 () { 
    let name = this.state.name;
    let group = this.state.group;
    DES_ws.send(`CQ#$42,${group},${name},mes1,-`);
    let test = this.state.mes0 !== 'Number' && this.state.mes2 !== 'Number';
    if (test) {
        this.calc();
    }
  }

  handleOp2 () { 
    let name = this.state.name;
    let group = this.state.group;
    DES_ws.send(`CQ#$42,${group},${name},mes1,*`);
    let test = this.state.mes0 !== 'Number' && this.state.mes2 !== 'Number';
    if (test) {
        this.calc();
    }
  }

  handleOp3 () { 
    let name = this.state.name;
    let group = this.state.group;
    DES_ws.send(`CQ#$42,${group},${name},mes1,/`);
    let test = this.state.mes0 !== 'Number' && this.state.mes2 !== 'Number';
    if (test) {
        this.calc();
    }
  }

  handleOp4 () { 
    let name = this.state.name;
    let group = this.state.group;
    DES_ws.send(`CQ#$42,${group},${name},mes1,Concat`);
    let test = this.state.mes0 !== 'Number' && this.state.mes2 !== 'Number';
    if (test) {
        this.calc();
    }
  }

  handleScore () {
    let name = this.state.name;
    let group = this.state.group;
    if (this.state.DS_T === "SCORE!") {   // Click works only at the start of each round
      this.setState({
        score: true,
        message: '',
        scoreClicker: name
      });
      DES_ws.send( `CK#$42,${group},${name},10` );
      DES_ws.send( `CY#$42,${group},${name},${name}` );   // After 8 seconds, non-clickers see solutions.
    } 
  }

  render () {
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
    let dynB = this.state.dynamicBg;
    let dynC = this.state.dynamicColor;
    let dynF = this.state.dynamicFont;
    let buttonDisplay = this.state.buttonDisplay;
    let m1 = this.state.message1;

    console.log(this);
    return (
      <div style={{backgroundColor: dynB, color: dynC, fontSize: dynF, display: 'inlineBlock'}} >
          <div style={{width: 600, float: 'right'}} >
            <ChangeColor key='ChangeColor' changeC={this.changeColor.bind(this)} 
              style={{width: 8}} />
            <ChangeBackground key='ChangeBackground' changeB={this.changeBackground.bind(this)} 
              style={{width: 8}} />
            <button key='$#19' onClick={this.increaseFont.bind(this)} 
               
              style={{backgroundColor: '#d8d17d', color: '#f00'}} >
               Increase Font Size</button>
            <span style={{backgroundColor: dynB, color: dynB}}>e</span>
            <button key='$#20' onClick={this.decreaseFont.bind(this)}  
              style={{backgroundColor: '#d8d17d', color: '#f00'}} >
              Decrease Font Size</button>
            <ScoreBoard key='ScoreBoard' scoreB={this.state.scoreB} />
          </div>

          <Messages key='Messages' info={this.state.info} />

          <GroupA key='GroupA' hidden2={this.state.hidden2} setGroup={this.setGroup.bind(this)} />

          <GroupB key='GroupB' setGroup={this.setGroup.bind(this)} hidden2={this.state.hidden2} />

          <GroupNew key='GroupNew' setGroup={this.setGroup.bind(this)} hidden2={this.state.hidden2} name={this.state.name} />

          <div/>

          <Login key='Login' newPlayer={this.newPlayer.bind(this)} name={this.state.name} 
            setGroup={this.setGroup.bind(this)} change={this.changeItem.bind(this)} 
            group={this.state.group} hidden={this.state.hidden} info={this.state.info} 
             setInfo={this.setInfo.bind(this)} />

          <Display key='Display' str1={this.state.str1} str2={this.state.str2} str3={this.state.str3} 
            str4={this.state.str4} />

          <button onMouseEnter={this.hoverHandler9.bind(this)} onClick={this.handleScore.bind(this)}
            onMouseLeave={this.leaveHandler9.bind(this)} 
            style={{backgroundColor: buttonCol9, display: buttonDisplay, paddingTop: 1.1, 
              paddingBottom: 0.9, marginRight: 3}} >
            {this.state.DS_T}
          </button>

          <div style={{width: 8000, backgroundColor: dynB,  padding: 10}} />

          <Messages2 key='Messages2' message={this.state.message} />

          <button onMouseEnter={this.hoverHandler0.bind(this)} onClick={this.handleB40.bind(this)}
            onMouseLeave={this.leaveHandler0.bind(this)} 
            style={{backgroundColor: buttonCol0, display: buttonDisplay, paddingTop: 1.1, 
              paddingBottom: 0.9, marginRight: 3, marginLeft: 10, fontSize: 20}} >
            {this.state.message1}
          </button>

          <button onMouseEnter={this.hoverHandler1.bind(this)} onClick={this.handleB41.bind(this)}
            onMouseLeave={this.leaveHandler1.bind(this)} 
            style={{backgroundColor: buttonCol1, display: buttonDisplay, paddingTop: 1.1, 
              paddingBottom: 0.9, marginRight: 3, fontSize: 20}} >
            {this.state.message2}
          </button>

          <button onMouseEnter={this.hoverHandler2.bind(this)} onClick={this.handleB42.bind(this)}
            onMouseLeave={this.leaveHandler2.bind(this)} 
            style={{backgroundColor: buttonCol2, display: buttonDisplay, paddingTop: 1.1, 
              paddingBottom: 0.9, marginRight: 3, fontSize: 20}} >
            {this.state.message3}
          </button>

          <button onMouseEnter={this.hoverHandler3.bind(this)} onClick={this.handleB43.bind(this)}
            onMouseLeave={this.leaveHandler3.bind(this)} 
            style={{backgroundColor: buttonCol3, display: buttonDisplay, paddingTop: 1.1, 
              paddingBottom: 0.9, marginRight: 3, fontSize: 20}} >
            {this.state.message4}
          </button>

          <div style={{width: 8000,  padding: 10}} />

          <button onMouseEnter={this.hoverHandler4.bind(this)} onClick={this.handleOp0.bind(this)}
            onMouseLeave={this.leaveHandler4.bind(this)} 
            style={{backgroundColor: buttonCol4, display: buttonDisplay, paddingTop: 1.1, 
              paddingBottom: 0.9, marginRight: 3, marginLeft: 10, fontSize: 20}} >
            +
          </button>

          <button onMouseEnter={this.hoverHandler5.bind(this)} onClick={this.handleOp1.bind(this)}
            onMouseLeave={this.leaveHandler5.bind(this)} 
            style={{backgroundColor: buttonCol5, display: buttonDisplay, paddingTop: 1.1, 
              paddingBottom: 0.9, marginRight: 3, fontSize: 20}} >
            -
          </button>

          <button onMouseEnter={this.hoverHandler6.bind(this)} onClick={this.handleOp2.bind(this)}
            onMouseLeave={this.leaveHandler6.bind(this)} 
            style={{backgroundColor: buttonCol6, display: buttonDisplay, paddingTop: 1.1, 
              paddingBottom: 0.9, marginRight: 3, fontSize: 20}} >
            *
          </button>

          <button onMouseEnter={this.hoverHandler7.bind(this)} onClick={this.handleOp3.bind(this)}
            onMouseLeave={this.leaveHandler7.bind(this)} 
            style={{backgroundColor: buttonCol7, display: buttonDisplay, paddingTop: 1.1, 
              paddingBottom: 0.9, marginRight: 3, fontSize: 20}} >
            /
          </button>

          <button onMouseEnter={this.hoverHandler8.bind(this)} onClick={this.handleOp4.bind(this)}
            onMouseLeave={this.leaveHandler8.bind(this)} 
            style={{backgroundColor: buttonCol4, display: buttonDisplay, paddingTop: 1.1, 
              paddingBottom: 0.9, marginRight: 3, fontSize: 20}} >
            Concat
          </button>

          <div style={{width: 8000,  padding: 10}} />

          <B30 key='B30' mes0={this.state.mes0} />
          <B31 key='B31' mes1={this.state.mes1} />
          <B32 key='B32' mes2={this.state.mes2} />
          <B33 key='B33' />
          <B34 key='B34' res={this.state.res} />

          <div style={{width: 8000,  padding: 10}} />

          <button onMouseEnter={this.hoverHandler.bind(this)} 
            onMouseLeave={this.leaveHandler.bind(this)} style={{backgroundColor: buttonCol, marginLeft: 10, display: buttonDisplay}} 
              onClick={this.buttonHandler.bind(this)} >
             Roll 
          </button>

          <div style={{width: 8000,  padding: 10}} />
          <Solutions key='Solutions' solFunc={this.getSolutions.bind(this)} sol={this.state.sol} 
            hidden2={this.state.hidden2} />
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
