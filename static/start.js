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
var onMessage;
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


$("#expand").hide();
$("#contract").hide();


