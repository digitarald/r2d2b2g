/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

document.getElementById("homeButton").addEventListener("mousedown", function() {
  let event = document.createEvent("KeyboardEvent");
  event.initKeyEvent("keydown", true, true, null, false, false, false, false,
                     event.DOM_VK_HOME, 0);
  window.dispatchEvent(event);
}, false);

document.getElementById("homeButton").addEventListener("mouseup", function() {
  let event = document.createEvent("KeyboardEvent");
  event.initKeyEvent("keyup", true, true, null, false, false, false, false,
                     event.DOM_VK_HOME, 0);
  window.dispatchEvent(event);
}, false);

var preventMouseEvents = true;

document.getElementById("shell").addEventListener("mousedown", function(event) {
  var target = event.originalTarget;
  var view = target.ownerDocument.defaultView;

  var touch = document.createTouch(
    view, target, 0,
    event.clientX, event.clientY, event.clientX, event.clientY,
    1, 1, 0, 0
  );
  var touches = document.createTouchList(touch);
  var touchEvent = document.createEvent('TouchEvent');
  touchEvent.initTouchEvent('touchstart',
    true, true,
    view, 0,
    false, false, false, false, touches, touches, touches, 1, 0);

  target.dispatchEvent(touchEvent);

  if (touchEvent.defaultPrevented || preventMouseEvents) {
    event.preventDefault();
    event.stopPropagation();
  }
}, false);

document.getElementById("shell").addEventListener("mousemove", function(event) {
  var target = event.originalTarget;
  var view = target.ownerDocument.defaultView;

  var touch = document.createTouch(
    view, target, 0,
    event.clientX, event.clientY, event.clientX, event.clientY,
    1, 1, 0, 0
  );
  var touches = document.createTouchList(touch);
  var touchEvent = document.createEvent('TouchEvent');
  touchEvent.initTouchEvent('touchmove',
    true, true,
    view, 0,
    false, false, false, false, touches, touches, touches, 1, 0);

  target.dispatchEvent(touchEvent);

  if (touchEvent.defaultPrevented || preventMouseEvents) {
    event.preventDefault();
    event.stopPropagation();
  }
}, false);


document.getElementById("shell").addEventListener("mouseup", function(event) {
  var target = event.originalTarget;
  var view = target.ownerDocument.defaultView;

  var touch = document.createTouch(
    view, target, 0,
    event.clientX, event.clientY, event.clientX, event.clientY,
    1, 1, 0, 0
  );
  var touches = document.createTouchList(touch);
  var touchEvent = document.createEvent('TouchEvent');
  touchEvent.initTouchEvent('touchend',
    true, true,
    view, 0,
    false, false, false, false, touches, touches, touches, 1, 0);

  target.dispatchEvent(touchEvent);

  if (touchEvent.defaultPrevented || preventMouseEvents) {
    event.preventDefault();
    event.stopPropagation();
  }
}, false);

