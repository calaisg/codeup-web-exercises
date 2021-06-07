(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            //DONE
            return (Math.PI * (circle.radius **2));
        },

        logInfo: function (doRounding) {
            //DONE
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding){
                console.log("Area of a circle with radius: " + this.radius + ", is: " +Math.round(circle.getArea()));
            }
            else{
                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // DONE: Change the radius of the circle to 5.

    var circle_one = {
        radius: 5,

        getArea: function () {
            //DONE
            return (Math.PI * (circle_one.radius **2));
        },

        logInfo_one: function (doRounding) {
            //DONE
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding){
                console.log("Area of a circle with radius: " + this.radius + ", is: " +Math.round(circle_one.getArea()));
            }
            else{
                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle_one.getArea());
            }
        }
    };



    // log info about the circle
    console.log("Raw circle information");
    circle_one.logInfo_one(false);
    console.log("Circle information rounded to the nearest whole number");
    circle_one.logInfo_one(true);
})();
