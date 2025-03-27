import Thing, { ThingI } from "./thing";

interface RoomI extends ThingI {
  N?: string;
  S?: string;
  W?: string;
  E?: string;
}
export default class Room extends Thing implements RoomI {
  constructor(
    _title: string = "",
    _description: string = "",
    private _N: string = "",
    private _S: string = "",
    private _W: string = "",
    private _E: string = ""
  ) {
    super(_title, _description);
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
