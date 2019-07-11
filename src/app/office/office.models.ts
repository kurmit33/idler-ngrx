import { expand } from 'rxjs/operators';

export class Office {
  level: number;
  rooms: number;
  title: string;
  name: string;
  multi: {
    price: number;
    room: number;
  };
  price: {
    rooms: number;
    level: number;
    research: number;
  };
  status: {
    research: boolean;
    researchButton: boolean;
    buyButton: boolean;
    upgradeButton: boolean;
  };
  // type: OFFICE_TYPES;
  constructor() {

  }
}

export class AccumulatorsRoom extends Office {
  maxEnergy: number;
  constructor() {
    super();
  }
}

export class ControlRoom extends Office {
  maxTime: number;
  constructor() {
    super();
  }
}

export class SellRoom extends Office {
  maxEnergy: number;
  minPrice: number;
  time: number;
  status: {
    research: boolean;
    researchButton: boolean;
    buyButton: boolean;
    upgradeButton: boolean;
    onOff: boolean;
  };

  constructor() {
    super();
  }
}
