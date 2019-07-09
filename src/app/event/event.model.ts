export class GameEvent {
  title: string;
  id: number;
  name: string;
  type: string;
  multi: number;
  workTime: number;

  constructor(name: string, id: number, title: string, type?: string) {
    this.title = title;
    this.id = id;
    this.name = name;
    this.workTime = 0;
    if (type) {
      this.type = type;
    } else {
      this.type = '';
    }
    if (id) {
      if (Number(Math.random() * (10 - 1) + 1) <= 6) {
        this.multi = Number((Math.random() * (0.5 - 0.1) + 0.1).toFixed(2));
      } else {
        this.multi  = Number(((Math.random() * (0.5 - 0.1) + 0.1) * (-1)).toFixed(2));
      }
    } else {
      this.multi = 0;
    }
  }
}
