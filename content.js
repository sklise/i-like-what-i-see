likes = document.getElementsByClassName('UFILikeLink');
likes = document.getElementsByTagName('a');

clicked = [];

window.onscroll = function() {

  for (i = 0; i < likes.length; i++) {
    if(likes[i].innerText === 'Like' || likes[i].innerText === 'Like This Page'){
      if(findPos(likes[i])[1] > document.body.scrollTop && findPos(likes[i])[1] <= document.body.scrollTop+window.innerHeight - 100) {
        if(!include(clicked, i)) {
          clicked.push(i);
          likes[i].style.color = 'red';
          fireEvent(likes[i], 'click');
        }
      }
    }
  }
}

// http://stackoverflow.com/questions/143847/best-way-to-find-an-item-in-a-javascript-array
function include(arr,obj) {
  return (arr.indexOf(obj) != -1);
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
       evt.preventDefault();
       return !element.dispatchEvent(evt);
   } else {
       alert("Sorry, we do not want to propagate the opinions of IE users.");
   }
}
