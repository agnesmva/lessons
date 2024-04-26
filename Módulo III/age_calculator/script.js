/*Datas digitadas pelo usuário*/
let userDay = parseInt(document.getElementById("day").value);
let userMonth = parseInt(document.getElementById("month").value);
let userYear = parseInt(document.getElementById("year").value);

/*Datas atuais pegas pelo horário do computador*/
let accData = new Date();
let accDay = accData.getDate();
let accMonth = accData.getMonth() +1;// precisa adicionar 1 pois começa em 0
let accYear = accData.getFullYear();
/*Variavel do cabeçalho estilo do cabeçalho para texto*/
let cabecalho = document.getElementById("cabecalho");

/* Datas para printar*/
let ShowYear = document.getElementById("years");
let ShowMonth = document.getElementById("months");
let ShowDay = document.getElementById("days");

function AgeCalculate(){
    if(userDay < 1 || userDay > 31 || userMonth < 1 || userMonth > 12 || userYear > accYear)
    {
        cabecalho.classList.add("error");
        cabecalho.classList.remove("cabecalhonormal");
        alert("Erro: Insira uma data válida.");
    }
    else 
    {   
        cabecalho.classList.remove("error");
        cabecalho.classList.add("cabecalhonormal");
        
        // Calculando a idade corretamente
        let ageYear = accYear - userYear;
        let ageMonth = accMonth - userMonth;
        let ageDay = accDay - userDay;

        // Verificando se já fez aniversário este ano
      
        if (ageDay == NaN || ageMonth == NaN || ageYear == NaN) 
        {
            cabecalho.classList.add("error");
            cabecalho.classList.remove("cabecalhonormal");
            alert("Erro: Insira uma data válida.");

        }
        else   if ((accMonth == userMonth && accData == userDay) || accMonth < userMonth) {
            ageYear--; 
        }
         

        ShowYear.innerText = ageYear;
        ShowMonth.innerText = ageMonth;
        ShowDay.innerText = ageDay;
        console.log(userDay);
        console.log(userMonth);
        console.log(userYear);
    }
}