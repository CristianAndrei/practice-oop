class SuperPower {
    constructor(name,id,use)
    {
        this.name=name;
        this.id=id;
        this.apply = (hero) => {
                use(hero);
        }
    }
    getId()
    {
        return this.id;
    }
    getName()
    {
        return this.name;
    }
}