import { Observable } from 'tns-core-modules/data/observable';
import { DateUtils } from 'nativescript-date-utils';

export class HelloWorldModel extends Observable {
  public is24hFormat: string;

  constructor() {
    super();
    new DateUtils().is24hFormat().then(is24h => {
      this.set("is24hFormat", is24h);
    });
  }
}
