class Constraint {
    constructor(body1, body2) {
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 2,
            length: 5
        }

        this.chain = Const.create(options);
        World.add(world, this.chain);
    }
}