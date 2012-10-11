likes = document.getElementsByClassName('UFILikeLink');

for (i = 0; i < likes.length; i++) {
  // rate limiting
  // fireEvent(likes[i], 'click');
  likes[i].style.color = 'red';
  console.log(likes[i].innerHTML, findPos(likes[i]) )
}


// http://www.quirksmode.org/js/findpos.html
function findPos(obj) {
  var curleft = curtop = 0;

  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
  }

  return [curleft, curtop];
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