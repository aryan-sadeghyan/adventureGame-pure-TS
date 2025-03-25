import Thing, { ThingI } from "./thing";

interface RoomI extends ThingI {
  N: number;
  S: number;
  W: number;
  E: number;
}
export default class Room extends Thing implements RoomI {
  constructor(
    _title: string = "",
    _description: string = "",
    private _N: number = 0,
    private _S: number = 0,
    private _W: number = 0,
    private _E: number = 0
  ) {
    super(_title, _description);
  }

  get S(): number {
    return this._S;
  }
  get N(): number {
    return this._N;
  }
  get E(): number {
    return this._E;
  }
  get W(): number {
    return this._W;
  }
}
