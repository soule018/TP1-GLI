
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {

  // Définir ici les attributs de la 'classe'
  this.initX=0;
  this.initY=0;
  this.finX=0;
  this.finY=0;
  this.press=true;
  this.canvas=canvas;

  // Developper les 3 fonctions gérant les événements
  DnD.prototype.pression=(evt)=>{
    if (this.pression){
      this.initX=getMousePosition(this.canvas,evt).x;
      this.initY=getMousePosition(this.canvas,evt).y;
      console.log(evt);
    }

  };
  DnD.prototype.deplacements= (evt)=>{
    if (this.deplacements) {
      this.initX=getMousePosition(this.canvas,evt).x;
      this.initY=getMousePosition(this.canvas,evt).y;
      console.log(evt);

    }

  };
  DnD.prototype.relachement= (evt)=>{
    if (this.relachement){
      this.initX=getMousePosition(this.canvas,evt).x;
      this.initY=getMousePosition(this.canvas,evt).y;
      console.log(evt);

    }

  };
  


  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.pression, false);
  canvas.addEventListener('mousemove', this.deplacements, false);
  canvas.addEventListener('mouseup', this.relachement, false);


};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



