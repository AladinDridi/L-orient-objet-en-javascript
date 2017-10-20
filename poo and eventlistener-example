var personne={
    nom:"aladin",
    prénom:"dridi",
    cin:"0000",
    tostring:function(){
        return this.nom+" "+this.prénom+" "+" cin:"+this.cin;
    }
}
var myobject = function constructeur(par1,par2){
    this.par1=par1;
    this.par2=par2;
} 
var p = Object.create(personne);
    p.nom="aladin";
    p.prénom="madi";
    p.cin="4525";
    
   


console.log(p.tostring());
var madiv=document.getElementById('msg');
    madiv.addEventListener("mouseover",function(event){
        madiv.textContent=p.tostring();
    })
