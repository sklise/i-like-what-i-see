likes = document.getElementsByClassName('UFILikeLink');

for(i = 0; i < likes.length; i++) {
  fireEvent(likes[i], 'click');
}


// http://jehiah.cz/a/firing-javascript-events-properly via
// http://stackoverflow.com/questions/143747/is-it-possible-to-trigger-a-links-or-any-elements-click-event-through-javasc
function fireEvent(element,event) {
   if (document.createEvent) {
       // dispatch for firefox + others
       var evt = document.createEvent("HTMLEvents");
       evt.initEvent(event, true, true ); // event type,bubbling,cancelable
       return !element.dispatchEvent(evt);
   } else {
       // dispatch for IE
       var evt = document.createEventObject();
       return element.fireEvent('on'+event,evt)
   }
}