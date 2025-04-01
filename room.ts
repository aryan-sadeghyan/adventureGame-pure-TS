import Thing, { ThingI } from "./thing";
import ThingHolder from "./thingHolder";

interface RoomConfig {
  title?: string;
  description?: string;
  N?: string;
  S?: string;
  W?: string;
  E?: string;
}
export default class Room extends ThingHolder {
  private _N: string;
  private _S: string;
  private _W: string;
  private _E: string;
  constructor(config: RoomConfig = {}) {
    super(config.title || "", config.description || "");
    this._N = config.N || "";
    this._S = config.S || "";
    this._W = config.W || "";
    this._E = config.E || "";
  }

  get S(): string {
    return this._S;
  }
  get N(): string {
    return this._N;
  }
  get E(): string {
    return this._E;
  }
  get W(): string {
    return this._W;
  }
}
