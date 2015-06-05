

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
        createDrop1();
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
