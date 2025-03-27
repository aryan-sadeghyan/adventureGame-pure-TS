import Room from "./room";

interface MapI {
  addRoom(name: string, room: Room): void;
  getRoom(name: string): Room;
  map: Map<string, Room>;
}

export default class RoomMap implements MapI {
  set(arg0: { lobby: Room; cave: Room; hut: Room; forrest: Room }) {
    throw new Error("Method not implemented.");
  }
  constructor(private _map: Map<string, Room> = new Map()) {}

  get map(): Map<string, Room> {
    return this._map;
  }

  addRoom(name: string, room: Room) {
    this._map.set(name, room);
  }

  getRoom(name: string): Room {
    return this._map.get(name)!;
  }
}
