// Get the modal
// var b_modal = document.getElementById("b_Modal");

// Get the button that opens the modal
// var b_btn = document.getElementById("b_Btn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// b_btn.onclick = function() {
//   b_modal.style.display = "block";
// }
// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   b_modal.style.display = "none";
// }

// var Officer = document.getElementById("showOfficer");
var Member = document.getElementById("showMember");

//console.log("TEST")

function showOfficer(index) {
  document.getElementById("ShowOfficer_Name").textContent = officer[index]["name"];
  document.getElementById("ShowOfficer_Text").textContent = officer[index]["introduction"];
  document.getElementById("ShowOfficer_ID").src = officer[index]["image"];
  document.getElementById("ShowOfficer").style.display="block";  
}

document.getElementById("CloseOfficer").onclick = function() {
  document.getElementById("ShowOfficer").style.display="none";
}

function showMember(index) {
  document.getElementById("ShowMember_Name").textContent = names[index]["name"];
  document.getElementById("ShowMember_Text").innerHTML = names[index]["Introduction"];
  document.getElementById("ShowMember").style.display="block";
  
  if(names[index]["image"] === ""){
    document.getElementById("ShowMember_ID").remove();
  } else {
    document.getElementById("ShowMember_ID").src = names[index]["image"];
  }
  
}


document.getElementById("CloseMember").onclick = function() {
  document.getElementById("ShowMember").style.display="none";
}


//OFFicer INFO

var officer = [
  { "name": "Betina Kreiman",
    "image": "headshots/betski.jpg",
    "introduction": "Hi! I’m Betina Kreiman, and I’m the president of the Newton North Programming Club! I’m a sophomore at Newton North High School, but I’ve been coding for a couple of years now. My favorite languages are Python and Swift (because I know them the best), but I love trying new things and experimenting with other languages. Recently, I just uploaded an app to the app store and have been doing some random projects! Other than coding, I love soccer, tennis, and hanging out with my friends! Hope to see you at a club meeting!"},
    
  { "name": "Jennifer Li", 
    "image": "headshots/jennifer.jpg",
    "introduction": "Hello! I’m Jennifer, and I am sophomore at Newton North High School. My favorite subject is math, but I also enjoy coding and learning various languages. In particular, I like working in front end development, learning about JavaScript animations, and also coding basic games in python. In my free time, I like running, playing tennis, and playing the piano."},
    
  { "name": "Angela Bai",
    "image": "headshots/angelaTwo.jpg",
    "introduction": "Hello! I'm Angela and I'm a junior. I'm one of the club officers of programming club, and I'm so excited to work with everyone on all the upcoming projects this year! Feel free to reach out to me or any of the other officers with any questions, ideas, or suggestions–we'd love to hear from you :)"},
    
  { "name": "Mr. Peloquin",
    "image": "headshots/adam.jpg",
    "introduction": "Hello! Hello! I'm the faculty advisor for the NNHS Programming Club. I think that programming is such a useful tool, and I love the empowerment that people feel when they realize how they can use it to solve problems. My favorite language is Python, but I also like HTML because it appeals to my creative side. Although I don't currently teach any of the programming classes at North, I have taught Intro to Computer Science and Intro to Programming."}
]


//MEMBER INFO!!!

