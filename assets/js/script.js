function converter(){
    let btn_converter = document.getElementById("btn_converter").value
    let input_inteiro = document.querySelector('#inteiro')
    let input_binario = document.querySelector("#binario")

    if (btn_converter == 0) {
        inteiro = document.querySelector('#inteiro')
        let valor_decimal = parseInt(inteiro.value, 10)
        let valor_binario = valor_decimal.toString(2)
        input_binario.value = valor_binario
        console.log(valor_binario)
    } else {
        let input_binario = document.querySelector('#binario')
        let valor_binario = input_binario.value
        let valor_decimal = parseInt(valor_binario, 2)
        input_inteiro.value = valor_decimal
        console.log(valor_decimal)
    }
}
    


function inverter() {
    let input_inteiro = document.querySelector('#inteiro');
    let input_binario = document.querySelector("#binario");
    let inputBox = document.querySelector('.input-box');
  
    if (window.innerWidth <= 700) {
      if (input_binario.disabled) {
        input_binario.disabled = false;
        input_inteiro.disabled = true;
        input_inteiro.value = '';
        inputBox.style.flexDirection = 'column-reverse';
        document.getElementById("btn_converter").value = 1;
      } else {
        input_binario.disabled = true;
        input_inteiro.disabled = false;
        input_binario.value = '';
        inputBox.style.flexDirection = 'column';
        document.getElementById("btn_converter").value = 0;
      }
    } else {
      if (input_binario.disabled) {
        input_binario.disabled = false;
        input_inteiro.disabled = true;
        input_inteiro.value = '';
        inputBox.style.flexDirection = 'row-reverse';
        document.getElementById("btn_converter").value = 1;
      } else {
        input_binario.disabled = true;
        input_inteiro.disabled = false;
        input_binario.value = '';
        inputBox.style.flexDirection = 'row';
        document.getElementById("btn_converter").value = 0;
      }
    }
  }