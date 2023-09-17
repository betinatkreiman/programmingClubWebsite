var boxes = { 1: ".box1", 2: ".box2", 3: ".box3", 4: ".box4", 5: ".box5", 6: ".box6" }
var movement = 8;

function move_up(box_numb) {
  var id = boxes[box_numb];

  //moving up
  gsap.to(id, { y: -1 * movement, duration: 0.75 });
}

function move_back(box_numb) {
  var id = boxes[box_numb];
  gsap.to(id, { y: movement, duration: 0.75 });
}

function open_peloquin() {
  alert("Felicitations!!! You have discovered a camouflaged precious stone! Good luck finding the others!");
  window.open("https://chooseadventure.bkreiman.repl.co/");
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
    theme_2.setAttribute('href', 'css/darkMode/dFaq.css');
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

    dropdown.setAttribute("data-bs-theme", "dark");

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

    dropdown.setAttribute("data-bs-theme", "light");
  }

}