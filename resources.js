resource_link = document.getElementById("resource_link_1") 

var dict = {1: "resource_link_1", 2: "resource_link_2", 3:"resource_link_3", 4:"resource_link_4", 5:"resource_link_5", 6:"resource_link_6", 7:"resource_link_7", 8:"resource_link_8", 9:"resource_link_9", 10:"resource_link_10", 11:"resource_link_11", 12:"resource_link_12"}

var arr = {1: ".arr1", 2: ".arr2", 3:".arr3", 4:".arr4", 5:".arr5", 6:".arr6", 7:".arr7", 8:".arr8", 9:".arr9", 10:".arr10", 11:".arr11", 12:".arr12"}

//function to highlight link when you hover over resource
function hover_resource(linkNumb){
  //console.log(linkNumb)
  //console.log(dict[linkNumb])
  r = document.getElementById(dict[linkNumb])
  r.style.color = "rgb(53, 119, 245)";
  // gsap.to(".resource_link_1_rep", {y:-2, repeat: 1, duration: 0.3})
}

function stop_hover(numb){
  r = document.getElementById(dict[numb])
  r.style.color = "black";
  // gsap.to(".resource_link_1_rep", {y: 0.5, repeat: 1, duration: 0.1})
}

//function for animating the arrow on hover
function animate_arrow(arrowNum){
  //console.log("now we animate")
  classArrow = arr[arrowNum]
  gsap.to(classArrow, {rotation: 0, x: 20, duration: 0.75}); 
}

function animate_arrow_back(arrowNumb){
  //console.log("now go back ")
  classArrow = arr[arrowNumb]
  gsap.to(classArrow, {rotation: 0, x: -1, duration: 1}); 
}
// gsap.to(".more_arrow", {rotation: 0, x: 20, duration: 1}); 