var matricule={
//*declaration les parametres de l'objet(ou bien les attributs)
type:"",
prix:0, 	
garantit:"",

//fonction comme "tostring on java " pour afficher les informations de chaque object 

decrire:function(){

	return "Type de véhciule est "+this.type+" avec prix de "+this.prix+"de garantie "+this.garantit ; 
}
};

var matr1 =Object.create(matricule);
matr1.type="Ferrari";
matr1.prix=150000;
matr1.garantit="1 Anas";
console.log(matr1.decrire());