var names = [
  { "name":"Izzy Craine",
    "image":"",
    "Introduction":"<p>Bonjour je m'appelle Izzy Craine et je suis un sophomore. Je ne programme pas mais je dessine très bien. J'aime l'art et des sports. Je suis très contente d'être partie du club. C'est une bonne famille des gens. Check out my favorite video!  <a href = 'https://www.youtube.com/watch?v=ayab7J9vZNs'> https://www.youtube.com/watch?v=ayab7J9vZNs </a> </p>"},

  { "name":"Eva Mescher",
    "image":"",
    "Introduction":"<p>I am a sophomore at Newton North. I like playing soccer, basketball, softball, and track. I also like to code in java script, python, and swift.</p>"},
    
  { "name":"Ria Chudasama",
    "image":"", 
    "Introduction": "<p>I’m Ria, a junior. I joined this club because I like programming & I started last year. My favourite language is Python.</p>"},

  { "name":"Linda Xue", 
    "image":"memberPic/linda.jpg",
    "Introduction": "<p>Hi, I'm Linda Xue and I'm a sophomore at Newton North. I've been coding for around 5 years now and my favorite language is Java. I'm currently studying to take USACO. I joined programming club because I feel like it would be a great place to meet new people and learn new languages. I enjoy playing musical instruments, reading, and hanging out with friends. I also love baking and skateboarding. I have 2 rats named Remy and Beano and an older sister named Amy.</p>"},

  { "name":"Ewan McPhail", 
    "image":"",
    "Introduction": "<p>Hi, I'm Ewan, and I'm a freshman. I like coding because it's fun to see your projects be created. I program in Python, C++, Java, HTML, and CSS. The projects I'm currently working on is my own website and a RDR2 mod.</p>"},

  { "name":"Maxim Malkevich", 
    "image":"",
    "Introduction": "<p>Hello! My name is Maxim Malkevich, and I am a freshman at Newton North. I am new to Programming Club, but I have been taking classes on Python over the summer, so I do have a considerable level of experience with it. I joined the club because it seemed like it would be fun to work on some programming projects with a group, and perhaps to get some practice/learn new techniques. So far, this club seems really enjoyable, and I hope to see what we will be doing as the club continues meeting!</p>"},

  { "name":"Lily Tjia", 
    "image":"",
    "Introduction": "<p>Hello! I'm Lily Tjia, a freshman here at North. Out of the few programming languages I know my favorite is probably Python. I don't code very much, but recently I have worked on some programs which complement various math questions. I enjoy listening to music, playing the cello, and doing math problems/brain teasers.</p>"},

  { "name":"Dan Wong", 
    "image": "memberPic/dan.jpg",
    "Introduction": "<p>I’m a rather quiet person at first but that changes real fast if I talk to someone :) I like to make food and go to Boston. </p>"},

  { "name":"Jess Rigoli", 
    "image":"",
    "Introduction": "<p>I like to play video games mostly.</p>"},

  { "name":"Adam Kleber", 
    "image":"",
    "Introduction": "<p>I like learning about new ideas in programming and improving the efficiency of my algorithms. I am working through Project Euler!</p>"},

  { "name":"Nicole Temkin",
    "image":"", 
    "Introduction":"<p> Decided to try coding because  I know people in the club and it sounds interesting. </p>"},

  { "name":"Albert Le", 
    "image":"memberPic/albert.jpg",
    "Introduction": "<p>Hi! I'm Albert. I'm a part of the club this year because I want to work on fun projects and improve my programming skills. I have one brother who's a freshman here at North. My favorite shows are One Piece, Squid Game, and Naruto. My favorite movie is Crazy Rich Asians.</p>"},

  { "name":"Franklin Ji", 
    "image":"",
    "Introduction": "<p>I came in with basically no idea how to code, but I want to learn how to so I could learn a new skill. I’m a big gamer I like gaming, and I would love to apply the skills of programming toward hobby.</p>"},

  { "name":"Jonathan Rideout", 
    "image":"",
    "Introduction": "<p>Hi I’m Jonathan and i joined the programming club to improve my understanding and skills in programming. I like to game a lot, and I’m looking forward to learning a lot more about programming.</p>"},
  
  { "name":"Sami Brodsky", 
    "image":"",
    "Introduction": "<p>I am a junior at nnhs and I play soccer. I am a good student who gets reasonable grades, and I really enjoy reading books over and over again.</p>"},

  { "name":"Luis Carvalho",
    "image":"memberPic/luis.jpg",
    "Introduction": "<p> Hello, I'm Luis and I, while being less active in the core part of the club, run the Discord Server so if you could stop by that would very greatly appreciated. I do all sorts of sorts (pun very intended) in Python and have done AI and Machine learning projects, so if you stop by feel free to ask me when I'm online. (Note: Please add this link <a href = 'discord.gg/dZ4RVNRQEm'> discord.gg/dZ4RVNRQEm </a> under Discord Server, and if I find that you copy pasted this into the server I *will* not hesitate to spam your inbox, namely Betina, and I will make sure she directs me to whoever did my part of the site)</p>"},

  { "name":"Ben Kharfen",
    "image":"",
    "Introduction": "<p>The reason I joined is because I like coding and I’ve taken the two classes on computer programming</p>"},

  { "name":"Matthew Chung",
    "image":"",
    "Introduction": "<p> Hey I’m Matt I’m a sophomore I like soccer and programming. </p>"},

  { "name":"Jacob Chen",
    // "image":"memberPic/jacob.jpg",
    "image":"",
    "Introduction": "<p> Hello, World! I am super excited to be apart of programming club. I joined to help other students out with their projects. Also, I have been competing in hackathons, and I want to get into CP. One fun fact about me: my favorite color is orange!</p>"},

  { "name":"Alex Elvin",
    "image":"",
    "Introduction": "<p> Hi, my name is Alex. I am a Sophomore and I like running. I can’t code, but I like learning. I also like hiking and snowboarding.</p>"},

  { "name":"Theo Karon",
    "image":"",
    "Introduction": "<p> Hi. I'm Theo. I'm in the club because while I've wanted to learn to code for forever, I'm awful at getting myself to do things; so I decided that this was probably the best way. I do a lot of music stuff. For example, I've been playing violin for 10 years and have composed some decently long songs. Also I play a lot of Geometry Dash. So yeah.</p>"},

  { "name":"Isabelle Sloan",
    "image":"",
    "Introduction":"<p> Hi my name is Isabelle Sloan, I am learning to code, I like python and html and I am currently working on making different games. I really enjoy playing soccer, reading and Nordic skiing.</p>"},

  { "name":"Noah Finkelstein",
    "image":"memberPic/noah.jpg",
    "Introduction":"<p> My name is Noah Finkelstein, and I'm a Sophomore at North this year (2021 - 2022). I like programming, although I'm only really good at Python (and a little bit of HTML), and I'm happy to be a part of programming club this year! </p>"}
]



// Change all button names to names
for(let i = 0; i < names.length; i++) {
  document.getElementById("btn" + i).textContent = names[i]["name"];
}

window.onclick = function(event) {
  if (event.target == Member ) {
    Member.style.display = "none";
  }
}
