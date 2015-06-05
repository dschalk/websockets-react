<!doctype html>
<html lang="en">
    <head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="screen.css"></link>
</head>
<body>
    <div class="spacer">
        <button id="showRules" type="submit">RULES AND CODE ANALYSIS</button>
        <button id="hideRules" type="submit" class="fixed">GAME</button>
        <br><br>
        <button id="top" type="submit" class="fixed2">TOP</button>
        <button id="algorithm" type="submit" class="fixed3">ALGORITHM</button>
        <button id="rul" type="submit" class="fixed4">RULES</button>
    </div>
    <div id="rules"></div>
      <div class="spacer" id="left">
        <div class="spacer">
            <button id="private">Private Play</button>
            <button id="publicA">Group A</button>
            <button id="publicB">Group B</button>
            <button id="newG">Player Created</button>
            <input type="text" id="new">
            <div id="b0"></div>
        </div>
        <div id="a0"></div>
        <div id="a2"></div>
        <div id="countdown"></div>
        <div id="a4"></div>
        <div id="a3">
            <button id="rollA", type="submit" >ROLL</button>
            <button type="submit" id="newDisplay" >REFRESH</button>
        </div>
        <div id="a1"></div>
        <div class="spacer">
            <button id="scoreF" type="submit" >SCORE</button>
            <button id="impossibleJ" type="submit" >IMPOSSIBLE</button>
            <div id="info1"></div>
            <br><br>
            <div id="info2"></div>
        </div>
        <div class="spacer">
            <button id="solutions" type="submit">SOLUTIONS</button>
            <br><br>
            <button class="erase">ERASE</button>
            <br><br><br>
            <div id="goal" class="extra">GOAL</div>
            <input type="text" id="goalval" class="rad" >
            <br><br><br><br>
            <div id="sides" class="extra">RANGES</div>
            <input type="text" id="x20" class="rad" >
            <input type="text" id="x21" class="rad" >
            <input type="text" id="x22" class="rad" >
            <input type="text" id="x23" class="rad" >
            <div id="show"></div>
            <button class="erase">ERASE</button>
        </div>

        <div>

        </div>
      </div>

<div class="spacer" id="right"><h1><span></span></h1>
    <div id="main">
        <button id="expand">EXPAND CHAT WINDOW</button>
        <button id="contract">SHOW THE GAME</button>
        <div id="warnings"></div>
        <div id="join-section">
            <h2>Join</h2>
            <form id="join-form" action="">
            <label for="user" style="background: #B1C771; color: #000;"></label>
            <input id="user" type="text" size="12" style="background: #B1C771"/>
            <input id="send" type="submit" value="Join" style="background: #B1C771"/>
            </form>
        </div>
        <div id="users-section" style="display: none">
            <h2>Player _ Score _ Group</h2>
            <ul id="users">
            </ul>
        </div>
        <div id="chat-section" style="display: none">
            <h2>Chat</h2>
            <div id="messages">
            </div>
            <br>
            <input id="text" type="text" size="40" class="messages"/>
            <button id="sendMessage" class="messages">SEND</button>
            <button id="clear" class="messages">CLEAR</button>
        </div>
    </div>
    <div class="spacer" id="experiment">
        <button id="solutions2" type="submit">CALCULATE</button>
        <input type="text" id="x30" class="rad2" >
        <input type="text" id="x31" class="rad2" >
        <input type="text" id="x32" class="rad2" >
        <input type="text" id="x33" class="rad2" >
        <button class="erase2">ERASE</button>
        <div id="show4">Currently Active</div>
        <div id="show3"></div>
        <div id="show2"></div>
    </div>
    <div class="spacer2">
        <button class="erase2">ERASE</button>
    </div>
    <div id="goal3" type="submit" class="extra">GOAL</div>
    <input type="text" id="goal4" class="rad" >
</div>
    <div id="go30"></div>
    <div id="go60"></div>
    <div id="stop30"></div>
    <div id="stop60"></div>
    <script src="scripts/jquery.js"></script>
    <script type="text/JavaScript" src="client.js"></script>
    <script src="scripts/jquery-ui.js"></script>
  </body>
</html>
