// Defines Event Handlers
"use strict";

var Controller = {
    
    // Attach Multiple Event Listeners to an Element
    attachMultipleEventListners: function(events, element){
        for (var eventname in events) {
            //console.log(events[eventname]);
            this.attachEventListener(events[eventname], element)
        }
    },
    
    // Attach a Single Event to an Element
    attachEventListener: function(eventname, element){
        element.addEventListener(eventname, function(event){
            console.log("adding event :: "+eventname);
            event.stopPropagation();
            if (eventname === "click") {
                element.focus();
            }
            else if (eventname === "focus") {
                g_focused = true;
                console.log("focused");
            }
            else if (eventname === "blur") {
                g_focused = false;
                console.log("blurred");
                insertTextBlock(element.value)
                var writebox = $("writebox");
                writebox.parentNode.removeChild(writebox);
            }
        });
    },
    
};