resource_link = document.getElementById("resource_link_1")

var dict = { 1: "resource_link_1", 2: "resource_link_2", 3: "resource_link_3", 4: "resource_link_4", 5: "resource_link_5", 6: "resource_link_6", 7: "resource_link_7", 8: "resource_link_8", 9: "resource_link_9", 10: "resource_link_10", 11: "resource_link_11", 12: "resource_link_12" }

var arr = { 1: ".arr1", 2: ".arr2", 3: ".arr3", 4: ".arr4", 5: ".arr5", 6: ".arr6", 7: ".arr7", 8: ".arr8", 9: ".arr9", 10: ".arr10", 11: ".arr11", 12: ".arr12" }

var links = { 1: "https://replit.com/~", 2: "https://projecteuler.net/archives", 3: "https://leetcode.com/problemset/all/", 4: "https://www.w3schools.com/python/default.asp", 5: "https://www.codecademy.com/catalog/language/swift", 6: "https://www.w3schools.com/html/default.asp", 7: "https://www.newton.k12.ma.us/Page/49", 8: "https://github.com/", 9: "https://codewars.com/dashboard", 10: "https://nnhsprogramming.com", 11: "https://discord.gg/dZ4RVNRQEm/", 12: "https://www.tutorialspoint.com/execute_python_online.php" }

//function to highlight link when you hover over resource
function hover_resource(linkNumb) {
  r = document.getElementById(dict[linkNumb])
  r.style.color = "rgb(53, 119, 245)";
}

function click_resource(linkiesNumb) {
  r = links[linkiesNumb]
  window.open(r);
}

function stop_hover(numb) {
  r = document.getElementById(dict[numb])
  r.style.color = "black";
}

//function for animating the arrow on hover
function animate_arrow(arrowNum) {
  console.log("YO!!!!!!!")
  classArrow = arr[arrowNum]
  gsap.to(classArrow, { rotation: 0, x: 20, duration: 0.75 });
}

function animate_arrow_back(arrowNumb) {
  classArrow = arr[arrowNumb]
  gsap.to(classArrow, { rotation: 0, x: -1, duration: 1 });
}

// alert for non-existant nnhs hacks site
function hacks_psych() {
  alert("PSYCH! This site no longer exists, so we are just taking you back to our wonderful site!")
}


function open_peloquin_nav() {
  alert("Unfortunately, this aspect of the site is not yet functioning, so we are transporting you to an inter-galactic marvel instead. Disfruta!");
}


function toggleTheme() {
  var theme = document.getElementsByTagName('link')[1];
  var theme_2 = document.getElementsByTagName('link')[0];

  var insta = document.getElementById("instagramID");
  var email = document.getElementById("emailID");
  var switchID = document.getElementById("switchID");

  var color = document.getElementById("bodyBG");

  var dropdown = document.getElementById("dropdown");

  // Change the value of href attribute 
  // to change the css sheet.
  if (theme_2.getAttribute('href') == 'css/temp.css') {
    theme_2.setAttribute('href', 'css/darkMode/dResources.css');
    theme.setAttribute('href', 'css/darkMode/dNavbar.css');

    // SWITCHING TO DARK MODE

    insta.classList.remove("fa-instagram");
    insta.classList.add("fa-square-instagram");

    email.classList.remove("fa-regular");
    email.classList.add("fa-solid");

    switchID.classList.remove("fa-regular");
    switchID.classList.remove("fa-moon");
    switchID.classList.add("fa-sun");
    switchID.classList.add("fa-solid");

    color.classList.remove("lightBG");
    color.classList.add("darkBG");

    dropdown.setAttribute("data-bs-theme", "dark")

  } else {
    theme_2.setAttribute('href', 'css/temp.css');
    theme.setAttribute('href', 'css/temp2.css');

    // SWITCHING TO LIGHT MODE
    insta.classList.remove("fa-square-instagram");
    insta.classList.add("fa-instagram");

    email.classList.remove("fa-solid");
    email.classList.add("fa-regular");

    switchID.classList.remove("fa-sun");
    switchID.classList.remove("fa-solid");
    switchID.classList.add("fa-regular");
    switchID.classList.add("fa-moon");

    color.classList.remove("darkBG");
    color.classList.add("lightBG");

    dropdown.setAttribute("data-bs-theme", "light")
  }

}