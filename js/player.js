class Player {
    constructor(x, y, height, health) {
        var option = {
            density: 12.00000001,
            friction: 0.2,
            speed: 0
        }
        this.body = Bodies.rectangle(x, y, 20, height, option);
        this.x = x;
        this.width = 20;
        this.y = y;
        this.health = health;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        console.log(this.body);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }

    left() {
        this.body.position.x = this.body.position.x - 10;
    }

    right() {
        this.body.position.x = this.body.position.x + 10;
    }

    up() {
        this.body.position.y = this.body.position.y - 10;
    }

    down() {
        this.body.position.y = this.body.position.y + 10;
    }
}