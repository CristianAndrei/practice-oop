class Hero {
    constructor(name,life,image) {
        this.name = name;
        this.life = life;
        this.image = image;
        this.weapons = [];
    }
    getWeapons()
    {
        return this.weapons;
    }
    getLife()
    {
        return this.life;
    }
    setLife(life)
    {
        this.life=life;
    }
    getName()
    {
        return this.name;
    }
    getWeapon(weaponId)
    {
        for(let weapon of this.weapons)
        {
            if(weapon.getId()===Number(weaponId))
            {
                return weapon;
            }
        }
        return undefined;
    }
    getStats()
    {
        return {
            name: this.name,
            life: this.life,
            image: this.image
        }
    }
    registerWeapon(weapon)
    {
        this.weapons.push(weapon);
    }
    wasAttacked(weapon)
    {
        this.life-=weapon.getDamage();
    }
}