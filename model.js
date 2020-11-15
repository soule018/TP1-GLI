
// Implémenter ici les 4 classes du modèle.
function Drawing (rectangle, line) {
    this.Rectangle=rectangle;
    this.Line=line;

    var formes = new Array ();
    formes.push(Rectangle);
    formes.push(Line);



 
}

function Rectangle () {
    this.couleur;
    this.epaisseurTrait;
    this.hautGauche;
    this.largeur;
    this.hauteur;
    
    Drawing.call (this);
    

}
function Line () {
    this.couleur;
    this.epaisseurTrait;
    this.x;
    this.y;

    Drawing.call (this);


}
Rectangle.prototype = new Drawing();
Line.prototype=new Drawing();
// N'oubliez pas l'héritage !
