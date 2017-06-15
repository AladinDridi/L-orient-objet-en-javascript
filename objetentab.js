var championnat {
	init:function(titre ,année){
		this.titre=titre;
		this.année=année;
	}
}, 
decrire:function(){
	var description =this.titre+"("+this.année +")";
	return description;
}}; 
var lg1=Object.create(championnat);
lg1.init("Ligue 1","Année 2017");
var lg2=Object.create(championnat);
lg2.init("La liga","Année 2017");
var lg3=Object.create(championnat);
lg3.init("Bundesliga","Année 2017");

var ligues =[];
ligues.push(lg1);
ligues.push(lg2);
ligues.push(lg3);
ligues.forEach(function(championnat){
console.log(championnat.decrire());
});
