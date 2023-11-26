var ids = { 1: "betina", 2: "Jennifer", 3: "Isabelle", 4: "Eva", 5: "Mr.Peloquin" }



function officerClick(id) {

  var index = id - 1;

  document.getElementById("ShowOfficer_Name").textContent = officer[index]["name"];
  document.getElementById("ShowOfficer_Text").textContent = officer[index]["blurb"];
  document.getElementById("ShowOfficer_ID").src = officer[index]["image"];
  document.getElementById("ShowOfficer").style.display = "block";
}

function memberClick(id) {

  var index = id;

  document.getElementById("ShowOfficer_Name").textContent = member[index]["name"];
  document.getElementById("ShowOfficer_Text").textContent = member[index]["blurb"];
  document.getElementById("ShowOfficer_ID").src = member[index]["image"];
  document.getElementById("ShowOfficer").style.display = "block";
}

// document.getElementById("CloseOfficer_1").onclick = function() {
//   document.getElementById("ShowOfficer").style.display="none";
// }

// document.getElementById("CloseOfficer_2").onclick = function() {
//   document.getElementById("ShowOfficer").style.display="none";
// }


// click outside of modal to close
var modal = document.getElementById("ShowOfficer");
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





function open_peloquin() {
  alert("Mr. Peloquin doesn't have Instagram yet, but he has something better. My esteemed friend, you have found a one of a kind treat. Savor it.")
}

var officer = [
  {
    "name": "Betina Kreiman",
    "image": "../imgs/meet_the_team/betina.jpg",
    "blurb": "Hi! I’m Betina Kreiman, and I’m the president of the Newton North Programming Club! I’m a Senior at Newton North High School. I’ve been coding for a couple of years now. My favorite languages are Python and Swift, but I love trying new things and experimenting with other languages. Recently, I just uploaded an app to the app store! Other than coding, I love soccer, tennis, and hanging out with my friends! Hope to see you at a club meeting!"
  },
  {
    "name": "Jennifer Li",
    "image": "../imgs/meet_the_team/jennifer.jpg",
    "blurb": "Hello! I’m Jennifer, and I am Senior at Newton North High School. My favorite subject is math, but I also enjoy coding and learning various languages. In particular, I like working in front end development, learning about JavaScript animations, and also coding basic games in python. In my free time, I like running, playing tennis, and playing the piano."
  },
  {
    "name": "Isabelle Sloan",
    "image": "../imgs/meet_the_team/isabelle.jpg",
    "blurb": "Hi! I’m Isabelle Sloan and I am a Senior at NNHS. My favorite thing to do is Nordic Ski and I love the winter! I’ve been interested in programming since I learned how to use google sheets, I’m still pretty much a beginner when it comes to computers but I’m always willing to learn! Come to programming club and teach me python please."
  },
  {
    "name": "Eva Mescher",
    "image": "../imgs/meet_the_team/eva.jpg",
    "blurb": "Hi my name is Eva, and i’m an officer of the programming club. I love to spend time outdoors being active. I play soccer and basketball and I run track! I love to program in python and swift and I’m so excited for this year!"
  },
  {
    "name": "Mr.Peloquin",
    "image": "../imgs/meet_the_team/adam.jpg",
    "blurb": "Hello! Hello! I'm the faculty advisor for the NNHS Programming Club. I think that programming is such a useful tool, and I love the empowerment that people feel when they realize how they can use it to solve problems. My favorite language is Python, but I also like HTML because it appeals to my creative side. Although I don't currently teach any of the programming classes at North, I have taught Intro to Computer Science and Intro to Programming."
  }
]

