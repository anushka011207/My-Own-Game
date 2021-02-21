class Weapon{
    constructor(x, y, width, height, damage) {
        var options = {
            density: 3,
            friction: 1,
            speed: 0
            // isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.damage = damage;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        console.log(this.body);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}