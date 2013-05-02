"use strict";


// Gets Mouse Pointer location On Click
function getLocation(){
    var clickLocation = {};
    document.body.addEventListener("click", function(event){
        alert(event.screenX+" : "+event.screenY)
        clickLocation.x = screenX;
        clickLocation.y = screenY;
    });
    alert(clickLocation.x);
    return clickLocation;
}


// Creates an SVG Element of type <element_name>
function createSVGElement(element_name) {
    return document.createElementNS("http://www.w3.org/2000/svg", element_name);
}


// Create a Writebox
function createWriteBox() {
    var writeDiv = document.createElement("div");
    
    writeDiv.style.left = (g_clickLocation.x - 60)+"px";
    writeDiv.style.top = (g_clickLocation.y - 120)+"px";
    var writeArea = document.createElement("textarea");
    writeArea.id = "writearea";
    
    Controller.attachMultipleEventListners(["click", "focus", "blur"], writeArea)
    writeDiv.appendChild(writeArea);
    document.body.appendChild(writeDiv);
    writeDiv.id = "writebox";
    Controller.attachEventListener("click", writeDiv);
    writeArea.focus();
    //return "Sayantan";
}


// Inserts a Text Block on screen
function insertTextBlock(txtval) {
    console.log(g_clickLocation.x);
    var txt = createSVGElement("text")

    var textdom = document.createTextNode(txtval);
    txt.appendChild(textdom);
    txt.setAttribute("x", g_clickLocation.x - 50);
    txt.setAttribute("y", g_clickLocation.y - 100);
    txt.setAttribute("fill", "black");
    g_root.appendChild(txt);
}


// What will happen after the DOM loads
window.onload = function(){
    g_root = createSVGElement("svg");
    g_root.setAttribute("width", "100%");
    g_root.setAttribute("height", "100%");
    g_root.setAttribute("border", "1");
    document.body.appendChild(g_root);
    document.body.addEventListener("click", function(event){
        
        //alert(event.screenX+" : "+event.screenY)
        g_clickLocation.x = event.screenX;
        g_clickLocation.y = event.screenY;
        //insertTextBlock(root, clickLocation);
        createWriteBox();
    });
};