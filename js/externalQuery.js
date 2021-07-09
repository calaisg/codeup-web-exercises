"use strict"

$(document).ready(function (){

    //MOUSE EVENTS
    $("h1").click(function (){
        $(this).css("background-color", "yellow");
    });

    $("p").dblclick(function(){
        $(this).css("font-size", "18px");
    });

    $("li").hover(
        function (){
            $(this).css("color", "red");
        },
        function(){
            $(this).css("color", "black");
        }
    );

    //ELEMENT SELECTORS
    //$("li").css("font-size", "20px");
    //$("h1, p, li").css("background-color", "yellow");

    //var h1 = $("h1").html();
    //alert(h1);

    //CLASS SELECTORS
    //create a border around all elements with the class codeup that is 1 pixel wide and red.
    //$(".codeup").css("border", "1px solid #FF0000");

    //ID SELECTORS
    //var men = $("#men").html();
    //alert(men);

    //var final = $("#final-four").html();
    //alert(final);

    //if duplicate IDs, just gives the first instance of it
    //var blake = $("#blake").html();
    //alert(blake);

    //INTRO
    //alert("DOM has finished loading");

});