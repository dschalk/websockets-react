function createWebSocket(path) {
    var host = window.location.hostname;
    var port = window.location.port;
    if(host == '') host = 'localhost';
    var uri = 'ws://' + host + ":" + port + path;
    var Socket = WebSocket           // "MozWebSocket" in window ? MozWebSocket : WebSocket;
    return new Socket(uri);
    connect("/",{
        "connect timeout": 36000,
        "reconnect": false
    });
}

var ws;
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
var DS_T = -1;
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

setInterval( function () {
  if (DS_T == 0) {
    DS_ob.scoreFunc();
  }
  if (DS_T > -1) {
    DS_T -= 1;
    $("#countdown").html(DS_T);
  }
  if (DS_T == -1) $("#countdown").html("");
},1000 );

refresh = function() {
    gameM = "off";
    dM = -1;
    impossibleClickerM = "a@F$Uy&impossible";
    scoreClickerM = "a@F$Uy&score";
    DS_ob.ar = [];
    DS_ob.bool = [];
    $("#a0").html("");
    $("#a2").html("");
    $("#a4").html("");
    createDom();
    createOperators();
    createDropboxes();
    $('.drag').draggable({ revert: "invalid", zIndex: 2 });
    $('.dragNew').draggable({ revert: "invalid", zIndex: 2 });
    $('.drag2').draggable({ helper: "clone", revert: "invalid", zIndex: 2 });
    createDrop1();
    createDrop2();
    $("#result1").hide();
    $("#result2").hide();
    $("#result3").hide();
    $("#rollA").show();
    $("#scoreF").hide();
    $("#impossibleJ").hide();
    $("#newDisplay").hide();
    $("#countdown").html("");
    $(".dropx").hide();
    $(".drop2x").hide();
    $(".drop").show();
    $(".drop2").show();
};

