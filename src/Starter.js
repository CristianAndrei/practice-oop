class Starter {
    constructor() {
        if (this.game === undefined) {
            this.game = new Game();

            this.w1 = new Weapon("w1", 1, 50);
            this.w2 = new Weapon("w2", 2, 60);
            this.w3 = new Weapon("w3", 3, 50);

            this.h1 = new Hero("Ursa", 100, "https://firstblood.io/pages/wp-content/uploads/2018/10/ursa-hero-guide-970x570.jpg");
            // this.h2 = new Hero("Storm Spirit", 100, "https://1lal3e4eckus2d9p8g17wl8c-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/Storm-Cover.jpg");
            this.h3 = new SuperHero("Abbadon",100,"https://images6.alphacoders.com/538/thumb-1920-538945.jpg");
            this.h1.registerWeapon(this.w1);
            this.h1.registerWeapon(this.w2);

            this.s1 = new SuperPower("s1", 1, (hero) => {
                hero.setLife(hero.getLife()+20);
            });
            // this.h2.registerWeapon(this.w2);
            // this.h2.registerWeapon(this.w3);
            this.h3.registerSuperPower(this.s1);
            this.game.registerHero(this.h1);
            // this.game.registerHero(this.h2);
            this.game.registerHero(this.h3);


        }
    }
    static startGame() {
      return new Starter();
    }

}