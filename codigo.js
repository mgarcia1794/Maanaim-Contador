

var pergunta =prompt("A paz do Senhor Jesus! Você deseja iniciar a contagem a partir de qual número ?");
var contador = 1*pergunta;

var operacao = 1*1;
$("#buttonCont > h1").text(contador);

  var sound = new Audio ("sons/soma.mp3");

$("#buttonCont").on("click", function()

{

  sound.play();

  $(this).addClass("pressed").delay(100).queue(function(next) {$(this).removeClass("pressed"); next(); });
  contador = contador + operacao;
  $("#buttonCont > h1").text(contador);

});


$("#zerar").on("click", function()

{
  sound = new Audio ("sons/soma.mp3");
  contador = 0;
  operacao = 1*1;
  $("#buttonCont > h1").text(contador);
});




$("#somar").on("click", function()

{
  sound = new Audio ("sons/soma.mp3");
  operacao = 1*1;
});

$("#subtrair").on("click", function()

{
  sound = new Audio ("sons/sub.mp3");
  operacao = (-1)*1;
});


let deferredPrompt;
const addBtn = document.querySelector('#atalho');
addBtn.style.display = 'none';


window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});

