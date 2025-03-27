import Actor from "./actor";
import RoomMap from "./map";
import Room from "./room";
import * as readline from "readline";

export default class Game {
  private _player!: Actor;
  private _rl: readline.Interface;
  private _map: RoomMap;

  constructor() {
    this._map = new RoomMap();
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false, // Add this to prevent double echo
    });
    this.initGame();
    this.startGame();
  }
  // s n e w
  private initGame(): void {
    const room0 = new Room(
      "lobby",
      "You see a troll",
      "forrest", // North
      undefined, // South
      undefined, // West
      "cave" // East
    );
    const room1 = new Room(
      "cave",
      "very dark",
      undefined,
      "hut",
      "lobby",
      undefined
    );

    const room2 = new Room(
      "hut",
      "wet and leaking",
      "cave",
      undefined,
      "forrest",
      undefined
    );
    const room3 = new Room(
      "forrest",
      "dense and green",
      "lobby",
      undefined,
      "hut"
    );

    room1.addItem("tresure");

    this._map.addRoom("lobby", room0);
    this._map.addRoom("cave", room1);
    this._map.addRoom("hut", room2);
    this._map.addRoom("forrest", room3);

    this._player = new Actor("Player", "you", room0);
  }

  private startGame(): void {
    this.gameLoop();
  }

  private gameLoop(): void {
    this._rl.question(">", (input) => {
      const output = this.runCommand(input);

      if (input !== "exit") {
        this.gameLoop();
      } else {
        this._rl.close();
      }
    });
  }

  private runCommand(input: string) {
    const s: string = "ok";
    const lowStr: string = input.toLocaleLowerCase().trim();

    if (lowStr !== "exit") {
      if (lowStr === "") {
        console.log(
          "you must enter a Command.check 'Help!' command for Command menu"
        );
      } else {
        const listStr: string[] = lowStr.split(" ");
        this.parseCommand(listStr, input);
      }
      return s;
    }
  }
  private parseCommand(listStr: string[], input: string) {
    const verb: string = listStr[0];
    const commands: string[] = ["n", "s", "w", "e", "exit", "look"];

    // Only allow exact matches
    if (!commands.includes(input)) {
      console.log(`"${input}" is not a known command`);
      return;
    }

    switch (verb) {
      case "n":
        this.movePlayer(this._player.location.N);
        break;
      case "s":
        this.movePlayer(this._player.location.S);
        break;
      case "w":
        this.movePlayer(this._player.location.W);
        break;
      case "e":
        this.movePlayer(this._player.location.E);

        break;
      case "look":
        this.look(this._player.location);
        break;
      default:
        console.log("command not understood");
        break;
    }
  }

  private look(room: Room): void {
    console.log(
      `you are in : ${this._player.location.title} and ${this._player.location.description}`
    );
    console.log(room.thingList);
  }

  private movePlayer(dirValue: string): void {
    if (dirValue === undefined) {
      console.log("You can't go that way");
      return;
    }

    const newRoom = this._map.getRoom(dirValue);

    if (!newRoom) {
      console.log(`Cannot find room: ${dirValue}`);
      return;
    }

    this._player.location = newRoom;
  }
}
