resource_link = document.getElementById("resource_link_1") 

var dict = {1: "resource_link_1", 2: "resource_link_2", 3:"resource_link_3", 4:"resource_link_4", 5:"resource_link_5", 6:"resource_link_6", 7:"resource_link_7", 8:"resource_link_8", 9:"resource_link_9", 10:"resource_link_10", 11:"resource_link_11", 12:"resource_link_12"}

var arr = {1: ".arr1", 2: ".arr2", 3:".arr3", 4:".arr4", 5:".arr5", 6:".arr6", 7:".arr7", 8:".arr8", 9:".arr9", 10:".arr10", 11:".arr11", 12:".arr12"}

var links = {1: "https://replit.com/~", 2: "https://projecteuler.net/archives", 3:"https://leetcode.com/problemset/all/", 4:"https://www.w3schools.com/python/default.asp", 5:"https://www.codecademy.com/catalog/language/swift", 6:"https://www.w3schools.com/html/default.asp", 7:"https://www.newton.k12.ma.us/Page/49", 8:"https://github.com/", 9:"https://codewars.com/dashboard", 10:"https://nnhshacks.tech/", 11:"https://discord.gg/dZ4RVNRQEm/", 12:"https://www.tutorialspoint.com/execute_python_online.php"}



//function to highlight link when you hover over resource
function hover_resource(linkNumb){
  //console.log(linkNumb)
  //console.log(dict[linkNumb])
  r = document.getElementById(dict[linkNumb])
  r.style.color = "rgb(53, 119, 245)";
  // gsap.to(".resource_link_1_rep", {y:-2, repeat: 1, duration: 0.3})
}

function click_resource(linkiesNumb) {
  //console.log(linkiesNumb);
  r = links[linkiesNumb]
  //console.log(r);
  window.open(r);
  // window.location.href = r;
  
}
//r.addEventListener("click", console.log("AYO"));

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