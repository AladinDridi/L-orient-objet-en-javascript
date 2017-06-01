///maintenant entité  avec un constucteur 

var marticule={
   //constucteur
    init:function(type,prix,garantie){

          this.type=type;
          this.prix=prix;
          this.garantie=garantie;


    }, 
    decrire:function(){

	return "Type de véhciule est "+this.type+" avec prix de "+this.prix+" de garantie "+this.garantie ; 
    }
};

var véhciule = Object.create(marticule);
    véhciule.init("BMW",150,"3 ANS") 

    console.log(véhciule.decrire());

    ///Merci pour votre attention ;) //