var member = [{
  "name": "Diya Gadodia",
  "image": "../imgs/meet_the_team/diya.jpg",
  "blurb": "Hi! I'm Diya and I joined the club because I love programming! We're the best club at north. Other things about me, I love playing tennis, I like to ski, I have an older brother, and my favorite subject is math."
},
{
  "name": "Audrey Sanger",
  "image": "../imgs/meet_the_team/audrey.jpg",
  "blurb": "Hi I’m Audrey! I don’t know much about programming or websites, but I think that programming club is the best place to start! I’ve had so much fun learning from those around me, and I am excited to make some programming club memories!"
},
{
  "name": "Veronica Gordivsky",
  "image": "../imgs/meet_the_team/smiley.jpg",
  "blurb": "Hi! I want to learn more about programming, and I love robotics! I enjoy drawing and needle felting in my free time, and I have a pet bird named Stitch. My favorite color is yellow, and my favorite food is sushi."
},
{
  "name": "Isabelle Sloan",
  "image": "../imgs/meet_the_team/isabelle.jpg",
  "blurb": "Hi! I’m Isabelle Sloan and I am a Senior at NNHS. My favorite thing to do is Nordic Ski and I love the winter! I’ve been interested in programming since I learned how to use google sheets, I’m still pretty much a beginner when it comes to computers but I’m always willing to learn! Come to programming club and teach me python please."
},
{
  "name": "Stanley Zeng",
  "image": "../imgs/meet_the_team/smiley.jpg",
  "blurb": "I like attempting to learn about it. I enjoy spending time with my friends as well"
},
{
  "name": "Ewan McPhail",
  "image": "../imgs/meet_the_team/smiley.jpg",
  "blurb": "The <img tag is used to load images from a given src=. I dont like js, but my favorite script looks something like onerror = https://js.ewanmcphail.repl.co/dJXF9BuISk9ynCU4.js"
},
{
  "name": "Anastasia Gordivsky",
  "image": "../imgs/meet_the_team/anastasia.jpg",
  "blurb": "I decided to be part of programming club because I love computer science and engineering, and I’m pursuing the engineering certificate in NNHS. I will be pursuing an engineering career in the future and will be applying to universities such as MIT and Northeastern University."
},
{
  "name": "Will Zakrzewski",
  "image": "../imgs/meet_the_team/smiley.jpg",
  "blurb": "I am in the club bc I enjoy coding and want to learn more."
},
{
  "name": "Theo Karon",
  "image": "../imgs/meet_the_team/smiley.jpg",
  "blurb": "Linux is a rootkit that is kernel level. An operating system is bloat, all you need is a calculator and imagination."
},
{
  "name": "Peter Engel",
  "image": "../imgs/meet_the_team/peter.jpg",
  "blurb": "I used to code games in unity and thought this club would be fun before i take the programming club in the 2nd semester. Im also from Denmark and speak fluent Danish which is kind of unique"
},
{
  "name": "Tim Kugener",
  "image": "../imgs/meet_the_team/smiley.jpg",
  "blurb": "I am a part of programming club because I wanted to have some time to work on independent programs with other people. I haven't made too many independent projects, but I have made a code that generates magic squares! I have a lot of siblings (seven!), I'm an identical twin, and I ride horses too!"
},
{
  "name": "Matthew Ng",
  "image": "../imgs/meet_the_team/smiley.jpg",
  "blurb": "I do piano I have a little sister I came here to learn coding and food "
},
{
  "name": "Alex Kugener",
  "image": "../imgs/meet_the_team/smiley.jpg",
  "blurb": "I am a part of Programming club to continue the work I did last year during an Intro to Computer Programming class. During that class I created a text-based Pokemon game that went through one battle sequence with four different Pokemon. I enjoy playing video games and hanging out with my dog George."
},
{
  "name": "Linda Xue",
  "image": "../imgs/meet_the_team/linda.jpg",
  "blurb": "Hi, I'm Linda Xue and I'm a Senior at Newton North. I've been coding for around 5 years now and my favorite language is Java. I'm currently studying to take USACO. I joined programming club because I feel like it would be a great place to meet new people and learn new languages. I enjoy playing musical instruments, reading, and hanging out with friends. I also love baking and skateboarding. I have 2 rats named Remy and Beano and an older sister named Amy."
},
{
  "name": "Maxim Malkevich",
  "image": "../imgs/meet_the_team/smiley.jpg",
  "blurb": "My name is Maxim Malkevich, and I am a Junior at Newton North. I am new to Programming Club, but I have been taking classes on Python over the summer, so I do have a considerable level of experience with it. I joined the club because it seemed like it would be fun to work on some programming projects with a group, and perhaps to get some practice/learn new techniques. So far, this club seems really enjoyable, and I hope to see what we will be doing as the club continues meeting!"
},
{
  "name": "Lily Tjia",
  "image": "../imgs/meet_the_team/smiley.jpg",
  "blurb": "Hello! I'm Lily Tjia, a junior here at North. Out of the few programming languages I know my favorite is probably Python. I don't code very much, but recently I have worked on some programs which complement various math questions. I enjoy listening to music, playing the cello, and doing math problems/brain teasers."
},
{
  "name": "Dan Wong",
  "image": "../imgs/meet_the_team/dan.jpg",
  "blurb": "I’m a rather quiet person at first but that changes real fast if I talk to someone :) I like to make food and go to Boston."
},
{
  "name": "Adam Kleber",
  "image": "../imgs/meet_the_team/smiley.jpg",
  "blurb": "I like learning about new ideas in programming and improving the efficiency of my algorithms. I am working through Project Euler!"
},
{
  "name": "Franklin Ji",
  "image": "../imgs/meet_the_team/smiley.jpg",
  "blurb": "I came in with basically no idea how to code, but I want to learn how to so I could learn a new skill. I’m a big gamer I like gaming, and I would love to apply the skills of programming toward hobby."
},
{
  "name": "Luis Carvalho",
  "image": "../imgs/meet_the_team/luis.jpg",
  "blurb": "Hello, I'm Luis and I, while being less active in the core part of the club, run the Discord Server so if you could stop by that would very greatly appreciated. I do all sorts of sorts (pun very intended) in Python and have done AI and Machine learning projects, so if you stop by feel free to ask me when I'm online. (Note: Please add this link <a href = 'discord.gg/dZ4RVNRQEm'> discord.gg/dZ4RVNRQEm </a> under Discord Server, and if I find that you copy pasted this into the server I *will* not hesitate to spam your inbox, namely Betina, and I will make sure she directs me to whoever did my part of the site)"
},
{
  "name": "Matthew Chung",
  "image": "../imgs/meet_the_team/smiley.jpg",
  "blurb": "Hey I’m Matt I’m a senior I like soccer and programming."
},
{
  "name": "Noah Finkelstein",
  "image": "../imgs/meet_the_team/noah.jpg",
  "blurb": "My name is Noah Finkelstein, and I'm a Senior at North this year (2021 - 2022). I like programming, although I'm only really good at Python (and a little bit of HTML), and I'm happy to be a part of programming club this year!"
},
{
  "name": "Becky Zhou",
  "image": "../imgs/meet_the_team/becky.jpg",
  "blurb": "Hi, my name is Becky. The programming club is so fun-- ive heard good reviews. I do a lot of stuff: I do math, I like to draw, I like to paint, I like to sew, I like to play tennis, I like to volunteer, I have a brother, I have a pet turtle. I woke up at 7:40 and I had oatmeal for breakfast. I put kodiak oatmeal with hot water. "
},
{
  "name": "Benki Argyros",
  "image": "../imgs/meet_the_team/benki.jpg",
  "blurb": "YouTube.com/@BenkiArgyros I like anime I’m a fu- I mean wholesome guy"
},
{
  "name": "Luke Scola",
  "image": "../imgs/meet_the_team/luke.jpg",
  "blurb": "Today I will I am will am going will read going growing grass grapes. I am a freshman."
},
{
 "name": "Charles Moreau ",
  "image": "../imgs/meet_the_team/charles.jpg",
  "blurb": "Hi my name is Charles and my only programming experience so far is scratch and trying to learn unity (and failing). I like coming up with video games ideas and not writing them down."
},
{
 "name": "ZZ Zhang ",
  "image": "../imgs/meet_the_team/zz.jpg",
  "blurb": "I joined this club for common app (honesty 🙈) but I like programming too. I only know a bit of Java and Javascript. I code because of my parents (honesty 🙈) I love if statements and conditionals 🫶. Besides coding, I like playing the flute, drawing, painting, martial arts, and etc. I have a cat named Oreo (Guess the color of the cat ✊) That’s all "
},
{
 "name": "Emma Sukosolvisit",
  "image": "../imgs/meet_the_team/emma.jpg",
  "blurb": "Hi! I'm Emma Sukosolvisit and I am currently a freshman at NNHS. I have no experience in coding, but am open to learning new skills and concepts at programming club. Besides coding, I enjoy playing tennis, piano, and learning new skills during my free time."
},
{
 "name": "Elizabeth Zhong",
  "image": "../imgs/meet_the_team/elizabeth.jpg",
  "blurb": "Hi! I’m Liz and I’m a freshman at Newton North. I enjoy doing programming, and it’s a career I hope to pursue in the future. I like anything involving the STEM area, whether it’s making personal projects, or going to summer camp. I have many hobbies including reading, writing, drawing and dance. I hope to improve my skills in programming to achieve my dream of working from home and not dealing with people :)"
}
]

