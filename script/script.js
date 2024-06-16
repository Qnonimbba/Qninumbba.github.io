function Zamovlennya (){
const Tovar = ["AnonimPC Gaming X49 v21" , "AnonimPC Gaming X48 v36" , "AnonimPC Gaming X66 v22" ];
const cina = [28999 , 25599 , 37999];
let STR = ""; 
let STRZ = "";
for (let j = 0 ; j <= 2; j++) {STR=STR+Tovar[j]+ "         "+cina[j]+"\n";} 
alert("В базі є наступні товари \n Товар    Ціна \n" +STR); 
let S=0;
let count = 0;
while (confirm("Замовляєте товар?")) {
		let tov = prompt("Введіть назву товару");
		let i= Tovar.indexOf(tov, 0);
		if (i > -1) {
			let ktov = prompt("Введіть кількість товару");
			STRZ=STRZ+Tovar[i]+"         "+cina[i]+"         "+ktov+"\n"; 
			count++; 
			S=S+cina [i]*ktov;
			}
			else {
			alert ("В базі немає товару "+tov);
			}
		}
alert("Ви замовили наступні товари \n Товар Ціна Кількість \n "+STRZ+" \nСума Вашого замовлення "+S);
}