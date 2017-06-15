var film1="le loup de Wall street";
var film2="Vice-Versa";
var fill3="Babysitting";
var films ="Le loup de wall street -Vice-Versa- Babysitting";
/**regroupers titre de films dans un objet*//

var movies{
movie1:"Le loup de Wall street",
movie2:"Vice-Versa",
moive3:"Babysitting",
//.....
};
var boxoffice =["Le loup de wall street","Vice-Versa","Babysitting"];
var tab=   ["Bonjour",7,true];
console.log(tab.length);/**affiche 3 le longeur d'un tableau*/
/**en cas d'un tableau vide*/
var tableauvide=[];
console.log(tableauvide.length); 
/** l'accés à un element */ 
console.log(boxoffice[0]);/** afficher le loup de Wall Street */ 
console.log(boxoffice[1]);/* Affiche "vice-versa"*/
console.log(boxoffice[2]);/* Affiche "Babysitting"*/ 
/**parcourir un tableau */ 
for (var i=0;i<boxoffice.length;i++){
	console.log(boxoffice[i]);/*Avec la bouclefor, on fait varier l'indice du tableau de 0 (indice du premier élément) à taille du tableau - 1 (indice du dernier) pour accéder aux éléments les uns après les autres.

*/
}
/*Une autre solution consiste à utiliser la méthodeforEach() sur le tableau. Celle-ci permet d'appliquer une fonction sur chaque élément du tableau. Voici l'exemple précédent réécrit avecforEach().

*/
boxoffice.forEach()(function(boxoff){
	console.log(boxoff);
});
/**ajoutez des élèments */ 
boxoffice.push("Les bronzés");
console.log(boxoffice[3]); 