$(document).ready(function () {
    $("#newG").hide();
    $("#algorithm").hide();
    $("#rul").hide();
    $("#top").hide();
    $("#table").hide();
    $("#hideRules").hide();
    $(".extra").hide();
    $("#expand").hide();
    $("#contract").hide();
    $(".rad").hide();
    $("#new").hide();
    function assign (a, b, c, d, e, f) {
        var res;
        $("#"+d).hide();
        $("#"+e).hide();
        $("#result" + f).show();
        switch (b) {
            case "+": res = parseFloat(a) + parseFloat(c);
            break;
            case "-": res = a - c;
            break;
            case "*": res = a * c;
            break;
            case "/": res = a / c;
            break;
            case "Concat": res = parseFloat(a+c);
            break;
        }
        $("#result" + f).html(res);
        $("#0").html(a);
        $("#1").html(b);
        $("#2").html(c);
    };
    function onMessage(event) {
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
        console.log("******************* gameArray *********");
        console.log(gameArray);
        console.log("***********************************");
        console.log(gameArray);
        console.log((groupM === gameArray[1]) && (groupM !== "private"));
        console.log(playerM === sender);
        console.log("sendersGroup is " + sendersGroup);
        var p = $(document.createElement('p')).text(event.data);
        if (((groupM === gameArray[1]) && (groupM !== "private")) || (playerM === sender) || sendersGroup === "pass") {
            switch (d2) {
                case "CA#$42":               // Set up the next round of play.
                    refresh();
                    $(".dropx").hide();
                    $(".drop2x").hide();
                    $(".drop").show();
                    $(".drop2").show();
                    $("#impossibleJ").show();
                    $("#scoreF").show();
                    $("#info1").html("");
                    $(".erase").show();
                    $("#show2").show();
                    $("#solutions").show();
                    $("#iutions2").show();
                    $("#a0").html("");
                    rollTextM = extra + "," + ext4 + "," + ext5 + "," + ext6;
                    dM = -1;
                    populate(extra,ext4,ext5,ext6);
                    $("#a4").html(extra + " " + ext4 +  " " + ext5 + " " + ext6);
                break;

                case "CB#$42":
                    if ("private" !== sendersGroup ) { 
                      $("#users").html(extra);  // Refresh scoreboards.
                    }
                break;

                case "DB#$42":
                      $("#show3").html(extra);
                break;

                case "CO#$42":
                    $("#b0").html(sender + "'s group status is now " + sendersGroup);
                    if (sendersGroup == "private") $("#users").html("");
                break;

                case "CC#$42":
                    
                break;

                case "CD#$42":       // Prevent new player login data from displaying as a chat message.
                    if (sender !== playerM) {
                        $("#" + gameArray[3]).hide();
                        $("#" + gameArray[5]).val(gameArray[4]);
                        $("#" + gameArray[5]).html(gameArray[4]);
                    }
                break;

                case "CE#$42":
                    $("#a4").append(extra);  // Display computations.
                    $("#rollA").hide();
                    DS_ob.ar = [];
                break;

                case "CF#$42":
                    gameM = "on";
                    $("#a2").append("<br>" + sender + " clicked 'SCORE'");
                    DS_ob.ar = [];
                    $("#rollA").hide();
                    $("#newDisplay").hide();
                    $("#impossibleJ").hide();
                    $("#scoreF").hide();
                    DS_T = 30;
                    if (playerM !==  scoreClickerM) {
                        $("#a0").append(sender + " clicked SCORE and must make the " +
                            "number " + goalM + " before time runs out.</h3>");
                        $(".dropx").show();
                        $(".drop2x").show();
                        $(".drop").hide();
                        $(".drop2").hide();
                    }
                break;

                case "CG#$42":
                    DS_T = -1;
                    $("#a0").html("");
                    $("#a2").append("<br>One point for " + sender);
                    $("#a1").prepend("<span style='font-size:75px; background:#000; color:#f00;'>" +
                        "Score!</span>");
                    $("#newDisplay").show();
                    $("#countdown").html("");
                break;

                case "CH#$42":
                    if (playerM !== sender && gameM === "on") {
                        assign (extra, ext4, ext5, ext6, ext7, ext8);
                    }

                break;

                case "CK#$42":       // Prevent new player login data from displaying as a chat message.
                    if (sender !== playerM) {
                        $("#" + gameArray[3]).hide();
                        $("#1").val(gameArray[4]);
                        $("#1").html(gameArray[4]);
                    }
                break;

                case "CP#$42":

                break;

                case "CI#$42":
                    $("#a2").append("<br>deduct one point from " + sender + "'s score.");
                    $("#newDisplay").show();
                break;

                case "CJ#$42":
                    $("#impossibleJ").hide();
                    impossibleClickerM = sender;
                    $("#a2").prepend("<br>" + sender + " clicked 'IMPOSSIBLE'");
                    DS_T = 60;
                break;

                case "CL#$42":
                    $("#a2").append("<br>deduct one point from " + sender + "'s score.");
                    $("#newDisplay").show();
                    DS_T = -1;
                break;

                case "CS#$42":
                    $("#a1").append("<br> The goal is now " + extra);
                    $("#show").append("<br> The goal is now " + extra);
                    goalM = extra;
                    ws.send("CA#$42," + groupM + "," + playerM + "," + rollM);
                break;

                case "CW#$42":
                    if ( sender == playerM ) {
                        $("#show2").prepend(extra);
                    }
                break;

                case "CM#$42":
                    $("#a2").prepend("<br>Time's up and nobody found a solution");
                    $("#newDisplay").show();
                break;

                case "CQ#$42":
                    rollM = extra + "," + ext4 + "," + ext5 + "," + ext6;
                    $("#show").prepend("The ranges are now " + extra + "," + ext4 + "," + ext5 + "," + ext6 + "<br>");
                break;

                case "CN#$42":
                    DS_T = -1;
                    $("#a2").append("<br>deduct two points from " + impossibleClickerM +
                        "'s score. <br>A solution was found before 60 seconds had passed.");
                    $("#newDisplay").show();
                break;

                case "CR#$42":
                    refresh();
                break;

                case "CZ#$42":
                    $("#show").prepend("<br>" + extra);
                    $("#a2").html(sender + " clicked SOLUTIONS.<br><br>");
                break;

                case "DU#$42":
                    if (sendersGroup == "private") {
                      $("#messages").html("Join a group in order to exchange messages");
                    } else {
                    $('#messages').append(sender + ": " + extra + "<br>");
                    // $('#messages').animate({scrollTop: $('#messages')[0].scrollHeight});
                  }
                break;

                case "EE#$42":

                break;

                default: 
                    console.log(msg + " fell through to default");

                break;
            }
        }
    }

    createDom = function() {
        $("#a1").html( '<div id="numbers" style="width:100%; float:left;" ></div>' +
            '<div id="drag3" class="drag" >0</div>' +
            '<div id="drag5" class="drag" >0</div>' +
            '<div id="drag7" class="drag" >0</div>' +
            '<div id="drag9" class="drag" >0</div>' +
            '<div id="result1" name-"new" class="dragNew" name="new" >0</div>' +
            '<div id="result2" name-"new" class="dragNew" name="new" >0</div>' +
            '<div id="result3" name-"new" class="dragNew" name="new" >0</div>' +
            '<br><br><br><br><br><br>' +
            '<div id="operators" style="width:100%; float:left;" > </div>' +
            '<div id="dropBoxes" style="width:100%; float:left;" > </div>' +
            '<div style="width: 100%; float: left;> </div>'
        );
    };

    createOperators = function() {
        $("#operators").html(
            '<div id="drag11" class="drag2" >+</div>' +
            '<div id="drag13" class="drag2" >-</div>' +
            '<div id="drag15" class="drag2" >*</div>' +
            '<div id="drag17" class="drag2" >/</div>' +
            '<div id="drag19" class="drag2" >Concat</div>' +
        '<br><br><br><br><br><br><br><br><br><br>'
        );
    };

    createDropboxes = function() {
        $("#dropBoxes").html(
            '<div id="0" class="drop" >Num</div>' +
            '<div id="1" class="drop2" >Op</div>' +
            '<div id="2" class="drop" >Num</div>' +
            '<div id="0" class="dropx" >Num</div>' +
            '<div id="1" class="drop2x" >Op</div>' +
            '<div id="2" class="dropx" >Num</div> '
        );
    };

    createDrop1 = function() {
        $('.drop').droppable({
            tolerance: "touch",
            hoverClass: 'active',
            accept: ".drag, .dragNew",
            drop: function(e, ui) {
                var status = groupM;
                var player = playerM;
                var ar = DS_ob.ar;
                var bool = DS_ob.bool;
                var dropID = $(this).attr( 'id' );
                var dragID = ui.draggable.attr( 'id' );
                var val = ui.draggable.html();
                ar[dropID] = val;
                ar[(parseInt(dropID) + 3).toString()] = dragID;
                bool.push(ui.draggable.attr( "name" ));  // "name" is either "undefined" or "new".
                ui.draggable.hide( "puff" );
                $(this).html(val);
                bb = (bool.indexOf("new") !== -1); // Did the player use a number generated by a previous computation?
                if (ar[0] !== undefined && ar[1] !== undefined && ar[2] !== undefined) {
                    calc(ar[0], ar[1], ar[2], bb);
                    ws.send("CH#$42," + status + "," + playerM + "," +
                        ar[0] + "," + ar[1] + "," + ar[2] + "," + ar[3] + "," +
                        ar[5] + "," + (dM + 1));
                    refreshDropboxes();
               }
            }
        });
    };

    createDrop2 = function() {
        $('.drop2').droppable({
            tolerance: "touch",
            hoverClass: 'active',
            accept: ".drag2",
            drop: function(e, ui) {
                var ar = DS_ob.ar;
                var bool = DS_ob.bool;
                var dropID = $(this).attr( 'id' );
                var val = ui.draggable.html();
                ar[dropID] = val;
                $(this).html(val);
                bb = (bool.indexOf("new") !== -1); // Did the player use a number generated by a previous computation?
                if (ar[0] !== undefined && ar[1] !== undefined && ar[2] !== undefined) {
                  calc(ar[0], ar[1], ar[2], bb);
                  refreshDropboxes();
                }
            }
        });
    };

    $( ".erase" ).click(function( event ) {
      $("#show").html("");
      $(".erase1").hide();
    });

    $( "#showRules" ).click(function( event ) {
      $("#rules").load("README.html");
      $("#showRules").hide();
      $("#hideRules").show();
      $("#left").hide();
      $("#right").hide();
      $("#top").show();
      $("#algorithm").show();
      $("#rul").show();
    });

    $( "#hideRules" ).click(function( event ) {
      $("#rules").html("");
      $("#hideRules").hide();
      $("#showRules").show();
      $("#left").show();
      $("#right").show();
      $("#top").hide();
      $("#algorithm").hide();
      $("#rul").hide();
    });

    $( "#algorithm" ).click(function( event ) {
      $("#rules").html("");
      $("#rules").load("IMPOSSIBLES.html");
    });

    $( "#rul" ).click(function( event ) {
      $("#rules").html("");
      $("#rules").load("README.html");
    });

    $( "#top" ).click(function( event ) {
      $('html,body').animate({scrollTop:$("#topofRules").offset().top}, 'slow');
    });

    $( "#expand" ).click(function( event ) {
      $("#left").hide();
      $("#right").css("width", "90%");
      $("#main").css("width", "90%");
      $("#contract").show();
      $("#expand").hide();
    });

    $( "#contract" ).click(function( event ) {
      $("#left").show();
      $("#right").css("width", "40%");
      $("#main").css("width", "600px");
      $("#expand").show();
      $("#contract").hide();
    });

    $( ".erase2" ).click(function( event ) {
      $("#show2").html("");
      $(".erase2").hide();
      $('#computations').hide();
    });

    $( "#rollA" ).click(function( event ) {
      bool = [];
      dM = -1;
      ws.send("CA#$42," + groupM + "," + playerM + "," + rollM);
    });

    $( "#solutions" ).click(function( event ) {
      var x = "CZ#$42," + groupM + "," + playerM + "," + rollTextM + "," + goalM;
      ws.send(x);
    });

    $( "#solutions2" ).click(function( event ) {
      var a3 = $("#x30").val();
      if (isNaN(a3) || a3 === "") {
          alert(a3 + " is not a number.");
          return;
      }
      var b3 = $("#x31").val();
      if (isNaN(b3) || b3 === "") {
          alert(b3 + " is not a number.");
          return;
      }
      var c3 = $("#x32").val();
      if (isNaN(c3) || c3 === "") {
          alert(c3 + " is not a number.");
          return;
      }
      var d3 = $("#x33").val();
      if (isNaN(d3) || d3 === "") {
          alert(d3 + " is not a number.");
          return;
      }
      var e = a3 + "," + b3 + "," + c3 + "," + d3 + "," + goal32M
      $("#x30").val("");
      $("#x31").val("");
      $("#x32").val("");
      $("#x33").val("");
      ws.send("CW#$42," + groupM + "," + playerM  + "," + e);
      $('#computations').show();
      $(".erase2").show();
      $("#show2").show();
    });

    $( "#sides" ).click(function( event ) {
      var a2 = $("#x20").val();
      if (isNaN(a2) || a2 === "") {
          alert(a2 + " is not a number.");
          return;
      }
      var b2 = $("#x21").val();
      if (isNaN(b2) || b2 === "") {
          alert(b2 + " is not a number.");
          return;
      }
      var c2 = $("#x22").val();
      if (isNaN(c2) || c2 === "") {
          alert(c2 + " is not a number.");
          return;
      }
      var d2 = $("#x23").val();
      if (isNaN(d2) || d2 === "") {
          alert(d2 + " is not a number.");
          return;
      }
      var e = a2 + "," + b2 + "," + c2 + "," + d2
      ws.send("CQ#$42," + groupM + "," + playerM  + "," + a2 + "," + b2 + "," + c2 + "," + d2);
    });

    $( "#scoreF" ).click(function( event ) {
      $("#scoreF").hide();
      scoreClickerM = playerM;
      $("#impossibleJ").hide();
      ws.send("CF#$42," + groupM + "," + playerM + "," + "place holder");
    });

    $( "#impossibleJ" ).click(function( event ) {
      impossibleClickerM = playerM;
      ws.send("CJ#$42," + groupM + "," + playerM + "," + "place holder");
    });

    $( "#newDisplay" ).click(function( event ) {
      ws.send("CR#$42," + groupM + "," + playerM + "," + "place holder");
    });

    populate = function(a,b,c,d) {
        $("#drag3").html(a);
        $("#drag5").html(b);
        $("#drag7").html(c);
        $("#drag9").html(d);
    }

    refreshDropboxes = function() {
        ar = [];
        $("#0").html("Num");
        $("#1").html("Op");
        $("#2").html("Num");
    }

    $( "#goal" ).click(function( event ) {
      var x = $("#goalval").val()
      if (isNaN(x)) {
          alert(x + " <h2>is not a number.</h2> ");
          return;
      }
      if (x === "") {
          alert(" Please enter a number. ");
          return;
      }
      else {
          ws.send("CS#$42," + groupM + "," + playerM + "," + x );
      }
    });

    $('#goalval').keydown(function(ev){
      if(ev.keyCode == 13) $('#goal').triggerHandler('click');
    });

    $( "#sendMessage" ).click(function( event ) {
        var text = $('#text').val();
        ws.send("SU#$42," + groupM + "," + playerM + "," + text);
        $('#text').val('');
        return false;
    });

    $('#text').keydown(function(ev){
      if(ev.keyCode == 13) $('#sendMessage').triggerHandler('click');
    });

    $( "#goal3" ).click(function( event ) {
      var x = $("#goal4").val()
      if (isNaN(x)) {
          alert(x + " <h2>is not a number.</h2> ");
          return;
      }
      if (x === "") {
          alert(" Please enter a number. ");
          return;
      }
      else {
          goal32M = x;
      }
    });

    $( "#private" ).click(function( event ) {
      groupM = "private";
      ws.send("CO#$42," + "private" + "," + playerM + "," + "placeholder");
      $("#b0").html("Solitaire mode. Your actions do not affect other players.")
    });

    $( "#publicA" ).click(function( event ) {
      groupM = "pubA";
      ws.send("CO#$42," + "pubA" + "," + playerM + "," + "placeholder");
      $("#b0").html("You are now in Group A. Be careful." +
          " Clicking 'ROLL' inserts the roll numbers in all" +
          " Group A browsers.");
      $("#messages").html("");
    });

    $( "#publicB" ).click(function( event ) {
      groupM = "pubB";
      ws.send("CO#$42," + "pubB" + "," + playerM + "," + "placeholder");
      $("#b0").html("Now in group B. Be careful." +
          " Clicking 'ROLL' inserts the roll numbers in all" +
          " group B browsers.");
      $("#messages").html("");
    });

    $( "#newG" ).click(function( event ) {
      var name = $("#new").val();
      if (name !== "") {
          groupM = name;
          ws.send("CO#$42," + name + "," + playerM + "," + "placeholder");
          $("#b0").html("Now in group " + name);
          $("#new").val("");
      $("#messages").html("");
      }
    });

    $( "#new" ).keydown(function( ev ) {
        if(ev.keyCode == 13) $('#newG').triggerHandler('click');
    });

    $( "#clear" ).click(function( event ) {
      $("#messages").html("");
    });

    $("#b0").html("");
    $("#experiment").hide();
    $("#private").hide();
    $("#publicA").hide();
    $("#publicB").hide();
    $("#publicNew").hide();
    $("#rollA").hide();
    $(".erase").hide();
    $(".erase2").hide();
    $("#computations").hide();
    $("#show").html("");
    $("#show2").hide();
    $("#show2").html("");
    $("#solutions").hide();
    $("#newDisplay").hide();
    $("#scoreF").hide();
    $("#impossibleJ").hide();
    $("#a1").hide();
    $('.drag').draggable({ revert: "invalid", zIndex: 2 });
    $('.dragNew').draggable({ revert: "invalid", zIndex: 2 });
    $('.drag2').draggable({ helper: "clone", revert: "invalid", zIndex: 2 });
    $('#join-form').submit(function () {
        $('#warnings').html('');
        var user = $('#user').val();
        playerM = user;
        groupM = "private"
        ws = createWebSocket('/');
        ws.onopen = function() {
            ws.send("CC#$42" + user);
        };
        ws.onmessage = function(event) {
            if(event.data === "CC#$42") {
                ws.send("CO#$42," + "private" + "," + playerM + "," + "placeholder");
                $("#expand").show();
                dM = -1;
                createDom();
                createOperators();
                createDropboxes();
                $('.drag').draggable({ revert: "invalid", zIndex: 2 });
                $('.dragNew').draggable({ revert: "invalid", zIndex: 2 });
                $('.drag2').draggable({ helper: "clone", revert: "invalid", zIndex: 2 });
                createDrop1();
                createDrop2();
                $("#result1").hide();
                $("#result2").hide();
                $("#result3").hide();
                $(".extra").show();
                $(".rad").show();
                $("#new").show();
                $("#experiment").show();
                $("#private").show();
                $("#publicA").show();
                $("#publicB").show();
                $("#publicNew").show();
                $("#newG").hide();
                $("#b0").html("Solitaire mode. Click above to enable competition.")
                $("#rollA").show();
                $("#a1").show();
                $('#join-section').hide();
                $('#chat-section').show();
                $('#users-section').show();
                $("#messages").show();
                $(".dropx").hide();
                $(".drop2x").hide();
                ws.onmessage = onMessage;
                $('#join-form').remove();
                delete $('#join-form');
            } else {
                console.log("What?");
                $('#warnings').append(event.data);
                ws.close();
            }
        };

        $('#join').append('Connecting...');

        return false;
    });
});

