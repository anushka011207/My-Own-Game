class Army extends BaseClass {
    constructor(x,y,health) {
        super(x, y, 20, 40);
        this.health = health;
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}