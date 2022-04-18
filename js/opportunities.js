var boxOne = document.getElementById("box_one");
var boxTwo = document.getElementById("box_two");
var boxThree = document.getElementById("box_three");
var boxOneText = document.getElementById("boxOneText");


boxOne.onmouseover = function() {
  //moving up
  gsap.to(".box1", {y: -10, duration: 0.75});
  TweenMax.to("p1", 1, { fontSize: 18, ease: Sine.easeOut, autoRound: false});
  TweenMax.to("i1", 1, { fontSize: 20, ease: Sine.easeOut, autoRound: false});
}
boxOne.onmouseout = function() {
  gsap.to(".box1", {y: 10, duration: 0.75});
  TweenMax.to("p1", 1, {fontSize: 18, ease: Sine.easeOut, autoRound: false});
  TweenMax.to("i1", 1, { fontSize: 16, ease: Sine.easeOut, autoRound: false});
}


boxTwo.onmouseover = function() {
  gsap.to(".box2", {y: -10, duration: 0.75});
  TweenMax.to("p2", 1, { fontSize: 18, ease: Sine.easeOut, autoRound: false});
  TweenMax.to("i2", 1, { fontSize: 20, ease: Sine.easeOut, autoRound: false});
}
boxTwo.onmouseout = function() {
  gsap.to(".box2", {y: 10, duration: 0.75});
  TweenMax.to("p2", 1, {fontSize: 18, ease: Sine.easeOut, autoRound: false});
  TweenMax.to("i2", 1, { fontSize: 16, ease: Sine.easeOut, autoRound: false});
}


boxThree.onmouseover = function() {
  gsap.to(".box3", {y: -10, duration: 0.75});
  TweenMax.to("p3", 1, { fontSize: 18, ease: Sine.easeOut, autoRound: false});
  TweenMax.to("i3", 1, { fontSize: 20, ease: Sine.easeOut, autoRound: false});
}
boxThree.onmouseout = function() {
  gsap.to(".box3", {y: 10, duration: 0.75});
  TweenMax.to("p3", 1, {fontSize: 18, ease: Sine.easeOut, autoRound: false});
  TweenMax.to("i3", 1, { fontSize: 16, ease: Sine.easeOut, autoRound: false});
}


