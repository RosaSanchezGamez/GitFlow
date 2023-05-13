let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 70,
});
 
typewriter
  .pauseFor(2200)
  .typeString('Cuna y capital del Arte Negro')
  .pauseFor(150)
  .deleteChars(17)
  .start();