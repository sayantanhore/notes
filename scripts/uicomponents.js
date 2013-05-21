"use strict";


/**

* ----------------------------
* Creates a WriteBox Component
* ----------------------------
*/

var UIComponents = {


	createWriteBox: function(Location){

		var writeDiv = document.createElement("div");
		writeDiv.id = "writebox";

		writeDiv.style.left = (Location.x - 60) + "px";
		writeDiv.style.top = (Location.y - 120) + "px";
		writeDiv.contentEditable = "true";
		
		writeDiv.addEventListener("click", function(event){
		
			event.target.focus();
			g_focused = true;
			console.log("focused");
		
		});
		
		writeDiv.addEventListener("blur", function(event){
		
			g_focused = false;
			console.log("blurred");
			console.log(getDivTextContent(event.target));
			UIComponents.createTextBlock(getDivTextContent(event.target))
			var writebox = $("writebox");
			writebox.parentNode.removeChild(writebox);
		
		});


		return writeDiv;

	},
	
	showWriteBox: function(Location, textBlock){
	
		var showDiv = document.createElement("div");
		showDiv.id = "showbox";

		showDiv.style.left = (Location.x - 6) + "px";
		showDiv.style.top = (Location.y - 18) + "px";
		
		
		showDiv.addEventListener("mouseout", function(event){
		
			if(document.activeElement !== showDiv){
				
				showDiv.parentNode.removeChild(showDiv);
				console.log("MouseOut");
			
			}
		
		}, false);
		
		showDiv.addEventListener("click", function(event){
		
			event.stopPropagation();
			
			console.log(event.target.id);
			
			event.target.contentEditable = true;
			
				
			console.log("ShowDiv activated  :: " + document.activeElement.id);
			console.log("TEXTBLOCK CONTENT :: " + textBlock.textContent);
				

			if(getDivTextContent(event.target) === ""){
			
				//event.target.innerText = textBlock.textContent;
				setDivTextContent(event.target, textBlock.textContent);
				textBlock.textContent = "";
			
			}
			
			showDiv.focus();

		}, false);
		
		showDiv.addEventListener("blur", function(event){
			
			console.log("ShowBox blurred");
			textBlock.textContent = getDivTextContent(event.target);
			showDiv.parentNode.removeChild(showDiv);
		
		}, false);

		return showDiv;
	
	},

	createTextBlock: function(txtval){
	
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
			//document.body.appendChild(createWriteBox(textLocation));
			showWriteBox(textLocation, event.target);
			console.log("MouseOver");

		});
		
		g_root.appendChild(txt);
	
	}

};
