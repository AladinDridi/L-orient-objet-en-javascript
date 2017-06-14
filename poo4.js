var Personnage ={
	init:function (nom ,sante , force) {
		// body...
		this.nom = nom ;
		this.sante = sante ;
		this.force = force;
		this.xp=0;
	},  

decrire:function(){
	return this.nom+" a "+this.sante+" points de vie, "+this.force+" en force et " +this.xp + "points d'expérience" ;

},
attaquer:function(cible){
	if (this.sante>0){
		var degats=this.force;
		console.log(this.nom+" attaquer "+cible.nom+" et  lui fait"+degats+"point de dégâts");

	} else{
		cible.sante=0;
		console.log(cible.nom+" est mort !");
	} else{
		cible.sante=0;
		console.log(cible.nom+" est mort !");
	} else{
		console.log(this.nom+" ne peut pas attaquer : il est mort ...") ;
	}
}

};
var perso1=Object.create(Personnage);
perso1.init("Autora",525,25);
var perso2=Object.create(Personnage);
perso2.init("Julio",222,13);

console.log(perso1.decrire());
console.log(perso2.decrire()); 

var perso3 =Object.create(Personnage);
perso3.initperso=function(nom,sante,force){
	this.init(nom,sante,force);
	this.xp=0;
}; 
^perso3.decrire=function(){
	var description = this.nom+" a " +this.sante+" points de vie , "+this.force+" en force et "+this.xp+"points d'experience";
	return description;
}
var Adversaire =Object.create(Personnage);
//initialise l'adversaire
Adversaire.initadversaire=function(nom,sante,force,race,valeur){
	this.init(nom,sante,force);
	this.race=race;
	this.valeur=valeur;
}; 
perso3.initperso("Aladin",5200,22);
console.log(perso3.decrire()); 
var joueur1 = Object.create(Personnage);
joueur1.init("Ali",150,25);
console.log(joueur1.decrire()); 
var joueur2 =Object.create(Personnage);
joueur2.init("Garcia",130,30);
console.log("Bienvenue dans ce jeu d'aventure ! voici nos courageux héros");
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initadversaire("ZogZog",40,20,"orc",10);
console.log("Un affreux monstre arrive : c'est un "+monstre.race+" nommé" + monstre.nom);

console.log("*****"); 

var joueur4=Object.create(Personnage);
joueur4.initjoueur=function(nom,sante,force){
	this.initperso(nom,sante,force);
	this.xp=0;
}; 
joueur4.decrire=function(){
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.xp + " points d'expérience";
    return description;
};
joueur4.combattre=function(adversaire){
	this.attaquer(adversaire);
	if(adversaire.sante==0){
		console.log(this.nom+"a tué "+adversaire.nom+" et gagné "+adversaire.valeur+" points d'experience");
		this.xp+=adversaire.valeur;
	}};

}
console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());