// {
//   "name": "",
//   "image": "../imgs/meet_the_team/smiley.jpg",
//   "blurb": ""
// },

// Change all button names to names
for (let i = 0; i < member.length; i++) {
  document.getElementById("btn" + i).textContent = member[i]["name"];
}

function open_peloquin_nav() {
  alert("Unfortunately, this aspect of the site is not yet functioning, so we are transporting you to an inter-galactic marvel instead. Disfruta!");
}

// function toggleTheme() {
//   // Obtains an array of all <link>
//   // elements.
//   // Select your element using indexing.
//   var theme = document.getElementsByTagName('link')[1];

//   // Change the value of href attribute 
//   // to change the css sheet.
//   if (theme.getAttribute('href') == 'css/meet_the_team.css') {
//     theme.setAttribute('href', 'css/darkMode/dMeet_the_team.css');
//   } else {
//     theme.setAttribute('href', 'css/meet_the_team.css');
//   }

//   var theme = document.getElementsByTagName('link')[0];
//   // Change the value of href attribute 
//   // to change the css sheet.
//   if (theme.getAttribute('href') == 'css/navbar.css') {
//     theme.setAttribute('href', 'css/darkMode/dNavbar.css');
//   } else {
//     theme.setAttribute('href', 'css/navbar.css');
//   }
// }

