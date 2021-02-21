class BaseClass {
    constructor(x, y, width, height) {
        var options = {
            density: 12,
            friction: 0.1
        }
        this.width = width;
        this.height = height;
        this.health = 150;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}