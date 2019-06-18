export class PowerPlant {
  name: string;
  id: number;
  price: number;
  greenPrice: number;
  priceMutli: number;
  productionMulti: number;
  buildings: number;
  level: number;
  engineers: number;
  production: number;
  logoImgae: string;
  image: string;
  search: boolean;
  constructor(id: number, name: string, priceMulti: number, productionMulti: number, greenPrice: number) {
    this.name = name;
    this.priceMutli = priceMulti;
    this.productionMulti = productionMulti;
    this.greenPrice = greenPrice;
    this.id = id;
    this.image = 'assets/image/' + name + '.png';
    this.search = false;
  }
}
