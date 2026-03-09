const locations = [
  { id: "loc1", correct: "Collier Library", options: ["Collier Library", "Music Building", "Stone Lodge"] },
  { id: "loc2", correct: "601 Cramer Way", options: ["601 Cramer Way", "Planetarium and Observatory", "Visual Arts Building"] },
  { id: "loc3", correct: "Communication Building", options: ["Communication Building", "Norton Auditorium", "Keller Hall"] },
  { id: "loc4", correct: "Math and Computing", options: ["Math and Computing", "Student Publications", "East Campus"] },
  { id: "loc5", correct: "East Campus", options: ["East Campus", "Kilby School", "Powers Hall"] },
  { id: "loc6", correct: "Theatre", options: ["Theatre", "Music Building", "McKinney Center"] },
  { id: "loc7", correct: "Keller Hall", options: ["Keller Hall", "Collier Library", "Willingham Hall"] },
  { id: "loc8", correct: "Kilby School", options: ["Kilby School", "Stone Lodge", "Math and Computing"] },
  { id: "loc9", correct: "Laura M. Harrison Hall and Anderson College of Nursing", options: ["Laura M. Harrison Hall and Anderson College of Nursing", "Student Publications", "Theatre"] },
  { id: "loc10", correct: "McKinney Center", options: ["McKinney Center", "Visual Arts Building", "Communication Building"] },
  { id: "loc11", correct: "Mitchell Burford Science and Technology", options: ["Mitchell Burford Science and Technology", "Norton Auditorium", "Keller Hall"] },
  { id: "loc12", correct: "Music Building", options: ["Music Building", "Wesleyan Hall", "Powers Hall"] },
  { id: "loc13", correct: "Norton Auditorium", options: ["Norton Auditorium", "East Campus", "Stone Lodge"] },
  { id: "loc14", correct: "Planetarium and Observatory", options: ["Planetarium and Observatory", "Music Building", "Kilby School"] },
  { id: "loc15", correct: "Powers Hall", options: ["Powers Hall", "Communication Building", "Student Publications"] },
  { id: "loc16", correct: "Stone Lodge", options: ["Stone Lodge", "McKinney Center", "Math and Computing"] },
  { id: "loc17", correct: "Student Publications", options: ["Student Publications", "Willingham Hall", "Theatre"] },
  { id: "loc18", correct: "Visual Arts Building", options: ["Visual Arts Building", "Keller Hall", "Collier Library"] },
  { id: "loc19", correct: "Willingham Hall", options: ["Willingham Hall", "Planetarium and Observatory", "Kilby School"] },
  { id: "loc20", correct: "Wesleyan Hall", options: ["Wesleyan Hall", "Music Building", "East Campus"] }
];
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
  myButton.classList.toggle("toggled-state");
});