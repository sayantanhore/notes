"use strict";


/**

* ------------------------------------
* Gets Mouse Pointer location On Click
* ------------------------------------
*/

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


/**

* ---------------------------------------------
* Creates an SVG Element of type <element_name>
* ---------------------------------------------
*/

function createSVGElement(element_name) {
    return document.createElementNS("http://www.w3.org/2000/svg", element_name);
}


/**

* ------------------------------------------------------------------
* Creates a TextArea to write and surrounds it with a DIV - WriteBox
* ------------------------------------------------------------------
*/

function createWriteBox() {

	var writeBox = UIComponents.createWriteBox(g_clickLocation);
    document.body.appendChild(writeBox);
    writeBox.focus();
	
	
}


/**

* -------------------------------------------------------------------------------
* Creates a TextArea to show existing text and surrounds it with a DIV - WriteBox
* -------------------------------------------------------------------------------
*/

function showWriteBox(Location, textBlock) {

    //var writeBox = UIComponents.createWriteBox(Location);
    document.body.appendChild(UIComponents.showWriteBox(Location, textBlock));
    //return "Sayantan";
}


/**

* ------------------------------------------------------------------
* Inserts an SVG TextBlock containing Text entered into the WriteBox
* ------------------------------------------------------------------
*/

function insertTextBlock(txtval) {
    console.log(g_clickLocation.x);
    var txt = createSVGElement("text")
    var textdom = document.createTextNode(txtval);
    txt.appendChild(textdom);
    txt.setAttribute("x", g_clickLocation.x - 54);
    txt.setAttribute("y", g_clickLocation.y - 103);
    txt.setAttribute("fill", "black");
	txt.addEventListener("click", function(event){
		
		console.log("TEXT :: " + event.target.textContent);
	
	});
	txt.addEventListener("mouseover", function(event){
		
		var textLocation = {};
		textLocation.x = event.target.getAttribute("x");
		textLocation.y = event.target.getAttribute("y");
		//alert("Location :: " + event.target.getAttribute("x") + event.target.getAttribute("y"));
		createWriteBox(textLocation);

	});
    g_root.appendChild(txt);
}


/**

* ----------------------------------------------------------------
* The execution starts here - What will happen after the DOM loads
* ----------------------------------------------------------------
*/

window.onload = function(){
	detectBrowser();
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

