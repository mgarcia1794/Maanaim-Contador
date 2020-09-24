

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



window.addEventListener("beforeinstallprompt", ev => { 
  // Stop Chrome from asking _now_
  ev.preventDefault();

  // Create your custom "add to home screen" button here if needed.
  // Keep in mind that this event may be called multiple times, 
  // so avoid creating multiple buttons!
  document.getElementById("atalho").onclick = () => ev.prompt();
});
