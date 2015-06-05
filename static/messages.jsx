
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
        console.log("***************************************")
        // var p = $(document.createElement('p')).text(event.data);
        // if (((groupM === gameArray[1]) && (groupM !== "private")) || (playerM === sender) || sendersGroup === "pass") {
            switch (d2) {
                case "CA#$42":               // Set up the next round of play.
                    // refresh();
                    rollTextM = extra + "," + ext4 + "," + ext5 + "," + ext6;
                    // dM = -1;
                    // populate(extra,ext4,ext5,ext6);
                break;

                case "CB#$42":
                  //  if ("private" !== sendersGroup || sender == playerM) {
                      var scoreBoard = extra;
                  //  }
                break;

                case "DB#$42":
                break;

                case "CO#$42":
                break;

                case "CC#$42":

                break;

                case "CD#$42":       // Prevent new player login data from displaying as a chat message.

                break;

                case "CE#$42":
                  //  DS_ob.ar = [];
                break;

                case "CF#$42":

                break;

                case "CG#$42":
                  //  DS_T = -1;
                break;

                case "CH#$42":
                    if (playerM !== sender) {
                      //  if (gameM === "on") assign (extra, ext4, ext5, ext6, ext7, ext8);
                    }
                break;

                case "CK#$42":       // Prevent new player login data from displaying as a chat message.

                break;

                case "CP#$42":

                break;

                case "CI#$42":

                break;

                case "CJ#$42":
                  //  DS_T = 60;
                break;

                case "CL#$42":
                  //  DS_T = -1;
                break;

                case "CS#$42":

                break;

                case "CW#$42":

                break;

                case "CM#$42":
                  //  $("#a2").prepend("<br>Time's up and nobody found a solution");
                  //  $("#newDisplay").show();
                break;

                case "CQ#$42":
                    rollM = extra + "," + ext4 + "," + ext5 + "," + ext6;
                  //  $("#show").prepend("The ranges are now " + extra + "," + ext4 + "," + ext5 + "," + ext6 + "<br>");
                break;

                case "CN#$42":
                  //  DS_T = -1;
                  //  $("#a2").append("<br>deduct two points from " + impossibleClickerM +
                  //      "'s score. <br>A solution was found before 60 seconds had passed.");
                  //  $("#newDisplay").show();
                break;

                case "CR#$42":
                  //  refresh();
                break;

                case "CZ#$42":
                  //  $("#show").prepend("<br>" + extra);
                  //  $("#a2").html(sender + " clicked SOLUTIONS.<br><br>");
                break;

                case "DU#$42":
                  /*  if (sendersGroup == "private") {
                      $("#messages").html("Join a group in order to exchange messages");
                    } else {
                    $('#messages').append(sender + ": " + extra + "<br>");
                    $('#messages').animate({scrollTop: $('#messages')[0].scrollHeight});
                  }  */
                break;

                case "EE#$42":

                break;

                case "SX#$42":
                  //  ws.send("SX#$42," + groupM + "," + playerM + "," + rollM);
                break;

                default:
                    console.log(msg + " fell through to default");

                break;
            }
        }
    }
