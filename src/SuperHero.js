class SuperHero extends Hero {
    constructor(name, life, image) {
        super(name, life, image);
        this.superPowers = [];
    }
    getSuperPowers() {
        return this.superPowers;
    }
    registerSuperPower(superPower) {
        this.superPowers.push(superPower);
    }
    activate(superPowerId) {
        for (let superPower of this.superPowers) {
            if (superPower.getId() === Number(superPowerId)) {
                superPower.apply(this);
            }
        }
    }
}   