calc = function (ax,b,cx,bb) {
    var d = dM
    var t = DS_T;
    var goal = (goalM)*1;
    var goal2 = goalM+"";
    var impossibleClicker = impossibleClickerM;
    var player = playerM;
    var scoreClicker = scoreClickerM;
    var group = groupM;
    var ddd = dM + 1;
    var d = ddd;
    dM = ddd
    DS_ob.ar = [];
    DS_ob.bool = [];
    var res;
    var a = parseFloat(ax);
    var c = parseFloat(cx);
    switch (b) {
        case "+": res = a + c;
        break;
        case "-": res = a - c;
        break;
        case "*": res = a * c;
        break;
        case "/": res = a / c;
        break;
        case "Concat": res = parseFloat(a+""+c);
        break;
    }

    if (d === 0) {
        $("#result1").show().html(res);
        ws.send("CE#$42," + group + "," + player + "," + "<br>" + a + " " + b + " " + c + " = " + res + "<br>");
    }

    if (d === 1) {
        ws.send("CE#$42," + group + "," + player + "," + a + " " +
            b + " " + c + " = " + res + "<br>");
        if (res == goal && bb)   {
            $("#newDisplay").show();
            $("#countdown").html("");
            if ((player === scoreClicker) && t > 0) {
                DS_T = -1;
                ws.send("CG#$42," + group + "," + player + "," + "cow");
                if (impossibleClicker !== "a@F$Uy&impossible") {
                    ws.send("CN#$42," + group + "," + player + "," + impossibleClicker);
                }
            }
            else {
                $("#a2").append("<br>No point for " + player + ". The clock wasn't running.");
                $("#a1").prepend("<span style='font-size:25px; background:#000;" +
                    "color:#f00;'>" + goal2 + ", but no increase in " + player + "'s score</span>");
            }
            t = -1;
            $("#operators").html("");
            $("#dropBoxes").html("");
        }
        $("#result2").show().html(res);    }

    if (d === 2) {
        ws.send("CE#$42," + group + "," + player + "," + a + " " + b + " " + c + " = " + res + "<br>");
         if (res == goal) {
            $("#countdown").html("");
            DS_T = -1
            $("#newDisplay").show();
            if ((player === scoreClicker) && t > 0) {
                ws.send("CG#$42," + group + "," + player + "," + "cow");
                if (impossibleClicker !== "a@F$Uy&impossible") {
                    ws.send("CN#$42," + group + "," + player + "," + impossibleClicker);
                }
            }
            else {
                $("#a2").append("<br>No point for " + player + ". The clock wasn't running.");
                $("#a1").prepend("<span style='font-size:25px;color:#f00;'>" + goal2 + ", but no increase in " +
                    player + "'s score</span>");
            }
            DS_T = -1;
            $("#operators").html("");
            $("#dropBoxes").html("");

        }
        if (res != goal && (player === scoreClicker && t > 0)) {
            DS_T = -1;
            DS_ob.scoreFunc();
        }
        $("#result3").show().html(res);
        $("#newDisplay").show();
    }
};
