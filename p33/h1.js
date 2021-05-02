class houseOne {

    constructor(x,y,width,height){ 
  
    this.body = Bodies.rectangle(x,y, width,height);
    this.width = width;
    this.height = height; 

    this.image = loadImage("h1.png");
    
    }
  
    display(){
    
    var pos = this.body.position;
  
    push();
    imageMode(CENTER);
    image(this.image, pos.x,pos.y, this.width, this.height);
    pop();
    
    }
  
  }