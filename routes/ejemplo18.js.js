function contarA (cadena,letra) {
for (i=0,contA=0;i<cadena.length;i++)
{
if(cadena[i]==letra){
	contA++;	
}

}
return contA;

}
var frase ="hola horacio";
var letra ="o";
console.log("la cantidad de A es");

console.log(contarA(frase,letra));
