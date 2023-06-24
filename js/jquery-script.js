//efeito de esconder formulário de cadastro

$(document).ready(function () {
  $("#botao-cadastrar").click(function () {
    $("#section-cadastro").slideToggle("slow");
    $("#section-login").slideToggle("slow");
    $("#botao-cadastrar").hide();
  });
});
