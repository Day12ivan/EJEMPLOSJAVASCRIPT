var pelicula ={
	titulo:"x-men",
	genero:"x-men",
	director:"marvel",
	duracion:150,

	
	resumen:function()
{
	var res="la pelicula:"+pelicula.titulo+
		     "dura:"+pelicula.duracion+"min";
		     return res;
 }
}

console.log(pelicula.resumen());
console.log(pelicula["dura"]);
		

