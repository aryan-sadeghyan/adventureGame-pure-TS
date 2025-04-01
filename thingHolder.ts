import Item from "./item";
import Thing, { ThingI } from "./thing";

interface ThingHolderI extends ThingI {
  thingList: string[];
}

export default class ThingHolder extends Thing {
  private _thingList: Thing[];
  constructor(_title = "", _description = "") {
    super(_title, _description);
    this._thingList = [];
  }

  get thingList() {
    return this._thingList;
  }
  public addItem(item: Item) {
    this._thingList.push(item);
  }

  public removeItem(title: string) {
    const deletedItem = this._thingList.find((thing) => {
      title.toLowerCase() === thing.title.toLowerCase();
    });

    if (!deletedItem) {
      return undefined;
    }

    const index = this._thingList.indexOf(deletedItem);
    if (index !== -1) {
      return this._thingList.splice(index, 1)[0];
    }
  }
}
