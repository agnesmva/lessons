/*Datas digitadas pelo usuário*/
let userDay = parseInt(document.getElementById("day").value);
let userMonth = parseInt(document.getElementById("month").value);
let userYear = parseInt(document.getElementById("year").value);

/*Datas atuais pegas pelo horário do computador*/
let accData = new Date;
let accDay = accData.getDate();
let accMonth = accData.getMonth();
let accYear = accData.getFullYear();