"use strict"


/**

* ----------------------------
* Detects the Browser
* ----------------------------
*/

function detectBrowser(){

	var val = navigator.userAgent.toLowerCase();
	
	if(val.indexOf("firefox") > -1)
	{
		browser = "firefox";
	}
	
	else if(val.indexOf("chrome") > -1)
	{
		browser = "chrome";
	}
	
	else if(val.indexOf("opera") > -1)
	{
		alert("Your browser is not supported. Please use either Firefox or Chrome");
	}
	
	else if(val.indexOf("msie") > -1)
	{
		browser = "firefox";
		alert("Your browser is not supported. Please use either Firefox or Chrome");
	}
	
	else if(val.indexOf("safari") > -1)
	{
		alert("Your browser is not supported. Please use either Firefox or Chrome");
	}
};


/**

* ----------------------------
* Picks an element by ID
* ----------------------------
*/

function $(id) {

    return document.getElementById(id);
    
}


/**

* ----------------------------
* Gets text contents of a Div
* ----------------------------
*/

function getDivTextContent(element){

	if(browser === "chrome"){
	
		return element.innerText;
	
	}
	else if(browser === "firefox"){
	
		return element.textContent;
	
	}

}


/**

* ----------------------------
* Sets text contents of a Div
* ----------------------------
*/

function setDivTextContent(element, text){

	if(browser === "chrome"){
	
		element.innerText = text;
	
	}
	else if(browser === "firefox"){
	
		element.textContent = text;
	
	}

}
