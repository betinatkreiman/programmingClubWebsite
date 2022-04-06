
// gsap.to(".projects", {rotation: 0, x: 100, duration: 1});
//gasp.from(".orbit", {opacity: 0, duration: 33});

// gsap.set('orbit', {
//   opacity: 0
// })

//  const tl = gsap.timeline( { 
//    scrollTrigger: {
//      trigger: "orbit",
//      scrub: true,
//      markers: true,
//    }
   
//  });
 
//  tl
//    .to('orbit', { opacity: 1, duration: 0.5 })
//  ;

gsap.registerPlugin(ScrollTrigger);

gsap.to(".orbit", {rotation: 0, x: -75, duration: 0});
var second = gsap.to(".orbit", {rotation: 0, x: 0, duration: 2.5}).delay(0.25);

gsap.to(".parking", {rotation: 0, x: 75, duration: 0});
var second = gsap.to(".parking", {rotation: 0, x: 0, duration: 2.5}).delay(0.25);

gsap.to(".frenchsite", {rotation: 0, x: -75, duration: 0});
var second = gsap.to(".frenchsite", {rotation: 0, x: 0, duration: 2.5}).delay(0.25);

gsap.to(".game", {rotation: 0, x: 75, duration: 0});
var second = gsap.to(".game", {rotation: 0, x: 0, duration: 2.5}).delay(0.25);

gsap.to(".oldWebsite", {rotation: 0, x: -75, duration: 0});
var second = gsap.to(".oldWebsite", {rotation: 0, x: 0, duration: 2.5}).delay(0.25);

gsap.to(".podtalk", {rotation: 0, x: 75, duration: 0});
var second = gsap.to(".podtalk", {rotation: 0, x: 0, duration: 2.5}).delay(0.25);

gsap.to(".luaGame", {rotation: 0, x: -75, duration: 0});
var second = gsap.to(".luaGame", {rotation: 0, x: 0, duration: 2.5}).delay(0.25);

gsap.to(".tigerInsider", {rotation: 0, x: 75, duration: 0});
var second = gsap.to(".tigerInsider", {rotation: 0, x: 0, duration: 2.5}).delay(0.25);

gsap.to(".dreamherSite", {rotation: 0, x: -75, duration: 0});
var second = gsap.to(".dreamherSite", {rotation: 0, x: 0, duration: 2.5}).delay(0.25);






// let img = gsap.timeline({paused: true});
// img
//   .set('.test_animation img', {transformOrigin: 'center center'})
//   .fromTo('.test_animation img', { opacity: 0, scale: 0.8, y: "+=100"}, {opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false})

// let scrt = ScrollTrigger.create({
//   trigger: '.content',
//   start: "top top",
//   id: "ScrollTrigger",
//   end: "bottom bottom",
//   animation: img,
//   toggleActions: "play none none reverse",
//    markers: true
// })

// document.querySelector('.nav').addEventListener('click', ()=>{
//   console.log("YO")
//   if(img.progress() === 0){
//     img.play()
//     window.scrollTo(0, scrt.start + (scrt.end - scrt.start))
//   }else{
//     img.reverse()
//     window.scrollTo(0, scrt.start)
//   }
// })