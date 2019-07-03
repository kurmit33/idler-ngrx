import { POWERPLANT_TYPES } from './powerplant.actions';

export class PowerPlant {
  name: string;
  id: number;
  startPrice = {
    money: 5,
    green: 0,
  };
  price = {
    build: {
      money: 0,
      green: 0,
    },
    upgrade: {
      money: 0,
      green: 0,
    },
    research: {
      money: 0,
      green: 0,
    },
  };
  multi = {
    build: 0,
    upgrade: 0,
    production: {
      energy: 0,
      green: 0,
    }
  };
  buildings = 0;
  level = 0;
  engineers = 0;
  production = 0;
  space = 100;
  image: string;
  avatar: string;
  status = {
    research: false,
    researchButton: true,
    buildButton: true,
    upgradeButton: true,
    hireButton: true,
  };
  type: POWERPLANT_TYPES;
  constructor(id: number, multiPrice: number, multiProduction: number, isGreen: boolean, type: POWERPLANT_TYPES) {
    this.name = type;
    this.id = id;
    this.image = '../assets/image/powerplant/' + this.name + '.png';
    this.multi.build = multiPrice;
    this.multi.upgrade = multiPrice * 50;
    this.multi.production.energy = multiProduction;
    this.price.research.money = this.startPrice.money * multiPrice * 50;
    this.type = type;
    if (isGreen) {
      this.avatar = '../assets/image/powerplant/green-energy.png';
      this.multi.production.green = multiProduction * 100;
    } else {
      this.startPrice.green = 100;
      this.avatar = '../assets/image/powerplant/dirty-energy.png';
      this.price.research.green = this.startPrice.green * multiPrice * 50;
    }
  }
}
