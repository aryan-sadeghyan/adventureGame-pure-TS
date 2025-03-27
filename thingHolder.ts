import Thing from "./thing";

interface ThingHolderI {
  thingList: string[];
}

export default class ThingHolder extends Thing {
  private _thingList: string[];
  constructor(_title: string = "", _description: string = "") {
    super(_title, _description);
    this._thingList = [];
  }

  get thingList() {
    return this._thingList;
  }
  addItem(thing: string) {
    this._thingList.push(thing);
  }
}
