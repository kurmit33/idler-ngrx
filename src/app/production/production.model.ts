import { PRODUCTION_TYPES } from './production.actions';
import { throwIfEmpty } from 'rxjs/operators';

export class ProductionAction {
  name: string;
  id: number;
  production = {
    startTime: 0,
    time: 0,
    energy: 0,
  };
  startPrice = 5;
  price = {
    upgrade: 0,
    timeResource: 0,
    research: 0,
  };
  multi = {
    production: 0,
    upgrade: 0,
  };
  level = 0;
  timeResources = 0;
  status = {
    research: false,
    researchButton: true,
    upgradeButton: true,
    timeResourceButton: true,
    work: false,
  };
  space = 50;
  time = 0;
  image: string;
  type: PRODUCTION_TYPES;
  title: string;
  secondResource: string;
  secondButton: string;

  constructor(
    id: number, type: PRODUCTION_TYPES, title: string, secondResource: string, secondButton: string,
    multiPrice: number, multiProduction: number, research: boolean) {
    this.id = id;
    this.name = type;
    this.multi.upgrade = multiPrice;
    this.multi.production = multiProduction;
    this.production.startTime = 60 * Math.round(multiProduction / 2) * 4;
    this.production.time = 60 * Math.round(multiProduction / 2) * 4;
    this.production.energy = 30 * multiProduction;
    this.type = type;
    this.image = '../assets/image/production/' + this.name + '.png';
    this.status.research = research;
    this.title = title;
    this.secondResource = secondResource;
    this.secondButton = secondButton;
    this.price.research = 10 * multiPrice * this.startPrice;
  }
}
