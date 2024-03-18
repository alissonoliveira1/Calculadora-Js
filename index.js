function patams(params) {
  document.querySelector("[name='tela']").value += params;
}

function calculo() {
  conta = document.querySelector("[name='tela']").value;
  document.querySelector("[name='tela']").value = eval(conta);
}
function deletar() {
  document.querySelector("[name='tela']").value = "";
}
function porcent() {
  conta = document.querySelector("[name='tela']").value + "/100";
  document.querySelector("[name='tela']").value = eval(conta);
}
