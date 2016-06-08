var pelicula ={
	titulo:"x-men",
	genero:"accion",
	director:"marvel",
	duracion:150,
	
	resumen:function()
{
	var res="la pelicula:"+pelicula.titulo+
		     "es de genero:"+pelicula.genero+
		     "y esta dirigido por:"+pelicula.director+
		     "de duracion:"+pelicula.duracion+"min";
		     return res;
 }
}

console.log(pelicula.resumen());
console.log(pelicula["genero"]);
		
		for(i in pelicula){
			console.log(i +":"+pelicula[i]);
		}


