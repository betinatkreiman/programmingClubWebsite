var links = {
  1: "https://apps.apple.com/us/app/orbit-a-space-game/id1353390547",
  2: "https://apps.apple.com/us/app/north-parking/id1439643706"
}

var arr = { 1: "projectName1", 2: "projectName2", 3: "projectName3", 4: "projectName4", 5: "projectName5", 6: "projectName6", 7: "projectName7" }




//function to highlight link when you hover over resource
function hover_resource(linkNumb) {
  if (linkNumb <= 2) {
    r = document.getElementById(arr[linkNumb])
    r.style.textDecoration = "underline";
  }

}

function click_resource(linkiesNumb) {
  if (linkiesNumb <= 2) {
    r = links[linkiesNumb]
    window.open(r);
  }
}

function stop_hover(numb) {
  if (numb <= 2) {
    r = document.getElementById(arr[numb])
    r.style.textDecoration = "none";
  }
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
  if (theme_2.getAttribute('href') == '../css/temp.css') {
    theme_2.setAttribute('href', '../css/darkMode/dWebsites.css');
    theme.setAttribute('href', '../css/darkMode/dNavbar.css');

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

    dropdown.setAttribute("data-bs-theme", "dark");

  } else {
    theme_2.setAttribute('href', '../css/temp.css');
    theme.setAttribute('href', '../css/temp2.css');

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

    dropdown.setAttribute("data-bs-theme", "light");
  }

}