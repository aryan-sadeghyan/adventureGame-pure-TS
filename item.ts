import Thing from "./thing";

interface ItemI {
  type?: "weapon" | "treasure" | "heal";
  rarity?: "common" | "epic";
  value?: number;
}

export default class Item extends Thing implements ItemI {
  private _type?: "weapon" | "treasure" | "heal";
  private _rarity?: "common" | "epic";
  private _value?: number;

  constructor() {
    super();
  }

  public get type(): "weapon" | "treasure" | "heal" | undefined {
    return this._type;
  }

  public set type(itemType: "weapon" | "treasure" | "heal") {
    this._type = itemType;
  }
  public get rarity(): "common" | "epic" | undefined {
    return this._rarity;
  }

  public set rarity(rarity: "common" | "epic") {
    this._rarity = rarity;
  }
  public get value(): number | undefined {
    return this._value;
  }

  public set value(value: number) {
    this._value = value;
  }
}