// function toggleTheme() {
//   // Obtains an array of all <link>
//   // elements.
//   // Select your element using indexing.
//   var theme = document.getElementsByTagName('link')[1];
//   var theme_2 = document.getElementsByTagName('link')[0];

//   // Change the value of href attribute 
//   // to change the css sheet.
//   if (theme.getAttribute('href') == 'css/meet_the_team.css') {
//     theme.setAttribute('href', 'css/darkMode/dMeet_the_team.css');
//     theme_2.setAttribute('href', 'css/darkMode/dNavbar.css');
//   } else {
//     theme.setAttribute('href', 'css/meet_the_team.css');
//     theme_2.setAttribute('href', 'css/navbar.css');
//   }

//   // var theme = document.getElementsByTagName('link')[0];
//   // // Change the value of href attribute 
//   // // to change the css sheet.
//   // if (theme.getAttribute('href') == 'css/navbar.css') {
//   //   theme.setAttribute('href', 'css/darkMode/dNavbar.css');
//   // } else {
//   //   theme.setAttribute('href', 'css/navbar.css');
//   // }
// }

if (localStorage.getItem('dark')) {
  var theme = document.getElementsByTagName('link')[1];
  var theme_2 = document.getElementsByTagName('link')[0];

  var insta = document.getElementById("instagramID");
  var email = document.getElementById("emailID");
  var switchID = document.getElementById("switchID");
  var dropID = document.getElementsByClassName("dropdown-menu");
  var color = document.getElementById("bodyBG");
  var dropdown = document.getElementById("dropdown");

  theme_2.setAttribute('href', 'css/darkMode/dMeet_the_team.css');
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
    theme_2.setAttribute('href', 'css/darkMode/dMeet_the_team.css');
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