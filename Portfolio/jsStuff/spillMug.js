class SpillMug {

    updateMugRotation() {

        //get the elements
        var myCss = document.getElementById("index.css");
        var mugElement = document.getElementById("spillMug"); 
        var bodyElement = document.getElementById("body");

        //calculate the max value for scrollTop
        var scrollMax = bodyElement.scrollHeight - bodyElement.clientHeight;

        //calculate the current scroll %
        var scrollPercent = bodyElement.scrollTop / scrollMax;

        mugElement.style.transform = "rotate(" + scrollPercent * 360 + "deg)";

   }



    


};