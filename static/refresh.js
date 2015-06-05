refresh = function() {
    if (DS_T > 0 && playerM == scoreClickerM) {
        ws.send("CL#$42," + groupM + "," + playerM + "," + "place holder");
    }
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
