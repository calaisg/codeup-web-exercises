"use strict"

$(document).ready(function (){
    //INTRO
    //alert("DOM has finished loading");

    //ID SELECTORS
    //var men = $("#men").html();
    //alert(men);

    //var final = $("#final-four").html();
    //alert(final);

    //if duplicate IDs, just gives the first instance of it
    //var blake = $("#blake").html();
    //alert(blake);

    //CLASS SELECTORS
    //create a border around all elements with the class codeup that is 1 pixel wide and red.
    //$(".codeup").css("border", "1px solid #FF0000");

    //ELEMENT SELECTORS
    $("li").css("font-size", "20px");
    $("h1, p, li").css("background-color", "yellow");

    var h1 = $("h1").html();
    alert(h1);

});