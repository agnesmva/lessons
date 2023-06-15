alert("A sua página HTML5 está carregada! Vamos aprender a trabalhar com operadores de matemática básica")

        function somar() {
            var num1 = document.getElementById("numero1").value;
            var num2 = document.getElementById("numero2").value;
            var n1 = Number(num1);
            var n2 = Number(num2);
            var resultado = n1 + n2;
            document.getElementById("resultado").textContent = "O resultado da soma é " + resultado;
        }

        function subtrair() {
            var num1 = document.getElementById("numero1").value;
            var num2 = document.getElementById("numero2").value;
            var n1 = Number(num1);
            var n2 = Number(num2);
            var resultado = n1 - n2;
            document.getElementById("resultado").textContent = "O resultado da subtração é " + resultado;
        }
        function multiplicar(){
            var num1 = document.getElementById("numero1").value;
            var num2 = document.getElementById("numero2").value;
            var n1 = Number(num1);
            var n2 = Number(num2);
            var resultado = n1 * n2;
            document.getElementById("resultado").textContent = "O resultado da multiplicação é " + resultado;
        }
        function dividir(){
            var num1 = document.getElementById("numero1").value;
            var num2 = document.getElementById("numero2").value;
            var n1 = Number(num1);
            var n2 = Number(num2);
            var resultado = n1 / n2;
            document.getElementById("resultado").textContent = "O resultado da divisão é " + resultado;
        }
    