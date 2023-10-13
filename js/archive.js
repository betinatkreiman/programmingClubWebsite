var captions = {
  "club": "Club Yearbook Picture 2023. We were missing Mr.Peloquin who was attending paternity leave, so we were left in a foreign Mr.Wood history room.",
  "collaboration": "Adam and Stanley hard at work guiding each other both through coding and life.",
  "computer2": "Potential 2022 merch design.",
  "computerLogo": "OG Flyer design. Designed by Izzy Craine.",
  "fontClub": "Super cool Repl design. Designed by Lily Tija",
  "ligerbots": "Station at the STEAM Expo event with the Ligerbots. Connected with society's youth.",
  "logosamples": "Another 2022 potential merch design. Designed by the one and only ANGELA BAI.",
  "lunch_2022": "Lunch marketing with Adam Sandler.",
  "newspaper": "Newtonite description of club. This was also almost published in the New York Times and the Washington Post.",
  "poster": "Angela Bai and Betina Kreiman working through the heat and the pandemic to create our iconic state-of-the-art poster.",
  "potluck": "End of year 2023 potluck. Pineapple, chocolate milk, the Kugener's delicious pie, and Mr.Shoutis are present.",
  "step_up_2023": "Step up day 2023. Brb, lost our voices and missing Angela, don't know how we'll ever survive.",
  "stepUpDay": "Step up day 2021. Welcome Betina Kreiman, Jennifer Li, and Angela Bai as your ferocious leaders.",
  "strava": "Origins are unknown, but strava pulls through. Here is Mr.Peloquin. Click for a fun surprise.",
  "sunset_ppl": "Tennis meets Programming Club. Beautiful sunset after our incredible win at Weymouth.",
  "sunset": "Amazing views like always from Programming Club.",
  "sweatshirt": "Merch from 2023! We got FIRE sweatshirts (totally free). More to come in future years.",
  "tigerLogo": "OG Logo from 2018. Carried us through a whole pandemic.",
  "toby": "Old club picture from 2018 or 2019 (who knows) with hype merch.",
  "trivia": "Typical captivating trivia with team Trinidad in the lead.",
  "veer": "Step up day 2019.",
  "walking": "Walking bake sale to get us out of debt.",
  "women": "Collaboration with Newton Women in STEM in the NFL. Highly captivating logic puzzles and scrumptious hershey kisses.",
  "work": "Jennifer hard at work past Programming Club hours in her kitchen.",
  "zoom": "Your dedicated and devoted leaders hard at work at 9:25 (past Jennifer's bedtime) working highly confidential stuff.",
  "point5": "Quick selfie while advertising our club. Look at all the turnout to support our amazing club.",
  "step_up_2022": "Step up day 2022. Great turn out.",
  "mit": "Betina and Jennifer going on an adventure to the MIT commencement speech to hear Mark Rober! Iconic day to say the least."
}



function on_hover(id) {
  r = document.getElementById(id);
  r.style.opacity = "25%";

  caption = document.getElementById(id.concat('_cap'));
  caption.style.opacity = "100%";
  caption.innerHTML = captions[id];
}

function off_hover(id) {
  r = document.getElementById(id);
  r.style.opacity = "100%";

  caption = document.getElementById(id.concat('_cap'));
  caption.style.opacity = "0%";
}



function open_peloquin() {
  alert("Congratulations!!! You found a hidden gem.")
  window.open("https://chooseadventure.bkreiman.repl.co/");
}

function open_peloquin_nav() {
  alert("Unfortunately, this aspect of the site is not yet functioning, so we are transporting you to an inter-galactic marvel instead. Disfruta!");
}

if(localStorage.getItem('dark')) {
  var theme = document.getElementsByTagName('link')[1];
  var theme_2 = document.getElementsByTagName('link')[0];
  
  var insta = document.getElementById("instagramID");
  var email = document.getElementById("emailID");
  var switchID = document.getElementById("switchID");
  var dropID = document.getElementsByClassName("dropdown-menu");
  var color = document.getElementById("bodyBG");
  var dropdown = document.getElementById("dropdown");
  
  theme_2.setAttribute('href', 'css/darkMode/dArchive.css');
  theme.setAttribute('href', 'css/darkMode/dNavbar.css');
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
}

function toggleTheme() {
  var theme = document.getElementsByTagName('link')[1];
  var theme_2 = document.getElementsByTagName('link')[0];

  var insta = document.getElementById("instagramID");
  var email = document.getElementById("emailID");
  var switchID = document.getElementById("switchID");

  var color = document.getElementById("bodyBG");

  var dropdown = document.getElementById("dropdown");

  localStorage.setItem('dark', theme_2.getAttribute('href') == 'css/temp.css');
  console.log("HELLO!: ", localStorage.getItem('dark'));
  
  // Change the value of href attribute 
  // to change the css sheet.
  if (theme_2.getAttribute('href') == 'css/temp.css') {
    theme_2.setAttribute('href', 'css/darkMode/dArchive.css');
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