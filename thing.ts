import { get } from "http";

export interface ThingI {
  title: string;
  description?: string;
}

export default class Thing implements ThingI {
  constructor(private _title = "", private _description = "") {}

  get title(): string {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }

  get description(): string | undefined {
    return this._description;
  }
  set description(description: string) {
    this._description = description;
  }
}
