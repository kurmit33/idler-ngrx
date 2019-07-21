import { OFFICE_TYPES } from './office.actions';

export class Office {
  id: number;
  title: string;
  name: string;
  image: string;
  secondResourcesName: string;
  secondButton: string;
  room = 0;
  secondResources = 0;
  space: number;
  time: number;
  workTime: number;
  offlineTime: Date;
  maxEnergy: number;
  minPrice: number;
  multi = {
    price: 1,
    room: 1,
  };
  price = {
    room: 0,
    secondResources: 0,
    research: 0,
  };
  status = {
    research: false,
    researchButton: true,
    roomButton: true,
    toolButton: true,
    work: false,
  };
  lastTime: Date;
  type: OFFICE_TYPES;
  constructor(
    id: number, name: string, type: OFFICE_TYPES, title: string, secondResourcesName: string,
    secondButton: string, multiPrice: number) {
    this.id = id;
    this.name = name;
    this.multi.price = multiPrice;
    this.type = type;
    this.title = title;
    this.secondButton = secondButton;
    this.secondResourcesName = secondResourcesName;
    if (multiPrice > 1) {
      this.multi.room = 100;
    } else {
      this.multi.room = 1;
    }
    switch (type) {
      case OFFICE_TYPES.BIG_SELL:
      case OFFICE_TYPES.SELL:
        this.image = '../assets/image/office/sell.png';
        this.time = 10;
        this.minPrice = 0.1;
        this.maxEnergy = 500 * multiPrice * this.secondResources;
        this.space = 10;
        this.workTime = 0;
        this.price.research = 100 * multiPrice;
        break;
      case OFFICE_TYPES.CONTROL:
        this.image = '../assets/image/office/control.png';
        this.time = 30 * 60;
        this.minPrice = 0;
        this.maxEnergy = 0.001 * (this.secondResources + 1);
        this.space = 10;
        this.price.research = 1000;
        this.offlineTime = new Date();
        break;
      case OFFICE_TYPES.ACCUMULATOR:
        this.image = '../assets/image/office/accu.png';
        this.time = 0;
        this.minPrice = 0;
        this.maxEnergy = 500 * multiPrice * (this.secondResources + 1);
        this.space = 10;
        this.price.research = 10 * multiPrice;
        break;
      case OFFICE_TYPES.BIG_ACCUMULATOR:
        this.image = '../assets/image/office/accu.png';
        this.time = 0;
        this.minPrice = 0;
        this.maxEnergy = 500 * multiPrice * this.secondResources;
        this.space = 10;
        this.price.research = 10 * multiPrice;
        break;
    }
  }
}
