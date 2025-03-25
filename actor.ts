import Room from "./room";
import Thing from "./thing";

export default class Actor extends Thing {
  private _location: Room;
  constructor(
    _name: string = "",
    _description: string = "",
    _location: Room = new Room()
  ) {
    super(_name, _description);
    this._location = _location;
  }

  set location(location: Room) {
    this._location = location;
  }

  get location(): Room {
    return this._location;
  }
}
