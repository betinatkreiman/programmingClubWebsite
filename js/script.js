function open_peloquin_nav() {
  alert("Unfortunately, this aspect of the site is not yet functioning, so we are transporting you to an inter-galactic marvel instead. Disfruta!");
}

// dropdown.setAttribute("data-bs-theme", "light")
// function dropdownNav() {
//   dropdown.setAttribute("data-bs-theme", "dark")

// }

// function toggleTheme() {
//   // Obtains an array of all <link>
//   // elements.
//   // Select your element using indexing.
//   var theme = document.getElementsByTagName('link')[1];

//   // Change the value of href attribute 
//   // to change the css sheet.
//   if (theme.getAttribute('href') == 'css/style.css') {
//     theme.setAttribute('href', 'css/darkMode/dStyle.css');  
//   } else {
//     theme.setAttribute('href', 'css/style.css');
//   }

//   var insta = document.getElementById("instagramID");
//   var email = document.getElementById("emailID");
//   var switchID = document.getElementById("switchID");


//   var theme = document.getElementsByTagName('link')[0];
//   // Change the value of href attribute 
//   // to change the css sheet.
//   if (theme.getAttribute('href') == 'css/navbar.css') {
//     theme.setAttribute('href', 'css/darkMode/dNavbar.css');

//     // SWITCHING TO DARK MODE

//     insta.classList.remove("fa-instagram");
//     insta.classList.add("fa-square-instagram");

//     email.classList.remove("fa-regular");
//     email.classList.add("fa-solid");

//     switchID.classList.remove("fa-regular");
//     switchID.classList.remove("fa-moon");
//     switchID.classList.add("fa-sun");
//     switchID.classList.add("fa-solid");


//   } else {
//     theme.setAttribute('href', 'css/navbar.css');

//     // SWITCHING TO LIGHT MODE
//     insta.classList.remove("fa-square-instagram");
//     insta.classList.add("fa-instagram");

//     email.classList.remove("fa-solid");
//     email.classList.add("fa-regular");

//     switchID.classList.remove("fa-sun");
//     switchID.classList.remove("fa-solid");
//     switchID.classList.add("fa-regular");
//     switchID.classList.add("fa-moon");


//   }
// }





function toggleTheme() {
  var theme = document.getElementsByTagName('link')[1];
  var theme_2 = document.getElementsByTagName('link')[0];

  var insta = document.getElementById("instagramID");
  var email = document.getElementById("emailID");
  var switchID = document.getElementById("switchID");

  var dropID = document.getElementsByClassName("dropdown-menu");

  var color = document.getElementById("bodyBG");

  var dropdown = document.getElementById("dropdown");

  // Change the value of href attribute 
  // to change the css sheet.
  if (theme_2.getAttribute('href') == 'css/temp.css') {
    theme_2.setAttribute('href', 'css/darkMode/dStyle.css');
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

    // dropID.classList.remove("dropLight");
    // dropID.classList.add("dropDark");

    dropdown.setAttribute("data-bs-theme", "dark");

  } else {

    var dropdown = document.getElementById("dropdown")


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

    // dropID.classList.remove("dropLight");
    // dropID.classList.add("dropDark");

    dropdown.setAttribute("data-bs-theme", "light");

  }

}