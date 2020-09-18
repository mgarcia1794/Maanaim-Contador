

var pergunta =prompt("A paz do Senhor Jesus! Você deseja iniciar a contagem a partir de qual número ?");
var contador = 1*pergunta;

var operacao = 1*1;
$("#buttonCont > h1").text(contador);

  var sound = new Audio ("sons/soma.mp3");

$("#buttonCont").on("click", function()

{

  sound.play();

  $(this).addClass("pressed").delay(300).queue(function(next) {$(this).removeClass("pressed"); next(); });
  contador = contador + operacao;
  $("#buttonCont > h1").text(contador);

});


$("#zerar").on("click", function()

{
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
