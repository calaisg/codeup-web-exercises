(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split("|");
    console.log(planetsArray);
    console.log("");

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    var planetsBreak = planetsArray.join('<br>');
    console.log(planetsBreak);
    console.log("");

    document.write(planetsBreak); // will print your planet string to the web page with the planets each on a new line

    /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var unorderedList = "<ul><li>" + planetsArray.join('</li><li>') + "</li><ul>";
    console.log(unorderedList);
    document.write(unorderedList);

})();
