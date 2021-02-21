class Food {
    constructor(x, y, width, height, image) {
        var options = {
            density: 3,
            friction: 2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        var rand = Math.round(random(1,2));
        switch (rand) {
            case 1: this.image = loadImage("images/Choco.jpg");;
            break;
            case 2: this.image = loadImage("images/pineapple.jpg");
            break;
        }
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;


        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}
