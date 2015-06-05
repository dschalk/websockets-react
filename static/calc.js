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
